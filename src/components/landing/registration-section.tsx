"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowRight, CheckCircle2, QrCode, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  nom: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  prenom: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères." }),
  whatsapp: z.string().regex(/^(?:\+228)?[0-9]{8}$/, { message: "Numéro WhatsApp invalide (ex: 90123456 ou +22890123456)." }),
});

type FormData = z.infer<typeof formSchema>;

export function RegistrationSection() {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [isWhatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const { toast } = useToast();

  const tmoneyImage = PlaceHolderImages.find(img => img.id === 'qr-tmoney');
  const moovImage = PlaceHolderImages.find(img => img.id === 'qr-moov');

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { nom: "", prenom: "", whatsapp: "" },
  });

  function onSubmit(data: FormData) {
    setFormData(data);
    setPaymentModalOpen(true);
  }

  const handleConfirmPayment = () => {
    setPaymentModalOpen(false);
    setWhatsAppModalOpen(true);
  };

  const handleWhatsAppRedirect = async () => {
    if (!formData) return;

    try {
      // 1. Send data to FormSubmit
      await fetch("https://formsubmit.co/ajax/contact.logonova@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nom: formData.nom,
          Prénom: formData.prenom,
          WhatsApp: formData.whatsapp,
          Source: "Inscription Formation Design Graphique"
        })
      });

      // 2. Prepare and redirect to WhatsApp
      const message = `Bonjour, je souhaite confirmer ma participation à la formation en Design Graphique.\nNom : ${formData.nom}\nPrénom : ${formData.prenom}\nMontant payé : 2 000 F CFA`;
      const whatsappUrl = `https://wa.me/22890555339?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');

      // 3. Update UI state
      setWhatsAppModalOpen(false);
      setIsSubmitted(true);

    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
      });
      setWhatsAppModalOpen(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="inscription" className="py-20 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center shadow-lg">
            <CardContent className="p-8 md:p-12">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary">Merci, votre inscription a bien été prise en compte.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                ⏳ Vous recevrez une réponse de confirmation sur WhatsApp dans les 5 heures suivant la réception de votre message.
              </p>
               <p className="mt-2 text-sm text-muted-foreground">
                Assurez-vous d'avoir bien envoyé la capture d'écran du paiement.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="inscription" className="py-20 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl md:text-4xl">Rejoignez la formation</CardTitle>
              <CardDescription className="text-lg">Remplissez ce formulaire pour commencer votre inscription.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="nom" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl><Input placeholder="Votre nom de famille" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="prenom" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prénom</FormLabel>
                        <FormControl><Input placeholder="Votre prénom" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="whatsapp" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Numéro WhatsApp</FormLabel>
                      <FormControl><Input placeholder="+228 XX XX XX XX" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Payer les frais d'inscription <ArrowRight className="ml-2" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Payment Modal */}
      <Dialog open={isPaymentModalOpen} onOpenChange={setPaymentModalOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl font-headline"><QrCode />Étape de Paiement</DialogTitle>
            <DialogDescription>Payez les frais d'inscription de <strong>2 000 F CFA</strong> via TMoney ou Moov Money. Faites une capture d'écran du paiement.</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
            {[tmoneyImage, moovImage].map((img, index) => img && (
              <div key={img.id} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="font-bold text-lg mb-2">{index === 0 ? "QR Code TMoney" : "QR Code Moov"}</h3>
                <Image src={img.imageUrl} alt={img.description} width={200} height={200} className="mx-auto rounded-md" data-ai-hint={img.imageHint} />
                <p className="text-sm text-muted-foreground mt-2">Scannez pour payer 2 000 F CFA</p>
              </div>
            ))}
          </div>
          <Button onClick={handleConfirmPayment} size="lg" className="w-full">J'ai payé, confirmer <ArrowRight className="ml-2" /></Button>
        </DialogContent>
      </Dialog>

      {/* WhatsApp Redirect Modal */}
      <Dialog open={isWhatsAppModalOpen} onOpenChange={setWhatsAppModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto" />
            <DialogTitle className="text-2xl font-headline mt-2">Presque terminé !</DialogTitle>
            <DialogDescription className="mt-2 text-base">Vous allez être redirigé vers WhatsApp pour envoyer la capture d’écran de votre paiement et finaliser votre inscription.</DialogDescription>
          </DialogHeader>
          <Button onClick={handleWhatsAppRedirect} size="lg" className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white">
            Continuer vers WhatsApp <Send className="ml-2" />
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

import { Button } from "@/components/ui/button";
import CountdownTimer from "./countdown-timer";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-primary overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}
      ></div>
      <div className="container mx-auto px-4 text-center text-primary-foreground relative z-10">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
          Devenez Designer Graphique Professionnel
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80">
          Une formation 100% pratique sur Adobe Photoshop. Maîtrisez les compétences clés et lancez votre carrière.
        </p>
        <div className="mt-10 max-w-2xl mx-auto">
          <p className="mb-4 text-lg font-semibold uppercase tracking-widest">La formation commence dans :</p>
          <CountdownTimer targetDate="2026-01-17T00:00:00" />
        </div>
        <div className="mt-12">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <Link href="#inscription">
              S'inscrire maintenant <MoveRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

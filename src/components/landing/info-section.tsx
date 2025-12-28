import { Calendar, Clock, MapPin, DollarSign, Users, MonitorSmartphone, Trophy } from 'lucide-react';
import { InfoCard } from './info-card';

export function InfoSection() {
  const infoItems = [
    {
      icon: Calendar,
      title: "Calendrier",
      content: "Début le 17 Janvier 2026. La formation se déroule sur 4 samedis consécutifs."
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Chaque samedi de 08h00 à 13h00. Des sessions intensives pour un apprentissage rapide."
    },
    {
      icon: DollarSign,
      title: "Coût de la Formation",
      content: (
        <>
          Frais d'inscription : <strong>2 000 F CFA</strong><br/>
          Coût total : <strong>15 000 F CFA</strong>
        </>
      )
    },
    {
      icon: MapPin,
      title: "Lieu",
      content: "Ségbé Klémé, à côté du GS Le Triomphe du Destin, Lomé, Togo."
    },
     {
      icon: Trophy,
      title: "Approche",
      content: "Une approche 100% pratique pour vous rendre opérationnel dès la fin de la formation."
    },
    {
      icon: MonitorSmartphone,
      title: "Logiciel",
      content: "La formation est entièrement centrée sur Adobe Photoshop, l'outil standard de l'industrie."
    },
    {
      icon: Users,
      title: "Organisateurs",
      content: "Une collaboration entre AKA'S GROUP 1 et le CENTRE 6G pour vous offrir le meilleur."
    }
  ];

  return (
    <section id="details" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Tout ce que vous devez savoir
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
            Les informations essentielles sur votre future formation en Design Graphique.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoItems.map((item, index) => (
            <InfoCard key={index} icon={item.icon} title={item.title}>
              <p>{item.content}</p>
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  );
}

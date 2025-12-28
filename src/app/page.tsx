import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { InfoSection } from "@/components/landing/info-section";
import { RegistrationSection } from "@/components/landing/registration-section";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <InfoSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
}

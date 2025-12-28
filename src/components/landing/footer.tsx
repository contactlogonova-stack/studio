import { Facebook } from 'lucide-react';
import Link from 'next/link';

const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.65 4.24 1.71v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.2.18 1.65.54.75 1.58.77 2.32.05.84-.82 1.11-2.2.73-3.32C12.43 14.99 12.52 7.5 12.525.02z"></path>
    </svg>
);

export function Footer() {
  return (
    <footer className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold">Design Edge Academy</h3>
            <p className="text-sm opacity-80">par AKA'S GROUP & CENTRE 6G</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Nos réseaux</p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Link href="https://facebook.com/akasgroup1" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://tiktok.com/@akasgroup1" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <TikTokIcon />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
           <div className="flex flex-col gap-2">
            <p className="font-semibold">Contact</p>
            <div className="flex flex-col text-sm opacity-80">
              <a href="https://wa.me/22890555339" className="hover:underline">+228 90 55 53 39</a>
              <a href="https://wa.me/22898919000" className="hover:underline">+228 98 91 90 00</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-4 text-center text-xs opacity-70">
          <p>&copy; {new Date().getFullYear()} Design Edge Academy. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

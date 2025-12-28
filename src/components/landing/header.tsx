import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PenTool } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <PenTool className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Design Edge Academy</span>
        </Link>
        <nav>
          <Button asChild>
            <Link href="#inscription">S'inscrire</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

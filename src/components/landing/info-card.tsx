import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export function InfoCard({ icon: Icon, title, children }: InfoCardProps) {
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="font-headline font-semibold text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground text-base">
        {children}
      </CardContent>
    </Card>
  );
}

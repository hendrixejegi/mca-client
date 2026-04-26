import { Button } from '@/components/ui/button';
import { CircleUser, Menu } from 'lucide-react';

export default function AdminMobileHeader({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-4">
        <Button variant="ghost" aria-label="Open dashboard menu">
          <Menu aria-hidden="true" className="text-[#1E293B] size-5" />
        </Button>
        <h1 className="font-manrope text-xl font-bold text-[#1E293B] leading-7 tracking-[-0.5px]">
          {title}
        </h1>
      </div>
      <Button variant="ghost" aria-label="Open user menu">
        <CircleUser aria-hidden="true" className="text-[#1E3A8A] size-5" />
      </Button>
    </header>
  );
}

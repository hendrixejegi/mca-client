'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import AdminBottomNavMobile from './mobile/AdminBottomNavMobile';
import { useMobileScreen } from '@/components/context/ScreenSizeContext';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function ResponsiveLayout({ children }: PropsWithChildren) {
  const isMobile = useMobileScreen();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (isMobile) {
    return <AdminMobileLayout>{children}</AdminMobileLayout>;
  }
  return <AdminDesktopLayout>{children}</AdminDesktopLayout>;
}

function AdminMobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#F8F9FB] h-screen overflow-y-scroll pb-26.5">
      {children}
      <AdminBottomNavMobile />

      {/* Mobile FAB (Quick Action) */}
      <Button
        aria-label="Quick action"
        className="bg-[#3C5F95] size-14 rounded-[12px] fixed bottom-19 right-6 z-50"
      >
        <Plus aria-hidden="true" className="text-white size-3.5" />
      </Button>
    </div>
  );
}

function AdminDesktopLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import AdminBottomNavMobile from './AdminBottomNavMobile';
import { useMobileScreen } from '@/components/context/ScreenSizeContext';

export default function ResponsiveLayout({ children }: PropsWithChildren) {
  const isMobile = useMobileScreen();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (isMobile) {
    return (
      <div className="bg-[#F8F9FB] h-screen overflow-y-scroll pb-26.5">
        {children}
        <AdminBottomNavMobile />
      </div>
    );
  }

  return <AdminDesktopLayout>{children}</AdminDesktopLayout>;
}

function AdminDesktopLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

'use client';

import useIsMobile from '@/hooks/useIsMobile';

export default function AdminDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const isMobile = useIsMobile();

  return isMobile ? (
    <div className="bg-[#F8F9FB] min-h-screen">{children}</div>
  ) : (
    <AdminDesktopLayout />
  );
}

function AdminDesktopLayout() {
  return <div>Desktop</div>;
}

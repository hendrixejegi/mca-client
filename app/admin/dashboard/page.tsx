'use client';

import { AdminMobileDashboardHome } from '@/components/admin/dashboard/mobile/page/AdminMobileDashboardHome';
import { useMobileScreen } from '@/components/context/ScreenSizeContext';

export default function AdminDashboardHome() {
  const isMobile = useMobileScreen();

  if (isMobile) {
    return <AdminMobileDashboardHome />;
  }

  return <div>Desktop</div>;
}

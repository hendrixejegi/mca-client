import ResponsiveLayout from '@/components/admin/dashboard/ResponsiveLayout';
import { MobileScreenProvider } from '@/components/context/ScreenSizeContext';

export default function AdminDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <MobileScreenProvider>
      <ResponsiveLayout>{children}</ResponsiveLayout>
    </MobileScreenProvider>
  );
}

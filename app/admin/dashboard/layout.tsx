import ResponsiveLayout from '@/components/admin/dashboard/ResponsiveLayout';

export default function AdminDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ResponsiveLayout>{children}</ResponsiveLayout>;
}

import UserAuthHeader from '@/components/auth/user/UserAuthHeader';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#F8F9FB] min-h-screen relative overflow-hidden">
      <div className="relative z-10">
        <div className="lg:hidden">
          <UserAuthHeader />
        </div>
        <main className="p-6 lg:p-16.25">{children}</main>
      </div>
      <CornerBlur className="w-lg h-[409.59px] bg-[#3C5F95]/50 -translate-1/2 top-0 left-0" />
      <CornerBlur className="w-sm h-[307.19px] bottom-0 right-0 bg-[#5D5C78] translate-1/2" />
    </div>
  );
}

function CornerBlur({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={cn('blur-[100px] absolute hidden lg:block', className)}
      {...props}
    />
  );
}

import Logo from '@/components/shared/Logo';
import { CircleQuestionMark } from 'lucide-react';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#F8F9FB] min-h-screen">
      <header className="px-8 py-4 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-3">
          <span className="text-[#747779]">Support</span>
          <CircleQuestionMark
            className="text-[#747779] size-5"
            aria-hidden="true"
          />
        </div>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}

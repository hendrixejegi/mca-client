import { Logo } from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Bell, CircleQuestionMark } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  // [path, name]
  ['/admin/dashboard/home/exam-schedule', 'exam schedule'],
  ['/admin/dashboard/home/results', 'results'],
  ['/admin/dashboard/home/analytics', 'analytics'],
  ['/admin/dashboard/home/settings', 'settings'],
];

export const AppHeader = () => {
  const pathname = usePathname();
  return (
    <header className="px-8 flex items-center bg-[#F8FAFC] border-b border-b-[#E2E8F0] justify-between h-16">
      <div className="flex items-center gap-8">
        <Logo />
        <nav>
          <ul className="flex items-center gap-6">
            {links.map(([path, name]) => (
              <li key={path}>
                <Link
                  href={path}
                  className={cn(
                    'capitalize font-semibold text-sm leading-5 -tracking-[0.35px] text-[#64748B] pb-1',
                    pathname === path
                      ? 'text-[#1D4ED8] border-b-2 border-b-[#1D4ED8]'
                      : null,
                  )}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="space-x-2">
          <Button aria-label="Notifications" className="p-2" variant="ghost">
            <Bell className="size-4.5" aria-hidden="true" />
          </Button>
          <Button aria-label="Help" className="p-2" variant="ghost">
            <CircleQuestionMark className="size-4.5" aria-hidden="true" />
          </Button>
        </div>
        <div aria-hidden="true" className="w-px h-8 bg-[#D9E4EA]"></div>
        <div className="flex items-center gap-3">
          <Image
            width={40}
            height={40}
            alt=""
            src="/student.png"
            className="border-2 border-[#D6E3FF] rounded-xl"
          />
          <dl>
            <dt className="font-manrope font-bold text-sm leading-[17.5px] text-[#2A3439]">
              Admin Portal
            </dt>
            <dd className="text-[12px] leading-4 text-[#566166]">
              system supervisor
            </dd>
          </dl>
        </div>
      </div>
    </header>
  );
};

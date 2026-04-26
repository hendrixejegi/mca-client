'use client';

import { cn } from '@/lib/utils';
import { ClipboardList, Flag, House, LucideProps, User2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ForwardRefExoticComponent, RefAttributes, useState } from 'react';

const navLinks: [
  string,
  string,
  ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >,
][] = [
  // [path, label]
  ['/admin/dashboard', 'home', House],
  ['/admin/dashboard/exams', 'exams', ClipboardList],
  ['/admin/dashboard/flagged', 'flagged', Flag],
  ['/admin/dashboard/user', 'user', User2],
];

export default function AdminBottomNavMobile() {
  const pathname = usePathname();
  const [currPath, setCurrPath] = useState(pathname);

  function handleNavigation(path: string) {
    setCurrPath(path);
  }

  return (
    <nav className="px-9 py-3 bg-white fixed bottom-0 left-0 w-full backdrop-blur-xl shadow-[0_-10px_30px_0_#2A3439]/4 z-50">
      <ul className="flex items-center justify-between">
        {navLinks.map(([path, label, Icon]) => (
          <li key={path}>
            <Link
              href={path}
              className={cn(
                'text-[#94A3B8] px-4 py-1 rounded-lg  flex flex-col items-center',
                currPath === path && 'text-[#1E40AF] bg-[#EFF6FF]',
              )}
              onClick={() => handleNavigation(path)}
            >
              <Icon aria-hidden="true" className="size-4.5" />
              <span className="uppercase text-[10px] leading-3.75 tracking-[0.5px]">
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

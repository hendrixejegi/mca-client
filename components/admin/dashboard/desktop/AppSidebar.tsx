'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import {
  BookOpen,
  Eye,
  FileQuestionMark,
  LayoutPanelLeft,
  LogOut,
  LucideProps,
  Scroll,
  Settings,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ForwardRefExoticComponent, RefAttributes, useState } from 'react';

const links: [
  string,
  string,
  ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >,
][] = [
  // [name, link, icon]
  ['Dashboard', '/admin/dashboard', LayoutPanelLeft],
  ['Candidate Registry', '/admin/dashboard/candidate-registry', Users],
  ['Test Management', '/admin/dashboard/test-management', FileQuestionMark],
  ['Live Proctoring', '/admin/dashboard/live-proctoring', Eye],
  ['System Health', '/admin/dashboard/system-health', Settings],
  ['Audit Logs', '/admin/dashboard/audit-logs', Scroll],
];

const sidebarMenuButtonClass =
  'text-[#475569] text-sm leading-5 px-4 py-3 font-medium capitalize rounded-sm data-active:text-[#1E3A8A] data-active:bg-white data-active:translate-x-1';

const SidebarMenuLink = ({
  path,
  name,
  Icon,
  isActive,
}: {
  path: string;
  name: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  isActive: boolean;
}) => (
  <SidebarMenuItem key={path}>
    <SidebarMenuButton
      asChild
      isActive={isActive}
      className={sidebarMenuButtonClass}
    >
      <Link href={path}>
        <Icon className="size-4.5" aria-hidden="true" />
        <span>{name}</span>
      </Link>
    </SidebarMenuButton>
  </SidebarMenuItem>
);

const AppSidebar = () => {
  const pathname = usePathname();
  const [currPath, setCurrPath] = useState(pathname);

  return (
    <Sidebar className="px-4 py-6 bg-[#F1F5F9] *:bg-[#F1F5F9] space-y-4">
      <SidebarHeader>
        <div className="pb-6">
          <h2 className="font-manrope font-extrabold text-lg leading-7 text-[#1E3A8A] capitalize">
            Global Assessment corp
          </h2>
          <span className="text-[12px] leading-4 tracking-[1.2px] text-[#3C5F95] uppercase">
            Enterprise tier
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="space-y-4">
        <SidebarMenu className="space-y-2 grow">
          {links.map(([name, path, Icon]) => {
            const isActive = currPath === path;
            return (
              <SidebarMenuLink key={name} {...{ name, path, Icon, isActive }} />
            );
          })}
        </SidebarMenu>
        <SidebarMenu className="pb-4">
          <SidebarMenuItem>
            <SidebarMenuButton className="px-11.5 py-3 rounded-lg text-[#F6F7FF] font-manrope font-bold linear-6 bg-linear-to-r from-[#3C5F95] to-[#2F5388] h-12 justify-center">
              New Assessment
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-t-[#D9E4EA] pt-4">
        <SidebarMenu className="space-y-2">
          <SidebarMenuLink
            name="Documentation"
            path="/admin/dashboard/documentation"
            Icon={BookOpen}
            isActive={currPath === '/admin/dashboard/documentation'}
          />
          <SidebarMenuItem>
            <SidebarMenuButton className={sidebarMenuButtonClass}>
              <LogOut className="size-4.5" />
              <span>Log Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;

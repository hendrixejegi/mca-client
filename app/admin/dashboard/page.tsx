import AdminMobileHeader from '@/components/admin/dashboard/AdminMobileHeader';
import {
  KPICard,
  KPICardContent,
  KPICardHeader,
} from '@/components/admin/dashboard/KPICard';
import { Progress } from '@/components/ui/progress';
import { ClipboardList, TrendingUp, Users } from 'lucide-react';

export default function AdminDashboardHome() {
  return (
    <div>
      <AdminMobileHeader title="Admin Overview" />
      <main className="p-6">
        <ul className="space-y-6">
          <li>
            <KPICard>
              <KPICardHeader
                title="Admin Overview"
                logo={<ClipboardList className="text-[#C0D5FF]" />}
              />
              <KPICardContent data={1284}>
                <p className="leading-4 text-xs text-[#49636F]">
                  <data value="12">{`${(12).toLocaleString()}%`}</data> from
                  last semester
                </p>
              </KPICardContent>
            </KPICard>
          </li>
          <li>
            <KPICard>
              <KPICardHeader
                title="Active Students"
                logo={<Users className="text-[#C0D5FF]" />}
              />
              <KPICardContent data={8402} live>
                <p className="leading-4 text-xs text-[#49636F]">
                  <data value="1204">{`${(1204).toLocaleString()}`}</data>{' '}
                  currently testing
                </p>
              </KPICardContent>
            </KPICard>
          </li>
          <li>
            <KPICard>
              <KPICardHeader
                title="Avg. Pass Rate"
                logo={<TrendingUp className="text-[#C0D5FF]" />}
              />
              <KPICardContent data={78.4} unit="%">
                <Progress value={78.4} className="h-1.5 *:bg-[#3C5F95]" />
              </KPICardContent>
            </KPICard>
          </li>
        </ul>
      </main>
    </div>
  );
}

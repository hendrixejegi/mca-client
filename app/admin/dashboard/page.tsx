import AdminMobileHeader from '@/components/admin/dashboard/AdminMobileHeader';
import {
  KPICard,
  KPICardContent,
  KPICardHeader,
} from '@/components/admin/dashboard/KPICard';
import UpcomingExam from '@/components/admin/dashboard/UpcomingExam';
import UserResultCard from '@/components/admin/dashboard/UserResultCard';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { CalendarClock, ClipboardList, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AdminDashboardHome() {
  return (
    <div>
      <AdminMobileHeader title="Admin Overview" />
      <main className="p-6 space-y-10">
        {/* Quick insights */}
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
        <div>
          {/* Recent activity feed */}
          <section>
            <div className="flex items-center justify-between px-2 mb-6">
              <h2 className="font-manrope font-bold text-2xl leading-8 -tracking-[0.6px] text-[#2A3439]">
                Recent Completions
              </h2>
              <Link
                href="/"
                className="font-semibold text-sm leading-5 tracking-[0px] text-[#3C5F95]"
              >
                View all
              </Link>
            </div>
            <ul className="space-y-4">
              <li>
                <UserResultCard
                  name="James Wilson"
                  time="2"
                  assessment="Advanced Calculus Final"
                  score={92}
                />
              </li>
              <li>
                <UserResultCard
                  name="James Wilson"
                  time="2"
                  assessment="Advanced Calculus Final"
                  score={92}
                />
              </li>
              <li>
                <UserResultCard
                  name="James Wilson"
                  time="2"
                  assessment="Advanced Calculus Final"
                  score={92}
                />
              </li>
            </ul>
          </section>

          {/* System health and quick actions */}
          <aside className="-mt-2 space-y-8">
            <article className="bg-[#0F172A] p-8 rounded-md relative">
              <Image
                src="/shield.svg"
                width={80}
                height={100}
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 right-0 w-auto"
              />
              <div className="space-y-2">
                <h2 className="font-manrope font-bold text-lg text-white leading-7">
                  Live Proctoring
                </h2>
                <p className="text-sm leading-5 text-[#94A3B8]">
                  42 active exam rooms are currently under surveillance.
                </p>
                <div className="pt-4 flex items-center gap-4">
                  <data value={12} className="-space-x-3 flex">
                    {(() => {
                      const cl =
                        'rounded-[12px] border-2 border-[#0F172A] size-8 bg-[#1E293B]';
                      return (
                        <>
                          <Image
                            src="/student.png"
                            width={32}
                            height={32}
                            alt=""
                            className={cl}
                            aria-hidden="true"
                          />
                          <Image
                            src="/student.png"
                            width={32}
                            height={32}
                            alt=""
                            className={cl}
                            aria-hidden="true"
                          />
                          <div
                            className={cn(
                              cl,
                              'font-semibold text-white text-[10px] leading-3.75 flex items-center justify-center',
                            )}
                            aria-hidden="true"
                          >
                            +12
                          </div>
                        </>
                      );
                    })()}
                  </data>
                  <span className="text-[#94A3B8] text-xs leading-4">
                    Proctors online
                  </span>
                </div>
              </div>
            </article>
            <article className="bg-[#F0F4F7] p-8 rounded-md space-y-4">
              <div className="flex items-center gap-2">
                <CalendarClock className="text-[#3C5F95]" aria-hidden="true" />
                <h2 className="font-manrope font-bold text-lg text-[#2A3439] leading-7">
                  Scheduled Today
                </h2>
              </div>
              <ul className="space-y-4">
                <li>
                  <UpcomingExam
                    exam="Psychology 101"
                    date="09:00"
                    candidates={450}
                  />
                </li>
                <li>
                  <UpcomingExam
                    exam="Data Structures"
                    date="13:30"
                    candidates={210}
                  />
                </li>
              </ul>
            </article>
          </aside>
        </div>
      </main>
    </div>
  );
}

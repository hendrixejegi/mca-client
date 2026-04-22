import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { PropsWithChildren } from 'react';

export function KPICard({ children }: PropsWithChildren) {
  return (
    <Card className="p-8 bg-white ring-0 rounded-[8px] h-44 flex flex-col justify-between">
      {children}
    </Card>
  );
}

export function KPICardHeader({
  title,
  logo,
}: {
  title: string;
  logo: React.ReactNode;
}) {
  return (
    <CardHeader className="flex items-center justify-between">
      <CardTitle className="leading-5 tracking-[0.7px] text-[#3C5F95] text-sm uppercase font-normal">
        {title}
      </CardTitle>
      {logo}
    </CardHeader>
  );
}

export function KPICardContent({
  data,
  live = false,
  unit = '',
  children,
}: {
  data: number;
  live?: boolean;
  unit?: string;
} & PropsWithChildren) {
  return (
    <CardContent>
      <data
        value={data}
        className="font-manrope leading-10 -tracking-[1.8px] font-extrabold text-4xl text-[#2A3439] mb-1 inline-block"
      >
        {data.toLocaleString()}
        {unit}
      </data>
      <div className="flex items-center gap-2">
        {live && <div className="size-2 rounded-full bg-[#22C55E]"></div>}
        {children}
      </div>
    </CardContent>
  );
}

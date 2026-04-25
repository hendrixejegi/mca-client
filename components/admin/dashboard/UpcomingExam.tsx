import React from 'react';

export default function UpcomingExam({
  date,
  candidates,
  exam,
}: {
  date: string;
  candidates: number;
  exam: string;
}) {
  return (
    <article className="flex flex-row-reverse gap-3 items-start justify-end">
      <div>
        <h3 className="font-semibold text-sm leading-5 text-[#2A3439]">
          {exam}
        </h3>
        <p className="text-[10px] leading-3.75 tracking-[1px] text-[#64748B] uppercase">
          {candidates} candidates
        </p>
      </div>
      <time
        dateTime={date}
        className="inline-block rounded-lg bg-[#3C5F95]/10 p-2 text-xs font-semibold leading-4 text-[#3C5F95] align-middle"
      >
        {date}
      </time>
    </article>
  );
}

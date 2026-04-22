import Image from 'next/image';

type UserResultCardProps = Readonly<{
  avatar?: string;
  name: string;
  assessment: string;
  time: string;
  score: number;
}>;

export default function UserResultCard({
  avatar = '/student.png',
  name,
  time,
  assessment,
  score,
}: UserResultCardProps) {
  return (
    <article className="h-33 bg-white p-6 rounded-md grid grid-cols-[48px_1fr_45px] gap-6 items-center">
      <div>
        <Image
          src={avatar}
          width={48}
          height={48}
          alt={name}
          className="rounded-[12px]"
        />
      </div>
      <div>
        <div className="grid grid-cols-[2fr_1fr] items-center gap-2">
          <h3 className="font-manrope font-bold leading-6 tracking-[0px] text-[#2A3439] pr-11">
            {name}
          </h3>
          <time
            dateTime={time}
            className="pr-5 text-xs leading-3 tracking-[0px] text-[#94A3B8]"
          >
            • {time}m ago
          </time>
        </div>
        <p className="leading-5 tracking-[0px] text-sm text-[#64748B]">
          Completed <strong className="text-[#334155]">{assessment}</strong>
        </p>
      </div>
      <div>
        <data
          value={score}
          className="leading-7 text-[#3C5F95] tracking-[0px] text-lg font-bold font-manrope"
        >
          {score}%
        </data>
        <br />
        <span className="uppercase text-[#94A3B8] font-semibold text-[10px] leading-3.75 tracking-[1px]">
          passed
        </span>
      </div>
    </article>
  );
}

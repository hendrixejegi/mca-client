import { Computer } from 'lucide-react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 hover:opacity-90"
    >
      <span className="flex size-10 bg-[#3C5F95] items-center justify-center rounded-sm">
        <Computer className="size-6 text-white" aria-hidden="true" />
      </span>
      <span className="font-semibold font-inter text-xl">CBT Proctor</span>
    </Link>
  );
}

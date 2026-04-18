import Logo from '@/components/shared/Logo';
import { CircleQuestionMark } from 'lucide-react';

export default function UserAuthHeader() {
  return (
    <header className="px-8 py-4 flex items-center justify-between lg:mb-10">
      <Logo />
      <div className="flex items-center gap-3">
        <span className="text-[#747779]">Support</span>
        <CircleQuestionMark
          className="text-[#747779] size-5"
          aria-hidden="true"
        />
      </div>
    </header>
  );
}

'use client';

import useIsMobile from '@/hooks/useIsMobile';
import { createContext, PropsWithChildren, useContext } from 'react';

const MobileScreenContext = createContext<boolean | undefined>(undefined);

export function MobileScreenProvider({ children }: PropsWithChildren) {
  const isMobile = useIsMobile();

  return <MobileScreenContext value={isMobile}>{children}</MobileScreenContext>;
}

export const useMobileScreen = () => {
  const isMobile = useContext(MobileScreenContext);

  if (typeof isMobile == 'undefined') {
    throw Error('useMobileScreen called without MobileScreenProvider');
  }

  return isMobile;
};

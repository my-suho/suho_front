"use client";

import Image from "next/image";

import { ReactNode, useEffect, useState } from "react";

import HCStack from "./base/stack/HCStack";
import VCStack from "./base/stack/VCStack";
import useAppRepository from "./hooks/useAppRepository";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  const {
    visibleBGStore: [visibleBG],
  } = useAppRepository();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <VCStack className="relative h-full w-screen justify-center bg-gradient-to-b from-[#030329] to-[#9E83FF] bg-cover">
          <VCStack className="h-full w-full justify-center bg-[url(/imgs/back.svg)] bg-center ">
            {/* 로고 */}
            <div className="invisible absolute left-[57px] top-[66px] h-[20px] w-[200px] text-white lg:visible">
              <Image fill src={"/imgs/logo.svg"} alt="logo" />
            </div>
            {/* Content */}
            <HCStack className="z-10 h-screen w-full min-w-[375px] max-w-[430px]">
              {children}
            </HCStack>
            {/* BG_BOTTOM(언덕) */}
            {visibleBG && (
              <div className="absolute bottom-0 left-0 right-0 z-0 h-[35%] w-full bg-[url('/imgs/bg_bottom.svg')] bg-top bg-no-repeat" />
            )}
          </VCStack>
        </VCStack>
      )}
    </>
  );
}
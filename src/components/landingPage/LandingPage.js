"use client";

import HeaderComponent from "./HeaderComponent";
import HeroComponent from "./HeroComponent";
import MockWebComponent from "./MockWebComponent";
import StopRecordingComponent from "./StopRecordingComponent";
import MoreThanRowComponent from "./MoreThanRowComponent";
import SearchComponent from "./SearchComponent";
import InformDelightComponent from "./InformDelightComponent";
import NeverVisitBankAgain from "./NeverVisitBankAgain";
import AnxietyComponent from "./AnxietyComponent";
import FooterComponent from "./FooterComponent";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [width, setWidth] = useState(window.innerWidth); // default width, detect on server.
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log(width);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  if (width >= 1400) {
    return (
      <>
        <HeaderComponent />
        <HeroComponent />
        <MockWebComponent />
        <StopRecordingComponent />
        <MoreThanRowComponent />
        <SearchComponent />
        <InformDelightComponent />
        <NeverVisitBankAgain />
        <AnxietyComponent />
        <FooterComponent />
      </>
    );
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl text-lg !text-[10rem] !leading-[8.5rem]">
          Please open it on desktop
        </h1>
      </div>
    </div>
  );
}

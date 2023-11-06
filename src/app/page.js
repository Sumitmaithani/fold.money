"use client";

import AnxietyComponent from "@/components/landingPage/AnxietyComponent";
import FooterComponent from "@/components/landingPage/FooterComponent";
import HeaderComponent from "@/components/landingPage/HeaderComponent";
import HeroComponent from "@/components/landingPage/HeroComponent";
import InformDelightComponent from "@/components/landingPage/InformDelightComponent";
import MockWebComponent from "@/components/landingPage/MockWebComponent";
import MoreThanRowComponent from "@/components/landingPage/MoreThanRowComponent";
import NeverVisitBankAgain from "@/components/landingPage/NeverVisitBankAgain";
import StopRecordingComponent from "@/components/landingPage/StopRecordingComponent";

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <HeroComponent />
      <MockWebComponent />
      <StopRecordingComponent />
      <MoreThanRowComponent />
      <InformDelightComponent />
      <NeverVisitBankAgain />
      <AnxietyComponent />
      <FooterComponent />
    </div>
  );
}

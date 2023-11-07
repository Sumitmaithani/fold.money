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

export default function LandingPage() {
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

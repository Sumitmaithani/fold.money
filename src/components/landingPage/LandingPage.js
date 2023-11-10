import React, { useEffect, useState } from "react";
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
  const [width, setWidth] = useState(1440);

  useEffect(() => {
    // Set the initial width on the client side
    setWidth(window.innerWidth);

    // Add an event listener for window resize
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

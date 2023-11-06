"use client";

import Image from "next/image";

import logo from "@/assets/svgs/logo.svg";
import ios from "@/assets/svgs/ios.svg";
import android from "@/assets/svgs/android.svg";
import blog from "@/assets/svgs/blog.svg";
import manifesto from "@/assets/svgs/manifesto.svg";
import privacy from "@/assets/svgs/privacy.svg";
import team from "@/assets/svgs/team.svg";

export default function HeaderComponent() {
  return (
    <div className="absolute w-full">
      <div className="max-w-[calc(100vw-48px)] md:max-w-[calc(100vw-96px)] xl:max-w-[1400px] mx-auto">
        <nav className="flex justify-between mt-6">
          <div className="space-y-1">
            <a className="flex items-center gap-1 mb-4" href="index.html">
              <Image alt="logo" src={logo} />
              <p className="text-lg font-bold text-soft">fold</p>
            </a>
            <a
              className="bg-inset text-action-sec border-action-sec border hocus:border-[#0a2d67] px-2 py-[7px] w-fit transition rounded shadow-1 flex items-center justify-center gap-1 label-sm focus-visible:ring-2 focus-visible:outline-none hidden md:flex"
              target="_blank"
              href="https://apps.apple.com/in/app/fold-money/id1626994334"
            >
              <Image alt="ios" src={ios} />
              iOS app
            </a>
            <a
              className="bg-inset text-action-sec border-action-sec border hocus:border-[#0a2d67] px-2 py-[7px] w-fit transition rounded shadow-1 flex items-center justify-center gap-1 label-sm focus-visible:ring-2 focus-visible:outline-none hidden md:flex"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=money.fold.marble"
            >
              <Image alt="android" src={android} />
              Android app
            </a>
          </div>
          <div className="flex-col items-end hidden gap-1 md:flex">
            <a
              className="bg-inset text-action-sec border-action-sec border hocus:border-[#0a2d67] px-2 py-[7px] w-fit transition rounded shadow-1 flex items-center justify-center gap-1 label-sm focus-visible:ring-2 focus-visible:outline-none"
              href="/team"
            >
              <Image alt="team" src={team} />
              Team
            </a>
            <a
              className="bg-inset text-action-sec border-action-sec border hocus:border-[#0a2d67] px-2 py-[7px] w-fit transition rounded shadow-1 flex items-center justify-center gap-1 label-sm focus-visible:ring-2 focus-visible:outline-none"
              href="/manifesto"
            >
              <Image alt="manifesto" src={manifesto} />
              Manifesto
            </a>
            <a
              className="bg-inset text-action-sec border-action-sec border hocus:border-[#0a2d67] px-2 py-[7px] w-fit transition rounded shadow-1 flex items-center justify-center gap-1 label-sm focus-visible:ring-2 focus-visible:outline-none"
              href="/blog"
            >
              <Image alt="blog" src={blog} />
              Blog
            </a>
            <a
              className="bg-inset text-action-sec border-action-sec border hocus:border-[#0a2d67] px-2 py-[7px] w-fit transition rounded shadow-1 flex items-center justify-center gap-1 label-sm focus-visible:ring-2 focus-visible:outline-none"
              href="/privacy-by-design"
            >
              <Image alt="privacy" src={privacy} />
              Privacy
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

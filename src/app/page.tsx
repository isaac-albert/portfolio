"use client";


import { Button } from "@/components/ui/button";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { Dot } from "lucide-react";
import { ArrowDownToLine } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { MoonStar } from "lucide-react";
import { PiHandWavingFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { PiSuitcaseLight } from "react-icons/pi";
// import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import MailToggle from "./mailpopup";

// const PfD = Playfair_Display({
//   subsets: ["latin"],
// });

const DownloadResume = () => {
  const link = document.createElement("a");
  link.href = "api/resume";
  link.download = "";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const GetTheme = () => {
  if (typeof window === "undefined") return "";
  const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
  if (isDark) return "dark";
  else return "";
};

export default function Home() {
  const [dark, setDark] = useState(GetTheme);

  const [isMailVisible, setIsMailVisible] = useState(false);

  const ChangeTheme = () => {
    const newTheme = dark === "dark" ? "light" : "dark";
    setDark(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (dark === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <>
      <main className="font-roboto">
        <div className="absolute inset-0 -z-10 bg-main"></div>
        <div className="dark-header centre-div m-auto mt-2 p-2 min-h-[40px] flex justify-between  ">
          <div className="av-for-work">
            <Button
              size="sm"
              variant={"static_outline"}
              className="text-only text-[12px] shadow-xl/20 dark:inset-shadow-2xs/20 dark:inset-shadow-light"
            >
              <Dot
                size={108}
                color="#2ec27e"
                className="motion-safe:animate-ping text-[8px]"
              />
              Available for work
            </Button>
          </div>
          <Button
            onClick={ChangeTheme}
            variant={"secondary"}
            size={"icon"}
            className="shadow-xl/20 dark:inset-shadow-xs/50 dark:inset-shadow-light dark:text-darktext text-lighttext dark:bg-darklight bg-lightlight dark:hover:bg-lightlight dark:hover:text-lighttext hover:bg-darklight hover:text-darktext "
          >
            <MoonStar />
          </Button>
        </div>
        <div className="bio-data centre-div m-auto mt-10 flex gap-2 p-2 ">
          <div className="data basis-2/3 px-1.5 pt-2 pb-2 rounded-2xl bg-lightlight/70 dark:bg-darklight shadow-lg/20 dark:inset-shadow-xs/50 dark:inset-shadow-light">
            <div className="name ml-2 flex gap-2 text-4xl font-black">
              <h2 className="text-only">Hello! I&apos;m Isaac</h2>
              <PiHandWavingFill
                size={"35px"}
                className="animate-hand text-yellow-400 mt-1"
              />
            </div>
            <div className="creds ml-2 mt-5 text-only">
              <div className=" flex mr-1 mt-2">
                <PiSuitcaseLight size="20px" className=" mt-1" />
                <p className="ml-1.5 mt-0.5 text-lightsectext dark:text-darksectext">
                  Full-Stack Developer
                </p>
                `
              </div>
              <div className=" flex mr-1 mt-2">
                <IoLocationOutline size="20px" className=" mt-1" />
                <p className="ml-1.5 mt-0.5 text-lightsectext dark:text-darksectext">
                  India
                </p>
              </div>
              <div className=" flex  mr-1 mt-2">
                <GraduationCap size="20px" className=" mt-1" />
                <p className="ml-1.5 mt-0.5 text-lightsectext dark:text-darksectext">
                  2025 College Graduate
                </p>
              </div>
            </div>
            <div className="description mt-10 ml-2 text-[16px] ">
              <p className="text-only font-normal">
                22 years old. I like cars and building stuff through code!
              </p>
            </div>
          </div>
          <div className="photo basis-1/3 rounded-2xl bg-lightlight/70 dark:bg-darklight shadow-lg/20 dark:inset-shadow-xs/50 dark:inset-shadow-light">
            <div className="m-auto w-[220px] h-[220px] rounded-full bg-[url(/cat.jpg)] bg-cover"></div>
          </div>
        </div>
        <div className="links-cont centre-div m-auto p-2 flex ">
          <div className="links basis-2/3 flex">
            <Button
              variant="secondary"
              size="icon"
              className="bg-button dark:hover:bg-lightlight dark:hover:text-lighttext hover:bg-darklight hover:text-darktext transition-colors duration-300 mt-0.5 mb-0.5 linkBreakdown:mt-0 mx-1 linkBreakdown:mb-1 shadow-lg/20 dark:inset-shadow-xs/50 dark:inset-shadow-light"
            >
              <Link
                href="https://github.com/Isaac-Franklyn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="bg-button dark:hover:bg-lightlight dark:hover:text-lighttext hover:bg-darklight hover:text-darktext transition-colors duration-300 mt-0.5 mb-0.5 linkBreakdown:mt-0 mx-1 linkBreakdown:mb-1 shadow-lg/20 dark:inset-shadow-xs/50 dark:inset-shadow-light"
            >
              <Link
                href="https://www.linkedin.com/in/isaac-albert/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </Link>
            </Button>
            <Button
              onClick={() => setIsMailVisible(true)}
              variant="secondary"
              size="icon"
              className="bg-button dark:hover:bg-lightlight dark:hover:text-lighttext hover:bg-darklight hover:text-darktext transition-colors duration-300 mt-0.5 mb-0.5 linkBreakdown:mt-0 mx-1 linkBreakdown:mb-1 shadow-lg/20 dark:inset-shadow-xs/50 dark:inset-shadow-light"
            >
              <CgMail />
            </Button>
            <Button
              variant={"secondary"}
              className="bg-button dark:hover:bg-lightlight dark:hover:text-lighttext hover:bg-darklight hover:text-darktext transition-colors duration-300 mt-0.5 mb-0.5 linkBreakdown:mt-0 mx-1 linkBreakdown:mb-1 shadow-lg/20 dark:inset-shadow-xs/50 dark:inset-shadow-light"
              onClick={DownloadResume}
            >
              <ArrowDownToLine /> Resume
            </Button>
          </div>
        </div>
        <MailToggle
          closeClick={() => setIsMailVisible(false)}
          showMail={isMailVisible}
        />
      </main>
    </>
  );
}
"use client";

import { Roboto_Mono } from "next/font/google";
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
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import MailToggle from "./mailpopup";

const Roboto = Roboto_Mono({
  subsets: ["latin"],
});

const PfD = Playfair_Display({
  subsets: ["latin"],
});

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

  const bgWhite = "../../public/porsche-white-1.jpg";

  return (
    <main
      className={`w-screen h-screen bg-transparent ${Roboto.className} transition-colors duration-400ms`}
    >
      <div className="fixed inset-0 -z-10 bg-[url(/porsche-white-1.jpg)] dark:bg-[url(/bmw-black-2.jpg)] bg-fixed bg-cover transition-colors duration-500"></div>
      <div className="centre-div">
        <div className="header-dark-mode-toggle min-h-[40px] bg-transparent w-full flex justify-end">
          <DarkToggleButton onClick={ChangeTheme} />
        </div>
        <div className="bio-data w-full bg-light  dark:bg-dark mt-20 flex flex-col-reverse smallDesign:flex-row smallDesign:justify-between rounded-2xl shadow-2xl">
          <div className="mt-5 intro flex flex-col items-center smallDesign:grid ml-7 w-auto">
            <div className="name text-2xl phone:text-3xl bg-transparent flex flex-row font-black text-lighttext dark:text-darktext gap-3">
              <h2 className={`text-lighttext dark:text-darktext`}>
                Hello! I&apos;m Isaac
              </h2>
              <PiHandWavingFill
                size={"30px"}
                className="animate-hand text-yellow-400 mt-1.5 ml-2"
              />
            </div>
            <div className="flex text-lighttext dark:text-darktext mr-1 mt-2">
              <PiSuitcaseLight size="20px" className=" mt-1" />
              <p className="ml-1.5 mt-0.5 text-lightsectext dark:text-darksectext">
                Full-Stack Developer
              </p>
            </div>
            <div className="flex text-lighttext dark:text-darktext mr-1 mt-2">
              <IoLocationOutline size="20px" className=" mt-1" />
              <p className="ml-1.5 mt-0.5 text-lightsectext dark:text-darksectext">
                India
              </p>
            </div>
            <div className="flex text-lighttext dark:text-darktext mr-1 mt-2">
              <GraduationCap size="20px" className=" mt-1" />
              <p className="ml-1.5 mt-0.5 text-lightsectext dark:text-darksectext">
                2025 College Graduate
              </p>
            </div>
            <div>
              <p className="text-lighttext dark:text-darktext font-medium mt-10 mb-2 mr-4 smallDesign:mt-10 smallDesign:mb-2 text-[18px]">
                22 years old. I like cars and building stuff through code!
              </p>
            </div>
          </div>
          <div className="photo-container w-[220px] h-[220px] mx-auto mt-5 smallDesign:mx-2 smallDesign:my-auto bg-[url(/cat.jpg)] bg-center rounded-full flex-none"></div>
        </div>
        <div className="links flex flex-col items-center linkBreakdown:flex-row linkBreakdown:justify-center smallDesign:justify-start px-0 w-full rounded-2xl mt-2 py-2 bg-transparent dark:bg-transparent h-auto">
          <div>
            <Button
              variant="secondary"
              size="icon"
              className="mt-0.5 mb-0.5 linkBreakdown:mt-0 mx-1 linkBreakdown:mb-1 bg-lightlight text-lighttext hover:bg-darklight hover:text-darktext dark:bg-darklight dark:text-darktext dark:hover:bg-lightlight dark:hover:text-lighttext transition-colors duration-300 shadow-xl"
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
              className="mt-0.5 mb-0.5 linkBreakdown:mt-0 mx-1 linkBreakdown:mb-1 dark:bg-darklight dark:text-darktext dark:hover:bg-lightlight dark:hover:text-lighttext text-lighttext hover:bg-darklight hover:text-darktext bg-lightlight transition-colors duration-300 shadow-xl"
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
              className="mt-0.5 mb-0.5 linkBreakdown:mt-0 mx-1 linkBreakdown:mb-1 dark:bg-darklight dark:text-darktext dark:hover:bg-lightlight dark:hover:text-lighttext text-lighttext hover:bg-darklight hover:text-darktext bg-lightlight transition-colors duration-300 shadow-xl"
            >
              <CgMail />
            </Button>
          </div>
          <div>
            <Button
              variant={"secondary"}
              className="mt-0.5 mb-0.5 linkBreakdown:mt-0 mx-1 linkBreakdown:mb-1 dark:bg-darklight dark:text-darktext dark:hover:bg-lightlight dark:hover:text-lighttext text-lighttext hover:bg-darklight hover:text-darktext bg-lightlight transition-colors duration-300 shadow-xl"
              onClick={DownloadResume}
            >
              <ArrowDownToLine /> Resume
            </Button>
          </div>
          <div>
            <Button
              size="default"
              variant={"outline"}
              className="border-2 border-darksectext dark:border-2 dark:border-lightsectext  mt-0.5 mb-0.5 linkBreakdown:mt-0 mx-1 linkBreakdown:mb-1 text-xs bg-lightlight dark:bg-darklight dark:text-darktext  text-lighttext hover:bg-darklight hover:text-darktext transition-colors duration-300 shadow-xl"
            >
              <Dot
                size={108}
                color="#2ec27e"
                className="motion-safe:animate-ping text-[8px]"
              />
              Available for work
            </Button>
          </div>
        </div>
        <MailToggle
          closeClick={() => setIsMailVisible(false)}
          showMail={isMailVisible}
        />
      </div>
    </main>
  );
}

function DarkToggleButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      onClick={onClick}
      variant={"secondary"}
      size={"icon"}
      className="mt-5 mr-1 dark:text-lighttext bg-darklight text-darktext hover:text-lighttext dark:hover:text-darktext dark:bg-lightlight dark:hover:bg-darklight transition-colors duration-500"
    >
      <MoonStar />
    </Button>
  );
}

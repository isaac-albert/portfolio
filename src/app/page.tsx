"use client";
import { MdVerified } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { IoCopy } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

import { useState } from "react";

const DownloadResume = () => {
  const link = document.createElement("a");
  link.href = "/api/resume";
  link.download = "Isaac_CV.pdf";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Home() {
  const [animationState, setAnimationState] = useState("idle");

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setAnimationState("clicked");
    navigator.clipboard.writeText("officialisaacfranklyn@protonmail.com"); // 👈 text to copy
    setTimeout(() => {
      setCopied(true);
    }, 300);

    setTimeout(() => {
      setCopied(false);
    }, 1800);

    setTimeout(() => {
      setAnimationState("returning");
    }, 1800);

    setTimeout(() => {
      setAnimationState("idle");
    }, 2100);
  };

  return (
    <div className="fixed inset-0 bg-background font-google">
      <div className="centre-div">
        <div className="header w-full flex justify-between select-none">
          <span className="text-secsectext text-[14px] font-medium tracking-wide">
            Based in India
          </span>
          <div className="ping-boi flex gap-1">
            <GoDotFill className="text-ping size-[8px] mt-2 mr-1 animate-ping" />
            <span className="text-secsectext text-[14px] font-medium">
              open for work
            </span>
          </div>
        </div>
        <div className="name-pp-block flex mt-10">
          <div className="Profile-Pic border-2 border-gridlines w-25 h-25 rounded-full flex items-center justify-center">
            <div className="bg-[url(/cat.jpg)] bg-cover w-22.5 h-22.5 rounded-full"></div>
          </div>
          <div className="name-block select-none ml-5 h-25 pt-3.5 ">
            <div className="text-[24px] text-text flex font-inter font-bold gap-2">
              <span>Hi I&apos;m Isaac</span>
              <span className="cursor-pointer transiton-all hover:animate-hand ">
                👋
              </span>
            </div>
            <div className="tweet-style flex">
              <span className="font-ibm text-sectext text-[14px]">
                @isaacfranklyn
              </span>
              <MdVerified className="text-verified ml-2.5 mt-0.75" />
            </div>
          </div>
        </div>
        <div className="description text-[14px] mt-5 text-sectext leading-6">
          <span>
            Just a{" "}
            <span className="font-bold text-text">Fullstack Developer</span>{" "}
            looking to change the web one line of code at a time. I build and
            deploy websites quickly using modern tech stacks. I’m always eager
            to learn new things—and I usually pick them up faster than you’d
            expect :)
          </span>
        </div>
        <div className="social-links flex items-center mt-5 gap-3">
          <a
            href="https://github.com/isaac-albert"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div
              tabIndex={0}
              className="github-button text-sectext h-8 cursor-pointer p-1 rounded-md flex items-center justify-center transition-all duration-300 hover:scale-105 hover:-rotate-5 hover:font-bold hover:border-text active:duration-300 active:scale-100 active:105"
            >
              <FaGithub className="size-3.5 ml-2 mr-2  text-text" />
              <span className="mr-2  text-[12px] select-none">Github</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/isaac-franklyn/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div
              tabIndex={0}
              className="linkedin-button text-sectext h-8 cursor-pointer p-1 rounded-md  flex items-center justify-center transition-all duration-300 hover:scale-105 hover:-rotate-5 hover:font-bold hover:border-linkedin active:duration-100 active:scale-100 active:105 active:text-linkedin"
            >
              <IoLogoLinkedin className="size-4 ml-2 mr-2  text-linkedin rounded-sm" />
              <span className="mr-2 text-[12px] select-none tracking-wide">
                Linkedin
              </span>
            </div>
          </a>
          <div
            onClick={DownloadResume}
            tabIndex={0}
            className="linkedin-button text-sectext  h-8 cursor-pointer p-1 rounded-md flex items-center justify-center transition-all duration-300 hover:scale-105 hover:-rotate-5 hover:font-bold hover:border-folder active:duration-100 active:scale-100 active:105 active:text-folder"
          >
            <FaFolderOpen className="size-4 ml-2 mr-2  text-folder rounded-sm" />
            <span className="mr-2 text-[12px] select-none tracking-wide">
              Resume
            </span>
          </div>
          <div
            tabIndex={0}
            className="linkedin-button relative h-8 rounded-md   flex items-center justify-center"
          >
            <SiGmail className="size-4 mt-1 mb-1 ml-3 mr-2  text-gmail rounded-sm" />
            <span className="mr-2 w-30 text-sectext text-[12px] select-none tracking-wide whitespace-nowrap overflow-hidden">
              officialis...
            </span>
            <div className="h-7 bg-gradient-to-r from-transparent to-gridlines"></div>
            <div
              onClick={handleCopy}
              className="cursor-pointer mt-0.5 text-background bg-buttonOutline h-6 w-6 rounded-sm flex items-center justify-center absolute right-0 top-0 bottom-0"
            >
              {!copied && (
                <IoCopy
                  size={12}
                  className={
                    animationState === "clicked"
                      ? "animate-copyIn"
                      : animationState === "returning"
                      ? "animate-copyOut"
                      : ""
                  }
                />
              )}
              {copied && (
                <FaCheck size={12} className="animate-copied text-background" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// border-1 border-buttonOutline
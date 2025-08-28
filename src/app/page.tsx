"use client";
import { MdVerified } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { IoCopy } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { SiHtmx } from "react-icons/si";
import { RiGraduationCapLine } from "react-icons/ri";

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

  const [fadeOpacity, setFadeOpacity] = useState(1);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.target as HTMLDivElement;
    const { scrollTop, scrollHeight, clientHeight } = element;

    // Calculate how close we are to the bottom
    const scrollPercentage = scrollTop / (scrollHeight - clientHeight);

    // Fade out the gradient as we approach the end
    // When scrollPercentage is 0.8 or higher, start fading out
    const newOpacity =
      scrollPercentage >= 0.8
        ? Math.max(0, 1 - (scrollPercentage - 0.8) / 0.2)
        : 1;

    setFadeOpacity(newOpacity);
  };

  const [animationState, setAnimationState] = useState("idle");

  const [copied, setCopied] = useState(false);

  const [toggleState, setToggleState] = useState("Education");

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
    <div className="fixed inset-0 bg-background font-google z-0 overflow-y-scroll">
      <div className="centre-div z-0">
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
        <div className="name-pp-block flex mt-15">
          <div className="profile-pic-block">
            <div className="Profile-Pic border-2 border-gridlines w-30 h-30 rounded-[30px] flex items-center justify-center">
              <div className="bg-[url(/cat.jpg)] bg-cover w-27.5 h-27.5 rounded-[26px]"></div>
            </div>
          </div>
          <div className="name-desc-block ml-7 flex flex-col justify-center">
            <div className="name-block select-none">
              <div className="text-[20px] text-text flex font-inter font-bold gap-2">
                <span>Hi I&apos;m Isaac</span>
                <span className="cursor-pointer transiton-all -rotate-12 animate-hand ">
                  👋
                </span>
              </div>
              <div className="tweet-style flex mt-0.5">
                <span className="font-ibm text-sectext text-[12px]">
                  @isaacfranklyn
                </span>
                <MdVerified className="text-verified ml-1.5 mt-0.75 size-3.5" />
              </div>
            </div>
            <div className="data mt-5 flex flex-col justify-center gap-1.5">
              <div className="fullstack developer flex text-[12px] gap-2 text-sectext font-medium">
                <SiHtmx className="text-text mt-0.5 size-4" />
                <span>Fullstack Developer</span>
              </div>
              <div className="graduation flex text-[12px] gap-2 text-sectext font-medium">
                <RiGraduationCapLine className="text-text mt-0.25 size-4" />
                <span>EE Engineering 2025</span>
              </div>
            </div>
          </div>
        </div>
        <div className="description-block text-[14px] text-sectext leading-5 mt-7">
          <span>
            <span className="italic text-text">
              Building things through code since 2022.
            </span>{" "}
            I am a very fast learner, I might not know everything but I&apos;ll
            grasp it before you realize it :)
          </span>
        </div>
        <div className="social-links flex items-center mt-5 gap-3">
          <a
            href="https://github.com/isaac-albert"
            target="_blank"
            rel="noopener noreferrer"
            className="github inline-block"
          >
            <div
              tabIndex={0}
              className="github-button text-sectext h-8 cursor-pointer pb-1 pt-1 pr-1 rounded-md flex items-center justify-center transition-all duration-300 hover:scale-105  hover:font-bold active:duration-300 active:scale-100 active:105"
            >
              <FaGithub className="size-3.5 mr-2  text-text" />
              <span className="mr-2  text-[12px] select-none">Github</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/isaac-franklyn/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin inline-block"
          >
            <div
              tabIndex={0}
              className="linkedin-button text-sectext h-8 cursor-pointer pb-1 pt-1 pr-1  rounded-md  flex items-center justify-center transition-all duration-300 hover:scale-105 hover:font-bold hover:text-linkedin active:duration-100 active:scale-100 active:105 active:text-linkedin"
            >
              <IoLogoLinkedin className="size-4 mr-2  text-linkedin rounded-sm" />
              <span className="mr-2 text-[12px] select-none tracking-wide">
                Linkedin
              </span>
            </div>
          </a>
          <div
            onClick={DownloadResume}
            tabIndex={0}
            className="linkedin-button text-sectext h-8 cursor-pointer pb-1 pt-1 pr-1  rounded-md flex items-center justify-center transition-all duration-300 hover:scale-105 hover:font-bold hover:text-folder active:duration-100 active:scale-100 active:105 active:text-folder"
          >
            <FaFolderOpen className="size-4 mr-2  text-folder rounded-sm" />
            <span className="mr-2 text-[12px] select-none tracking-wide">
              Resume
            </span>
          </div>
          <div
            tabIndex={0}
            className="mail-button relative h-8 rounded-md flex items-center justify-center"
          >
            <SiGmail className="size-4 mt-1 mb-1 mr-2  text-gmail rounded-sm" />
            <span className="mr-2 w-30 text-sectext text-[12px] select-none tracking-wide whitespace-nowrap overflow-hidden">
              officialis...
            </span>
            <div className="h-7 bg-gradient-to-r from-transparent to-gridlines"></div>
            <div
              onClick={handleCopy}
              className="cursor-pointer mt-0.5 text-background bg-grey h-6 w-6 rounded-sm flex items-center justify-center absolute right-0 top-0 bottom-0"
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
        <div className="education-experience-heading-block relative mt-20 bg-grey h-7 rounded-sm p-[2px] pl-1 pr-1 flex items-center justify-center gap-2">
          <div
            className={`sliding-window absolute top-[3px] bottom-[3px] w-89 bg-background rounded-sm transition-all duration-500 ease-out ${
              toggleState === "Experience" ? "left-1" : "left-1/2"
            }`}
          />
          <div
            onClick={() => {
              setToggleState("Experience");
            }}
            className={`Experience z-10 basis-1/2 cursor-pointer h-full rounded-sm flex items-center justify-center transition-colors duration-300 ${
              toggleState === "Experience" ? "text-sectext" : "text-background"
            } font-bold text-[12px] tracking-widest`}
          >
            <span className="select-none">Experience</span>
          </div>
          <div
            onClick={() => {
              setToggleState("Education");
            }}
            className={`Education z-10 basis-1/2 cursor-pointer h-full rounded-sm flex items-center justify-center transition-colors duration-300 ${
              toggleState === "Education" ? "text-sectext" : "text-background"
            } font-bold text-[12px] tracking-widest`}
          >
            <span className="select-none">Education</span>
          </div>
        </div>
        <div className="education-experience-main-block relative overflow-hidden mt-5 border-1 border-gridlines/30 w-full h-80 rounded-lg">
          <div
            className={`education-content-block absolute inset-0 transition-transform duration-500 ease-out ${
              toggleState === "Education"
                ? "translate-x-0"
                : "-translate-x-full"
            }`}
          >
            <div
              onScroll={handleScroll}
              className="Education-body overflow-y-scroll mt-0 m-2 ml-3 h-95/100 flex flex-col"
            >
              <div className="first-row flex h-8">
                <div className="left-first-line w-10 h-8 flex justify-center">
                  <div className="left-line border-1 border-grey/60"></div>
                </div>
              </div>
              <div className="second-row flex h-full">
                <div className="left-first-AU w-10 flex flex-col justify-start items-center">
                  <div className="w-10 h-10">
                    <div className="AU w-10 h-10 rounded-full border-2 border-grey/60 flex justify-center items-center">
                      <div className="w-8 h-8 bg-[url(/AU-withoutBg.png)] bg-contain"></div>
                    </div>
                  </div>
                  <div className="second-line-after-circle w-10 h-full flex justify-center">
                    <div className="border-1 border-grey/60"></div>
                  </div>
                </div>
                <div className="right-matter-AU">
                  <div className="heading-title ml-3 flex flex-col gap-0.5">
                    <span className="text-text text-[12px] font-semibold">
                      Bachelors in Electrical and Electronics Engineering 2025
                    </span>
                    <span className="text-sectext text-[12px] tracking-widest">
                      Andhra University - Visakhapatnam, India
                    </span>
                  </div>
                  <div className="main-matter-AU mt-2 ml-8 flex flex-col gap-2">
                    <div className="capstone-project leading-[16px]">
                      <span className="text-sectext text-[11px] font-medium">
                        <span className="text-text font-bold text-[12px]">
                          Capstone Project:{" "}
                        </span>
                        Designed and developed a 3D magnetorquer rod for 3U
                        CubeSat applications, demonstrating expertise in space
                        technology and electromagnetic systems
                      </span>
                    </div>
                    <div className="capstone-project leading-[16px]">
                      <span className="text-sectext text-[11px] font-medium">
                        <span className="text-text font-bold text-[12px]">
                          Leadership Role:{" "}
                        </span>
                        Served as President of E4 Club, the college&apos;s
                        premier entrepreneurial organization, fostering
                        innovation and business development among students
                      </span>
                    </div>
                    <div className="capstone-project leading-[16px]">
                      <span className="text-sectext text-[11px] font-medium">
                        <span className="text-text font-bold text-[12px]">
                          Specialized Coursework:{" "}
                        </span>
                        Completed comprehensive curriculum in electronics,
                        circuit design, signal processing, and electromagnetic
                        theory
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="final-row absolute z-100 overflow-hidden bottom-0 left-0 right-0 h-25 w-full bg-gradient-to-b from-transparent to-background pointer-events-none transition-opacity duration-200"
              style={{ opacity: fadeOpacity }}
            ></div>
          </div>
          <div
            className={`experience-content-block absolute inset-0  transition-transform duration-500 ease-out ${
              toggleState === "Experience"
                ? "translate-x-0"
                : "translate-x-full"
            }`}
          >
            <div
              onScroll={handleScroll}
              className="Experience-body mt-0 m-2 ml-3 h-full flex flex-col"
            >
              <div className="first-row flex h-8">
                <div className="left-first-line w-10 h-8 flex justify-center">
                  <div className="left-line border-1 border-grey/60"></div>
                </div>
              </div>
              <div className="second-row flex h-full">
                <div className="left-first-kellton w-10 flex flex-col justify-start items-center">
                  <div className="w-10 h-10">
                    <div className="AU w-10 h-10 rounded-full border-2 border-grey/60 flex justify-center items-center overflow-hidden">
                      <div className="w-8 h-4 bg-[url(/kellton-tech.png)] bg-cover"></div>
                    </div>
                  </div>
                  <div className="second-line-after-circle w-10 h-full flex justify-center">
                    <div className="border-1 border-grey/60"></div>
                  </div>
                </div>
                <div className="right-matter-kellton-tech">
                  <div className="heading-title ml-3 flex flex-col gap-0.5">
                    <span className="text-text text-[12px] font-semibold">
                      Software Development Intern{" "}
                      <span className="text-sectext italic">(2 months)</span>
                    </span>
                    <span className="text-sectext text-[12px] tracking-wide">
                      Kellton Tech - Hyderabad, India
                    </span>
                  </div>
                  <div className="main-matter-kellton-tech mt-2 ml-8 flex flex-col gap-2">
                    <div className="capstone-project leading-[16px]">
                      <span className="text-sectext text-[11px] font-medium">
                        Developed backend systems using Spring Boot and Java for
                        employee management and data processing across multiple
                        departments
                      </span>
                    </div>
                    <div className="capstone-project leading-[16px]">
                      <span className="text-sectext text-[11px] font-medium">
                        Gained hands-on experience in enterprise-level software
                        development and database management
                      </span>
                    </div>
                    <div className="capstone-project leading-[16px]">
                      <span className="text-sectext text-[11px] font-medium">
                        Collaborated with cross-functional teams in a fast-paced
                        corporate environment
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="final-row absolute z-100 overflow-hidden bottom-0 left-0 right-0 h-25 w-full bg-gradient-to-b from-transparent to-background pointer-events-none transition-opacity duration-200"
              style={{ opacity: fadeOpacity }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
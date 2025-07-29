import { Copy } from "lucide-react";
import { X } from "lucide-react";
import { BiLogoGmail } from "react-icons/bi";
import React from "react";
import Link from "next/link";
// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   subsets: ["latin"],
// });

import { Button } from "@/components/ui/button";

export default function MailToggle({
  closeClick,
  showMail,
}: {
  closeClick: () => void;
  showMail: boolean;
}) {
  if (!showMail) return null;
  return (
    <div className="fixed inset-0 z-30 bg-transparent backdrop-blur-md flex items-center justify-center">
      <div
        onClick={closeClick}
        className="absolute inset-0 z-40 bg-dark opacity-50 backdrop-blur-3xl"
      ></div>
      <div className="card mt-10 w-screen linkBreakdown:max-w-4/5 sm:w-1/2 md:1/3 lg:w-1/3 z-50 grid rounded-3xl bg-lightdark dark:bg-dark shadow-lg/20 dark:inset-shadow-xs/50 dark:inset-shadow-light">
        <div className="cross flex justify-end">
          <Button
            onClick={closeClick}
            variant={"secondary"}
            size={"icon"}
            className="close-button bg-transparent text-darklight hover:text-darkdark dark:text-lightdark dark:hover:text-lightlight hover:bg-transparent"
          >
            <X size={"20px"} className="mr-6 mt-5" />
          </Button>
        </div>
        <div className="text-copy m-auto flex justify-between w-4/5 mt-8 mb-10 rounded-2xl">
          <div className="basis-5/6 outline-2 lg:outline-3 outline-darksectext dark:outline-lightsectext rounded-l-2xl pt-2 pb-2 whitespace-nowrap overflow-hidden">
            <span className={`ml-2 mb-4`}>officialisaacfranklyn@gmail.com</span>
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText("officialisaacfranklyn@gmail.com");
            }}
            className="basis-1/6 pt-2 pb-2 outline-2 lg:outline-3 dark:bg-darklight dark:hover:bg-dark bg-lightlight hover:bg-light  outline-darksectext dark:outline-lightsectext rounded-r-2xl transition-colors duration-500"
          >
            <Copy className="m-auto" />
          </button>
        </div>
        <div className="send-mail m-auto mb-10">
          <Button
            variant={"secondary"}
            className="text-lightsectext dark:text-darksectext hover:text-darksectext dark:hover:text-lightsectext bg-lightlight dark:bg-darklight hover:bg-darklight dark:hover:bg-lightlight transition-colors duration-300 shadow-lg/20 dark:inset-shadow-xs/50 dark:inset-shadow-light"
          >
            <Link
              href="mailto:officialisaacfranklyn@gmail.com"
              target="_blank"
              className="flex justify-center gap-2"
            >
              <BiLogoGmail className="mt-0.5" />
              Send Mail
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

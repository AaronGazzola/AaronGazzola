"use client";
import { LayoutContext } from "@/context/layoutContext";
import Link from "next/link";
import { ReactNode, useContext } from "react";

const Footer = () => {
  const { bgIsLoaded } = useContext(LayoutContext);
  return (
    <div
      className={[
        "flex text-sm footer-text pb-4 pt-5 opacity-0",
        bgIsLoaded ? "fade-in-layout" : "",
      ].join(" ")}
    >
      <div className="space-x-10 flex">
        {[
          {
            text: "Github",
            href: "https://github.com/AaronGazzola/",
          },
          {
            text: "Upwork",
            href: "https://www.upwork.com/freelancers/~017424c1cc6bed64e2",
          },
        ].map(({ text, href }) => (
          <div key={text} className="group">
            <Link
              target="__blank"
              rel="noopener noreferrer"
              href={href}
              className="pb-1 opacity-70 group-hover:opacity-100"
            >
              {text}
            </Link>
            <hr className="border-gray-400 mt-1 scale-x-0 group-hover:scale-x-100 transition-transform" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;

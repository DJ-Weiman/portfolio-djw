import React from "react";
import DrawOutlineBtn from "./DrawOutlineBtn";
import Link from "next/link";
import LinkBox from "./ClipLinkBox";

type Props = {};

function StaggeredSideNav2({}: Props) {
  return (
    <div className="fixed inset-0 min-h-screen w-screen flex flex-row">
      <div
        className="bg-black opacity-75 grow-1"
        //   onClick={toggleNavbar} }
        style={{ backdropFilter: "blur(5px)" }}
      ></div>

      <div className="bg-mainBG">
        <div className="md:hidden flex flex-col gap-6 mt-25 px-4 items-center">
          <DrawOutlineBtn outline="BOTTOM">
            <Link href="#">About</Link>
          </DrawOutlineBtn>
          <DrawOutlineBtn outline="BOTTOM">
            <Link href="#">Skills & Education</Link>
          </DrawOutlineBtn>
          <DrawOutlineBtn outline="BOTTOM">
            <Link href="#">Work</Link>
          </DrawOutlineBtn>
          <DrawOutlineBtn outline="BOTTOM">
            <Link href="#">Personal Projects</Link>
          </DrawOutlineBtn>
          <div className="mt-2">
            <LinkBox href="#" linkText="Resume" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaggeredSideNav2;

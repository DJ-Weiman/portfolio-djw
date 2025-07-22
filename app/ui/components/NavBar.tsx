"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import DrawOutlineBtn from "./bits/DrawOutlineBtn";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import LinkBox from "./bits/ClipLinkBox";
import AnimatedHamburgerButton from "./bits/AnimatedHamburgerButton";
import StaggeredSideNav from "./bits/StaggeredSideNav";
import StaggeredSideNav2 from "./bits/StaggeredSideNav2";
import sideNavStateStore from "@/app/lib/SideNavStateStore";

type Props = {};

function NavBar({}: Props) {
  const { scrollY } = useScroll();
  const {openState, setOpenState} = sideNavStateStore()
  const [hidden, setHidden] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous != undefined) {
      if (latest > previous && latest > 150) setHidden(true);
      else setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 flex items-center justify-end bg-mainBG"
    >
      <div className="md:flex hidden gap-6 pr-4 items-center h-20">
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
        <LinkBox href="#" linkText="Resume" />
      </div>

      <div className="md:hidden flex">
        <span className="h-20"></span>
        <div className="fixed top-4 right-4 z-20 h-20">
          <AnimatedHamburgerButton
            onClick={(show) => {
              setShowSideNav(show);
              setOpenState(!openState)
              if(show)
                document.body.style.overflow = 'hidden'
              else
                document.body.style.overflow = 'unset'
            }}
          />
        </div>
        {showSideNav && <StaggeredSideNav2 />}
      </div>
    </motion.nav>
  );
}

export default NavBar;

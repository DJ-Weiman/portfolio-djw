"use client";

import React, { useEffect, useState } from "react";
import DrawOutlineBtn from "./bits/DrawOutlineBtn";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import LinkBox from "./bits/ClipLinkBox";
import AnimatedHamburgerButton from "./bits/AnimatedHamburgerButton";
import StaggeredSideNav2 from "./bits/StaggeredSideNav";
import sideNavStateStore from "@/lib/SideNavStateStore";
import { CVLink } from "@/lib/data";

type Props = {};

function NavBar({ }: Props) {
  const { scrollY } = useScroll();
  const { globalSideNavOpenState, setGlobalSideNavOpenState } =
    sideNavStateStore();

  const [hidden, setHidden] = useState(false);
  const [localSideNavOpenState, setLocalSideNavOpenState] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous != undefined) {
      if (latest > previous && latest > 150) setHidden(true);
      else setHidden(false);
    }
  });

  useEffect(() => {
    if (globalSideNavOpenState) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [globalSideNavOpenState]);

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
          <a href="#about">About</a>
        </DrawOutlineBtn>
        <DrawOutlineBtn outline="BOTTOM">
          <a href="#skills">Skills & Education</a>
        </DrawOutlineBtn>
        <DrawOutlineBtn outline="BOTTOM">
          <a href="#experience">Work</a>
        </DrawOutlineBtn>
        <DrawOutlineBtn outline="BOTTOM">
          <a href="#">Personal Projects</a>
        </DrawOutlineBtn>
        <LinkBox href={CVLink} linkText="Resume" />
      </div>

      <div className="md:hidden flex">
        <span className="h-20"></span>
        <div className="fixed top-4 right-4 z-20 h-20">
          <AnimatedHamburgerButton
            onBtnClicked={() => {
              setLocalSideNavOpenState((prev) => {
                if (!prev) setGlobalSideNavOpenState(true);
                return !prev;
              });
            }}
            openState={localSideNavOpenState}
          />
        </div>
        {globalSideNavOpenState && (
          <StaggeredSideNav2
            onNavItemClicked={() => {
              console.log("Inside Nav Item Cliekced")
              setLocalSideNavOpenState(false);
            }}
            onAnimationCompleted={() => {
              console.log("Inside animation Completed")
              setGlobalSideNavOpenState(false);
            }}
            startSideNavOpenAnimation={localSideNavOpenState}
          />
        )}
      </div>
    </motion.nav>
  );
}

export default NavBar;

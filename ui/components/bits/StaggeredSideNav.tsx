'use client'

import React, { useEffect, useState } from "react";
import DrawOutlineBtn from "./DrawOutlineBtn";
import LinkBox from "./ClipLinkBox"
import { motion } from "framer-motion";
import { CVLink } from "@/lib/data";

type Props = {
  onAnimationCompleted: () => void;
  onNavItemClicked: () => void;
  startSideNavOpenAnimation: boolean;
};

type animationStates = "open" | "closed";

function StaggeredSideNav2({
  onNavItemClicked,
  startSideNavOpenAnimation,
  onAnimationCompleted,
}: Props) {
  function handleContainerCloseAnimation(definition: animationStates) {
    if (definition === "closed") {
      onAnimationCompleted()
    }
  }

  return (
    <div className="fixed inset-0 min-h-screen w-screen">
      <div
        className="bg-black opacity-75 fixed inset-0"
        style={{ backdropFilter: "blur(5px)" }}
      ></div>

      <motion.div
        variants={ContainerVariants}
        initial="closed"
        animate={startSideNavOpenAnimation ? "open" : "closed"}
        onAnimationComplete={handleContainerCloseAnimation}
        className="bg-mainBG opacity-100 min-h-screen fixed top-0 right-0"
      >
        <div className="md:hidden flex flex-col gap-6 mt-25 px-4 items-center">
          <DrawOutlineBtn outline="BOTTOM">
            <a href="#about" onClick={onNavItemClicked}>
              About
            </a>
          </DrawOutlineBtn>
          <DrawOutlineBtn outline="BOTTOM">
            <a href="#skills" onClick={onNavItemClicked}>
              Skills & Education
            </a>
          </DrawOutlineBtn>
          <DrawOutlineBtn outline="BOTTOM">
            <a href="#experience" onClick={onNavItemClicked}>
              Work
            </a>
          </DrawOutlineBtn>
          <DrawOutlineBtn outline="BOTTOM">
            <a href="#" onClick={onNavItemClicked}>
              Personal Projects
            </a>
          </DrawOutlineBtn>
          <div className="mt-2">
            <LinkBox href={CVLink} linkText="Resume" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const ContainerVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { duation: 0.75 },
  },
  closed: {
    x: 100,
    opacity: 0,
    transition: { duation: 0.75 },
  },
};

export default StaggeredSideNav2;

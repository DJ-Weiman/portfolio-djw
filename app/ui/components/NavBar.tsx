"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import DrawOut from "./bits/TiltedCard";
import DrawOutlineBtn from "./bits/DrawOutlineBtn";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import LinkBox from "./bits/ClipLinkBox";

type Props = {};

function NavBar({}: Props) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if(previous != undefined){
        if(latest > previous && latest > 150)
            setHidden(true)
        else
        setHidden(false)
    }
  })

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 flex items-center justify-end h-20"
    >
      <div className="flex gap-6 pr-4 items-center">
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
        <LinkBox href="#" linkText="Resume"/>
      </div>
    </motion.nav>
  );
}

export default NavBar;

"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";

const StaggeredSideNav = (openState: { openState: boolean }) => {
  return (
    <aside className="min-h-screen w-screen bg-blue-200">
      {openState && (
        <div className="p-8 flex items-center justify-center w-xl bg-red-50">
          <motion.div
            animate={openState ? "open" : "closed"}
            className=""
          >

            <motion.ul
              initial={wrapperVariants.closed}
              variants={wrapperVariants}
              style={{ originY: "top", translateX: "-50%" }}
              className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute overflow-hidden"
            >
              <Option text="Edit" />
              <Option text="Duplicate" />
              <Option text="Share" />
              <Option text="Remove" />
            </motion.ul>
          </motion.div>
        </div>
      )}
    </aside>
  );
};

const Option = ({
  text,
}: //   Icon,
//   setOpen,
{
  text: string;
  //   Icon: IconType;
  //   setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      //   onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>{/* <Icon /> */}</motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredSideNav;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

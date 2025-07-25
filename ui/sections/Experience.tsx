"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};
type scrollDirTypes = 'LEFT' | 'RIGHT'

const Experience = (props: Props) => {
  const scrollInVariant = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.75 } },
    hidden: (direction: scrollDirTypes) => ({x: direction === 'LEFT' ? -50 : 50, opacity: 0}),
  };

  return (
    <div id="experience" className="bg-evenSectionBG px-10 pb-10 flex flex-col">
      <h2 className="font-semibold text-3xl pt-3 pb-5">Work Experince</h2>

      <div className="flex flex-col max-w-[1250px] w-full self-center shrink-0">
        <motion.div
          variants={scrollInVariant}
          custom='LEFT'
          initial="hidden"
          whileInView="visible"
          className="rounded-xl bg-slate-600 p-4 flex flex-col gap-4 max-w-xl self-start"
        >
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold text-slate-100">Software Engineer</h2>
            <h3 className="text-md text-slate-200">4 Axis Solutions Pvt. Ltd.</h3>
            <p className="text-sm font-light">July 2023 - Present</p>
          </div>
          <ul className="list-disc pl-4">
            <li>
              Working on migrating the legacy Java code to Kotlin while focusing
              on best practices and clean scalable architcture
            </li>
            <li>
              Developed UI for the company's flagship applications: SketchPro
              and DrawingDesk
            </li>
            <li>
              Worked on integrating app functionality with the inhouse built
              engine
            </li>
            <li>Integrated cloud services with Android applications</li>
          </ul>
        </motion.div>

        <motion.div
          variants={scrollInVariant}
          custom='RIGHT'
          initial="hidden"
          whileInView="visible"
          className="rounded-xl bg-slate-600 p-4 flex flex-col gap-4 mt-4 max-w-xl self-end"
        >
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold">
              Trainee Software Engineer (Internship)
            </h2>
            <h3 className="text-md">4 Axis Solutions Pvt. Ltd.</h3>
            <p className="text-sm font-light">July 2023 - Present</p>
          </div>
          <ul className="list-disc pl-4">
            <li>
              Developed ML related features for Drawing Desk (Mainly focusing on
              OpenCV)
            </li>
            <li>Integrated new features with the existing application.</li>
            <li>Gained exposure to working according the Agile Methodology</li>
            <li>Developed a sense of self learning and ownership for tasks</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;

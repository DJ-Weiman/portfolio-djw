"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};
type scrollDirTypes = 'LEFT' | 'RIGHT'

const Experience = (props: Props) => {
  const scrollInVariant = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.75 } },
    hidden: (direction: scrollDirTypes) => ({ x: direction === 'LEFT' ? -50 : 50, opacity: 0 }),
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
            <li>Developed Android applications using Kotlin and Java.</li>
            <li>Migrated legacy Java code to Kotlin, following modern Android development practices, which improved app stability and resulted in a cleaner code structure.</li>
            <li>Developed user interfaces (UI) based on provided designs.</li>
            <li>Implemented features to facilitate communication between the native in-house built engine and the user-facing application.</li>
            <li>Implemented features to retrieve data from cloud storage and present it through the app.</li>
            <li>Worked on testing and resolving bugs raised through the quality assurance (QA) process.</li>
            <li>Utilized Agile methodologies to develop required features.</li>
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
            <li>Incorporated ML based features (Focus on OpenCV) into Drawing Desk.</li>
            <li>Implemented UI based on provided designs.</li>
            <li>Collaborated within the Android Team and other teams to develop required features.</li>
            <li>Pushed myself to learn on the job and adapt to the different tasks given.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;

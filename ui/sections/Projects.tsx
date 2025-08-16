"use client"

import { projectsData } from "@/lib/data"
import ProjectCard from "../components/ProjectCard"
import { motion } from "framer-motion";

const Projects = () => {

    const scrollVariant = {
        visible: { opacity: 1, transition: { duration: 1.5 } },
        hidden: { opacity: 0 }
    }

    return (
        <div className='px-10 py-5'>
            <h2 className="font-semibold pt-3 text-3xl text-white">Projects</h2>
            <p className="py-6">A collection of my projects showcasing my skills and interests in software development.</p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 place-items-center">
                {
                    projectsData.map(project => (
                        <motion.div
                            key={project.title}
                            variants={scrollVariant}
                            initial="hidden"
                            whileInView="visible">
                            <ProjectCard
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                techs={project.techs}
                                githubUrl={project.githubUrl}
                                liveUrl={project.liveUrl}
                            />
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
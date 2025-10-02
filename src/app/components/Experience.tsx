"use client";
import { motion } from "motion/react";
import { experience } from "../data/data";
import { fadeInUpLeft } from "../data/variants";
const Experience = () => {
  return (
    <motion.div
      variants={fadeInUpLeft}
      initial="hidden"
      whileInView="visible"
      className="bg-neutral-950 w-full mx-auto pb-4 border-b border-neutral-600"
    >
      <div className=" gap-4 text-sm">
        <h2 className="text-lg font-semibold mb-2">Experience</h2>
        {experience.map((exp, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="text-neutral-100 flex justify-between items-center">
              <span className="font-semibold">{exp.companyName}</span>
              <span>{exp.duration}</span>
            </h3>
            <div className="text-sm text-neutral-400 mb-1">
              {exp.title} | {exp.location}
            </div>
            <ul className="list-disc list-inside text-neutral-300">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;

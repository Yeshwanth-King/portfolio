"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Smartphone, Zap, Shield } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-6 w-6" />,
      color: "text-blue-400",
      skills: [
        { name: "Next.js", level: 90 },
        { name: "React", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "shadcn/ui", level: 80 },
      ],
    },
    {
      title: "Backend",
      icon: <Database className="h-6 w-6" />,
      color: "text-green-400",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Prisma", level: 75 },
        { name: "Stripe", level: 70 },
        { name: "Socket.IO", level: 85 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      color: "text-yellow-400",
      skills: [
        { name: "AWS S3", level: 80 },
        { name: "AWS CloudFront", level: 75 },
        { name: "AWS Lambda", level: 70 },
        { name: "AWS RDS", level: 75 },
        { name: "AWS EC2", level: 70 },
      ],
    },
    {
      title: "Mobile & Tools",
      icon: <Smartphone className="h-6 w-6" />,
      color: "text-purple-400",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "Supabase", level: 75 },
        { name: "Google Analytics", level: 70 },
        { name: "PostHog", level: 65 },
        { name: "Git", level: 85 },
      ],
    },
  ];

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Prisma",
    "Stripe",
    "AWS",
    "MongoDB",
    "Supabase",
    "Socket.IO",
    "Tailwind CSS",
    "shadcn/ui",
    "Framer Motion",
    "Google Analytics",
    "PostHog",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "visible"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <Badge
              variant="secondary"
              className="text-[#5237f9] border-[#5237f9]/20"
            >
              <Zap className="mr-2 h-4 w-4" />
              Technical Skills
            </Badge>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Skills & <span className="text-[#5237f9]">Expertise</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            A comprehensive toolkit for building modern, scalable web
            applications
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "visible"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#141414] border border-white/10 rounded-xl p-6 group"
            >
              <div className="flex items-center mb-6">
                <div className={`${category.color} mr-3`}>{category.icon}</div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-[#5237f9] text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-[#5237f9] to-[#6b46f9] h-2 rounded-full"
                        variants={progressVariants}
                        custom={skill.level}
                        initial="hidden"
                        animate={isInView ? "visible" : "visible"}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Tags - Moving Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "visible"}
          className="text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold text-white mb-8"
          >
            Technologies I Work With
          </motion.h3>
        </motion.div>

        {/* Moving badges container - using pure CSS */}
        <div className="relative overflow-hidden">
          {/* First row moving right to left */}
          <div className="flex gap-3 mb-3 animate-scroll-right">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 glass rounded-full px-4 py-2 border border-white/10 hover:border-[#5237f9] hover:shadow-[0_0_20px_rgba(82,55,249,0.3)] transition-all duration-300"
              >
                <span className="text-white/80 text-sm font-medium">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          {/* Second row moving left to right */}
          <div className="flex gap-3 animate-scroll-left">
            {[
              ...technologies.slice().reverse(),
              ...technologies.slice().reverse(),
            ].map((tech, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 glass rounded-full px-4 py-2 border border-white/10 hover:border-[#5237f9] hover:shadow-[0_0_20px_rgba(82,55,249,0.3)] transition-all duration-300"
              >
                <span className="text-white/80 text-sm font-medium">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "visible"}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Shield className="h-8 w-8" />,
              title: "Security Focused",
              description:
                "Implementing secure authentication and data protection in all applications",
            },
            {
              icon: <Zap className="h-8 w-8" />,
              title: "Performance Optimized",
              description:
                "Building fast, responsive applications with modern optimization techniques",
            },
            {
              icon: <Cloud className="h-8 w-8" />,
              title: "Cloud Native",
              description:
                "Expertise in AWS services and scalable cloud architectures",
            },
          ].map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-[#141414] border border-white/10 rounded-xl p-6 text-center group"
            >
              <div className="text-[#5237f9] mb-4 flex justify-center">
                {achievement.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                {achievement.title}
              </h4>
              <p className="text-white/60">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

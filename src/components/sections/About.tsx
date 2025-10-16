"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
  User,
  MapPin,
  Calendar,
  GraduationCap,
  Heart,
  Code,
  Coffee,
  Music,
} from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const personalInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Bangalore, India",
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Age",
      value: "20 years old",
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      label: "Education",
      value: "B.Tech CSE (3rd Year)",
    },
    {
      icon: <Code className="h-5 w-5" />,
      label: "Experience",
      value: "1+ years",
    },
  ];

  const interests = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full-Stack Development",
      description: "Building end-to-end applications with modern technologies",
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Problem Solving",
      description:
        "Love tackling complex challenges and finding elegant solutions",
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Music & Creativity",
      description: "Music inspires my coding and helps me think creatively",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Learning",
      description: "Always exploring new technologies and improving my skills",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
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
              className="text-primary border-primary/20"
            >
              <User className="mr-2 h-4 w-4" />
              About Me
            </Badge>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Who <span className="text-primary">Am I?</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            A passionate full-stack developer building the future, one line of
            code at a time
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "visible"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-4">
                My <span className="text-primary">Story</span>
              </h3>
              <div className="space-y-4 text-white/70">
                <p>
                  I&apos;m a 20-year-old computer science student from
                  Bangalore, India, currently pursuing my B.Tech in Computer
                  Science and Engineering at Dayananda Sagar University. My
                  journey into the world of technology began with curiosity and
                  has evolved into a deep passion for creating meaningful
                  digital solutions.
                </p>
                <p>
                  As a 3rd-year student and active intern at Captain Side,
                  I&apos;ve had the opportunity to work on real-world projects
                  that impact users globally. From building scalable web
                  applications to implementing cloud infrastructure, every
                  project teaches me something new.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, contributing to open-source projects, or
                  participating in hackathons where I&apos;ve won several
                  competitions including 1st place at BuiltIt Hackathon as a
                  solo participant.
                </p>
              </div>
            </motion.div>

            {/* Personal Info Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {personalInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-[#141414] border border-white/10 rounded-lg p-4"
                >
                  <div className="flex items-center mb-2">
                    <div className="text-primary mr-2">{info.icon}</div>
                    <span className="text-sm text-white/60">{info.label}</span>
                  </div>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Interests & Passions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "visible"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">
                My <span className="text-primary">Passions</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-[#141414] border border-white/10 rounded-lg p-4 group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        {interest.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          {interest.title}
                        </h4>
                        <p className="text-white/60 text-sm">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Values */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-4">
                What Drives Me
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-white/70">
                    <strong>Innovation:</strong> Creating solutions that make a
                    difference
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-white/70">
                    <strong>Learning:</strong> Continuously growing and adapting
                    to new technologies
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-white/70">
                    <strong>Collaboration:</strong> Working with amazing people
                    to build great things
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-white/70">
                    <strong>Impact:</strong> Building products that solve
                    real-world problems
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "visible"}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-[#141414] border border-white/10 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Let&apos;s Build Something Amazing Together
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to work on new projects, learn from
              experienced developers, and contribute to meaningful solutions.
              Whether you&apos;re looking for a developer or just want to chat
              about technology, I&apos;d love to connect!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge
                variant="outline"
                className="border-primary/50 text-primary"
              >
                Open to Opportunities
              </Badge>
              <Badge
                variant="outline"
                className="border-primary/50 text-primary"
              >
                Available for Freelance
              </Badge>
              <Badge
                variant="outline"
                className="border-primary/50 text-primary"
              >
                Open Source Contributor
              </Badge>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

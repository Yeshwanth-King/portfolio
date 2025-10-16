"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  GraduationCap,
  Trophy,
  MapPin,
  Award,
  Users,
} from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const experiences = [
    {
      type: "work",
      title: "Full-Stack Developer Intern",
      company: "Captain Side",
      location: "Remote",
      duration: "Dec 2024 - Present",
      status: "active",
      description:
        "Building and maintaining client platforms with modern web technologies",
      achievements: [
        "Maintaining and enhancing the client platform architecture",
        "Implementing UGC reels using AWS S3 and CloudFront for content delivery",
        "Building comprehensive admin dashboard with real-time analytics",
        "Integrating CMS with Sanity for content management",
        "Working with AWS RDS for scalable database management",
        "Migrated from Supabase to AWS RDS for improved performance",
      ],
      technologies: [
        "Next.js",
        "React",
        "AWS S3",
        "CloudFront",
        "Sanity",
        "AWS RDS",
        "TypeScript",
      ],
      icon: <Briefcase className="h-6 w-6" />,
      color: "text-primary",
    },
    {
      type: "education",
      title: "Bachelor of Technology",
      company: "Dayananda Sagar University",
      location: "Bangalore, India",
      duration: "2023 - 2027",
      status: "ongoing",
      description:
        "Computer Science and Engineering with focus on software development",
      achievements: [
        "Current CGPA: 8.23",
        "Active in coding competitions and hackathons",
        "Building practical projects alongside academics",
      ],
      technologies: ["C", "Python", "Java", "Data Structures", "Algorithms"],
      icon: <GraduationCap className="h-6 w-6" />,
      color: "text-blue-400",
    },
    {
      type: "education",
      title: "12th Grade",
      company: "St. Francis Composite PU College",
      location: "Bangalore, India",
      duration: "2021 - 2023",
      status: "completed",
      description:
        "Science stream with focus on Mathematics and Computer Science",
      achievements: [
        "Scored 91.6% in final examinations",
        "Strong foundation in Mathematics and Science",
        "Active participation in school tech events",
      ],
      technologies: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
      icon: <GraduationCap className="h-6 w-6" />,
      color: "text-green-400",
    },
  ];

  const hackathons = [
    {
      title: "IIT Dharwad Dev Hacks 6.0",
      position: "Finalist",
      date: "2024",
      description: "Reached finals in one of India's premier hackathons",
      icon: <Award className="h-6 w-6" />,
      color: "text-purple-400",
    },
    {
      title: "BuiltIt Hackathon (Captain Side)",
      position: "1st Place - Solo Winner",
      date: "2024",
      description:
        "Won first place as a solo participant, showcasing full-stack development skills",
      icon: <Trophy className="h-6 w-6" />,
      color: "text-yellow-400",
    },
    {
      title: "TechFlix Hackathon",
      position: "Top 12 Teams",
      date: "2024",
      description:
        "Secured position in top 12 teams among hundreds of participants",
      icon: <Users className="h-6 w-6" />,
      color: "text-blue-400",
    },
  ];

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
      transition: {
        duration: 0.5,
      },
    },
  };

  const timelineVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
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
              <Briefcase className="mr-2 h-4 w-4" />
              Experience & Education
            </Badge>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            My <span className="text-primary">Journey</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            From academic excellence to professional development, building the
            future one project at a time
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "visible"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={timelineVariants}
                className="relative flex items-start md:items-center"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block z-10" />

                {/* Content */}
                <div className="ml-0 md:ml-16 w-full">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-[#141414] border border-white/10 rounded-xl p-6 group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center mb-4 md:mb-0">
                        <div className={`${exp.color} mr-3`}>{exp.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-white/60 text-sm">
                            <span className="font-medium">{exp.company}</span>
                            <span className="mx-2">•</span>
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:items-end">
                        <Badge
                          variant={
                            exp.status === "active" ? "default" : "secondary"
                          }
                          className={`${
                            exp.status === "active"
                              ? "bg-primary text-white"
                              : "bg-white/10 text-white/80"
                          } mb-2`}
                        >
                          {exp.duration}
                        </Badge>
                        {exp.status === "active" && (
                          <span className="text-xs text-primary font-medium">
                            Currently Working
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-white/70 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-white/60 text-sm flex items-start"
                          >
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-white/20 text-white/70 hover:border-primary/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hackathon Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "visible"}
          className="mt-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Hackathon <span className="text-primary">Achievements</span>
            </h3>
            <p className="text-white/60">
              Competing and winning in India&apos;s top hackathons
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`rounded-xl p-6 text-center group relative ${
                  hackathon.title === "BuiltIt Hackathon (Captain Side)"
                    ? "bg-gradient-to-br from-[#5237f9]/30 to-[#5237f9]/10 border-2 border-[#5237f9] shadow-2xl shadow-[#5237f9]/30"
                    : "bg-[#141414] border border-white/10"
                }`}
              >
                <div className={`${hackathon.color} mb-4 flex justify-center`}>
                  {hackathon.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {hackathon.title}
                </h4>
                <Badge
                  variant="secondary"
                  className="text-primary border-primary/20 mb-3"
                >
                  {hackathon.position}
                </Badge>
                <p className="text-white/60 text-sm mb-2">
                  {hackathon.description}
                </p>
                <p className="text-white/40 text-xs">{hackathon.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Focus */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "visible"}
          className="mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-[#141414] border border-white/10 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Current Focus
            </h3>
            <p className="text-white/70 mb-6 max-w-3xl mx-auto">
              As a 3rd year CSE student and active intern at Captain Side,
              I&apos;m focused on mastering full-stack development, cloud
              technologies, and building scalable applications that solve
              real-world problems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge
                variant="outline"
                className="border-primary/50 text-primary"
              >
                Full-Stack Development
              </Badge>
              <Badge
                variant="outline"
                className="border-primary/50 text-primary"
              >
                Cloud Architecture
              </Badge>
              <Badge
                variant="outline"
                className="border-primary/50 text-primary"
              >
                Real-time Applications
              </Badge>
              <Badge
                variant="outline"
                className="border-primary/50 text-primary"
              >
                Performance Optimization
              </Badge>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Captain Side Platform",
    description:
      "Full-stack client platform with UGC reels, admin dashboard, and CMS integration. Built with Next.js, AWS services, and modern web technologies.",
    image: "/images/projects/captain-side-preview.png",
    technologies: [
      "Next.js",
      "AWS S3",
      "CloudFront",
      "RDS",
      "Sanity CMS",
      "TypeScript",
    ],
    features: [
      "UGC Reels with AWS S3 & CloudFront",
      "Admin Dashboard with Analytics",
      "CMS Integration with Sanity",
      "Database Management with AWS RDS",
      "Real-time Data Processing",
    ],
    liveUrl: "https://captainside.com",
    githubUrl: null,
    isMainProject: true,
    status: "Current Internship",
  },
  {
    id: 2,
    title: "Shopy - E-Commerce Platform",
    description:
      "Complete e-commerce solution with product management, secure checkout, and admin dashboard. Features Stripe integration and user authentication.",
    image: "/images/projects/ecommerce-preview.png",
    technologies: ["Next.js", "MongoDB", "Stripe", "NextAuth", "Tailwind CSS"],
    features: [
      "Product Management System",
      "Secure Payment Processing",
      "User Authentication & Authorization",
      "Admin Dashboard",
      "Order Tracking System",
    ],
    liveUrl: "https://ecommerce-app-ruby-delta.vercel.app",
    githubUrl: "https://github.com/Yeshwanth-King/Ecommerce-App",
    isMainProject: true,
    status: "Live Demo",
  },
  {
    id: 3,
    title: "Airbnb Clone",
    description:
      "Modern property listing platform with advanced search, booking system, and responsive design. Built with Next.js and modern UI components.",
    image: "/images/projects/airbnb-clone-preview.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    features: [
      "Property Search & Filtering",
      "Interactive Map Integration",
      "Booking System",
      "User Reviews & Ratings",
      "Responsive Design",
    ],
    liveUrl: "https://air-bnb-clone-beta-azure.vercel.app",
    githubUrl: "https://github.com/Yeshwanth-King/Air-Bnb-Clone",
    isMainProject: false,
    status: "Live Demo",
  },
  {
    id: 4,
    title: "Encrypted Chat App",
    description:
      "Real-time encrypted messaging application with room management, online tracking, and read receipts. Built with Socket.IO and Cryptr encryption.",
    image: "/images/projects/chat-app-preview.png",
    technologies: ["Next.js", "Express.js", "Socket.IO", "Cryptr", "MongoDB"],
    features: [
      "End-to-End Encryption",
      "Real-time Messaging",
      "Room Management",
      "Online Status Tracking",
      "Read Receipts",
    ],
    liveUrl: "https://chat-at-dsu.vercel.app",
    githubUrl: "https://github.com/Yeshwanth-King/ChatAtDSU",
    isMainProject: false,
    status: "Live Demo",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "visible"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Showcasing my best work with modern technologies and clean design
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "visible"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group relative ${
                project.isMainProject ? "lg:col-span-2" : ""
              }`}
            >
              <div className="bg-[#141414] border border-white/10 rounded-xl p-6 group-hover:border-[#5237f9]/50 transition-all duration-300">
                {/* Project Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Current Internship"
                        ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                        : "bg-[#5237f9]/20 text-[#5237f9] border border-[#5237f9]/30"
                    }`}
                  >
                    {project.status}
                  </span>
                  {project.isMainProject && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg group/image">
                  <div className="aspect-[4/3] w-full max-h-64">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover/image:scale-105"
                      onError={() => {
                        // Fallback handled by CSS
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5237f9]/20 to-[#5237f9]/5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-[#5237f9]/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#5237f9]">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm">Project Preview</p>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#5237f9] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-white/90 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-white/60 flex items-center"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 text-[#5237f9]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-white/90 mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#5237f9] text-white rounded-lg hover:bg-[#6b46f9] transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white rounded-lg hover:border-[#5237f9]/50 hover:text-[#5237f9] transition-colors text-sm font-medium"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "visible"}
          className="text-center mt-16"
        >
          <div className="bg-[#141414] border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to work on new projects and collaborate
              with amazing people. Let&apos;s discuss how we can bring your
              ideas to life.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#5237f9] text-white rounded-lg hover:bg-[#6b46f9] transition-colors font-medium"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

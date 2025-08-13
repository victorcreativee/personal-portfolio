import { motion, rgba } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> Hello, I'm</span>
          </motion.div>

          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            VictorCreativee
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            {" "}
            Creative developer & Designer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            I am a creative and detail-oriented software developer with strong
            experience in the creative industry, building user-friendly and
            visually engaging applications that make an impact.
          </motion.p>
          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com" target="_blank">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a href="https://linkedin.com" target="_blank">
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a href="https://x.com" target="_blank">
              <i className="fab fa-twitter"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: "50px",
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "VictorCreativee",
  origin: "Building bridges between knowledge and opportunity",
  role: "Founder & Fullstack Developer",
  project: {
    name: "Gummi",
    description:
      "A global platform for education and collaboration, 
      connecting learners with experts through workspaces, 
      communities, and hands-on learning.",
    mission:
      "Empowering tech enthusiasts worldwide with mentorship, 
      collaboration, showcasing, and earning opportunities in 
      one accessible space.",
    coreFeatures: [
      "Personalized mentorship",
      "Interactive workspaces",
      "Community-driven collaboration",
      "Skill and project showcasing",
      "Earning through expertise",
      "Investor hub for real projects",
    ],
  },
  stack: {
    languages: ["JavaScript", "TypeScript", "SQL", "Java"],
    frameworks: ["React", "Next.js", "TailwindCSS", "Firebase"],
  },
  availability: "Available while building Gummi",
};
`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
          >
            <div className="card-content">
              <span className="card-icon">💻</span>
              <span className="card-text">
                Currently building Gummi something awesome!.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

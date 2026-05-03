import { motion } from 'motion/react';
import { Terminal, Code, Settings, Cloud, Database, Mail, User, Key, ArrowUpRight, Github, Linkedin, ExternalLink } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-white/10 shadow-xl shadow-primary/5">
      <div className="flex justify-between items-center h-20 max-w-[1200px] mx-auto px-8">
        <div className="text-xl font-black tracking-tighter text-white">ALEX.TECH</div>
        <div className="hidden md:flex items-center space-x-8 font-medium text-sm tracking-wide">
          <a href="#projects" className="text-primary font-bold border-b-2 border-primary pb-1">Projects</a>
          <a href="#skills" className="text-on-surface-variant hover:text-white transition-all duration-300">Skills</a>
          <a href="#timeline" className="text-on-surface-variant hover:text-white transition-all duration-300">Timeline</a>
          <a href="#blog" className="text-on-surface-variant hover:text-white transition-all duration-300">Blog</a>
          <a href="#contact" className="text-on-surface-variant hover:text-white transition-all duration-300">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <Terminal className="w-5 h-5 text-primary" />
          <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-bold hover:brightness-110 transition-all cursor-pointer">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-[819px] flex flex-col justify-center items-center text-center py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[0.875rem] font-medium text-primary uppercase tracking-[0.3em] mb-4"
      >
        Engineering as Art
      </motion.p>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-[4.5rem] font-bold mb-6 leading-[1.1] tracking-[-0.04em] font-display"
      >
        Architecting <span className="text-primary text-glow">Scalable</span><br />Systems in Java
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-[1.125rem] text-on-surface-variant max-w-2xl mb-10 leading-[1.7]"
      >
        Hi, I'm Alex. A Java Backend Developer specialized in building high-performance distributed systems, enterprise-grade microservices, and robust cloud architectures.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <a 
          href="#projects"
          id="cta-view-projects" 
          className="bg-primary-container text-on-primary-container px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary-container/20 hover:scale-105 transition-transform cursor-pointer inline-block"
        >
          View Projects
        </a>
        <a 
          href="#contact"
          id="cta-contact" 
          className="border border-outline-variant hover:bg-white/5 px-10 py-4 rounded-xl font-bold text-lg transition-all cursor-pointer inline-block"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-20 grid md:grid-cols-2 gap-16 items-center" id="about">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative group"
      >
        <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary opacity-10 blur-2xl rounded-3xl group-hover:opacity-20 transition-opacity"></div>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWft88d22cCzXfupWII7ri0qnrJm2Bnzb5G0DcOYgxUP7RMA0k-E4SCDw7QYLqYf1FkHeN0Kj7IBEGdSaVmlBon_g2j7rk4oQwdUtqwMVvlwu4zyYwkeY-UcG1oTuH-7SyLAp9wpN2jsHo-ueFZZuEGap9dTN7P0AeSfC0PiCc6piODNz1nVG4jPCfoaOe2UHSPlR3idOKwoI9nFvSBhdrzML7v3bcy8W6oFeKo33Q2kZnHG-1fwk8hWDAYSyWK0Txe3GOffKFGnI" 
          alt="Technical workspace" 
          className="relative rounded-3xl object-cover aspect-video shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[2.25rem] font-bold mb-6 leading-[1.3] tracking-[-0.02em]">Mastering Complexity</h2>
        <p className="text-[1rem] leading-[1.6] text-on-surface-variant mb-6">
          With over 6 years of experience in the JVM ecosystem, I bridge the gap between backend architectural complexity and high-end execution. I specialize in high-concurrency environments where performance isn't just a metric, but a requirement.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 border-l-2 border-primary/30">
            <span className="block text-2xl font-bold text-primary">99.9%</span>
            <span className="text-xs uppercase tracking-widest text-outline">Uptime Target</span>
          </div>
          <div className="p-4 border-l-2 border-primary/30">
            <span className="block text-2xl font-bold text-primary">50ms</span>
            <span className="text-xs uppercase tracking-widest text-outline">P99 Latency</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    { title: "Languages", icon: <Code className="w-8 h-8"/>, description: "Java 17/21 (LTS), Kotlin, SQL, Bash scripting for automation." },
    { title: "Frameworks", icon: <Settings className="w-8 h-8"/>, description: "Spring Boot 3, Micronaut, Hibernate, WebFlux (Reactive Programming)." },
    { title: "Cloud & DevOps", icon: <Cloud className="w-8 h-8"/>, description: "AWS (EKS, RDS, S3), Kubernetes, Docker, Terraform, CI/CD Pipelines." },
    { title: "Data & Messaging", icon: <Database className="w-8 h-8"/>, description: "PostgreSQL, Redis, Apache Kafka, RabbitMQ, Elasticsearch." }
  ];

  return (
    <section className="py-20" id="skills">
      <div className="text-center mb-16">
        <h2 className="text-[2.25rem] font-bold mb-4">Technical Arsenal</h2>
        <p className="text-on-surface-variant">Forged in enterprise environments, optimized for scale.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((skill, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-8 rounded-2xl flex flex-col items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              {skill.icon}
            </div>
            <h3 className="text-[1.5rem] font-medium">{skill.title}</h3>
            <p className="text-sm text-on-surface-variant">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section className="py-20" id="projects">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-[2.25rem] font-bold mb-4">Featured Engineering</h2>
          <p className="text-on-surface-variant">Selected deep-dives into backend architecture.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-0 rounded-3xl overflow-hidden md:col-span-2 group"
        >
          <div className="grid md:grid-cols-5 h-full">
            <div className="md:col-span-3 p-10 flex flex-col justify-center">
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-bold text-primary">DISTRIBUTED</span>
                <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-bold text-primary">SCALABILITY</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Microservice Orchestrator</h3>
              <p className="text-on-surface-variant mb-8 font-body-md text-[1rem]">
                A bespoke orchestration layer built to manage over 200 ephemeral services, reducing cold start times by 40% using custom JVM profiling and GraalVM native images.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Spring Boot', 'gRPC', 'Redis', 'Docker'].map(t => (
                  <span key={t} className="px-3 py-1 bg-slate-900/50 rounded-lg text-xs font-medium text-slate-300 border border-white/5">{t}</span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 relative min-h-[300px] overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADVNr2pgXFLGKXuQ_DkCevrNccp4XVhNz9Lk2qwcUvQXpTllJ9MR7vfR6yG3NIRFu-WCo1M3TnydYwPVLR6epFsAwbVDO8UKd6uY0672szEn4c3lM-AAzAinz8mvz9v3ePztJUN5IGLRxub7q5fi23AbrBHzGyvSFXZJpFuwH4H0QCfdFEbS7mJ-bVKfuJJX47z4p_9SYNGpg4LXY51OJXnY20HDh42KGTTN026-uQ7hCtCuZtD_O80G8f1a5kzuECYADQwZa6fSc" 
                alt="Architecture Nodes" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-10 rounded-3xl flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Code className="w-6 h-6"/>
            </div>
            <h3 className="text-2xl font-bold mb-3">Real-time Analytics Engine</h3>
            <p className="text-on-surface-variant mb-6 font-body-md text-[1rem]">
              Processing 1M+ events per second using Kafka Streams and custom state store optimization. Built for a fintech startup to detect fraud in milliseconds.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Apache Kafka', 'Java 21', 'PostgreSQL'].map(t => (
              <span key={t} className="px-3 py-1 bg-slate-900/50 rounded-lg text-xs font-medium text-slate-300 border border-white/5">{t}</span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-10 rounded-3xl flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Settings className="w-6 h-6"/>
            </div>
            <h3 className="text-2xl font-bold mb-3">Cloud Banking API</h3>
            <p className="text-on-surface-variant mb-6 font-body-md text-[1rem]">
              PCI-DSS compliant transactional API core. Implemented using Event Sourcing and CQRS patterns for absolute auditability and high-speed consistency.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Spring Security', 'AWS Lambda', 'DynamoDB'].map(t => (
              <span key={t} className="px-3 py-1 bg-slate-900/50 rounded-lg text-xs font-medium text-slate-300 border border-white/5">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Timeline = () => {
  const experiences = [
    { year: "2021 — PRESENT", role: "Senior Backend Architect", company: "TechStack Corp", points: ["Migrated monolithic architecture to microservices improving scalability by 40%.", "Implemented gRPC for high-performance service-to-service communication.", "Optimized JVM heap settings reducing GC pauses by 65%."] },
    { year: "2018 — 2021", role: "Java Developer", company: "Financial Systems Ltd", points: ["Designed core banking logic with strict transactional integrity (ACID).", "Integrated third-party payment gateways using Spring Integration.", "Automated deployment processes reducing release time from days to hours."] },
    { year: "2016 — 2018", role: "Junior Software Engineer", company: "DataFlow Apps", points: ["Maintained Spring-based internal tools and optimized database schemas.", "Developed unit and integration tests achieving 85% code coverage.", "Contributed to the development of a real-time reporting dashboard."] }
  ];

  return (
    <section className="py-20" id="timeline">
      <h2 className="text-[2.25rem] font-bold mb-16 text-center">Career Trajectory</h2>
      <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] timeline-gradient -translate-x-1/2"></div>
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative mb-20 md:flex items-center justify-between w-full ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
          >
            <div className="hidden md:block w-[45%]"></div>
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(192,193,255,0.6)] z-10"></div>
            <div className="md:w-[45%] glass-card p-6 rounded-2xl">
              <span className="text-primary font-bold text-sm tracking-widest block mb-2">{exp.year}</span>
              <h4 className="text-xl font-bold">{exp.role}</h4>
              <p className="text-secondary text-sm mb-4">{exp.company}</p>
              <ul className="text-on-surface-variant text-sm list-disc ml-4 space-y-2">
                {exp.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Blog = () => {
  const posts = [
    { category: "Architecture", time: "8 min read", title: "Optimizing JVM Performance for High-Throughput Systems", desc: "An exploration of ZGC, memory management, and identifying bottlenecks in high-concurrency environments.", date: "Oct 12, 2023" },
    { category: "Messaging", time: "12 min read", title: "Event-Driven Microservices with Kafka and Spring Cloud", desc: "Deep dive into event sourcing patterns and reliable message delivery in distributed architectures.", date: "Sep 28, 2023" },
    { category: "Future Java", time: "10 min read", title: "The Future of Virtual Threads in Project Loom", desc: "How lightweight concurrency will redefine how we write synchronous-looking yet highly scalable Java code.", date: "Aug 15, 2023" }
  ];

  return (
    <section className="py-20" id="blog">
      <div className="text-center mb-16">
        <h2 className="text-[2.25rem] font-bold mb-4">Technical Insights</h2>
        <p className="text-on-surface-variant">Deep dives into JVM, distributed systems, and modern engineering.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article 
            key={index}
            id={`blog-post-${index}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">{post.category}</span>
              <span className="text-on-surface-variant text-xs">{post.time}</span>
            </div>
            <h3 className="text-xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">{post.title}</h3>
            <p className="text-on-surface-variant text-sm mb-8 flex-grow">{post.desc}</p>
            <div className="pt-6 border-t border-white/5 text-xs text-outline">{post.date}</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-10 md:p-16 rounded-[2rem] grid lg:grid-cols-2 gap-16 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] -z-10"></div>
        <div>
          <h2 className="text-[2.25rem] font-bold mb-6">Let's Build Something Robust</h2>
          <p className="text-on-surface-variant mb-10">
            I am currently open to new opportunities or technical consultation projects. If you're looking for an engineer who values clean code and architectural integrity, reach out.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">hello@arch.dev</span>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center hover:bg-primary/20 transition-colors border border-white/5 cursor-pointer">
                <Github className="w-6 h-6"/>
              </button>
              <button className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center hover:bg-primary/20 transition-colors border border-white/5 cursor-pointer">
                <Linkedin className="w-6 h-6"/>
              </button>
              <button className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center hover:bg-primary/20 transition-colors border border-white/5 cursor-pointer">
                <Key className="w-6 h-6"/>
              </button>
            </div>
          </div>
        </div>
        <form id="contact-form" className="space-y-6" onSubmit={e => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name-input" className="text-xs uppercase tracking-widest text-outline">Name</label>
              <input id="name-input" type="text" className="w-full bg-surface-container border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary/50 transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email-input" className="text-xs uppercase tracking-widest text-outline">Email</label>
              <input id="email-input" type="email" className="w-full bg-surface-container border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message-input" className="text-xs uppercase tracking-widest text-outline">Message</label>
            <textarea id="message-input" className="w-full bg-surface-container border border-white/10 rounded-lg p-3 h-32 focus:outline-none focus:border-primary/50 transition-colors" placeholder="Your message here..."></textarea>
          </div>
          <button id="submit-contact" className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest w-full py-16 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-sm font-bold text-white">ALEX.TECH</div>
        <div className="text-xs tracking-widest uppercase text-outline">© 2024 Engineered by Art</div>
        <div className="flex gap-8 text-xs tracking-widest uppercase">
          <a href="#" className="text-outline hover:text-white transition-colors duration-200">GitHub</a>
          <a href="#" className="text-outline hover:text-white transition-colors duration-200">LinkedIn</a>
          <a href="#" className="text-outline hover:text-white transition-colors duration-200">Source</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-[1200px] mx-auto px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

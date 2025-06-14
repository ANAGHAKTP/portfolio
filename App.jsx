import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Award, 
  Mail, 
  Github, 
  Linkedin, 
  Download,
  ExternalLink,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Progress } from './components/ui/progress';
import './App.css';

import heroBackground from './assets/portfolio_hero_background.png';
import aboutIllustration from './assets/portfolio_about_illustration.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'C Language', level: 80 },
    { name: 'Flutter', level: 75 },
    { name: 'Machine Learning', level: 88 },
    { name: 'Django/Flask', level: 82 },
    { name: 'Data Analysis', level: 85 },
    { name: 'Git/GitHub', level: 90 }
  ];

  const projects = [
    {
      title: 'Feature Extraction System',
      description: 'Extract and visualize features such as boundaries and patterns from aerial or satellite images using advanced computer vision techniques.',
      tech: ['Python', 'OpenCV', 'Jupyter Notebook'],
      link: '#',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Intrusion Detection System',
      description: 'ML-powered security system built with Flask web interface and scikit-learn models for real-time threat detection.',
      tech: ['Python', 'Flask', 'Scikit-learn', 'HTML/CSS'],
      link: '#',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Predictive analytics model to identify customers likely to leave telecommunications services using machine learning.',
      tech: ['Python', 'Pandas', 'Jupyter Notebook'],
      link: '#',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Stock Price Predictor',
      description: 'Financial forecasting tool that analyzes historical data to predict stock market trends and investment opportunities.',
      tech: ['Python', 'NumPy', 'Matplotlib'],
      link: '#',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Image Enhancement Toolkit',
      description: 'Computer vision application that transforms regular images into cartoon-style artwork using OpenCV and Python.',
      tech: ['Python', 'OpenCV', 'Jupyter Notebook'],
      link: '#',
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  const experiences = [
    {
      company: 'Codec Technologies',
      role: 'AI Intern',
      period: 'April 2025 - May 2025',
      description: 'Working on cutting-edge AI solutions and machine learning implementations.'
    },
    {
      company: 'Juniper Networks',
      role: 'Networking Cloud Intern',
      period: 'January 2025 - March 2025',
      description: 'Developing cloud networking solutions and infrastructure optimization.'
    },
    {
      company: 'Google for Developers',
      role: 'Android Developer Intern',
      period: 'October 2024 - December 2024',
      description: 'Built mobile applications using Flutter and Android development frameworks.'
    },
    {
      company: 'Microchip',
      role: 'Embedded System Developer Intern',
      period: 'July 2024 - September 2024',
      description: 'Developed embedded systems and IoT solutions for industrial applications.'
    },
    {
      company: 'AWS Academy',
      role: 'Data Engineer Intern',
      period: 'April 2024 - June 2024',
      description: 'Worked with cloud data pipelines and big data processing on AWS platform.'
    }
  ];

  const certifications = [
    'Lead Generation Messenger ChatBot Using Chatfuel - Coursera',
    'TCS iON Career Edge - Young Professional - TCS',
    'Google Cloud Career Launchpad Cloud Learning Services',
    'Artificial Intelligence - Pearson, Certiport',
    'Generative models for developers - Infosys Springboard',
    'Introduction to Networking for Cyber Professionals - Zscaler Academy'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-gradient"
            >
              Anagha K T P
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-[#00d4ff] ${
                    activeSection === item.toLowerCase() ? 'text-[#00d4ff]' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-background border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-[#00d4ff] w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 hero-background"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-gradient">Anagha K T P</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 typing-animation"
          >
            AI/ML Student & Tech Innovator
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto"
          >
            Passionate about bridging AI/ML theory with practical applications. 
            Experienced in multiple tech domains with a focus on innovation and continuous learning.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-[#00d4ff] hover:bg-[#00b8e6] text-black font-semibold glow-effect"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate AI/ML student with hands-on experience across multiple technology domains
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={aboutIllustration} 
                alt="About Anagha" 
                className="w-full max-w-md mx-auto floating-animation"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Hello! I'm Anagha K T P</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a final-year AI/ML student at Srinivas Institute of Technology with a passion for 
                turning complex problems into innovative solutions. With a strong academic foundation 
                (8.0 CGPA) and hands-on experience through 7 virtual internships with industry leaders 
                like Google, AWS, and Microchip, I bring both theoretical knowledge and practical expertise.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey spans multiple domains - from machine learning and data analysis to mobile 
                app development and embedded systems. I'm particularly passionate about open-source 
                contributions and have developed several projects that bridge the gap between AI/ML 
                theory and real-world applications.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-[#00d4ff]">7+</div>
                  <div className="text-sm text-muted-foreground">Internships</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-[#ff6b35]">5+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-[#00d4ff]">8.0</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-[#ff6b35]">6+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit spanning programming languages, frameworks, and cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#00d4ff]/10 rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-[#00d4ff]" />
              </div>
              <h3 className="font-semibold mb-2">Programming</h3>
              <p className="text-sm text-muted-foreground">Python, Java, C, Flutter</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#ff6b35]/10 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-[#ff6b35]" />
              </div>
              <h3 className="font-semibold mb-2">AI/ML</h3>
              <p className="text-sm text-muted-foreground">NumPy, Pandas, Scikit-learn</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#00d4ff]/10 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-[#00d4ff]" />
              </div>
              <h3 className="font-semibold mb-2">Web Frameworks</h3>
              <p className="text-sm text-muted-foreground">Django, Flask, HTML/CSS</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#ff6b35]/10 rounded-full flex items-center justify-center">
                <Database className="w-8 h-8 text-[#ff6b35]" />
              </div>
              <h3 className="font-semibold mb-2">Tools & Platforms</h3>
              <p className="text-sm text-muted-foreground">Git, VS Code, Jupyter, Power BI</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of innovative solutions spanning AI/ML, web development, and data analysis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full card-hover cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#00d4ff]/10 rounded-lg flex items-center justify-center text-[#00d4ff]">
                        {project.icon}
                      </div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional journey through leading tech companies and innovative projects
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                        <CardDescription className="text-lg font-medium text-[#00d4ff]">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#ff6b35]" />
                  Certifications & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <div className="w-2 h-2 bg-[#00d4ff] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Let's Connect</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate on innovative projects or discuss opportunities in AI/ML and tech
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                      <p className="text-muted-foreground mb-6">
                        I'm always open to discussing new opportunities, 
                        collaborating on exciting projects, or simply connecting 
                        with fellow tech enthusiasts.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <a 
                        href="mailto:anaghaktp@gmail.com"
                        className="flex items-center gap-3 text-muted-foreground hover:text-[#00d4ff] transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                        anaghaktp@gmail.com
                      </a>
                      <a 
                        href="#"
                        className="flex items-center gap-3 text-muted-foreground hover:text-[#00d4ff] transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        LinkedIn Profile
                      </a>
                      <a 
                        href="#"
                        className="flex items-center gap-3 text-muted-foreground hover:text-[#00d4ff] transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        GitHub Profile
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                  >
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">Location</h4>
                      <p className="text-sm text-muted-foreground">
                        Payyanur, Kerala, India
                      </p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">Availability</h4>
                      <p className="text-sm text-muted-foreground">
                        Open to remote opportunities and collaborations
                      </p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">Interests</h4>
                      <p className="text-sm text-muted-foreground">
                        AI/ML, Data Science, Mobile Development, Open Source
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-8 pt-8 border-t text-center"
                >
                  <Button 
                    size="lg" 
                    className="bg-[#00d4ff] hover:bg-[#00b8e6] text-black font-semibold glow-effect"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Anagha K T P. Built with React and passion for innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


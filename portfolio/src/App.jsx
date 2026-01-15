import React, { useState, useEffect } from "react";
import {
  Github,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Moon,
  Sun,
  Download,
  Award,
  Briefcase,
  Shield,
  Network,
  Lock,
  Terminal,
  Search,
  Bug,
  ExternalLink,
} from "lucide-react";
import peekabook from "./assets/peekabook.png";
import sentinel from "./assets/sentinel.png";
import netflix from "./assets/netflix.png";
import spontyfind from "./assets/spontyfind.png";
import scriptify from "./assets/scriptify.png";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "certifications", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8;
        if (isInView) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = {
    Cybersecurity: [
      "Burp Suite",
      "Wireshark",
      "Kali Linux",
      "OWASP",
      "Ethical Hacking",
      "Penetration Testing",
      "Bug Detection",
      "Security Analysis",
    ],
    Networking: [
      "TCP/IP Protocols",
      "Routing & Switching",
      "Network Security",
      "Cisco CCNA",
      "Network Configuration",
      "Network Troubleshooting",
    ],
    Development: ["Python Scripting", "Automation", "React.js", "Node.js", "MongoDB", "REST APIs"],
    "Tools & Technologies": ["Git/GitHub", "Bash/Shell/PowerShell", "Web Scraping", "Linux", "Windows", "Scapy"],
  };

  const projects = [
    {
      name: "Packet Sentinel",
      description:
        "A proof-of-concept network security tool demonstrating packet-rate based blocking using Scapy. Monitors IP traffic and computes per-source packet rates to detect potential threats. Built for educational and security research purposes.",
      tech: ["Python", "Scapy", "Network Security", "Packet Analysis"],
      github: "https://github.com/silv-error/packet-sentinel",
      icon: Network,
      category: "Network Security",
      image: sentinel,
    },
    {
      name: "Akai",
      description:
        "A security research tool demonstrating remote access capabilities and command execution through Discord bot integration. Developed to understand attack vectors and defensive measures. For educational and ethical hacking purposes only.",
      tech: ["Python", "Discord Bot", "Security Research", "Remote Access"],
      github: "https://github.com/silv-error/Akai",
      icon: Lock,
      category: "Security Research",
      image: null,
    },
    {
      name: "Peekabook",
      description:
        "An OSINT (Open Source Intelligence) tool that extracts real Facebook names from shared reel or post links. Demonstrates information gathering techniques for security assessments and digital investigations.",
      tech: ["Python", "Web Scraping", "OSINT", "Information Gathering"],
      github: "https://github.com/silv-error/peekabook",
      icon: Search,
      category: "OSINT",
      image: peekabook,
    },
  ];

  const websites = [
    {
      name: "Netflix Clone",
      description:
        "A responsive web application that replicates the core UI and user experience of Netflix. Built using modern web technologies, it features dynamic movie listings, categorized content rows, and a sleek, mobile-friendly interface designed to closely mirror the original platform.",
      tech: ["Nodejs", "Reactjs", "MongoDB", "Tailwindcss"],
      github: "https://github.com/silv-error/movie-trailer",
      icon: Network,
      category: "Website",
      image: netflix,
    },
    {
      name: "Hidden Gems",
      description:
        "Hidden Gems is a food discovery website that helps users find underrated local food spots you won’t usually see online. It highlights hidden food businesses and recommends them so you never miss a great place to eat.",
      tech: ["Python", "Discord Bot", "Security Research", "Remote Access"],
      github: "https://github.com/silv-error/hidden-gems",
      icon: Lock,
      category: "Security Research",
      image: spontyfind,
    },
    {
      name: "Scriptify",
      description:
        "A PDF to MP3 website that converts text-based PDFs into audio using text-to-speech technology, making documents accessible and easy to consume on the go.",
      tech: ["Python", "Web Scraping", "OSINT", "Information Gathering"],
      github: "https://github.com/silv-error/scriptify",
      icon: Search,
      category: "OSINT",
      image: scriptify,
    },
  ];

  const certifications = [
    {
      title: "Youth Innovators Reimagining Public Service",
      issuer: "NextGenPH",
      date: "Nov 2025",
      description:
        "Developed a mobile application with AI-integrated recommendation technology for tourism security and user safety",
      icon: Award,
      image: "/certifications/nextgenph.jpg",
    },
    {
      title: "AI Hackathon - Cyber Defenders",
      issuer: "HexcoreLabsPH",
      date: "Oct 2025",
      description:
        "Demonstrated cybersecurity skills and participated in simulated challenges at Asian Institute of Management",
      icon: Shield,
      image: "/certifications/hexcorelabs.jpg",
    },
    {
      title: "CCNAv7: Introduction to Networks",
      issuer: "CISCO Network Academy",
      date: "Mar 2024",
      description:
        "Completed comprehensive Cisco networking program covering routing, switching, and network protocols",
      icon: Network,
      image: "/certifications/cisco.jpg",
    },
    {
      title: "Python Certificate",
      issuer: "HackerRank",
      date: "Oct 2025",
      description: "Demonstrated proficiency in Python programming for security scripting and automation",
      icon: Terminal,
      image: "/certifications/hackerrank-python.jpg",
    },
    {
      title: "REST API Certificate",
      issuer: "HackerRank",
      date: "Oct 2025",
      description: "Validated skills in API security and web application architecture",
      icon: Bug,
      image: "/certifications/hackerrank-api.jpg",
    },
  ];

  const expertise = [
    {
      icon: Shield,
      title: "Penetration Testing",
      description:
        "Experience with Burp Suite, OWASP methodologies, and vulnerability assessment techniques for web applications and networks.",
    },
    {
      icon: Network,
      title: "Network Security",
      description:
        "Expert in Cisco technologies, network configuration, troubleshooting, routing & switching, and implementing security protocols.",
    },
    {
      icon: Terminal,
      title: "Security Automation",
      description:
        "Building security tools and scripts using Python, automating security assessments, and developing custom monitoring solutions.",
    },
    {
      icon: Bug,
      title: "CTF & Security Research",
      description:
        "Active participation in Capture The Flag competitions, security challenges, and research on emerging threats and vulnerabilities.",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(248, 113, 113, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(248, 113, 113, 0.5);
          }
        }

        .animate-on-scroll {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .animate-on-scroll:not(.visible) {
          opacity: 0;
          transform: translateY(30px);
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-badge {
          animation: float 3s ease-in-out infinite;
        }

        .skill-tag {
          transition: all 0.2s ease;
        }

        .skill-tag:hover {
          transform: translateY(-2px);
        }

        .cert-badge:hover {
          transform: translateY(-5px);
        }

        .cert-badge:hover .cert-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          darkMode ? "bg-gray-900/95" : "bg-white/95"
        } backdrop-blur-sm border-b ${darkMode ? "border-gray-800" : "border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl">Joe Francis Silverio</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "experience", "certifications", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? darkMode
                        ? "text-red-400"
                        : "text-red-600"
                      : darkMode
                      ? "text-gray-300 hover:text-red-400"
                      : "text-gray-600 hover:text-red-600"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div
              className={`inline-block p-4 rounded-full mb-6 hero-badge ${
                darkMode ? "bg-red-400/10" : "bg-red-600/10"
              }`}
            >
              <Shield className={`w-16 h-16 ${darkMode ? "text-red-400" : "text-red-600"}`} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ animation: "fadeInUp 0.8s ease" }}>
              Joe Francis Silverio
            </h1>
            <p
              className={`text-2xl md:text-3xl mb-6 ${darkMode ? "text-red-400" : "text-red-600"}`}
              style={{ animation: "fadeInUp 0.8s ease 0.2s backwards" }}
            >
              Cybersecurity Intern
            </p>
            <p
              className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              style={{ animation: "fadeInUp 0.8s ease 0.4s backwards" }}
            >
              Cybersecurity Intern specializing in penetration testing, network security, and security automation.
              Passionate about identifying vulnerabilities and building secure systems.
            </p>
            <div
              className="flex flex-wrap justify-center gap-4"
              style={{ animation: "fadeInUp 0.8s ease 0.6s backwards" }}
            >
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  darkMode ? "bg-red-400 text-gray-900 hover:bg-red-500" : "bg-red-600 text-white hover:bg-red-700"
                }`}
              >
                Get In Touch
              </button>
              <a
                href="/Joe_Francis_Silverio_CV.pdf"
                download
                className={`px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 transform hover:scale-105 ${
                  darkMode
                    ? "border-2 border-red-400 text-red-400 hover:bg-red-400/10"
                    : "border-2 border-red-600 text-red-600 hover:bg-red-600/10"
                }`}
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className={`text-lg mb-6 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                I'm a 4th-year IT student and Cybersecurity Intern based in San Jose del Monte City, Philippines. My
                journey into cybersecurity began in my 2nd year with Cisco networking studies, and I've been expanding
                my expertise in penetration testing, security research, and network defense ever since.
              </p>
              <p className={`text-lg mb-6 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                I actively participate in CTF competitions, hackathons, and security challenges to sharpen my skills. My
                development background in full-stack technologies gives me a unique perspective on building secure
                applications and understanding attack vectors from both offensive and defensive standpoints.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className={`w-5 h-5 ${darkMode ? "text-red-400" : "text-red-600"}`} />
                  <span>San Jose del Monte City, Philippines</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className={`w-5 h-5 ${darkMode ? "text-red-400" : "text-red-600"}`} />
                  <span>Cybersecurity Intern</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className={`w-5 h-5 ${darkMode ? "text-red-400" : "text-red-600"}`} />
                  <span>4th Year IT Student | CCNA Certified</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div
                className={`p-6 rounded-lg ${
                  darkMode ? "bg-gray-900/50 border border-gray-800" : "bg-gray-50 border border-gray-200"
                }`}
              >
                <Lock className={`w-8 h-8 mb-3 ${darkMode ? "text-red-400" : "text-red-600"}`} />
                <h3 className="text-xl font-semibold mb-2">Security Focus</h3>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  Specializing in penetration testing, vulnerability assessment, and security tool development.
                  Experienced with Burp Suite, Wireshark, and Kali Linux.
                </p>
              </div>
              <div
                className={`p-6 rounded-lg ${
                  darkMode ? "bg-gray-900/50 border border-gray-800" : "bg-gray-50 border border-gray-200"
                }`}
              >
                <Network className={`w-8 h-8 mb-3 ${darkMode ? "text-red-400" : "text-red-600"}`} />
                <h3 className="text-xl font-semibold mb-2">Network Expertise</h3>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  Deep knowledge of TCP/IP, routing & switching, and network security protocols. CCNA certified with
                  hands-on experience in network configuration and troubleshooting.
                </p>
              </div>
            </div>
          </div>

          {/* Expertise Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg text-center ${
                    darkMode ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-200"
                  } hover:transform hover:scale-105 transition-all duration-300 cursor-default animate-on-scroll`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Icon className={`w-12 h-12 mx-auto mb-4 ${darkMode ? "text-red-400" : "text-red-600"}`} />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Arsenal</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], catIndex) => (
              <div
                key={category}
                className={`p-6 rounded-lg ${
                  darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
                }`}
                style={{ transitionDelay: `${catIndex * 100}ms` }}
              >
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-red-400" : "text-red-600"}`}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm skill-tag ${
                        darkMode
                          ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                      style={{
                        animation: `fadeInUp 0.5s ease ${index * 50 + catIndex * 200}ms backwards`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Scripts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.name}
                  className={`rounded-lg overflow-hidden group ${
                    darkMode ? "bg-gray-900 border border-gray-800" : "bg-gray-50 border border-gray-200"
                  } hover:transform hover:scale-105 transition-all duration-300 animate-on-scroll`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className={`absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        darkMode
                          ? "bg-gradient-to-br from-gray-800 to-gray-900"
                          : "bg-gradient-to-br from-gray-200 to-gray-300"
                      }`}
                    >
                      <div className="relative">
                        {project.image ? (
                          <img src={project.image} />
                        ) : (
                          <div className="flex flex-col items-center">
                            <Icon className={`w-16 h-16 ${darkMode ? "text-red-400" : "text-red-600"}`} />
                            <span className="mt-2 block font-semibold text-lg">{project.category}</span>
                          </div>
                        )}
                        <div
                          className={`absolute -inset-2 rounded-full opacity-20 group-hover:opacity-40 transition-opacity ${
                            darkMode ? "bg-red-400" : "bg-red-600"
                          } blur-xl`}
                        ></div>
                      </div>
                    </div>
                    <div
                      className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-semibold ${
                        darkMode ? "bg-red-400/20 text-red-400" : "bg-red-600/20 text-red-600"
                      } backdrop-blur-sm`}
                    >
                      Scripts
                    </div>
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        darkMode
                          ? "bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"
                          : "bg-gradient-to-t from-gray-100/90 via-gray-100/50 to-transparent"
                      }`}
                    >
                      <div className="absolute bottom-4 left-4 right-4">
                        <a href={project.github} target="_blank" className="flex items-center gap-2 text-sm">
                          <ExternalLink className={`w-4 h-4 ${darkMode ? "text-red-400" : "text-red-600"}`} />
                          <span className={darkMode ? "text-gray-300" : "text-gray-700"}>View on GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    <p className={`mb-4 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 rounded text-xs ${
                            darkMode ? "bg-red-400/20 text-red-400" : "bg-red-600/20 text-red-600"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <h2 className="text-4xl font-bold mb-12 mt-12 text-center">Website / Application</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {websites.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.name}
                  className={`rounded-lg overflow-hidden group ${
                    darkMode ? "bg-gray-900 border border-gray-800" : "bg-gray-50 border border-gray-200"
                  } hover:transform hover:scale-105 transition-all duration-300 animate-on-scroll`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className={`absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        darkMode
                          ? "bg-gradient-to-br from-gray-800 to-gray-900"
                          : "bg-gradient-to-br from-gray-200 to-gray-300"
                      }`}
                    >
                      <div className="relative">
                        {project.image ? (
                          <img src={project.image} />
                        ) : (
                          <div className="flex flex-col items-center">
                            <Icon className={`w-16 h-16 ${darkMode ? "text-red-400" : "text-red-600"}`} />
                            <span className="mt-2 block font-semibold text-lg">{project.category}</span>
                          </div>
                        )}
                        <div
                          className={`absolute -inset-2 rounded-full opacity-20 group-hover:opacity-40 transition-opacity ${
                            darkMode ? "bg-red-400" : "bg-red-600"
                          } blur-xl`}
                        ></div>
                      </div>
                    </div>
                    <div
                      className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-semibold ${
                        darkMode ? "bg-red-400/20 text-red-400" : "bg-red-600/20 text-red-600"
                      } backdrop-blur-sm`}
                    >
                      Scripts
                    </div>
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        darkMode
                          ? "bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"
                          : "bg-gradient-to-t from-gray-100/90 via-gray-100/50 to-transparent"
                      }`}
                    >
                      <div className="absolute bottom-4 left-4 right-4">
                        <a href={project.github} target="_blank" className="flex items-center gap-2 text-sm">
                          <ExternalLink className={`w-4 h-4 ${darkMode ? "text-red-400" : "text-red-600"}`} />
                          <span className={darkMode ? "text-gray-300" : "text-gray-700"}>View on GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    <p className={`mb-4 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 rounded text-xs ${
                            darkMode ? "bg-red-400/20 text-red-400" : "bg-red-600/20 text-red-600"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div
            className={`p-8 rounded-lg ${
              darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg ${darkMode ? "bg-red-400/10" : "bg-red-600/10"}`}>
                <Briefcase className={`w-6 h-6 ${darkMode ? "text-red-400" : "text-red-600"}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">Software Development Team Member</h3>
                <p className={`mb-2 ${darkMode ? "text-red-400" : "text-red-600"}`}>
                  FCPC/CSS Extra-curricular Software Development Team
                </p>
                <p className={`text-sm mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Nov 2024 - Present</p>
                <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                  Collaborate with developers to design, develop, and maintain secure software projects. Focus on
                  implementing security best practices, conducting code reviews for vulnerabilities, and ensuring
                  applications follow secure development lifecycle principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Certifications & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg cert-badge transition-all duration-300 ${
                    darkMode ? "bg-gray-900 border border-gray-800" : "bg-gray-50 border border-gray-200"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-4">
                    <div
                      className={`cert-glow relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden group ${
                        darkMode
                          ? "bg-gradient-to-br from-gray-800 to-gray-900"
                          : "bg-gradient-to-br from-gray-200 to-gray-300"
                      }`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon
                          className={`w-12 h-12 ${
                            darkMode ? "text-red-400" : "text-red-600"
                          } transition-transform group-hover:scale-110 group-hover:rotate-6`}
                        />
                      </div>
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 ${
                          darkMode ? "bg-red-400" : "bg-red-600"
                        } transition-all group-hover:h-2`}
                      ></div>
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity ${
                          darkMode ? "bg-red-400" : "bg-red-600"
                        }`}
                      ></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                      <p className={`text-sm mb-2 font-semibold ${darkMode ? "text-red-400" : "text-red-600"}`}>
                        {cert.issuer}
                      </p>
                      <p className={`text-sm mb-3 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{cert.date}</p>
                      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{cert.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className={`text-lg mb-12 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Open to cybersecurity internship opportunities, collaboration on security projects, and networking with
            security professionals.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:silv-error@gmail.com"
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
              } ${
                darkMode ? "hover:border-red-400" : "hover:border-red-600"
              } transition-all flex items-center gap-4 transform hover:scale-105`}
            >
              <Mail className={`w-8 h-8 ${darkMode ? "text-red-400" : "text-red-600"}`} />
              <div className="text-left">
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Email</p>
                <p className="font-semibold">silv-error@gmail.com</p>
              </div>
            </a>
            <a
              href="tel:+639945902095"
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
              } ${
                darkMode ? "hover:border-red-400" : "hover:border-red-600"
              } transition-all flex items-center gap-4 transform hover:scale-105`}
            >
              <Phone className={`w-8 h-8 ${darkMode ? "text-red-400" : "text-red-600"}`} />
              <div className="text-left">
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Phone</p>
                <p className="font-semibold">+63 994 590 2095</p>
              </div>
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/silv-error"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
                  : "bg-white hover:bg-gray-50 border border-gray-200"
              } transition-all transform hover:scale-110`}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/pewpewzxc/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
                  : "bg-white hover:bg-gray-50 border border-gray-200"
              } transition-all transform hover:scale-110`}
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${darkMode ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            © 2026 Joe Francis Silverio. Cybersecurity Portfolio | Built with React.js
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

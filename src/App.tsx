import { Menu, X, Calendar, MapPin, Users, Trophy, Phone, Mail, ExternalLink } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const themes = [
    { number: 2, title: "Zero Hunger & Sustainable Agriculture", icon: "🌾" },
    { number: 3, title: "Good Health & Well-Being Innovation", icon: "❤️" },
    { number: 4, title: "Quality Education & Lifelong Learning", icon: "📚" },
    { number: 6, title: "Clean Water & Sanitation", icon: "💧" },
    { number: 11, title: "Sustainable Cities & Communities", icon: "🏙️" },
    { number: 13, title: "Climate Action & Environmental Monitoring", icon: "🌍" }
  ];

  const facultyCoordinators = [
    { name: "Dr. P. Chinnasamy", designation: "Professor & Head", image: "/images/usericon.png" },
    { name: "Dr. Brintha", designation: "Associate Professor", image: "/images/usericon.png" }
  ];

  const studentCoordinators = [
    { name: "Thaha", role: "Student Coordinator", image: "/images/usericon.png" },
    { name: "Umesh", role: "Student Coordinator", image: "/images/usericon.png" },
    { name: "Prem", role: "Student Coordinator", image: "/images/usericon.png" }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-cyan-500/20 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/images/euphoria.png" alt="KARE Logo" className="h-12 w-12 object-contain" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  HACK ODYSSEY 3.0
                </h1>
                <p className="text-xs text-gray-400">24 Hour Hackathon</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <img src="/images/kareacm.png" alt="ACM Logo" className="h-10 w-10 object-contain" />
              <img src="/images/kare.png" alt="ACM-W Logo" className="h-10 w-10 object-contain" />
              <img src="/images/acmw.png" alt="Euphoria Logo" className="h-10 w-10 object-contain" />
            </div>

            <button
              className="md:hidden text-cyan-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden bg-gray-900 border-t border-cyan-500/20">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <a href="#home" className="py-2 hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="py-2 hover:text-cyan-400 transition-colors">About</a>
              <a href="#themes" className="py-2 hover:text-cyan-400 transition-colors">Themes</a>
              <a href="#rules" className="py-2 hover:text-cyan-400 transition-colors">Rules</a>
              <a href="#organizers" className="py-2 hover:text-cyan-400 transition-colors">Organizers</a>
              <a href="#contact" className="py-2 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto py-16">
            <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <span className="text-cyan-400 font-semibold">Kalasalingam Academy of Research and Education</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              HACK ODYSSEY 3.0
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
              24 Hour Hackathon Experience
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-gray-800/50 px-6 py-3 rounded-lg border border-cyan-500/20">
                <Calendar className="text-cyan-400" size={20} />
                <span>March 13-14, 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/50 px-6 py-3 rounded-lg border border-cyan-500/20">
                <MapPin className="text-cyan-400" size={20} />
                <span>Central Library, KARE</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/50 px-6 py-3 rounded-lg border border-cyan-500/20">
                <Trophy className="text-cyan-400" size={20} />
                <span>Prize Pool: ₹25,000</span>
              </div>
            </div>

            <p className="text-gray-400 mb-2">Organized by</p>
            <p className="text-sm text-gray-400 mb-1">KARE ACM Student Chapter (Chapter ID: 170084)</p>
            <p className="text-sm text-gray-400 mb-8">in collaboration with KARE ACM-W Student Chapter (Chapter ID: 180857)</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-y border-cyan-500/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join the Innovation Journey?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Register now and be part of an exciting 24-hour hackathon with amazing prizes and internship opportunities!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#register"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
              >
                Register Now
              </a>
              <a
                href="https://wa.me/917893340788"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <ExternalLink size={20} />
                WhatsApp Us
              </a>
            </div>
            <p className="mt-6 text-2xl font-bold text-cyan-400">Registration Fee: ₹300 per member</p>
          </div>
        </div>
      </section>

      {/* About Event */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Hack Odyssey 3.0
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-800/50 border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all">
                <Trophy className="mx-auto mb-4 text-cyan-400" size={48} />
                <h3 className="text-xl font-bold mb-2">Prize Pool</h3>
                <p className="text-3xl font-bold text-cyan-400">₹25,000</p>
                <p className="text-sm text-gray-400 mt-2">For Top Performing Teams</p>
              </div>

              <div className="bg-gray-800/50 border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all">
                <Users className="mx-auto mb-4 text-cyan-400" size={48} />
                <h3 className="text-xl font-bold mb-2">Inter College</h3>
                <p className="text-3xl font-bold text-cyan-400">Competition</p>
                <p className="text-sm text-gray-400 mt-2">All Departments Welcome</p>
              </div>

              <div className="bg-gray-800/50 border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all">
                <Calendar className="mx-auto mb-4 text-cyan-400" size={48} />
                <h3 className="text-xl font-bold mb-2">Duration</h3>
                <p className="text-3xl font-bold text-cyan-400">24 Hours</p>
                <p className="text-sm text-gray-400 mt-2">Non-stop Innovation</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Hack Odyssey 3.0 is a premier 24-hour hackathon organized by the School of Computing,
                Department of Computer Science and Engineering at Kalasalingam Academy of Research and Education.
                This inter-college competition brings together innovative minds to solve real-world problems
                aligned with the United Nations Sustainable Development Goals.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-cyan-400">Internship Opportunities</p>
                    <p className="text-sm text-gray-400">For top performers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-cyan-400">Networking</p>
                    <p className="text-sm text-gray-400">Connect with industry experts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-cyan-400">Learning</p>
                    <p className="text-sm text-gray-400">Hands-on experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-cyan-400">Innovation</p>
                    <p className="text-sm text-gray-400">Build impactful solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Chapters */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Our Student Chapters
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <img src="https://images.pexels.com/photos/17483873/pexels-photo-17483873.png?auto=compress&cs=tinysrgb&w=100" alt="ACM Logo" className="h-16 w-16 object-contain" />
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">KARE ACM</h3>
                  <p className="text-sm text-gray-400">Chapter ID: 170084</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                The KARE ACM Student Chapter is dedicated to advancing computing as a science and profession.
                We foster innovation, collaboration, and technical excellence among students through workshops,
                seminars, and competitive events.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <img src="https://images.pexels.com/photos/17483873/pexels-photo-17483873.png?auto=compress&cs=tinysrgb&w=100" alt="ACM-W Logo" className="h-16 w-16 object-contain" />
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">KARE ACM-W</h3>
                  <p className="text-sm text-gray-400">Chapter ID: 180857</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                The KARE ACM-W Student Chapter supports and celebrates women in computing. We provide mentorship,
                networking opportunities, and promote diversity in technology through various initiatives and events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section id="themes" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Hackathon Themes
          </h2>
          <p className="text-center text-gray-400 mb-12">Based on UN Sustainable Development Goals</p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{theme.icon}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-bold">
                    SDG {theme.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-100">{theme.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules and Rounds */}
      <section id="rules" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Rules & Competition Phases
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="mb-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Team Composition</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">4 to 6 Members per Team</p>
                    <p className="text-gray-400">Each team must consist of minimum 4 and maximum 6 members</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Open to All Departments</p>
                    <p className="text-gray-400">Students from all departments are welcome. Interdisciplinary collaboration is encouraged</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
                <div className="bg-cyan-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-cyan-400">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Phase 1: Idea Submission</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar size={18} className="text-cyan-400" />
                    <span className="font-semibold">Deadline: February 2026</span>
                  </div>
                  <p className="text-gray-400">
                    Teams must submit their innovative ideas for evaluation. Shortlisted teams will be
                    invited to prepare and submit a presentation (PPT) showcasing their concept.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
                <div className="bg-cyan-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-cyan-400">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Phase 2: 24-Hour Hackathon</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar size={18} className="text-cyan-400" />
                    <span className="font-semibold">March 13-14, 2026</span>
                  </div>
                  <p className="text-gray-400">
                    Shortlisted teams will participate in an intensive 24-hour offline hackathon to bring
                    their ideas to life with working prototypes and presentations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Important Notes</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span className="text-gray-300">Teams must prepare and submit a PPT as part of the competition requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span className="text-gray-300">Embrace collaboration and teamwork across departments to foster innovation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span className="text-gray-300">Top performers will receive internship opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Organizers */}
      <section id="organizers" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Team
          </h2>
          <p className="text-center text-gray-400 mb-16">Meet the people behind Hack Odyssey 3.0</p>

          {/* Faculty Coordinators */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-cyan-400">Faculty Coordinators</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {facultyCoordinators.map((faculty, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all hover:transform hover:scale-105"
                >
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-cyan-500/30"
                  />
                  <h4 className="text-xl font-bold text-gray-100 mb-1">{faculty.name}</h4>
                  <p className="text-cyan-400 text-sm">{faculty.designation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Student Co-ordinators */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 text-cyan-400">Student Co-ordinators</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {studentCoordinators.map((student, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all hover:transform hover:scale-105"
                >
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-cyan-500/30"
                  />
                  <h4 className="text-xl font-bold text-gray-100 mb-1">{student.name}</h4>
                  <p className="text-cyan-400 text-sm mb-3">{student.role}</p>
                  <a
                    href={`tel:${student.phone}`}
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Phone size={16} />
                    <span className="text-sm">{student.phone}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Contact Us
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-cyan-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <p className="font-semibold mb-1">Thaha (CSE)</p>
                  <a href="tel:7893340788" className="text-cyan-400 hover:text-cyan-300">7893340788</a>
                </div>

                <div className="text-center">
                  <div className="bg-cyan-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <p className="font-semibold mb-1">Umesh (CSE)</p>
                  <a href="tel:9573861418" className="text-cyan-400 hover:text-cyan-300">9573861418</a>
                </div>

                <div className="text-center">
                  <div className="bg-cyan-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <p className="font-semibold mb-1">Prem (CSE)</p>
                  <a href="tel:8885462451" className="text-cyan-400 hover:text-cyan-300">8885462451</a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-cyan-500/20 text-center">
                <p className="text-gray-400 mb-4">School of Computing, Department of CSE</p>
                <p className="text-gray-300 font-semibold">Kalasalingam Academy of Research and Education</p>
                <p className="text-gray-400 text-sm mt-2">Deemed to be University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-cyan-500/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img src="https://images.pexels.com/photos/17483873/pexels-photo-17483873.png?auto=compress&cs=tinysrgb&w=80" alt="KARE Logo" className="h-10 w-10 object-contain" />
              <img src="https://images.pexels.com/photos/17483873/pexels-photo-17483873.png?auto=compress&cs=tinysrgb&w=80" alt="ACM Logo" className="h-10 w-10 object-contain" />
              <img src="https://images.pexels.com/photos/17483873/pexels-photo-17483873.png?auto=compress&cs=tinysrgb&w=80" alt="Euphoria Logo" className="h-10 w-10 object-contain" />
            </div>

            <div className="text-center">
              <p className="text-gray-400">© 2026 Hack Odyssey 3.0. All rights reserved.</p>
              <p className="text-sm text-gray-500">KARE ACM & ACM-W Student Chapters</p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.430.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

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
    { name: "Dr. P. Chinnasamy", designation: "Faculty Sponsor KARE ACM", image: "/images/chinnasir.png" },
    { name: "Dr. N C Brintha", designation: "Faculty Sponsor KARE ACM W", image: "/images/brinthamam.png" }
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
                href="https://www.google.com/maps/place/Kalasalingam+University+Library/@9.5745085,77.6786681,18.47z/data=!4m6!3m5!1s0x3b06dbc1884caacd:0xf92359a4abd80c7e!8m2!3d9.574492!4d77.6788524!16s%2Fg%2F11fxx4jryd"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <ExternalLink size={20} />
                Get Directions
              </a>
              <a
                href="https://euphoria.kalasalingam.ac.in/pages/form/registerform.php"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
              >
                Register Now
              </a>
              <a
                href="https://chat.whatsapp.com/GrEVgDJYESG3xaAzlMwMzC"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <ExternalLink size={20} />
                Join the group
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
                <img src="/images/kareacm.png" alt="ACM Logo" className="h-16 w-16 object-contain" />
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
                <img src="/images/acmw.png" alt="ACM-W Logo" className="h-16 w-16 object-contain" />
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
                    <p className="font-semibold text-lg">4 to 5 Members per Team</p>
                    <p className="text-gray-400">Each team must consist of minimum 4 and maximum 5 members</p>
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
                  <span className="text-gray-300">Top performers may receive internship opportunities</span>
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
                  <p className="font-semibold mb-1">Joshua (Tamil & Telugu)</p>
                  <a href="tel:7893340788" className="text-cyan-400 hover:text-cyan-300">8870740110</a>
                </div>

                <div className="text-center">
                  <div className="bg-cyan-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <p className="font-semibold mb-1">Setu (Hindi & Telugu)</p>
                  <a href="tel:7893340788" className="text-cyan-400 hover:text-cyan-300">7674043125</a>
                </div>

                <div className="text-center">
                  <div className="bg-cyan-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <p className="font-semibold mb-1">Thaha (Hindi & Telugu)</p>
                  <a href="tel:7893340788" className="text-cyan-400 hover:text-cyan-300">7893340788</a>
                </div>

                <div className="text-center">
                  <div className="bg-cyan-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <p className="font-semibold mb-1">Umesh (Telugu & English)</p>
                  <a href="tel:9573861418" className="text-cyan-400 hover:text-cyan-300">9573861418</a>
                </div>

                <div className="text-center">
                  <div className="bg-cyan-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <p className="font-semibold mb-1">Prem (Telugu & English)</p>
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

              {/* Location */}
<section id="location" className="py-20 bg-gray-900/50">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      Event Location
    </h2>

    <div className="max-w-4xl mx-auto bg-gray-800/50 border border-cyan-500/20 rounded-xl p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3 text-cyan-400">
          <MapPin size={24} />
          <span className="text-lg font-semibold">
            Central Library, Kalasalingam Academy of Research and Education
          </span>
        </div>

        <a
          href="https://www.google.com/maps/place/Kalasalingam+University+Library/@9.5745085,77.6786681,18.47z/data=!4m6!3m5!1s0x3b06dbc1884caacd:0xf92359a4abd80c7e!8m2!3d9.574492!4d77.6788524!16s%2Fg%2F11fxx4jryd"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition-all"
        >
          <MapPin size={18} />
          Get Directions
        </a>
      </div>

      <div className="w-full h-[400px] rounded-lg overflow-hidden border border-cyan-500/20">
        <iframe
          title="University Library Location"
          src="https://www.google.com/maps?q=9.574492,77.6788524&output=embed"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 border-t border-cyan-500/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img src="/images/kareacm.png" alt="KARE Logo" className="h-10 w-10 object-contain" />
              <img src="/images/euphoria.png" alt="ACM Logo" className="h-10 w-10 object-contain" />
              <img src="/images/kare.png" alt="ACMW Logo" className="h-10 w-10 object-contain" />
              <img src="/images/acmw.png" alt="Euphoria Logo" className="h-10 w-10 object-contain" />
            </div>

            <div className="text-center">
              <p className="text-gray-400">© 2026 Hack Odyssey 3.0. All rights reserved.</p>
              <p className="text-sm text-gray-500">KARE ACM & ACM-W Student Chapters</p>
            </div>

            <div className="flex gap-4">
              <a
  href="https://chat.whatsapp.com/GrEVgDJYESG3xaAzlMwMzC"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
>
  <svg
    className="w-5 h-5 text-gray-300"
    fill="currentColor"
    viewBox="0 0 32 32"
  >
    <path d="M16.003 3C9.373 3 4 8.373 4 15.003c0 2.646.832 5.098 2.246 7.108L4 29l7.08-2.197a11.93 11.93 0 004.923 1.077h.001c6.63 0 12.003-5.373 12.003-12.003C28.007 8.373 22.634 3 16.003 3zm6.548 17.355c-.274.772-1.584 1.48-2.238 1.584-.594.094-1.344.134-2.17-.134-.502-.162-1.144-.372-1.974-.728-3.474-1.497-5.736-5.022-5.91-5.254-.17-.232-1.414-1.882-1.414-3.59 0-1.708.896-2.55 1.214-2.9.318-.35.694-.438.926-.438.232 0 .464.002.668.012.216.01.504-.082.79.604.286.686.974 2.374 1.058 2.546.086.172.144.376.028.608-.116.232-.174.376-.346.58-.172.204-.364.456-.52.612-.172.172-.352.358-.152.704.2.346.888 1.468 1.904 2.376 1.308 1.168 2.414 1.53 2.76 1.702.346.172.548.144.75-.086.202-.232.864-1.006 1.094-1.352.232-.346.464-.288.79-.172.318.116 2.006.946 2.35 1.118.346.172.576.258.66.404.086.144.086.836-.188 1.608z"/>
  </svg>
</a>
<a
  href="https://www.instagram.com/acmkare"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
>
  <svg
    className="w-5 h-5 text-gray-300"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.32.975.975 1.257 2.242 1.32 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.344 2.633-1.32 3.608-.975.975-2.242 1.257-3.608 1.32-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.344-3.608-1.32-.975-.975-1.257-2.242-1.32-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.344-2.633 1.32-3.608.975-.975 2.242-1.257 3.608-1.32C8.416 2.175 8.796 2.163 12 2.163zm0 3.675a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
  </svg>
</a>
              <a href="https://www.linkedin.com/company/acmkare/posts/?feedView=all" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
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

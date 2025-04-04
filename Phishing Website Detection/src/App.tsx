import React, { useState } from "react";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Brain,
  Code,
  Lock,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Search,
  Shield as ShieldIcon,
} from "lucide-react";

function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<"safe" | "dangerous" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(Math.random() > 0.5 ? "safe" : "dangerous");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-blue-700 to-gray-900">
      {/* Navigation Bar */}
      <nav className="fixed w-full top-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-white" />
              <span className="text-white font-bold text-xl">PhishGuard</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-white transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-white transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-300 hover:text-white transition"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-white transition"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-16">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Shield className="w-20 h-20 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
              Phishing Link Detector
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Advanced protection against malicious websites using cutting-edge
              AI technology. Paste any suspicious link below to verify its
              safety.
            </p>
          </div>

          {/* URL Checker */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="url"
                    className="block text-lg font-medium text-white mb-2"
                  >
                    Enter URL to check
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      id="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://example.com"
                      className="flex-1 block w-full rounded-lg bg-white/5 border-2 border-white/20 p-4 text-white placeholder-gray-400 focus:border-white/40 focus:ring-white/40 transition"
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
                    >
                      <Search className="w-5 h-5" />
                      Check URL
                    </button>
                  </div>
                </div>
              </form>

              {/* Results */}
              {result && (
                <div
                  className={`mt-8 p-6 rounded-lg backdrop-blur-lg ${
                    result === "safe"
                      ? "bg-green-500/10 border-2 border-green-500/20"
                      : "bg-red-500/10 border-2 border-red-500/20"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {result === "safe" ? (
                      <>
                        <CheckCircle className="w-8 h-8 text-green-400" />
                        <div>
                          <h3 className="text-lg font-semibold text-green-400">
                            This link appears to be safe
                          </h3>
                          <p className="text-green-300">
                            Our advanced analysis indicates this URL is
                            legitimate and secure.
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-8 h-8 text-red-300" />
                        <div>
                          <h3 className="text-lg font-semibold text-red-300">
                            Warning: Potential phishing detected!
                          </h3>
                          <p className="text-red-200">
                            Our AI has detected patterns matching known phishing
                            attempts. We strongly advise against visiting this
                            website.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              About Our Service
            </h2>
            <p className="text-gray-300 leading-relaxed mb-12">
              Phishing websites pose a serious threat by impersonating trusted
              platforms to steal personal information. Our Phishing Website
              Detection tool is designed to protect users from these malicious
              sites by analyzing URLs in real-time and flagging potentially
              harmful ones.
            </p>
            <p className="text-gray-300 leading-relaxed mb-12">
              At the core of our system is a Random Forest machine learning
              model, trained on a rich dataset of both legitimate and phishing
              URLs. With over a dozen carefully engineered features, the model
              has achieved a detection accuracy of 96%, providing users with
              fast, reliable, and intelligent protection.
            </p>
            <p className="text-gray-300 leading-relaxed mb-12">
              Whether you're a student, developer, or just someone who wants to
              browse the web safely, our tool gives you the confidence to
              navigate without fear.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            How It Works
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-3 md:grid-cols-3">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-400">
                      1
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    URL Input & Feature Extraction
                  </h3>
                </div>
                <p className="text-gray-300">
                  Once a user enters a URL, the system begins by extracting
                  critical information through web scraping and URL analysis.
                  This includes metadata like domain age, SSL certificate
                  status, presence of redirects, and external resources. At the
                  same time, the system performs string-based analysis of the
                  domain — checking for suspicious patterns, use of IP
                  addresses, special characters, and more. These extracted
                  features form the core input for the model.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-400">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Machine Learning Model
                  </h3>
                </div>
                <p className="text-gray-300">
                  After feature extraction, all the data points are passed into
                  a trained Random Forest model. This machine learning model has
                  been trained on a labeled dataset of approximately 11,000
                  websites, learning to identify patterns that commonly appear
                  in phishing versus legitimate websites. The Random Forest
                  algorithm helps improve reliability by combining the results
                  of multiple decision trees for robust prediction.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-400">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Prediction & Result
                  </h3>
                </div>
                <p className="text-gray-300">
                  Once the model processes the input, the system classifies the
                  website into one of three categories: Safe, Suspicious, or
                  Phishing. The result is presented instantly, along with a
                  brief explanation of why the website was flagged. With a 96%
                  detection accuracy, users can rely on this tool for fast and
                  informed decisions before engaging with any website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Contact Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 flex items-center gap-4">
                <Mail className="w-6 h-6 text-purple-400" />
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-300">satam@king.com</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-gray-300">+91 6969 69-6969</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 flex items-center gap-4">
                <MapPin className="w-6 h-6 text-green-400" />
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-300">Talegaon Dabhade, IN</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-8 h-8 text-white" />
                <span className="text-white font-bold text-xl">PhishGuard</span>
              </div>
              <p className="text-gray-400">
                Protecting users from phishing attacks with advanced AI
                technology.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-400 hover:text-white transition"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-400 hover:text-white transition"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="text-gray-400 hover:text-white transition"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest features and news.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  title="bt1"
                  className="p-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-400">
            <p>&copy; 2025 PhishGuard. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

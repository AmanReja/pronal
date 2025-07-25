import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import My from "../assets/my.jpg";

const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-800">Pronal hira</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Skills
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </div>
            <button className="md:hidden">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            <div className="space-y-8">
              <div>
                <p className="text-blue-600 font-medium text-lg mb-2">
                  Hello, I'm
                </p>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Pronal hira
                </h1>
                <h2 className="text-2xl lg:text-3xl text-slate-600 mt-4">
                  Social Media marketing executive
                </h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Creative Social Media Executive specializing in content
                strategy, branding, and digital growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  View My Work
                </button>
                <button className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium">
                  Download CV
                </button>
              </div>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/rimita-sanpui-13605b309/"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-30" />
                <img
                  src={My}
                  alt="Profile"
                  className="relative z-10 w-full h-full object-cover rounded-full border-8 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <p className="text-xl text-slate-600">
              Get to know more about my work in digital media and marketing
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvY2lhbCUyMG1lZGlhJTIwbWFya2V0aW5nfGVufDB8fDB8fHww"
                alt="Social Media Executive"
                className="rounded-2xl shadow-xl"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm a passionate Social Media Executive with a focus on digital
                growth, brand visibility, and engaging content creation. I help
                businesses build their online presence and connect with
                audiences effectively across platforms.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                From crafting SEO-optimized content to running impactful Meta
                and Google Ads, I use strategy, analytics, and creativity to
                deliver real results.
              </p>

              {/* Skills Cards */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-800 mb-2">
                    Social Media
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Instagram, Facebook, LinkedIn, Twitter
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-800 mb-2">
                    Content Writing
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Blogs, Captions, Campaign Copy
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-800 mb-2">
                    SEO & SMO
                  </h3>
                  <p className="text-slate-600 text-sm">
                    On-Page SEO, Keyword Research, Hashtag Strategy
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-800 mb-2">
                    Ads & Tools
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Google Ads, Meta Ads, Analytics, Canva
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              My Services
            </h2>
            <p className="text-xl text-slate-600">
              What I can do for your brand
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SMO */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9h3M3 15h3M4 4l16 16"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Social Media Optimization
              </h3>
              <p className="text-slate-600">
                Enhance your brand's online presence across social media
                platforms through targeted strategies and optimization.
              </p>
            </div>

            {/* Content Writing */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16h8M8 12h6M9 8h6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Content Writing
              </h3>
              <p className="text-slate-600">
                Engaging, SEO-optimized content tailored to your audience — from
                blogs and captions to ad copy and campaigns.
              </p>
            </div>

            {/* SEO */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m4 4h-1v-2h-1m-4 2H7v-4h1m0 4H7v-4h1m-1 4V8a1 1 0 011-1h10a1 1 0 011 1v8a1 1 0 01-1 1H6z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Search Engine Optimization
              </h3>
              <p className="text-slate-600">
                Boost visibility and drive organic traffic with on-page SEO,
                keyword research, and content strategies.
              </p>
            </div>

            {/* Google & Meta Ads */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-6h13v6M9 9v-6h13v6M3 3h3v18H3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Google & Meta Ads
              </h3>
              <p className="text-slate-600">
                ROI-driven ad campaigns on Google, Facebook & Instagram to
                generate leads and conversions.
              </p>
            </div>

            {/* Analytics & Reports */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 17l-4-4m0 0l4-4m-4 4h14"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Analytics & Reports
              </h3>
              <p className="text-slate-600">
                Track performance with in-depth insights using Google Analytics,
                Meta Insights, and campaign reports.
              </p>
            </div>

            {/* Canva Design */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7m-8 4l4-4m0 0l-4-4m4 4H4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Canva Designing
              </h3>
              <p className="text-slate-600">
                Eye-catching designs for posts, reels, stories, and
                presentations — all created with Canva Pro tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Experience
            </h2>
            <p className="text-xl text-slate-600">
              Professional Background & Achievements
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow space-y-6">
            {/* Job Title & Company */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800">
                Jr. Executive (Social Media) – Executive Lead Hight, Chinar Park
              </h3>
              <p className="text-slate-600 mt-1">
                Internship & Project Experience | CloudX Infotech
              </p>
            </div>

            {/* Course & Internship */}
            <div className="text-slate-600 text-lg space-y-2">
              <p>
                Successfully completed a{" "}
                <span className="font-medium text-slate-800">
                  3-month certificate course
                </span>{" "}
                from CloudX Infotech, gaining hands-on experience by managing{" "}
                <span className="font-medium text-slate-800">
                  live projects
                </span>{" "}
                during a 4-month internship at Lead Hight.
              </p>
              <p>
                Monitored{" "}
                <span className="font-medium">competitor activity</span> by
                analyzing their online presence across multiple platforms.
              </p>
              <p>
                Engaged with customers via email and social channels,{" "}
                <span className="font-medium">
                  managing client relationships
                </span>{" "}
                effectively.
              </p>
              <p>
                Performed <span className="font-medium">keyword research</span>{" "}
                and analysis to improve website ranking and drive organic
                traffic.
              </p>
              <p>
                Handled <span className="font-medium">SEO operations</span>{" "}
                including link building and content optimization.
              </p>
              <p>
                Evaluated <span className="font-medium">website metrics</span>{" "}
                like page visits and conversions to measure campaign
                performance.
              </p>
              <p>
                Conducted <span className="font-medium">market research</span>{" "}
                and kept up with the latest industry trends for digital growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-slate-600">Some of my recent projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* RedVelvet Brand Project */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573036714094-1c8c151ed5fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlZHZlbHZldHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="RedVelvet Project"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-red-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">RedVelvet</h3>
                    <p className="text-sm">
                      Canva • Meta Ads • Instagram Marketing
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Rajib Sikdar Website */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRyfGVufDB8fDB8fHww"
                  alt="Dr Rajib Sikdar"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      Dr. Rajib Sikdar
                    </h3>
                    <p className="text-sm">
                      SEO • WordPress • Google My Business
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Raj Jewellery Website */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1646336198168-c340f445dbdd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8andlbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Raj Jewellery"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-yellow-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      Raj Jewellery
                    </h3>
                    <p className="text-sm">
                      Shopify • Meta Ads • Branding Design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-slate-300">
              Ready to bring your ideas to life?
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-slate-300">pronalhira1112@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <a
                    href="tel:+918918676538
"
                    className="text-slate-300"
                  >
                    +918918676538
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-slate-300">Ashokenagar, India, 743263</p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-slate-800 text-white p-4 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-slate-800 text-white p-4 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-slate-800 text-white p-4 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full bg-slate-800 text-white p-4 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none"
                defaultValue={""}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-400">
            <p>© 2024 pronal hira. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Banner;

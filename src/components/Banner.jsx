import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import My from "../assets/my.jpg";

const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            <div className="space-y-8">
              <div>
                <p className="text-orange-600 font-medium text-lg mb-2">
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
                <button className="bg-orange-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium">
                  View My Work
                </button>
                <button className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium">
                  Download CV
                </button>
              </div>
              <div className="flex space-x-6">
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

      {/* Portfolio Section */}

      {/* Footer */}
    </div>
  );
};

export default Banner;

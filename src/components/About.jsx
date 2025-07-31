import React from "react";

const About = () => {
  return (
    <>
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
    </>
  );
};

export default About;

import React, { forwardRef } from 'react';

const Footer = forwardRef((props, ref) => {
  return (
    <footer id={props.id} ref={ref}>
      {/* Let's Talk Section */}
      <div id="footer-talk" className="bg-[#D6932C] py-16 text-white text-right pr-30">
        <h2 className="text-4xl md:text-6xl font-bold">Let's Talk</h2>
        <button className="mt-8 lg:mr-12 px-10 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors">
          Contact Us
        </button>
      </div>

      {/* Main Footer */}
      <div className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Links */}
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Innovations</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Business Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Financial services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Lejhro Recruiter</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Blogs</a></li>
              </ul>
            </div>
            
            {/* Programs Links */}
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Programs</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Lejhro Bootcamp</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Terms of Use</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Privacy Statement</a></li>
              </ul>
            </div>

            {/* Connect with us */}
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Connect with us</h3>
                <div className="flex space-x-4">
                    {/* Social Icons Here */}
                    <div className="flex justify-start sm:justify-start space-x-4 mt-2">
                      <a
                        href="https://www.twitter.com/lejhro"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Twitter"
                        className="text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                        </svg>
                      </a>

                      <a
                        href="https://www.facebook.com/lejhro"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                        className="text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z" />
                        </svg>
                      </a>

                      <a
                        href="https://www.linkedin.com/company/lejhro"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                      </a>

                      <a
                        href="https://www.youtube.com/channel/UCN_okXQlwY7e26UJ8tJtCQQ"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="YouTube"
                        className="text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                        </svg>
                      </a>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="text-center text-gray-500 mt-12 pt-8 border-t border-gray-200">
            © 2025 LEJHRO. All Rights Reserved.
          </div>
        </div>
      </div>

        {/* Back to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-100"
          aria-label="Back to top"
        >
            <svg className="w-6 h-6 text-[#2C7FBF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
        </button>
    </footer>
  );
});

export default Footer;
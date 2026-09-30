import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, GraduationCap, Phone, Mail } from "lucide-react";

export default function Header() {

  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const udanMenu = [
    { to: "/udan/1", label: "Udan 1" },
    { to: "/udan/2", label: "Udan 2" },
    { to: "/udan/3", label: "Udan 3" },
    { to: "/udan/4", label: "Udan 4" },
    { to: "/udan/5", label: "Udan 5" },
    { to: "/udan/6", label: "Udan 6" },
    { to: "/udan/7", label: "Udan 7" },
    { to: "/udan/8", label: "Udan 8" },
    { to: "/udan/9", label: "Udan 9" },
  ];

  // Scroll effect + progress
  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / docHeight) * 100;

      setScrolled(scrollTop > 50);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const menu = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/cells", label: "Cells & Centres" },

    {
      label: "Admissions",
      sub: [
        { to: "/apply", label: "Apply Now" },
        { to: "/academics", label: "Academic Programs" },
        { to: "/merit-list", label: "Merit List" },
      ],
    },

    { to: "/gallery", label: "Gallery" },

    { to: "/videos", label: "Videos" },

    { to: "/announcement", label: "Announcements" },

    {
      label: "Campus Life",
      sub: [
        { to: "/facilities", label: "Infrastructure" },
        { to: "/library", label: "Digital Library" },
        { to: "/blog", label: "Blogs & Articles" },
        { to: "/careers", label: "Career Opportunities" },
      ],
    },

    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 font-sans">

      {/* ================= TOP INFO BAR ================= */}

      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-1 px-4">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] sm:text-xs">

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-center sm:justify-start">

              <div className="flex items-center gap-1.5">
                <Phone className="h-3 w-3 text-amber-400" />
                <span className="hidden sm:inline">Helpline:</span>
                <a
                  href="tel:+918459038579"
                  className="hover:text-amber-300 transition"
                >
                  +91 84590 38579
                </a>
              </div>

              <div className="hidden md:flex items-center gap-1.5">
                <Mail className="h-3 w-3 text-amber-400" />
                <a
                  href="mailto:jadhavarlawcollege@gmail.com"
                  className="hover:text-amber-300 transition"
                >
                  jadhavarlawcollege@gmail.com
                </a>
              </div>

            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">

              <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold">
                UDISE: 27250509921/27
              </div>

              <div className="hidden xl:block text-amber-300 italic text-[10px]">
                "Empowering Future Legal Minds Since 1995"
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= MAIN HEADER ================= */}

      <div
        className={`bg-white shadow-lg transition-all duration-300 ${scrolled ? "py-1 shadow-xl" : "py-2 sm:py-2"
          }`}
      >

        <div className="max-w-7xl mx-auto px-4">

          <div className="flex items-center justify-between">

            {/* Logo */}

            <Link to="/" className="flex items-center gap-2 sm:gap-3">

              

                <img
                  src="/assets/images/logo/logo1.png"
                  alt="logo"
                  className="h-10 sm:h-12 md:h-14 object-contain rounded-lg"
                />

             

            </Link>


            {/* TITLE */}

            <div className="hidden lg:block text-center">

              <div className="relative">

                <h1 className="text-base xl:text-lg font-bold text-gray-900">
                  Adv Shardulrao Sudhakarrao Jadhavar College of Law
                </h1>

                <GraduationCap className="absolute -left-7 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600" />

                <p className="text-xs xl:text-sm font-serif italic text-gray-700">
                  "Education for Strength, Intellect & Wisdom"
                </p>
                <p className="text-[10px] mt-0.5 max-w-xl leading-tight">
                  (Affiliated to Savitribai Phule Pune University, Recognised by
                  Government of Maharashtra and Approved by the Bar Council of India,
                  New Delhi)
                </p>

                <div className="flex items-center justify-center gap-2 mt-1">

                  <div className="h-px w-8 bg-amber-500"></div>

                  <span className="text-[10px] sm:text-xs font-semibold text-gray-600">
                    Recognized by BCI
                  </span>

                  <div className="h-px w-8 bg-amber-500"></div>

                </div>

              </div>

            </div>


            {/* UDAN AND APPLY BUTTONS */}

            <div className="hidden md:flex items-center gap-2">

              <div
                className="relative"
                onMouseEnter={() => setDropdown("Udan")}
                onMouseLeave={() => setDropdown(null)}
              >
                <button
                  className="border border-amber-600 text-amber-700 px-3 lg:px-5 py-1.5 lg:py-2 rounded-lg font-semibold hover:bg-amber-50 transition shadow-sm text-sm flex items-center gap-1"
                >
                  Udan
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>

                {dropdown === "Udan" && (
                  <div className="absolute right-0 top-full pt-1 w-48 z-50">
                    <div className="bg-white text-gray-800 shadow-xl rounded-md overflow-hidden">
                      {udanMenu.map((item) => (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          className="block px-4 py-2 text-sm hover:bg-amber-50"
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/admissions"
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-3 lg:px-5 py-1.5 lg:py-2 rounded-lg font-semibold hover:from-amber-700 hover:to-amber-800 transition shadow-lg text-sm"
              >
                Apply Now
              </Link>

            </div>


            {/* MOBILE MENU */}

            <button
              className="md:hidden p-1.5 rounded-lg bg-gray-100"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <X className="h-5 w-5 text-gray-800" />
              ) : (
                <Menu className="h-5 w-5 text-gray-800" />
              )}
            </button>

          </div>

        </div>

      </div>


      {/* ================= NAVBAR ================= */}

      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md">

        <div className="max-w-7xl mx-auto px-4">

          <nav className="hidden md:flex flex-wrap items-center justify-center">

            {menu.map((item, idx) =>
              item.sub ? (
                <div key={idx} className="relative group">

                  <button
                    onMouseEnter={() => setDropdown(item.label)}
                    onMouseLeave={() => setDropdown(null)}
                    className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-white hover:text-amber-300 flex items-center gap-1"
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>

                  {/* dropdown */}

                  <div
                    className={`absolute left-0 top-full min-w-[200px] bg-white shadow-xl rounded-b-lg transition ${dropdown === item.label
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                      }`}
                    onMouseEnter={() => setDropdown(item.label)}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    {item.sub.map((s) => (
                      s.href ? (
                        <a
                          key={s.href}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {s.label}
                        </a>
                      ) : (
                        <NavLink
                          key={s.to}
                          to={s.to}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {s.label}
                        </NavLink>
                      )
                    ))}
                  </div>

                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-white hover:text-amber-300"
                >
                  {item.label}
                </NavLink>
              )
            )}

          </nav>


          {/* MOBILE NAV */}

          {open && (
            <div className="md:hidden bg-gray-900 rounded-b-xl">

              <div className="max-h-[75vh] overflow-y-auto">

                {menu.map((item) => (
                  <div key={item.label}>

                    {item.sub ? (
                      <details>

                        <summary className="px-4 py-3 text-white cursor-pointer text-sm">
                          {item.label}
                        </summary>

                        {item.sub.map((s) => (
                          s.href ? (
                            <a
                              key={s.href}
                              href={s.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setOpen(false)}
                              className="block px-6 py-2 text-white hover:bg-gray-800 text-sm"
                            >
                              {s.label}
                            </a>
                          ) : (
                            <NavLink
                              key={s.to}
                              to={s.to}
                              onClick={() => setOpen(false)}
                              className="block px-6 py-2 text-white hover:bg-gray-800 text-sm"
                            >
                              {s.label}
                            </NavLink>
                          )
                        ))}

                      </details>
                    ) : (
                      <NavLink
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-3 text-white hover:bg-gray-800 text-sm"
                      >
                        {item.label}
                      </NavLink>
                    )}

                  </div>
                ))}

              </div>

            </div>
          )}

        </div>

      </div>


      {/* ================= SCROLL BAR ================= */}

      <div className="h-0.5 w-full bg-gray-900">

        <div
          className="h-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 transition-all"
          style={{ width: `${scrollProgress}%` }}
        ></div>

      </div>

    </header>
  );
}

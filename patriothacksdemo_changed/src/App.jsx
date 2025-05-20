import React, { useEffect, useState } from "react";
import { AlignJustify } from "lucide-react";
import Footer from "../components/Footer";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";

const App = () => {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const targetDate = new Date("October 10 2025 00:00:00").getTime();

    const timer = () => {
      const currentDate = new Date().getTime();
      const distance = targetDate - currentDate;

      if (distance < 0) {
        setTime({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTime({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    const interval = setInterval(timer, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const stars = document.getElementById("stars");
    const moon = document.getElementById("moon");
    const starsBeh = document.getElementById("stars_beh");
    const text = document.getElementById("text");
    const date = document.getElementById("date");
    const btn = document.getElementById("btn");

    const handleScroll = () => {
      const value = window.scrollY;

      requestAnimationFrame(() => {
        if (stars) stars.style.left = value * 0.15 + "px";
        if (moon) moon.style.top = value * 0.7 + "px";
        if (starsBeh) starsBeh.style.top = value * 0.3 + "px";
        if (text) {
          text.style.marginRight = value * 1.5 + "px";
          text.style.marginTop = value * 0.7 + "px";
        }
        if (date) date.style.marginLeft = value * 1.5 + "px";
        if (btn) btn.style.marginTop = value * 0.7 + "px";
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative min-h-screen">
        <header className="flex items-center justify-between px-6 py-3">
          <a href="#" className="logo block w-24 md:w-28">
            <img
              src="/images/traditional_logo_bg.png"
              alt="PatriotHacks Logo"
              className="w-full h-auto object-contain"
            />
          </a>

          <div className="hidden md:flex">
            <ul className="flex items-center gap-4">
              {/* <li><a href="#" className="nav-mercury"><span>About</span></a></li> */}
              <li>
                <a href="#mission" className="nav-venus"><span>Mission</span></a>
              </li>
              {/* <li><a href="#mission" className="nav-earth"><span>Team</span></a></li> */}

              <a
                href="https://mlh.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="mlh-logo-button"
              >
                <img
                  src="/images/mlh_logo1.png"
                  alt="MLH Trust Badge"
                  className="w-20 h-auto hover:scale-105 transition-transform duration-200"
                />
              </a>
            </ul>
          </div>

          <div className="md:hidden">
            <button
              className="flex-center"
              onClick={() => setMenuOpen((opened) => !opened)}
            >
              <AlignJustify
                className={`hover:w-8 hover:h-8 w-6 h-6 transition-all ease-out flex-center text-[#E6E6FA] ${menuOpen ? "rotate-90" : ""}`}
              />
            </button>
            {menuOpen && (
              <div className="z-150 absolute top-20 right-10 w-32 bg-[#211a48] shadow-lg rounded-lg p-4 transition-all duration-300 ease-out transform animate-fadeIn flex flex-col gap-2">
                <a href="#"><span>About</span></a>
                <a href="#mission"><span>Mission</span></a>
                <a href="#"><span>Team</span></a>
              </div>
            )}
          </div>
        </header>

        <section>
          <img src="/images/stars.png" id="stars" alt="Stars" />
          <img src="/images/moon.png" id="moon" alt="Moon" />
          <img src="/images/peron_t.png" id="stars_beh" alt="Background Stars" />

          <div className="event-heading font-bold pb-5">
            <h2
              id="text"
              className="text-[5rem] max-[1125px]:text-[5rem] max-[660px]:text-[3.5rem] max-[460px]:text-[2.75rem] transition-[font-size] duration-300 ease-in-out bg-gradient-to-r from-[#8E7DBE] from-5% to-[#FF8282] to-90% opacity-[0.8] bg-clip-text text-transparent"
            >
              PATRIOTHACKS
            </h2>
            <div className="flex flex-col gap-4">
              <h3 className="bg-gradient-to-r from-[#E6E6FA] from-5% to-[#a8458e] to-90% opacity-[0.8] bg-clip-text text-transparent leading-[1.3]">
                George Mason University's seventh annual flagship hackathon
              </h3>
              <h3
                id="date"
                className="bg-gradient-to-r from-[#E6E6FA] from-5% to-[#a8458e] to-90% opacity-[0.8] bg-clip-text text-transparent"
              >
                October 10–12 2025 - Fairfax, Virginia
              </h3>
            </div>
          </div>

          <div className="countdown-wrapper">
            <div className="timebox flex justify-center gap-4 text-white text-center">
              <div className="time">
                <h2 id="days" className="text-[2.5rem]">{time.days}</h2>
                <span className="text-sm">Days</span>
              </div>
              <div className="time">
                <h2 id="hours" className="text-[2.5rem]">{time.hours}</h2>
                <span className="text-sm">Hours</span>
              </div>
              <div className="time">
                <h2 id="minutes" className="text-[2.5rem]">{time.minutes}</h2>
                <span className="text-sm">Minutes</span>
              </div>
              <div className="time max-[461px]:hidden">
                <h2 id="seconds" className="text-[2.5rem]">{time.seconds}</h2>
                <span className="text-sm">Seconds</span>
              </div>
            </div>
          </div>

          <div className="email-inline text-center">
            <p className="text-white text-lg mb-2">
              Interested? Click below to pre-register!
            </p>
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSexWEghOafLrVeLYZOT7wnGxBQEsE5aH_Seby-MCeX5iLjTwQ/viewform"
              method="GET"
              target="_blank"
            >
              <div className="email-bar">
                <button type="submit">Click here to pre-register</button>
              </div>
            </form>
          </div>

          <img src="/images/gpt.png" id="stars_front" alt="Foreground Stars" />
        </section>

        <section className="mission py-16 px-6 bg-[#1c0f3f]" id="mission">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-lg overflow-hidden shadow-lg h-[300px] md:h-[400px]">
              <img
                src="/public/images/salesforce_ws.JPG"
                alt="PatriotHacks community"
                className="w-full h-full object-cover z-0 relative"
              />
            </div>

            <div className="z-10 relative">
              <h2 className="text-white text-4xl font-bold mb-4">Our Mission</h2>
              <p className="text-white text-lg leading-relaxed">
                PatriotHacks is the flagship hackathon at George Mason University where
                innovators can play, learn, create, game, and revolutionize technology.
              </p>
              <p className="text-white text-lg mt-4 leading-relaxed">
                Students from across the world can enjoy plenty of workshops,
                activities, and networking events along with free swag. This provides
                hackers an opportunity to build their resumes and make memories that
                will last a lifetime. The event is entirely free and no experience is
                required to attend.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default App;

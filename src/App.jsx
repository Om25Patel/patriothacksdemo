import React, { useEffect, useState } from "react";
import { AlignJustify } from "lucide-react";
import Footer from "../components/Footer";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";

const App = () => {
  const [time, setTime] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
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
        <header className="fixed top-0  w-full h-[80px] flex items-center justify-between px-4 z-1100" style={{pointerEvents: 'none'}}>
       
        <div
          className="absolute inset-0 backdrop-blur-xs"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, white 70%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, white 70%, transparent 100%)',
            pointerEvents: 'auto', 
          }}
        />
        <div className="relative flex items-center w-full justify-between" style={{ pointerEvents: 'auto', zIndex: 10 }}>
        <a className="logo" href="#">
          <img src="/images/traditional_logo.svg" alt="Logo" className="w-[100px]"/>
        </a>
        <div className="max-[770px]:hidden mr-20">
        <ul>
          {/*<li>
            <a href="#" className="nav-mercury">
              <span>About</span>
            </a>
          </li>*/
          }
          {/*<li>
            <a href="#mission" className="nav-venus">
              <span>Mission</span>
            </a>
          </li>*/
          }
          <li>
            <a href="#mission" className="nav-earth">
              <span>Mission</span>
            </a>
          </li>
        </ul>
        </div>
        <div className="md:hidden mr-0">
          <button
            className="flex-center"
            onClick={() => setMenuOpen((opened) => !opened)}
          >
            <AlignJustify
              className={`hover:w-8 hover:h-8 w-6 h-6 transition-all ease-out flex-center text-[#E6E6FA] ${menuOpen ? 'rotate-90' : ''}`}
            />
          </button>
          <div
            className={`
              absolute top-24 right-0 w-full z-150 font-righteous
              transition-all duration-300 ease-out
              transform
              ${menuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
            backdrop-blur-md flex flex-col gap-2 shadow-lg
              origin-top
            `}
            style={{ minWidth: '180px' }}
          >
            <div className="w-full rounded-xl bg-[#8c46a165] px-4 py-2">
                <a href="">
                  <span>About</span>
                </a>
              </div>
              {/*<div className="w-full bg-[#8c46a165] rounded-xl px-4 py-2">
                <a href="#mission">
                  <span>Mission</span>
                </a>
              </div>
              */}
              {/*<div className="w-full bg-[#8c46a165] rounded-xl px-4 py-2">
                <a href="">
                  <span>Team</span>
                </a>
              </div>*/}
            </div>
          </div>
          
        <a id="mlh-trust-badge" className="block max-w-[100px] min-w-[60px] fixed right-[50px] top-0 w-[10%] z-[10000] max-md:right-[80px]" target="_blank">
        <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-black.svg" alt="Major League Hacking 2026 Hackathon Season" className="w-full"/>
        </a>
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
                className="bg-gradient-to-r from-[#E6E6FA] from-5% to-[#a8458e] to-90% opacity-[0.8] bg-clip-text text-transparent leading-[1.3]"
              >
                October 10–12 2025 - Fairfax, Virginia
              </h3>
            </div>
          </div>

          <div className="countdown-wrapper">
            <div className="timebox">
            <div className="time">
              {<h2 id="days" 
              className={`text-[2.5rem]
              transition-all duration-300 ease-out
              transform rounded-xl
              ${time.days ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
            
              origin-top`}
              
              >
                {time.days}
                </h2>
                }
              
            </div>
            <div className="time">
              <h2 id="hours" 
              className={`text-[2.5rem]
              transition-all duration-300 ease-out
              transform rounded-xl
              ${time.hours ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
            
              origin-top`}>
                {time.hours}
              </h2>
              
            </div>
            <div className="time">
              <h2 id="minutes" 
              className={`text-[2.5rem]
              transition-all duration-300 ease-out
              transform rounded-xl
              ${time.minutes ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
             
              origin-top`}
              >
                {time.minutes}
              </h2>
              
            </div>
            <div className="time max-[461px]:hidden">
              <h2 id="seconds" 
              className={`text-[2.5rem]
              transition-all duration-300 ease-out
              transform rounded-xl
              ${time.seconds ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
            
              origin-top`}
              >
                {time.seconds}
              </h2>
              
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

        <div className="mission py-16 px-6 bg-[#1c0f3f]" id="mission">
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
        </div>

        <Footer />
      </div>
    </>
  );
};

export default App;
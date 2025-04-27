import React, { useEffect, useState } from "react";
import { AlignJustify } from "lucide-react";

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
    const handleScroll = () => {
      const value = window.scrollY;
      document.getElementById("stars").style.left = value * 0.25 + "px";
      document.getElementById("moon").style.top = value * 1.05 + "px";
      document.getElementById("stars_beh").style.top = value * 0.5 + "px";
      document.getElementById("stars_front").style.top = value * 0 + "px";
      document.getElementById("text").style.marginRight = value * 4 + "px";
      document.getElementById("text").style.marginTop = value * 1.5 + "px";
      document.getElementById("date").style.marginLeft = value * 4 + "px";

      const btn = document.getElementById("btn");
      if (btn) {
        btn.style.marginTop = value * 1.5 + "px";
      }

      
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div >
      <header className="">
        <a href="#" className="logo">
          Logo
        </a>
        <div className="max-[770px]:hidden">
        <ul>
          <li>
            <a href="#" className="nav-mercury">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-venus">
              <span>Mission</span>
            </a>
          </li>
          <li>
            <a href="#mission" className="nav-earth">
              <span>Team</span>
            </a>
          </li>
        </ul>
        </div>
        <div className="md:hidden ">

          <button className="flex-center" onClick={() =>  setMenuOpen((opened) => !opened)}>
            <AlignJustify className={`hover:w-8 hover:h-8 w-6 h-6 transition-all ease-out flex-center text-[#E6E6FA] ${menuOpen ? 'rotate-90' : ''}`}/>
          </button>
          {
            menuOpen && (
                <div
                className="z-150 absolute top-20 right-10 w-32 bg-[#211a48] shadow-lg rounded-lg p-4 transition-all duration-300 ease-out transform animate-fadeIn flex flex-col gap-2"

              >
                <a href="">
                  <span>About</span>
                </a>
                <a href="#mission">
                  <span >Mission</span>
                </a>
                <a href="">
                  <span>Team</span>
                </a>
              </div>
            )
          }
        </div>
      </header>

      <section>
        <img src="/images/stars.png" id="stars" alt="Stars" />
        <img src="/images/moon.png" id="moon" alt="Moon" />
        <img src="/images/peron.png" id="stars_beh" alt="Background Stars" />
  

        <div className="event-heading font-bold">
          <h2 id="text" className="text-[9rem] max-[1125px]:text-[5rem] max-[660px]:text-[3.5rem] max-[460px]:text-[2.75rem] transition-[font-size] duration-300 ease-in-out bg-gradient-to-r from-[#8E7DBE] from-5% to-[#FF8282] to-90% opacity-[0.8] bg-clip-text text-transparent">PATRIOTHACKS</h2>
          <h3 id="date" className="bg-gradient-to-r from-[#E6E6FA] from-5% to-[#a8458e] to-90% opacity-[0.8] bg-clip-text text-transparent">October 10–12 2025</h3>
        </div>

        <div className="countdown-wrapper">
          <div className="timebox">
            <div className="time">
              <h2 id="days" className="text-[2.5rem]">{time.days}</h2>
              
            </div>
            <div className="time">
              <h2 id="hours" className="text-[2.5rem]">{time.hours}</h2>
              
            </div>
            <div className="time">
              <h2 id="minutes" className="text-[2.5rem]">{time.minutes}</h2>
              
            </div>
            <div className="time max-[461px]:hidden">
              <h2 id="seconds" className="text-[2.5rem]">{time.seconds}</h2>
              
            </div>
          </div>
        </div>

        <div className="email-inline">
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSexWEghOafLrVeLYZOT7wnGxBQEsE5aH_Seby-MCeX5iLjTwQ/formResponse"
            method="POST"
            target="_blank"
          >
            <label htmlFor="email">
              Interested? Enter your email to be updated!
            </label>
            <div className="email-bar">
              <input
                type="email"
                name="entry.1423941202"
                id="email"
                placeholder="Your email"
                required
              />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

        <img src="/images/gpt.png" id="stars_front" alt="Foreground Stars" />
      </section>

      <section className="mission" id="mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>At PatriotHacks, our mission is to.....</p>
          <p>More content ...</p>
        </div>
      </section>

    </div>
  );
};

export default App;

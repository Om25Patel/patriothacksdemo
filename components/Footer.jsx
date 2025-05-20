
import {Instagram, Earth, Linkedin} from "lucide-react";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="gap-y-4 py-8 opacity-100 w-full bg-gradient-to-r from-[#571c52] from-5% to-[#291f64] to-90% flex items-center justify-center">
    <div className="w-[780px]">
    <div className="max-[900px]:flex-col flex items-center justify-between">
    <div className="flex flex-row gap-2">
    <h1 className="font-semibold text-2xl text-white text-center black_gradient">
        © {new Date().getFullYear()} PatriotHacks
    </h1>
    </div>
    <div className="flex gap-4 max-[900px]:mt-2">
      <a
        href={'https://www.instagram.com/patriothacks/'}
        rel="noopener noreferrer"
        target="_blank"
        
      >
        <FaInstagram className="w-[36px] h-[36px] text-white"/>
      </a>
      <a
      href={'https://www.linkedin.com/company/patriothacks'}
      rel="noopener noreferrer"
      target="_blank"
      >
        <RxLinkedinLogo className="w-[36px] h-[36px] text-white"/>
      </a>
      <a
      href={'https://www.x.com/patriothacks'}
      rel="noopener noreferrer"
      target="_blank"
      >
        <FaSquareXTwitter className="w-[36px] h-[36px] text-white"/>
      </a>
    </div>
    </div>
    <div className="max-[900px]:flex-col flex items-center justify-between w-full mt-2 text-center max-[450px]:px-16">
      <div className="">
        <span className="text-white text-sm w-full">Interested in sponsoring us? Please fill out </span>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSexWEghOafLrVeLYZOT7wnGxBQEsE5aH_Seby-MCeX5iLjTwQ/viewform?usp=sf_link" className="text-white text-sm underline">this form</a>
      </div>
      <div className="">
        <span className="text-white text-sm w-full">Or Get in Touch: </span>
        <a href="mailto:patriothacksgmu@gmail.com" className="text-white text-sm underline">patriothacksgmu@gmail.com</a>
      </div>
    </div>
    <div className=" flex-center w-full mt-2 max-[900px]:text-center max-[450px]:px-16">
      
      <a href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" 
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-sm underline">MLH Code of Conduct</a>
    </div>
    </div>
    </footer>
  )
}

export default Footer;
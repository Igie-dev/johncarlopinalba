import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import Logo from "@/shared/Logo";
import SocialIcons from "@/shared/SocialIcons";
export default function FooterSection() {
	return (
		<>
			{/* <footer className=" footer text-base-content flex  flex-col w-full gap-10 !pl-5 mt-20  py-32  section md:items-center lg:h-[30vh] md:flex-row  md:justify-around ">
				<span className="">
					<Logo />
				</span>
				<nav>
					<header className="footer-title">Services</header>
					<a className="link link-hover">Branding</a>
					<a className="link link-hover">Design</a>
					<a className="link link-hover">Marketing</a>
					<a className="link link-hover">Advertisement</a>
				</nav>
				<nav>
					<header className="footer-title">Company</header>
					<a className="link link-hover">About</a>
					<a className="link link-hover">Service</a>
					<a className="link link-hover">Contact</a>
					<a className="link link-hover">Projects</a>
					<a className="link link-hover">Blog</a>
				</nav>
				<nav>
					<header className="footer-title">Social</header>
					<div className="grid grid-flow-col gap-4">
						<SocialIcons />
					</div>
				</nav>
			</footer> */}
			<div className="flex items-center justify-center w-full h-[20vh] pt-20 ">
				<div className="w-[90%] h-full border-t  border-neutral-content flex items-center justify-center">
					<p className="text-xs">© 2023. All rights reserved.</p>
				</div>
			</div>
		</>
	);
}

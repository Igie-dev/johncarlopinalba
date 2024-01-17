import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import Logo from "@/shared/Logo";
export default function FooterSection() {
	return (
		<>
			<footer className="rounded-tl-[10rem] footer bg-base-300 text-base-content flex  flex-col w-full gap-10 !pl-5  py-32  section md:items-center lg:h-[30vh] lg:flex-row lg:justify-around ">
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
						<a href="#">
							<FaFacebookSquare className="w-5 h-5 pointer-events-none" />
						</a>

						<a href="#">
							<FaInstagram className="w-5 h-5 pointer-events-none" />
						</a>

						<a href="#">
							<BsTwitterX className="w-5 h-5 pointer-events-none" />
						</a>

						<a href="#">
							<FaLinkedin className="w-5 h-5 pointer-events-none" />
						</a>
					</div>
				</nav>
			</footer>
			<div className="flex items-center justify-center w-full h-20 bg-base-300">
				<div className="w-[90%] h-full border-t  border-neutral-content flex items-center justify-center">
					<p className="text-xs">© 2023. All rights reserved.</p>
				</div>
			</div>
		</>
	);
}

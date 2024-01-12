import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import Logo from "@/shared/Logo";
export default function Footer() {
	return (
		<footer className="p-10 footer bg-base-300 text-base-content flex  flex-col w-full gap-10 py-10 section md:items-center lg:h-[30vh] lg:flex-row lg:justify-between border-t">
			<span>
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
	);
}

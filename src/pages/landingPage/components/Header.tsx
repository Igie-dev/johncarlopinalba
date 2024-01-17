import Logo from "@/shared/Logo";
import NavigationButton from "./NavigationButton";
export default function Header() {
	return (
		<header className="items-center justify-between w-full h-20 section md:flex">
			<div className="w-full h-full px-2 border-b navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-2 shadow bg-base-100 rounded-box w-52">
							<li>
								<NavigationButton scrollToId="about" btnName="About" />
							</li>
							<li>
								<NavigationButton scrollToId="service" btnName="Service" />
							</li>
							<li>
								<NavigationButton scrollToId="projects" btnName="Projects" />
							</li>
							<li>
								<NavigationButton scrollToId="blog" btnName="Blog" />
							</li>
							<li>
								<NavigationButton scrollToId="contact" btnName="Contact" />
							</li>
						</ul>
					</div>
					<a className="text-xl btn btn-ghost">
						<Logo />
					</a>
				</div>
				<div className="hidden navbar-center lg:flex">
					<ul className="gap-2 px-1 menu menu-horizontal">
						<li>
							<NavigationButton scrollToId="about" btnName="About" />
						</li>
						<li>
							<NavigationButton scrollToId="service" btnName="Service" />
						</li>
						<li>
							<NavigationButton scrollToId="projects" btnName="Projects" />
						</li>{" "}
						<li>
							<NavigationButton scrollToId="blog" btnName="Blog" />
						</li>
						<li>
							<NavigationButton scrollToId="contact" btnName="Contact" />
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					<button className="text-xs btn btn-sm btn-primary">Sign up</button>
				</div>
			</div>
		</header>
	);
}

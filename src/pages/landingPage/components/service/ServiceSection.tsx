import { useInView } from "framer-motion";
import { useRef } from "react";
import ServiceHeader from "./components/ServiceHeader";
export default function ServiceSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	return (
		<section
			ref={ref}
			id="service"
			className="relative flex flex-col items-center w-full gap-10 section h-fit">
			<ServiceHeader />
			<main
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
				}}
				className="flex my-48 md:mt-60">
				<div className="w-full">
					<div className="flex flex-col w-full mb-10 sm:flex-row">
						<div className="w-full mb-10 sm:mb-0 sm:w-1/2 ">
							<div className="relative h-full ml-0 mr-0 sm:mr-10 group-hover:scale-105">
								<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg bg-success"></span>
								<div className="relative h-full p-5 transition-all bg-white border-2 rounded-lg border-success hover:scale-105">
									<div className="flex items-center -mt-1">
										<h3 className="my-2 ml-3 text-lg font-bold ">
											DAPP Development
										</h3>
									</div>
									<p className="mt-3 mb-1 text-xs font-medium uppercase text-success">
										------------
									</p>
									<p className="mb-2 ">
										A decentralized application (dapp) is an application built
										on a decentralized network that combines a smart contract
										and a frontend user interface.
									</p>
								</div>
							</div>
						</div>
						<div className="w-full sm:w-1/2">
							<div className="relative h-full ml-0 md:mr-10">
								<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg bg-neutral"></span>
								<div className="relative h-full p-5 transition-all bg-white border-2 rounded-lg border-neutral hover:scale-105">
									<div className="flex items-center -mt-1">
										<h3 className="my-2 ml-3 text-lg font-bold ">
											Web 3.0 Development
										</h3>
									</div>
									<p className="mt-3 mb-1 text-xs font-medium uppercase text-neutral">
										------------
									</p>
									<p className="mb-2 ">
										Web 3.0 is the third generation of Internet services that
										will focus on understanding and analyzing data to provide a
										semantic web.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full mb-5 sm:flex-row">
						<div className="w-full mb-10 sm:mb-0 sm:w-1/2 ">
							<div className="relative h-full ml-0 mr-0 sm:mr-10 ">
								<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg bg-accent"></span>
								<div className="relative h-full p-5 transition-all bg-white border-2 rounded-lg border-accent hover:scale-105">
									<div className="flex items-center -mt-1">
										<h3 className="my-2 ml-3 text-lg font-bold ">
											Project Audit
										</h3>
									</div>
									<p className="mt-3 mb-1 text-xs font-medium uppercase text-accent">
										------------
									</p>
									<p className="mb-2 ">
										A Project Audit is a formal review of a project, which is
										intended to assess the extent up to which project management
										standards are being upheld.
									</p>
								</div>
							</div>
						</div>
						<div className="w-full mb-10 sm:mb-0 sm:w-1/2">
							<div className="relative h-full ml-0 mr-0 sm:mr-10">
								<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg bg-secondary"></span>
								<div className="relative h-full p-5 transition-all bg-white border-2 rounded-lg border-secondary hover:scale-105">
									<div className="flex items-center -mt-1">
										<h3 className="my-2 ml-3 text-lg font-bold ">
											Hacking / RE
										</h3>
									</div>
									<p className="mt-3 mb-1 text-xs font-medium uppercase text-secondary">
										------------
									</p>
									<p className="mb-2 ">
										A security hacker is someone who explores methods for
										breaching defenses and exploiting weaknesses in a computer
										system or network.
									</p>
								</div>
							</div>
						</div>
						<div className="w-full sm:w-1/2">
							<div className="relative h-full ml-0 md:mr-10">
								<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg bg-primary"></span>
								<div className="relative h-full p-5 transition-all bg-white border-2 rounded-lg border-primary hover:scale-105">
									<div className="flex items-center -mt-1">
										<h3 className="my-2 ml-3 text-lg font-bold ">
											Bot/Script Development
										</h3>
									</div>
									<p className="mt-3 mb-1 text-xs font-medium uppercase text-primary">
										------------
									</p>
									<p className="mb-2 ">
										Bot development frameworks were created as advanced software
										tools that eliminate a large amount of manual work and
										accelerate the development process.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
}

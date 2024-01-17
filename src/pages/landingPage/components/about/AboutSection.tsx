import aboutPhoto from "@/assets/about_photo.png";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
export default function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	return (
		<section
			id="about"
			className="flex flex-col-reverse w-full gap-5 py-10 section h-fit lg:py-20 lg:gap-0 xl:gap-4 xl:flex-row ">
			<div
				ref={ref}
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
				}}
				className="w-full h-[50vh] md:w-[60%] flex items-center flex-col gap-16  py-10  xl:h-full justify-center lg:w-[70%] xl:w-[50%] lg:h-fit">
				<div className="w-[30rem] h-[30rem]  relative border-b-4 rounded-full  pb-2 xl:h-[35rem] xl:w-[35rem] 2xl:h-[40rem] 2xl:w-[40rem] 2xl:max-w-[40rem] 2xl:max-h-[40rem]">
					<span className="absolute top-0 left-0 w-full h-full rounded-full blur-3xl bg-secondary/20 -z-0" />
					<img
						alt="Hero Picture"
						loading="lazy"
						src={aboutPhoto}
						className="relative w-full h-full rounded-full object-contaun"
					/>
				</div>
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
			</div>
			<div
				ref={ref}
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
				}}
				className="w-full md:w-[80%] flex  flex-col  p-5 gap-5 lg:h-full lg:w-[80%]  xl:w-[50%]  xl:border-l">
				<p className="my-10 text-sm text-primary">About me</p>
				<h4 className="text-sm font-semibold opacity-70">
					HELLO IT'S NICE TO SEE YOU HERE
				</h4>
				<h1 className="text-xl font-extrabold sm:text-2xl md:text-3xl lg:text-4xl">
					I'm Igie Baldesanso
				</h1>
				<div className="flex flex-col gap-2">
					<p className="text-sm text-balance ">
						With a proven track record of delivering successful projects, I
						offer expertise in electrical engineering and a commitment to
						excellence. With a proven track record of delivering successful
						projects, I offer expertise in electrical engineering and a a
						commitment to excellence.
					</p>
					<p className="text-sm text-balance ">
						With a proven track record of delivering successful projects, I
						offer expertise in electrical engineering and a commitment to
						excellence. With a proven track record of delivering successful
						projects, I offer expertise in electrical engineering and a a
						commitment to excellence.
					</p>
					<p className="text-sm text-balance ">
						With a proven track record of delivering successful projects, I
						offer expertise in electrical engineering and a commitment to
						excellence. With a proven track record of delivering successful
						projects, I offer expertise in electrical engineering and a a
						commitment to excellence.
					</p>
				</div>

				<div className="flex flex-col items-start gap-5 mt-20">
					<div className="flex items-center gap-8">
						<GrLocation className="w-4 h-4" />
						<p className="text-sm">Marikina City</p>
					</div>
					<div className="flex items-center gap-8">
						<MdOutlineLocalPhone className="w-4 h-4" />
						<p className="text-sm">+63952421841</p>
					</div>
					<div className="flex items-center gap-8">
						<MdOutlineEmail className="w-4 h-4" />
						<p className="text-sm">sample@gmailcom</p>
					</div>
				</div>

				<div className="flex items-center gap-10 mt-10">
					<div className="flex flex-col items-center opacity-70">
						<h5 className="text-lg font-bold ">0 Years</h5>
						<p className="text-xs ">Experience</p>
					</div>
					<div className="flex flex-col items-center opacity-70">
						<h5 className="text-lg font-bold ">100+</h5>
						<p className="text-xs ">Clients</p>
					</div>
					<div className="flex flex-col items-center opacity-70">
						<h5 className="text-lg font-bold ">99.9%</h5>
						<p className="text-xs ">Satisfaction</p>
					</div>
				</div>
				<button className="mt-16 text-xs btn btn-outline w-fit">
					DOWNLOAD CV
				</button>
			</div>
		</section>
	);
}

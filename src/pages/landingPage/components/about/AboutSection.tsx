import { useInView } from "framer-motion";
import { lazy, useRef } from "react";
import SocialIcons from "@/shared/SocialIcons";
import AboutContactDetails from "./components/AboutContactDetails";
import AboutExperience from "./components/AboutExperience";
const AboutImage = lazy(() => import("./components/AboutImage"));
export default function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	return (
		<section
			id="about"
			className="flex flex-col-reverse w-full gap-5 py-10 section h-fit lg:py-20 lg:gap-4 xl:flex-row ">
			<div
				ref={ref}
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
				}}
				className="w-full h-[70vh] md:w-[50%] flex justify-center items-center flex-col gap-16  py-10  xl:h-full  lg:w-[50%]  lg:h-fit">
				<div className="w-[90%] h-full  flex overflow-hidden  items-center justify-center relative lg:w-full lg:h-[40rem] lg:max-w-[40rem]">
					{/* <span className="absolute top-0 left-0 w-full h-full rounded-full blur-3xl bg-secondary/20 -z-0" /> */}
					<AboutImage />
					<div
						style={{
							background:
								"linear-gradient(to bottom,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.7) 100%)",
						}}
						className="absolute bottom-0 left-0 z-10 w-full h-[30%] flex flex-col justify-end py-5 text-base-300  px-4">
						<h2 className="text-lg font-semibold md:text-xl lg:text-2xl">
							John Carlo Pinalba
						</h2>
						<p className="text-sm">28 Years old</p>
						<p className="text-sm">Electrical Engineer</p>
					</div>
				</div>
				<div className="grid grid-flow-col gap-4">
					<SocialIcons />
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
					I'm John Carlo Pinalba
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
					<AboutContactDetails />
				</div>

				<div className="flex items-center gap-10 mt-10">
					<AboutExperience />
				</div>
				<button className="mt-16 text-xs btn btn-outline w-fit">
					DOWNLOAD CV
				</button>
			</div>
		</section>
	);
}

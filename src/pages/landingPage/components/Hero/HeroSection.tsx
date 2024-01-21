import { useInView } from "framer-motion";
import { useRef } from "react";
import HeroBgImg from "@/assets/hero_bg_img.jpg";
import HeroCard from "./components/HeroCard";
import Header from "./components/Header";
export default function HeroSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });
	return (
		<section className="relative flex flex-col w-full h-fit bg-neutral">
			<div
				style={{
					backgroundImage: `url(${HeroBgImg})`,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
				className="relative w-full h-[80vh] md:h-[85vh]">
				<Header />
				{/* Card */}
				<HeroCard />
				<span
					style={{
						background:
							"linear-gradient(180deg, rgba(20,42,55,1) 0%, rgba(116,193,240,0) 15%)",
					}}
					className="absolute top-0 left-0 w-full h-full -z-5"
				/>
				<span
					style={{
						background:
							"linear-gradient(0deg, rgba(20,42,55,1) 0%, rgba(116,193,240,0) 10%)",
					}}
					className="absolute top-0 left-0 w-full h-full"
				/>
			</div>
			<div
				ref={ref}
				className="h-[75vh] relative w-full flex gap-4 flex-col items-start justify-center md:h-[95vh] bg-neutral text-white">
				<span
					style={{
						background:
							"linear-gradient(180deg, rgba(20,42,55,1) 0%, rgba(116,193,240,0) 20%)",
					}}
					className="absolute top-0 left-0 w-full h-full -z-5"
				/>
				<h3
					style={{
						opacity: isInView ? 1 : 0,
						transform: isInView ? "translate(0)" : "translate(-200px)",
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
					}}
					className="text-2xl ml-[5%] font-extrabold text-center tracking-wide   md:text-4xl lg:text-5xl xl:text-6xl ">
					Spark Success on a Budget
				</h3>
				<h3
					style={{
						opacity: isInView ? 1 : 0,
						transform: isInView ? "translate(0)" : "translate(-200px)",
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
					}}
					className="text-2xl font-extrabold text-center tracking-wide ml-[15%]  md:text-4xl lg:text-5xl xl:text-6xl ">
					Unleashing Expertise
				</h3>
				<h3
					style={{
						opacity: isInView ? 1 : 0,
						transform: isInView ? "translate(0)" : "translate(-200px)",
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}
					className="text-2xl font-extrabold text-center tracking-wide ml-[25%] md:text-4xl lg:text-5xl xl:text-6xl ">
					Illuminating Solutions
				</h3>
			</div>
		</section>
	);
}

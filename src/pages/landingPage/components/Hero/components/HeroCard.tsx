import { useInView } from "framer-motion";
import { useRef } from "react";

export default function HeroCard() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });
	return (
		<div
			ref={ref}
			style={{
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
			}}
			className="absolute -bottom-28 text-white  z-10 h-[19rem] w-[90%] flex flex-col border border-base-content justify-evenly p-5  right-1/2 transform translate-x-1/2 bg-neutral/90 md:right-[10%] md:translate-x-0 md:h-[28rem] md:w-[30rem] shadow-xl rounded-md">
			<h1 className="text-2xl font-extrabold sm:text-3xl md:text-4xl">
				Experienced Electrical Engineer Specializing in Innovative Solutions
			</h1>
			<p className="text-sm text-balance ">
				With a proven track record of delivering successful projects, I offer
				expertise in electrical engineering and a commitment to excellence.
			</p>
			<button className="mt-10 text-white btn btn-outline w-fit">
				Learn more
			</button>
		</div>
	);
}

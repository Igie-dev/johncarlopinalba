import { useInView } from "framer-motion";
import { useRef } from "react";
export default function ServiceHeader() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	return (
		<header
			ref={ref}
			style={{
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
			}}
			className="absolute flex flex-col items-center w-[97%] right-1/2 transform translate-x-1/2 gap-5 px-2 py-16 shadow-lg text-white rounded-md -top-28 bg-neutral/90 border-2 border-base-content max-w-[60rem]">
			<p className="text-sm text-primary">Servcie</p>
			<h3 className="text-xl font-semibold text-center md:text-3xl lg:text-4xl">
				Tailored Electrical Engineering Solutions <br />
				for Your Visionary Projects.
			</h3>
			<p className="text-xs text-center sm:text-sm">
				Unleashing Precision and Innovation in Every Electrical Service.
			</p>
		</header>
	);
}

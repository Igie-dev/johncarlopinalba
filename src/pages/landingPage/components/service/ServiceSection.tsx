import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ServiceSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	return (
		<section
			ref={ref}
			id="service"
			className="relative flex flex-col items-center w-full gap-10 my-10 section h-fit ">
			<header className="flex flex-col items-center w-full gap-5 py-10">
				<p className="my-10 text-sm text-primary">Servcie</p>
				<h3 className="text-2xl font-semibold text-center md:text-3xl lg:text-4xl">
					Tailored Electrical Engineering Solutions <br />
					for Your Visionary Projects.
				</h3>
				<p className="text-sm text-center sm:text-base">
					Unleashing Precision and Innovation in Every Electrical Service.
				</p>
			</header>
			<main className="grid w-full grid-cols-1 grid-rows-4 gap-5 p-2 h-fit md:grid-rows-2 md:grid-cols-2 md:w-fit"></main>
		</section>
	);
}

import { useRef } from "react";
import ProjectCard from "./components/ProjectCard";
import db from "@/db/db.json";
import { useInView } from "framer-motion";
export type TProject = {
	id: string;
	name: string;
	descriptions: string;
	image_url: string;
	project_url: string;
	tags: string[];
};
export default function ProjectsSection() {
	const projects: TProject[] = db.projects.slice(0, 3);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	return (
		<section
			ref={ref}
			id="projects"
			className="relative flex flex-col items-center w-full gap-10 my-10 section h-fit ">
			<header
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
				className="flex flex-col w-full p-2">
				<p className="my-10 text-sm text-primary">Portfolio</p>
				<h2 className="text-xl md:text-2xl  lg:text-4xl sm:w-[80%] lg:max-w-[60%]">
					A Showcase of My Exceptional Freelance Electrical Engineering Projects
				</h2>
				<p className="text-lg">Bringing Your Electrical Dreams to Life</p>
			</header>

			<main className="flex flex-col w-full">
				{projects?.map((project: TProject) => {
					return <ProjectCard key={project.id} project={project} />;
				})}
			</main>
			<button className="my-10 btn btn-outline w-fit">View all </button>
		</section>
	);
}

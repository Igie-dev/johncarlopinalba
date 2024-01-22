import { MdArrowForwardIos } from "react-icons/md";
import { TProject } from "../ProjectsSection";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCardImg from "./ProjectCardImg";
type Props = {
	project: TProject;
};

export default function ProjectCard({ project }: Props) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	return (
		<div
			ref={ref}
			className="flex flex-col w-full gap-2 py-5 border-t-2 xl:flex-row">
			<div
				style={{
					transform: isInView ? "translateX(0px)" : "translateX(-200px)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
				className="flex flex-col min-h-[16rem] px-2 md:px-10 gap-2 justify-center w-full  md:w-[60%] xl:w-[50%]">
				<h2 className="text-lg font-semibold md:text-xl lg:text-2xl">
					{project.name}
				</h2>
				<p className="text-sm max-w-[70%]">{project.descriptions}</p>
				{/* tags */}
				<div className="flex items-center gap-2 mt-5 max-w-[16rem] flex-wrap">
					{project.tags.map((tag, i) => {
						return (
							<p key={i} className="p-2 text-xs rounded-sm w-fit bg-base-200">
								{tag}
							</p>
						);
					})}
				</div>
				<button className="flex items-center gap-2 mt-10 text-sm w-fit h-fit hover:text-primary">
					<p>View project</p> <MdArrowForwardIos className="w-4 h-4" />
				</button>
			</div>
			<div
				style={{
					transform: isInView ? "translateX(0px)" : "translateX(200px)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
				className="w-full h-[20rem] md:w-[50%] self-end xl:flex-1 xl:p-4 xl:h-[32rem] ">
				<ProjectCardImg imgUrl={project.image_url} />
			</div>
		</div>
	);
}

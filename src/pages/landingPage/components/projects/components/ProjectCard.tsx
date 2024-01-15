import { MdArrowForwardIos } from "react-icons/md";
import { TProject } from "../Projects";
type Props = {
	project: TProject;
};
export default function ProjectCard({ project }: Props) {
	return (
		<div className="w-full flex flex-col gap-2 py-5 border-t-2 xl:flex-row">
			<div className="flex flex-col min-h-[16rem] px-10 gap-2 justify-center w-full  md:w-[60%] xl:w-[50%]">
				<h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
					{project.name}
				</h2>
				<p className="text-sm max-w-[70%]">{project.descriptions}</p>
				{/* tags */}
				<div className="flex items-center gap-2 mt-5 max-w-[16rem] flex-wrap">
					{project.tags.map((tag) => {
						return (
							<p key={tag} className="p-2 text-xs w-fit bg-base-200 rounded-sm">
								{tag}
							</p>
						);
					})}
				</div>
				<button className="w-fit h-fit flex gap-2 text-sm  items-center hover:text-primary mt-10">
					<p>View project</p> <MdArrowForwardIos className="w-4 h-4" />
				</button>
			</div>
			<div className="w-full h-[20rem] md:w-[50%] self-end xl:flex-1 xl:p-4 xl:h-[32rem] ">
				<img
					loading="lazy"
					alt="project image"
					src={project.image_url}
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
}

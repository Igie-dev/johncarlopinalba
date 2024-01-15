import ProjectCard from "./components/ProjectCard";
import image_1 from "@/assets/bolb.jpg";
import image_2 from "@/assets/paper_design.jpg";
import image_3 from "@/assets/paper_design_2.jpg";
import image_4 from "@/assets/paper_design_3.jpg";
import image_5 from "@/assets/project_photo_4.jpg";
export type TProject = {
	id: string;
	name: string;
	descriptions: string;
	image_url: string;
	project_url: string;
	tags: string[];
};
export default function Projects() {
	const projects: TProject[] = [
		{
			id: "1",
			name: "Project 1",
			descriptions:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
			image_url: `${image_1}`,
			project_url: "",
			tags: ["tag 1", "tag 2", "tag 3"],
		},
		{
			id: "2",
			name: "Project 2",
			descriptions:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
			image_url: `${image_2}`,
			project_url: "",
			tags: ["tag 1", "tag 2", "tag 3"],
		},
		{
			id: "3",
			name: "Project 3",
			descriptions:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
			image_url: `${image_3}`,
			project_url: "",
			tags: ["tag 1", "tag 2", "tag 3"],
		},
		{
			id: "4",
			name: "Project 4",
			descriptions:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
			image_url: `${image_4}`,
			project_url: "",
			tags: ["tag 1", "tag 2", "tag 3"],
		},
		{
			id: "5",
			name: "Project 5",
			descriptions:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
			image_url: `${image_5}`,
			project_url: "",
			tags: ["tag 1", "tag 2", "tag 3", "tag 3", "tag 4", "tag 5"],
		},
	];
	return (
		<section className="section w-full h-fit my-10 gap-10 flex flex-col items-center">
			<header className="w-full flex flex-col p-2">
				<p className="text-sm my-10 text-primary">Portfolio</p>
				<h2 className="text-xl md:text-2xl  lg:text-4xl sm:w-[80%] lg:max-w-[60%]">
					A Showcase of My Exceptional Freelance Electrical Engineering Projects
				</h2>
				<p className="text-lg">Bringing Your Electrical Dreams to Life</p>
			</header>

			<main className="w-full flex flex-col">
				{projects?.map((project: TProject) => {
					return <ProjectCard key={project.id} project={project} />;
				})}
			</main>
			<button className="btn btn-outline w-fit my-10">View all </button>
		</section>
	);
}

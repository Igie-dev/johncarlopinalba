export default function ProjectCardImg({ imgUrl }: { imgUrl: string }) {
	return (
		<img
			loading="lazy"
			alt="project image"
			src={imgUrl}
			className="object-cover w-full h-full"
		/>
	);
}

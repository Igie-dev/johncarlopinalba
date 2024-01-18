export default function HeroImg({ imgUrl }: { imgUrl: string }) {
	return (
		<img
			alt="Hero Picture"
			loading="lazy"
			src={imgUrl}
			className="relative object-cover w-full h-full rounded-md"
		/>
	);
}

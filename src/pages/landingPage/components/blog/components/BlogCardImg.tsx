export default function BlogCardImg({ imgUrl }: { imgUrl: string }) {
	return (
		<img
			alt="blog image"
			loading="lazy"
			src={imgUrl}
			className="w-[90%] h-[90%] object-cover"
		/>
	);
}

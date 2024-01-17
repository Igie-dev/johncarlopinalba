import { useInView } from "framer-motion";
import { useRef } from "react";
import { MdArrowForwardIos } from "react-icons/md";

type TBlog = {
	title: string;
	descriptions: string;
	image: string;
	readTime: string;
	category: string;
};
type Props = {
	blog: TBlog;
	index: number;
};
export default function BlogCard({ blog, index }: Props) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	return (
		<div
			ref={ref}
			style={{
				opacity: isInView ? 1 : 0,
				transition: `all ${
					0.8 + index
				}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s`,
			}}
			className="flex gap-2   h-[15rem] max-w-[35rem] items-center justify-center">
			<div className="h-full w-[45%]  flex items-center justify-center">
				<img
					alt="blog image"
					loading="lazy"
					src={blog.image}
					className="w-[90%] h-[90%] object-cover"
				/>
			</div>
			<div className="flex flex-col flex-1 h-full gap-4 px-2 py-4 ">
				<div className="flex items-center gap-4">
					<p className="p-2 text-xs rounded-md bg-base-200">{blog.category}</p>
					<p className="text-xs">{blog.readTime + "min read"}</p>
				</div>
				<div className="flex flex-col flex-1 gap-2">
					<h4 className="text-lg font-semibold">{blog.title}</h4>
					{blog.descriptions.length > 80 ? (
						<p className="text-xs">{`${blog.descriptions.slice(0, 80)}...`}</p>
					) : (
						<p className="text-xs">{blog.descriptions}</p>
					)}
				</div>
				<button className="flex items-center gap-2 mt-10 text-xs w-fit h-fit hover:text-primary">
					<p>Read more</p> <MdArrowForwardIos className="w-4 h-4" />
				</button>
			</div>
		</div>
	);
}

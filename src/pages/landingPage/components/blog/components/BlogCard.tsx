import { useInView } from "framer-motion";
import { lazy, useRef } from "react";
import { MdArrowForwardIos } from "react-icons/md";
const BlogCardImg = lazy(() => import("./BlogCardImg"));
type TBlog = {
	title: string;
	descriptions: string;
	image: string;
	readTime: string;
	category: string;
};
type Props = {
	blog: TBlog;
};
export default function BlogCard({ blog }: Props) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	return (
		<div
			ref={ref}
			style={{
				opacity: isInView ? 1 : 0,
				transition: `all ${0.2}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s`,
			}}
			className="flex gap-2   h-[15rem] max-w-[40rem] items-center justify-center hover:bg-base-300 cursor-pointer !hover:duration-50 !hover:delay-0 hover:scale-105 rounded-md">
			<div className="h-full w-[45%]  flex items-center justify-center">
				<BlogCardImg imgUrl={blog.image} />
			</div>
			<div className="flex flex-col justify-between flex-1 h-full px-2 py-4 ">
				<div className="flex items-center gap-4">
					<p className="p-2 text-xs rounded-md bg-base-200">{blog.category}</p>
					<p className="text-xs">{blog.readTime + "min read"}</p>
				</div>
				<div className="flex flex-col flex-1 gap-2 mt-2">
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

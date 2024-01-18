import db from "@/db/db.json";
import BlogCard from "./components/BlogCard";
export default function BlogSection() {
	const blogs = db.blogs.slice(0, 4);

	return (
		<section
			id="blog"
			className="flex flex-col items-center w-full gap-20 my-10 section h-fit">
			<header className="flex flex-col items-center w-full gap-5 py-10">
				<p className="my-10 text-sm text-primary">Blog</p>
				<h3 className="text-2xl font-semibold text-center md:text-3xl lg:text-4xl">
					Illuminating the Path <br /> to Innovation in My Blogosphere.
				</h3>
				<p className="text-sm text-center sm:text-base">
					Journey with me through the circuits of knowledge, <br /> where sparks
					of wisdom ignite ideas and illuminate the fascinating world of
					electrical engineering.
				</p>
			</header>
			<main className="grid w-full grid-cols-1 grid-rows-4 gap-5 p-2 h-fit md:grid-rows-2 md:grid-cols-2 md:w-fit">
				{blogs.map((blog, i) => {
					return <BlogCard key={i} blog={blog} />;
				})}
			</main>
			<button className="my-10 btn btn-outline w-fit">View all </button>
		</section>
	);
}

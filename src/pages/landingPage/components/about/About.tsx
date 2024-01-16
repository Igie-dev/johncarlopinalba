import aboutPhoto from "@/assets/about_photo.png";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
export default function About() {
	return (
		<section className="flex  w-full gap-5 py-5 section h-fit flex-col-reverse xl:h-[90vh] lg:gap-0 xl:gap-4  xl:flex-row ">
			<div className="w-full h-[50vh] md:w-[60%] flex items-center   py-10  xl:h-full justify-center lg:w-[70%] xl:w-[50%] lg:h-fit">
				<div className="w-[30rem] h-[30rem]  relative border-b-4 rounded-full  pb-2 xl:h-[35rem] xl:w-[35rem] 2xl:h-[40rem] 2xl:w-[40rem] 2xl:max-w-[40rem] 2xl:max-h-[40rem]">
					<span className="absolute top-0 left-0 w-full h-full rounded-full blur-3xl bg-secondary/20 -z-0" />
					<img
						alt="Hero Picture"
						src={aboutPhoto}
						className="relative w-full h-full rounded-full object-contaun"
					/>
				</div>
			</div>
			<div className="w-full md:w-[80%] flex  flex-col  p-5 gap-5 lg:h-full lg:w-[80%]  xl:w-[50%]  xl:border-l">
				<p className="my-10 text-sm text-primary">About me</p>
				<h4 className="text-sm font-semibold opacity-70">
					HELLO IT'S NICE TO SEE YOU HERE{" "}
				</h4>
				<h1 className="text-xl font-extrabold sm:text-2xl md:text-3xl lg:text-4xl">
					I'm Igie Baldesanso
				</h1>
				<div className="flex flex-col gap-2">
					<p className="text-sm text-balance ">
						With a proven track record of delivering successful projects, I
						offer expertise in electrical engineering and a commitment to
						excellence. With a proven track record of delivering successful
						projects, I offer expertise in electrical engineering and a a
						commitment to excellence.
					</p>
					<p className="text-sm text-balance ">
						With a proven track record of delivering successful projects, I
						offer expertise in electrical engineering and a commitment to
						excellence. With a proven track record of delivering successful
						projects, I offer expertise in electrical engineering and a a
						commitment to excellence.
					</p>
					<p className="text-sm text-balance ">
						With a proven track record of delivering successful projects, I
						offer expertise in electrical engineering and a commitment to
						excellence. With a proven track record of delivering successful
						projects, I offer expertise in electrical engineering and a a
						commitment to excellence.
					</p>
				</div>

				<div className="flex flex-col items-start gap-5 mt-20">
					<div className="flex items-center gap-5">
						<GrLocation className="w-4 h-4" />
						<p className="text-sm">Marikina City</p>
					</div>
					<div className="flex items-center gap-5">
						<MdOutlineLocalPhone className="w-4 h-4" />{" "}
						<p className="text-sm">+63952421841</p>
					</div>
					<div className="flex items-center gap-5">
						<MdOutlineEmail className="w-4 h-4" />{" "}
						<p className="text-sm">sample@gmailcom</p>
					</div>
				</div>
				<button className="px-4 py-3 mt-10 text-xs font-semibold border rounded-md bg-primary-content w-fit ">
					DOWNLOAD CV
				</button>
			</div>
		</section>
	);
}

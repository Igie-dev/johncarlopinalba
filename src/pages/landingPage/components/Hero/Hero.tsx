import heroImageSrc from "@/assets/hero_photo (1).jpg";
export default function Hero() {
	return (
		<section className="flex flex-col w-full gap-5 py-5  section h-fit xl:h-[90vh] lg:gap-0  xl:flex-row ">
			<div className="w-full md:w-[80%] flex self-start flex-col  p-5 gap-5 lg:h-[90%] lg:w-[80%]  xl:w-[50%]  lg:justify-center">
				<h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
					Experienced Electrical Engineer Specializing in Innovative Solutions
				</h1>
				<p className="text-sm text-balance ">
					With a proven track record of delivering successful projects, I offer
					expertise in electrical engineering and a commitment to excellence.
				</p>
				<div className="flex items-center gap-2 mt-5">
					<button className="text-xs btn-md btn btn-primary">
						Donwload CV
					</button>
					<button className="text-xs btn btn-md">Contact</button>
				</div>
			</div>
			<div className="w-full h-[50vh] md:w-[60%] flex items-center  xl:self-start py-10  xl:h-full justify-center self-end lg:w-[70%] xl:w-[50%] lg:h-fit">
				<div className="w-[30rem] h-[30rem] rounded-full relative border-b-4  pb-2 xl:h-[35rem] xl:w-[35rem] 2xl:h-[40rem] 2xl:w-[40rem] 2xl:max-w-[40rem] 2xl:max-h-[40rem]">
					<span className="absolute top-0 left-0 w-full h-full rounded-full blur-3xl bg-secondary/20 -z-0" />
					<img
						alt="Hero Picture"
						src={heroImageSrc}
						className="relative object-cover w-full h-full "
					/>
				</div>
			</div>
		</section>
	);
}

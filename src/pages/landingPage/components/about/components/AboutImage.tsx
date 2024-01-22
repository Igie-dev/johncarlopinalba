import aboutPhoto from "@/assets/images/hero_img.jpg";
export default function AboutImage() {
	return (
		<img
			alt="Hero Picture"
			loading="lazy"
			src={aboutPhoto}
			className="relative object-cover w-full h-full rounded-md "
		/>
	);
}

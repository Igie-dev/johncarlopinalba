import Header from "./components/Header";
import HeroSection from "./components/Hero/HeroSection";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";
import FooterSection from "./components/footer/FooterSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import BlogSection from "./components/blog/BlogSection";
export default function LandingPage() {
	return (
		<section className="flex flex-col items-center w-full overflow-x-hidden h-fit">
			<Header />
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<BlogSection />
			<ContactSection />
			<FooterSection />
		</section>
	);
}

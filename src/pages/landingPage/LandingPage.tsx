import HeroSection from "./components/Hero/HeroSection";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";
import FooterSection from "./components/footer/FooterSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import BlogSection from "./components/blog/BlogSection";
import ServiceSection from "./components/service/ServiceSection";
import ScrollToTopBtn from "@/shared/ScrollToTopBtn";
export default function LandingPage() {
	return (
		<section className="relative flex flex-col items-center w-full overflow-x-hidden h-fit bg-none">
			<HeroSection />
			<ServiceSection />
			<ProjectsSection />
			<BlogSection />
			<AboutSection />
			<ContactSection />
			<FooterSection />
			<ScrollToTopBtn />
		</section>
	);
}

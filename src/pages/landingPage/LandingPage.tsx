import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
export default function LandingPage() {
	return (
		<section className="flex flex-col items-center w-full h-fit">
			<Header />
			<Hero />
			<About />
			<Contact />
			<Footer />
		</section>
	);
}

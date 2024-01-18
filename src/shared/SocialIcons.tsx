import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
export default function SocialIcons() {
	return (
		<>
			<a
				href="https://www.facebook.com/meetcarlo91"
				title="Facebook"
				className="transition-all hover:scale-110">
				<FaFacebookSquare className="w-5 h-5 pointer-events-none " />
			</a>

			<a
				href="https://www.instagram.com/johncarlopinalba91?fbclid=IwAR3JolVu6znWwTXteggl_xAGJfPaTzhOZLotX-UttyrMUCyNN4bSAJqjiqY"
				title="Instagram"
				className="transition-all hover:scale-110">
				<FaInstagram className="w-5 h-5 pointer-events-none " />
			</a>

			<a
				href="https://twitter.com/m_pinalba?fbclid=IwAR1416lg1YdkmLd8xtXnk3pJ52Eh0vSlA1OshcUtd4Woc-GZHP0bQfshKsA"
				title="Twitter"
				className="transition-all hover:scale-110">
				<BsTwitterX className="w-5 h-5 pointer-events-none " />
			</a>

			<a href="#" className="transition-all hover:scale-110" title="Link in">
				<FaLinkedin className="w-5 h-5 pointer-events-none " />
			</a>
		</>
	);
}

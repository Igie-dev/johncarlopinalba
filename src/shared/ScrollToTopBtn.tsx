import { IoMdArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
export default function ScrollToTopBtn() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.onscroll = () => {
				let currentScrollPos = window.pageYOffset;
				// let maxScroll = document.body.scrollHeight - window.innerHeight;
				// console.log(currentScrollPos);
				if (currentScrollPos > 1000) {
					setIsVisible(true);
				} else {
					setIsVisible(false);
				}
			};
		}
	}, []);

	const handleClick = () => {
		const element = document.getElementById("header");
		if (element) {
			// 👇 Will scroll smoothly to the top of the next section
			element.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "center",
			});
		}
	};
	return (
		<>
			{isVisible ? (
				<button
					onClick={handleClick}
					className="fixed  right-5 bottom-5 md:right-10 md:bottom-10 p-3 shadow-md border hover:border rounded-full bg-base-200/55 text-base-content transition-all animate-bounce hover:animate-none">
					<IoMdArrowUp className="w-6 h-6 md:w-7 md:h-7" />
				</button>
			) : null}
		</>
	);
}

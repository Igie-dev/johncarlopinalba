type Props = {
	scrollToId: string;
	btnName: string;
};
export default function NavigationButton({ scrollToId, btnName }: Props) {
	const handleClick = () => {
		const element = document.getElementById(scrollToId);
		if (element) {
			console.log(element);
			// 👇 Will scroll smoothly to the top of the next section
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	return <button onClick={handleClick}>{btnName}</button>;
}

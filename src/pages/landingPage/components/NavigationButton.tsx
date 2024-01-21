type Props = {
	scrollToId: string;
	btnName: string;
	className?: string;
};
export default function NavigationButton({
	scrollToId,
	btnName,
	className,
}: Props) {
	const handleClick = () => {
		const element = document.getElementById(scrollToId);
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
		<button onClick={handleClick} className={`${className}`}>
			{btnName}
		</button>
	);
}

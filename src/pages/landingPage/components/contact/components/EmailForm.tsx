export default function EmailForm() {
	return (
		<form className="flex flex-col w-full gap-10 px-2 py-10 rounded-md border h-fit md:max-w-[40rem] md:px-10 shadow-sm">
			<header className="flex flex-col gap-2 text-start">
				<h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
					Electrify My Inbox
				</h2>
				<p className="text-sm sm:text-base">
					Reach Out, Share, and Let's Ignite a Conversation!
				</p>
			</header>
			<main className="flex flex-col w-full gap-4">
				<div className="flex flex-col w-full gap-2">
					<label htmlFor="name" className="text-sm">
						Name
					</label>
					<input
						id="name"
						type="text"
						className="w-full h-10 px-2 text-sm border rounded-sm"
					/>
				</div>
				<div className="flex flex-col w-full gap-2">
					<label htmlFor="email" className="text-sm">
						Email
					</label>
					<input
						id="email"
						type="email"
						className="w-full h-10 px-2 text-sm border rounded-sm"
					/>
				</div>
				<div className="flex flex-col w-full gap-2">
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						className="w-full border min-h-[10rem] max-h-[15rem] text-sm p-2 rounded-sm"
					/>
				</div>
				<div>
					<button type="submit" className="btn btn-primary">
						Send
					</button>
				</div>
			</main>
		</form>
	);
}

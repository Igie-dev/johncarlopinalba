import { MdEmail } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { IoLocation } from "react-icons/io5";
import EmailForm from "./components/EmailForm";
export default function ContactSection() {
	return (
		<section
			id="contact"
			className="flex flex-col w-full gap-10 my-10 h-fit section md:flex-row md:justify-between md:items-center">
			<div className="flex flex-col items-start w-full gap-20 lg:gap-32 md:w-[40%] md:h-full md:justify-center">
				<div className="flex flex-col items-start w-full gap-10">
					<header className="flex flex-col gap-2 text-start">
						<h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
							Contact me
						</h2>
						<p className="text-sm sm:text-base">
							Spark a Conversation for Your Electrical Endeavors.
						</p>
					</header>
					<div className="flex flex-col items-start gap-3 ">
						<MdEmail className="w-5 h-5 pointer-events-none" />
						<h4 className="text-lg font-semibold">Email</h4>
						<p className="text-xs">
							For any inquiries, please fill out the form below.
						</p>
						<p className="text-xs underline">hello@relume.io</p>
					</div>
					<div className="flex flex-col items-start gap-3 ">
						<ImPhone className="w-5 h-5 pointer-events-none" />
						<h4 className="text-lg font-semibold">Phone</h4>
						<p className="text-xs">
							Feel free to give us a call if you have any questions.
						</p>
						<p className="text-xs underline">+1 (555) 000-0000</p>
					</div>
					<div className="flex flex-col items-start w-full gap-3">
						<IoLocation className="w-5 h-5 pointer-events-none" />
						<h4 className="text-lg font-semibold">Office</h4>
						<p className="text-xs">
							Visit my office during business hours for a consultation.
						</p>
						<address className="text-xs">Marikina City, Metro Manila</address>
					</div>
				</div>
			</div>
			<div className="flex w-full md:flex-1 md:h-full md:justify-center md:items-center">
				<EmailForm />
			</div>
		</section>
	);
}

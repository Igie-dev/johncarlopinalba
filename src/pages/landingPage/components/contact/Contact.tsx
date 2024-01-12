import { MdEmail } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { IoLocation } from "react-icons/io5";
export default function Contact() {
	return (
		<section className="w-full py-10  section lg:h-[60vh]">
			<div className="flex flex-col items-center w-full gap-20 lg:gap-32">
				<div className="flex flex-col items-center gap-5">
					<h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
						Contact me
					</h2>
					<p className="text-sm">
						We're here to answer any questions you may have.
					</p>
				</div>
				<div className="flex flex-col items-center w-full gap-10 lg:flex-row lg:justify-between">
					<div className="flex flex-col items-center gap-3">
						<MdEmail className="pointer-events-none h-7 w-7" />
						<h4 className="text-lg font-semibold">Email</h4>
						<p className="text-sm">
							For any inquiries, please fill out the form below.
						</p>
						<p className="text-sm">hello@relume.io</p>
					</div>
					<div className="flex flex-col items-center gap-3">
						<ImPhone className="pointer-events-none h-7 w-7" />
						<h4 className="text-lg font-semibold">Phone</h4>
						<p className="text-sm">
							Feel free to give us a call if you have any questions.
						</p>
						<p className="text-sm">+1 (555) 000-0000</p>
					</div>

					<div className="flex flex-col items-center gap-3">
						<IoLocation className="pointer-events-none h-7 w-7" />
						<h4 className="text-lg font-semibold">Office</h4>
						<p className="text-sm">
							Visit my office during business hours for a consultation.
						</p>
						<p className="text-sm">Marikina City, Metro Manila</p>
					</div>
				</div>
			</div>
		</section>
	);
}

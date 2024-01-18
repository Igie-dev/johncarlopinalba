import { GrLocation } from "react-icons/gr";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
export default function AboutContactDetails() {
	return (
		<>
			<div className="flex items-center gap-8">
				<GrLocation className="w-4 h-4" />
				<p className="text-sm">Marikina City</p>
			</div>
			<div className="flex items-center gap-8">
				<MdOutlineLocalPhone className="w-4 h-4" />
				<p className="text-sm">+63952421841</p>
			</div>
			<div className="flex items-center gap-8">
				<MdOutlineEmail className="w-4 h-4" />
				<p className="text-sm">sample@gmailcom</p>
			</div>
		</>
	);
}

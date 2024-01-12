import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoaderUi from "./shared/LoaderUi";
export default function App() {
	const LandingPage = lazy(() => import("@/pages/landingPage/LandingPage"));
	return (
		<Suspense fallback={<LoaderUi />}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoaderUi from "./shared/LoaderUi";
export default function App() {
	const LandingPage = lazy(() => import("@/pages/landingPage/LandingPage"));
	const ProjectPage = lazy(() => import("@/pages/projectPage/ProjectPage"));
	const BlogPage = lazy(() => import("@/pages/blogPage/BlogPage"));
	return (
		<Suspense fallback={<LoaderUi />}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/projects" element={<ProjectPage />} />
					<Route path="/blogs" element={<BlogPage />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}

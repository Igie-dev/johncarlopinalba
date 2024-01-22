import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		splitVendorChunkPlugin(),
		{
			name: "vite-plugin-image",
			transform: (src) => {
				if (src.endsWith(".jpg")) {
					// Convert the image file to a base64 data URL
					const data = require("fs").readFileSync(src);
					return `export default ${JSON.stringify(
						`data:image/jpeg;base64,${data.toString("base64")}`
					)}`;
				}
			},
		},
		viteStaticCopy({
			targets: [
				{
					src: "./src/assets/images",
					dest: "",
				},
			],
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		assetsInlineLimit: 0,
		outDir: "dist",
		sourcemap: true,
		emptyOutDir: true,
		rollupOptions: {
			output: {
				entryFileNames: "assets/[name].js",
				chunkFileNames: "assets/[name].js",
				assetFileNames: "[name].[ext]",
				manualChunks: (id) => {
					if (id.includes("node_modules"))
						return id
							.toString()
							.split("node_modules/")[1]
							.split("/")[0]
							.toString();
				},
			},
		},
	},
	optimizeDeps: {
		include: [
			"bolb.jpg",
			"hero_bg_img.jpg",
			"hero_img.jpg",
			"paper_design_2.jpg",
			"paper_design_3.jpg",
			"paper_design",
			"project_photo_4.jpg",
		], // Add your image file here
	},
});

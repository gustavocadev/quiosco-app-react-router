import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command }) => ({
	ssr: {
		noExternal: command === "build" ? true : undefined,
	},
	plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
}));

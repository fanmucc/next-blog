import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import theme from "../../theme";
import darkThemes from "../../dark-theme";

import "@/styles/globals.scss";
import "@/styles/iconfont.css";
import "@/styles/markdown/hljs.scss";
import "@/styles/markdown/markdown.scss";
import "@/styles/animation.scss";
import type { AppProps } from "next/app";

const lightTheme = createTheme({
	type: "light",
	theme: theme,
});

const darkTheme = createTheme({
	type: "dark",
	theme: darkThemes,
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<NextThemesProvider
			defaultTheme='system'
			attribute='blog'
			value={{
				light: lightTheme.className,
				dark: darkTheme.className,
			}}
		>
			<NextUIProvider theme={lightTheme}>
				<Component {...pageProps} />
			</NextUIProvider>
		</NextThemesProvider>
	);
}

import "@/styles/globals.scss";
import "@/styles/iconfont.css";
import "@/styles/markdown/hljs.scss";
import "@/styles/markdown/markdown.scss";
import "@/styles/animation.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

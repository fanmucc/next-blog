import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/Layout";
import hello from "@/pages/api/mock/hello";
import { log } from "console";
import type { NextApiRequest, NextApiResponse } from "next";
import type { AppProps } from "next/app";
import MarkdownIt from "@/utils/markdowIt";

import List from "../components/List";
import Author from "@/components/Author";
import Categories from "@/components/BusComponents/Categories";

const inter = Inter({ subsets: ["latin"] });

interface Iprops extends AppProps {
	markdown: string;
}

export default function Home(props: Iprops) {
	// console.log(props, "===props");

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
				<style>
					{`
            :root {
              // --blog-main: red !important;
            }
          `}
				</style>
			</Head>
			<Layout>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gridRowGap: "1rem",
						gridColumnGap: "1rem",
					}}
				>
					<List.ListTwo />
					<List.ListTwo />
					<List.ListTwo />
					<List.ListTwo />
					<div
						dangerouslySetInnerHTML={{ __html: props?.markdown || "" }}
					></div>
					<div
						style={{
							width: "300px",
						}}
					>
						<Author />
						<Categories small />
					</div>
				</div>
			</Layout>
		</>
	);
}

export async function getServerSideProps({
	req,
	res,
}: {
	req: NextApiRequest;
	res: NextApiResponse;
}) {
	// console.log(req, res, "控制台输出");
	// var result = MarkdownIt("::: spoiler click me\n*content*\n:::\n");
	var result = MarkdownIt(`# 我是标题`);
	// var result = MarkdownIt(`@ header
	// contentTwo
	// `);
	// console.log(result);

	res.setHeader(
		"Cache-Control",
		"public, s-maxage=10, stale-while-revalidate=59"
	);
	return {
		props: {
			headerMenus: [
				{
					lable: "测试",
					id: 1,
				},
			],
			markdown: result,
		}, // will be passed to the page component as props
	};
}

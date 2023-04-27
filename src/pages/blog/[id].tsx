import markdownIt from "@/utils/markdowIt";
import path from "path";
import { getMdFiles } from "@/utils";

import Layout from "@/Layout";
import Head from "next/head";

import type { NextApiRequest, NextApiResponse } from "next";
import type { AppProps } from "next/app";
import { log } from "console";
interface Iprops extends AppProps {
	markdown: string;
}

const Blog = (props: Iprops) => {
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
              --blog-main: red !important;
            }
          `}
				</style>
			</Head>
			<Layout>
				<div
					style={{
						padding: "1rem 1.5rem",
					}}
				>
					<div
						dangerouslySetInnerHTML={{ __html: props?.markdown || "" }}
					></div>
				</div>
			</Layout>
		</>
	);
};

export default Blog;

export async function getServerSideProps({
	req,
	res,
}: {
	req: NextApiRequest;
	res: NextApiResponse;
}) {
	// console.log(req, res, "控制台输出");
	// var result = MarkdownIt("::: spoiler click me\n*content*\n:::\n");

	const pathUrl = path.join("./src/markdown");
	let a = "";
	// 调用函数
	let files = await getMdFiles(pathUrl)
		.then((files) => {
			a = files[0];
		})
		.catch((err) => console.error(err));
	console.log(files);
	var result = markdownIt(a);

	res.setHeader(
		"Cache-Control",
		"public, s-maxage=10, stale-while-revalidate=59"
	);

	log(a);
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

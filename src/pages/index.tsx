import { get } from "@/utils/axios";
import { useEffect } from "react";
import type {
	InferGetServerSidePropsType,
	GetServerSideProps,
	NextApiRequest,
	NextApiResponse,
} from "next";

import Head from "next/head";
import Layout from "@/Layout";
import type { AppProps } from "next/app";

import ListTwo from "@/components/List/Two";
import Author from "@/components/Author";

import type { IBlog } from "@/utils/ts.d.ts";
interface Iprops extends AppProps {
	list: IBlog[];
}

import classNames from "classnames";
import styles from "@/styles/index-page.module.scss";

export default function Home({ list }: Iprops) {
	console.log(list);

	return (
		<>
			<Head>
				<title>Fanmu Blog</title>
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
			<Layout title='严凡木 - 分享设计与科技生活'>
				<div className={classNames(styles["index"], "slide-box")}>
					<div className={classNames(styles["index-right"])}>
						{list?.map((i: IBlog) => {
							return <ListTwo key={i?.id} detail={i} />;
						})}
					</div>
					<div>
						<Author />
					</div>
				</div>
			</Layout>
		</>
	);
}

export const getContent = async () => {
	const data = await get("/api/mock/blog");
	return data;
};

export const getStaticProps = async () => {
	return {
		props: {
			list: await getContent(),
		},
	};
};

// 执行时机和位置：

// getStaticProps 在构建时（即编译时）执行，而不是在每个请求时执行。它在构建时运行在服务器端，并生成静态 HTML。

// getServerSideProps 在每个请求时执行。它在服务器端运行，并且为每个请求生成动态的 HTML。

// 用途：

// getStaticProps 用于在构建时获取静态数据，并将其预渲染到静态页面中。这对于不经常更改的数据非常有用，例如博客文章、产品列表等。生成的静态页面可以通过 CDN 进行缓存和提供。

// getServerSideProps 用于在每个请求时获取数据。这对于依赖于请求参数、数据库查询或其他动态数据的页面非常有用。每个请求都会重新生成页面，并在服务器上动态渲染。

// 返回值：

// getStaticProps 返回的数据在构建时被序列化，并在生成的静态页面中使用。返回的数据必须是可序列化的（例如对象或数组）。

// getServerSideProps 返回的数据不需要进行序列化，因为它是在每个请求时动态生成的。

// 部署要求：

// getStaticProps 可以与 Next.js 的静态导出（Static Export）一起使用，并可部署到任何支持静态文件托管的平台，如静态网站托管服务或 CDN。

// getServerSideProps 需要部署到支持服务器端执行的环境，如 Node.js 服务器或 Serverless Functions（如 Vercel、AWS Lambda 等）。

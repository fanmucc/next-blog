import request from "@/utils/axios";

import Layout from "@/Layout";
import Head from "next/head";
import Tags from "@/components/BusComponents/Tags";

import type { NextApiRequest, NextApiResponse } from "next";
import type { AppProps } from "next/app";

import classNames from "classnames";
import styles from "@/styles/categories-page.module.scss";

interface ITagsPage extends AppProps {
	tags?: { id: number; name: string }[];
}

const TagsPage = ({ tags }: ITagsPage) => {
	return (
		<>
			<Head>
				<title>标签</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout title='标签'>
				<h1 className='slide-box'>标签</h1>
				<div
					className={classNames(
						styles["categories-content"],
						"slide-box-content"
					)}
				>
					{tags?.map((i: any) => {
						return <Tags key={i?.id} name={i?.name} />;
					})}
				</div>
			</Layout>
		</>
	);
};

export default TagsPage;

export const getContent = async () => {
	const data = await request({
		url: "/api/mock/tags",
		method: "GET",
	});
	return data;
};

// 不需要频繁请求
export const getStaticProps = async () => {
	return {
		props: {
			tags: await getContent(),
		},
	};
};

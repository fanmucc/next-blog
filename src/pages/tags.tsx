import Layout from "@/Layout";
import Head from "next/head";
import Tags from "@/components/BusComponents/Tags";

import type { NextApiRequest, NextApiResponse } from "next";
import type { AppProps } from "next/app";

import classNames from "classnames";
import styles from "@/styles/categories.module.scss";

interface Iprops extends AppProps {
	markdown?: string;
}

const TagsPage = () => {
	return (
		<>
			<Head>
				<title>标签</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<h1>标签</h1>
				<div className={classNames(styles["categories-content"], "slide-box")}>
					<Tags />
					<Tags />
					<Tags />
					<Tags />
					<Tags />
					<Tags />
					<Tags />
					<Tags />
					<Tags />
					<Tags />
					<Tags />
					<Tags />
				</div>
			</Layout>
		</>
	);
};

export default TagsPage;

export async function getServerSideProps({
	req,
	res,
}: {
	req: NextApiRequest;
	res: NextApiResponse;
}) {
	return {
		props: {},
	};
}

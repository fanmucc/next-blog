import { useEffect, useState } from "react";

// 组件
import SimpleMenusTooltip from "@/components/BusComponents/SimpleMenusTooltip";
import Categories from "@/components/BusComponents/Categories";
import Tags from "@/components/BusComponents/Tags";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import styles from "@/styles/layout.module.scss";

import type { ICategories, IBlog } from "@/utils/ts.d.ts";
interface IPageHeader {
	detail?: IBlog;
	title?: string;
}

let menuItem = [
	{
		href: "/blog/list",
		title: "全部文章",
	},
	{
		href: "/categories",
		title: "全部分类",
	},
	{
		href: "/tags",
		title: "全部标签",
	},
];

const PageHeader = ({ detail, title }: IPageHeader) => {
	const [scrollStatus, setScrollStatus] = useState(false);
	useEffect(() => {
		const scrollTop = () => {
			setScrollStatus(document.documentElement.scrollTop !== 0 ? true : false);
		};
		scrollTop();
		document.addEventListener("scroll", scrollTop);
		() => document.removeEventListener("scroll", scrollTop);
	}, []);
	return (
		<header
			className={classNames(styles["not-top-img"], {
				[styles["nav-fixed"]]: scrollStatus,
				[styles["header-bg"]]: detail,
			})}
			id={styles["page-header"]}
			style={{
				backgroundImage: `url(${detail?.img})`,
			}}
		>
			<nav
				id={styles["nav"]}
				className={styles["show"]}
				style={{
					overflow: `${!scrollStatus ? "unset" : "hidden"}`,
				}}
			>
				<div id={styles["nav-group"]}>
					<div className={styles["nav-left"]}>
						<Link className={styles["back-home"]} href='/'>
							<span>Yan</span>
						</Link>
					</div>
					<div className={styles["nav-content"]}>
						<div className={styles["nav-menus"]}>
							<div className={styles["menus_items"]}>
								<SimpleMenusTooltip title='文章' list={menuItem} />
								<SimpleMenusTooltip title='系列' href='/series' />
								<SimpleMenusTooltip title='我的' />
							</div>
						</div>
						{scrollStatus && (
							<div className={styles["nav-title"]}>
								<Link
									href=''
									id='page-name-text'
									// onClick='btf.scrollToDest(0, 500)'
									data-pjax-state=''
								>
									{title}
								</Link>
							</div>
						)}
					</div>
					<div id=''></div>
					<div className={styles["nav-right"]}>
						<div>icon1</div>
					</div>
				</div>
			</nav>
			{detail && (
				<>
					<div className='coverdiv loaded' id='coverdiv'>
						<Image
							width={800}
							height={300}
							className='nolazyload entered loading'
							id='post-cover'
							src={detail?.img}
							alt='cover'
							data-ll-status='loading'
						/>
					</div>
					<div id={styles["header-info"]}>
						<div className={styles["info-tags"]}>
							{detail?.categories?.map((i: ICategories) => {
								return <Categories key={i?.id} name={i?.name} />;
							})}
							{detail?.tags?.map((i: ICategories) => {
								return <Tags key={i?.id} name={i?.name} small />;
							})}
						</div>
						<h1 id={styles["header-title"]}>{detail?.title}</h1>
						{/* <div id={styles["header-meta"]}>浏览量: 1.1k</div> */}
					</div>
					<section className='main-hero-waves-area waves-area'>
						<svg
							className='waves-svg'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 24 150 28'
							preserveAspectRatio='none'
							shapeRendering='auto'
						>
							<defs>
								<path
									id='gentle-wave'
									d='M -160 44 c 30 0 58 -18 88 -18 s 58 18 88 18 s 58 -18 88 -18 s 58 18 88 18 v 44 h -352 Z'
								></path>
							</defs>
							<g className='parallax'>
								<use href='#gentle-wave' x='48' y='0'></use>
								<use href='#gentle-wave' x='48' y='3'></use>
								<use href='#gentle-wave' x='48' y='5'></use>
								<use href='#gentle-wave' x='48' y='7'></use>
							</g>
						</svg>
					</section>
				</>
			)}
		</header>
	);
};

export default PageHeader;

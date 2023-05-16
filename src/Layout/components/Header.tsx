import { useEffect, useState } from "react";

import classNames from "classnames";
import styles from "@/styles/layout.module.scss";

interface IPageHeader {
	detail: Object;
}

const PageHeader = ({ detail }: IPageHeader) => {
	const [scrollStatus, setScrollStatus] = useState(false);
	useEffect(() => {
		const scrollTop = (event: any) => {
			setScrollStatus(document.documentElement.scrollTop !== 0 ? true : false);
		};
		document.addEventListener("scroll", scrollTop);
		() => document.removeEventListener("scroll", scrollTop);
	});
	return (
		<header
			className={classNames(styles["not-top-img"], {
				[styles["nav-fixed"]]: scrollStatus,
				[styles["header-bg"]]: detail,
			})}
			id={styles["page-header"]}
			style={{
				backgroundImage: `url('https://p.zhheo.com/aAWBR820890481681098008701.png!cover')`,
			}}
		>
			<nav id={styles["nav"]} className={styles["show"]}>
				<div id={styles["nav-group"]}>
					<div className={styles["nav-left"]}>
						<a className={styles["back-home"]} href='/'>
							<span>Yan</span>
						</a>
					</div>
					<div className={styles["nav-content"]}>
						<div className={styles["nav-menus"]}>
							<div className={styles["menus_items"]}>
								<a className={styles["nav_item"]}>
									<span>文章</span>
								</a>
								<a className={styles["nav_item"]} href='/categories'>
									<span>分类</span>
								</a>
								<a className={styles["nav_item"]} href='/tags'>
									<span>标签</span>
								</a>
							</div>
						</div>
						<div className={styles["nav-title"]}>
							<a
								id='page-name-text'
								// onClick='btf.scrollToDest(0, 500)'
								data-pjax-state=''
							>
								严凡木 - 分享设计与科技生活
							</a>
						</div>
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
						<img
							className='nolazyload entered loading'
							id='post-cover'
							src='https://p.zhheo.com/eJpUol25390481680492353131.png!cover'
							alt='cover'
							data-ll-status='loading'
						/>
					</div>
					<div id={styles["header-info"]}>
						<div className={styles["info-tags"]}>
							<a href='#' title='原创' className={styles["tags-item"]}>
								tag1
							</a>
							<a href='#' title='原创' className={styles["tags-item"]}>
								tag2
							</a>
							<div className={styles["tags-share-list"]}>
								<a href='#' title='原创' className={styles["tags-share"]}>
									tag2
								</a>
								<a href='#' title='原创' className={styles["tags-share"]}>
									tag2
								</a>
							</div>
						</div>
						<h1 id={styles["header-title"]}>
							即时AI文字生成设计上手体验：不太能取代设计师，而是一个头脑风暴的好工具
						</h1>
						<div id={styles["header-meta"]}>浏览量: 1.1k</div>
					</div>
					<section className='main-hero-waves-area waves-area'>
						<svg
							className='waves-svg'
							xmlns='http://www.w3.org/2000/svg'
							xlink='http://www.w3.org/1999/xlink'
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

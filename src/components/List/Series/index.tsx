import { useState } from "react";

import Categories from "@/components/BusComponents/Categories";
import Tags from "@/components/BusComponents/Tags";
import Image from "next/image";
import Link from "next/link";

import classNames from "classnames";
import styles from "../index.module.scss";

const ListSeries = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className={styles["list-multiple"]}>
			<div className={styles["list-cover"]}>
				<Link href='' title='文章名'>
					<Image
						width={1000}
						height={350}
						className={styles["img-bg"]}
						src='/png/blog-default-img.png'
						alt='文章名'
					/>
				</Link>
			</div>
			<div className={styles["list-info"]}>
				<div className={styles["list-info-type"]}>
					<Categories small />
					<Categories small />
				</div>
				<Link
					className={styles["list-title"]}
					href='/p/63718cef.html'
					title='中国地图矢量图下载：省地图、市级地图、区级地图矢量图'
				>
					中国地图矢量图下载：省地图、市级地图、区级地图矢量图中国地图矢量图下载：省地图、市级地图、区级地图矢量图中国地图矢量图下载：省地图、市级地图、区级地图矢量图
				</Link>
				<div className={styles["list-tags"]}>
					<div className={styles["tags-left"]}>
						<div>
							<Tags small />
							<Tags small />
						</div>
						<div>发布时间</div>
					</div>
					<div className={styles["tags-right"]}>最新</div>
				</div>
				<div className={styles["series-list"]}>
					<div className={styles["series-header"]}>
						<div>
							文章列表 <span>11</span>
						</div>
						<div
							className={styles["series-open"]}
							onClick={() => setOpen(!open)}
						>
							{open ? "收起" : "展开"}
						</div>
					</div>
					<ul
						className={classNames(styles["series-list-box"], {
							[styles["series-list-box-open"]]: open,
						})}
					>
						<li>
							<Link href=''>
								1. <span>文章1</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ListSeries;

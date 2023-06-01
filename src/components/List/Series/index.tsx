import { useState } from "react";

import Categories from "@/components/BusComponents/Categories";
import Tags from "@/components/BusComponents/Tags";

import classNames from "classnames";
import styles from "../index.module.scss";

const ListSeries = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className={styles["list-multiple"]}>
			<div className={styles["list-cover"]}>
				<a href='' title='文章名'>
					<img
						className={styles["img-bg"]}
						src='https://p.zhheo.com/aAWBR820890481681098008701.png!cover'
						alt='文章名'
					/>
				</a>
			</div>
			<div className={styles["list-info"]}>
				<div className={styles["list-info-type"]}>
					<Categories small />
					<Categories small />
				</div>
				<a
					className={styles["list-title"]}
					href='/p/63718cef.html'
					title='中国地图矢量图下载：省地图、市级地图、区级地图矢量图'
					data-pjax-state=''
				>
					中国地图矢量图下载：省地图、市级地图、区级地图矢量图中国地图矢量图下载：省地图、市级地图、区级地图矢量图中国地图矢量图下载：省地图、市级地图、区级地图矢量图
				</a>
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
							<a href=''>
								1. <span>文章1</span>
							</a>
						</li>
						<li>
							<a href=''>
								2. <span>文章2</span>
							</a>
						</li>
						<li>
							<a href=''>
								3. <span>文章3</span>
							</a>
						</li>
						<li>
							<a href=''>
								4. <span>文章4</span>
							</a>
						</li>
						<li>
							<a href=''>
								5. <span>文章4</span>
							</a>
						</li>
						<li>
							<a href=''>
								6. <span>文章4</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ListSeries;

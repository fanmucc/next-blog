import Tags from "@/components/BusComponents/Tags";

import classNames from "classnames";
import styles from "../index.module.scss";

const ListOne = ({ className }: any) => {
	return (
		<div className={classNames(styles["list-single"], className)}>
			<div className={styles["list-single-cover"]}>
				<a className={styles["cover-a"]} href='' title='文章名'>
					<img
						className={styles["img-bg"]}
						src='https://p.zhheo.com/aAWBR820890481681098008701.png!cover'
						alt='文章名'
					/>
				</a>
			</div>
			<div className={styles["list-single-content"]}>
				<a
					className={styles["list-title"]}
					href='/p/63718cef.html'
					title='中国地图矢量图下载：省地图、市级地图、区级地图矢量图'
				>
					中国地图矢量图下载：省地图、市级地图、区级地图矢量图中国地图矢量图下载：省地图、市级地图、区级地图矢量图中国地图矢量图下载：省地图、市级地图、区级地图矢量图
				</a>
				<div className={styles["list-info"]}>
					<div className={styles["tags"]}>
						<div>
							<Tags small />
							<Tags small />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListOne;

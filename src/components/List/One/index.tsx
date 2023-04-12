import styles from "./index.module.css";

const ListOne = () => {
	return (
		<div className={styles["list-single"]}>
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
					data-pjax-state=''
				>
					中国地图矢量图下载：省地图、市级地图、区级地图矢量图中国地图矢量图下载：省地图、市级地图、区级地图矢量图中国地图矢量图下载：省地图、市级地图、区级地图矢量图
				</a>
				<div className={styles["list-info"]}>
					<div className={styles["tags"]}>
						<div>文章标签多个</div>
						<div>发布时间</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListOne;

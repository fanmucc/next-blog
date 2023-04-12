import styles from "./index.module.css";

const ListTwo = () => {
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
					<span>文章分类</span>
					<span>文章分类2</span>
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
						<div>文章标签多个</div>
            <div>发布时间</div>
					</div>
					<div className={styles["tags-right"]}>最新</div>
				</div>
			</div>
		</div>
	);
};

export default ListTwo;

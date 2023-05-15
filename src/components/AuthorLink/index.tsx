// 作者底部链接
import Image from "next/image";
import Iconfont from "../BusComponents/Iconfont";

import styles from "./author-link.module.scss";
const AuthorLink = () => {
	return (
		<div
			className={styles["author-link"]}
			style={{
				marginBottom: "30px",
			}}
		>
			<a className={styles["link"]} href=''>
				<Iconfont type='icon-email' />
			</a>
			<div className={styles["author-img"]}>
				<Image
					className={styles["imgs"]}
					src='/author/author.PNG'
					alt='作者头像'
					width={50}
					height={50}
					style={{
						borderRadius: "50%",
					}}
				/>
				<div className={styles["circle"]}></div>
				<div className={styles["circle"]}></div>
				<div className={styles["circle"]}></div>
				<div className={styles["circle"]}></div>
			</div>
			<a className={styles["link"]} href=''>
				<Iconfont type='icon-github' />
			</a>
		</div>
	);
};

export default AuthorLink;

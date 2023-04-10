import { useEffect, useState } from "react";

import styles from "@/styles/Layout.module.css";
import { log } from "console";

const PageHeader = () => {
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
			className={
				(styles["not-top-img"], scrollStatus ? styles["nav-fixed"] : "")
			}
			id={styles["page-header"]}
		>
			<nav id={styles["nav"]} className={styles["show"]}>
				<div id={styles["nav-group"]}>
					<div className={styles["nav-left"]}>
						<div className='back-home-button'>弹窗</div>
						<div className='back-home-button'>返回博客主页</div>
					</div>
					<div className={styles["nav-content"]}>
						<div className={styles["nav-menus"]}>
							<div className={styles["menus_items"]}>
								<div className='menus_item'>标签1</div>
								<div className='menus_item'>标签2</div>
								<div className='menus_item'>标签3</div>
								<div className='menus_item'>标签4</div>
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
						<div>icon2</div>
						<div>icon3</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default PageHeader;

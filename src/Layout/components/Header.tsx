import { useEffect, useState } from "react";

import classNames from "classnames";
import styles from "@/styles/Layout.module.css";

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
			className={classNames(styles["not-top-img"], {
				[styles["nav-fixed"]]: scrollStatus,
			})}
			id={styles["page-header"]}
		>
			<nav id={styles["nav"]} className={styles["show"]}>
				<div id={styles["nav-group"]}>
					<div className={styles["nav-left"]}>
						<a className={styles["back-home"]}>
							<span>Yan Code</span>
						</a>
					</div>
					<div className={styles["nav-content"]}>
						<div className={styles["nav-menus"]}>
							<div className={styles["menus_items"]}>
								<a className={styles["nav_item"]}>
									<span>标签1</span>
								</a>
								<a className={styles["nav_item"]}>
									<span>标签2</span>
								</a>
								<a className={styles["nav_item"]}>
									<span>标签3</span>
								</a>
								<a className={styles["nav_item"]}>
									<span>标签4</span>
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
						<div>icon2</div>
						<div>icon3</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default PageHeader;

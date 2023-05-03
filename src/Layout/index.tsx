import PageHeader from "./components/Header";

import styles from "@/styles/layout.module.scss";

const Layout = (props: any) => {
	return (
		<div className={styles["page"]} id='body-wrap'>
			<PageHeader />
			<main id='layout'>{props?.children}</main>
			<footer className={styles["aa"]}>底部一些信息</footer>
		</div>
	);
};

export default Layout;

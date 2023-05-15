import PageHeader from "./components/Header";
import AuthorLink from "@/components/AuthorLink";

import styles from "@/styles/layout.module.scss";

const Layout = (props: any) => {
	return (
		<div className={styles["page"]} id='body-wrap'>
			<PageHeader />
			<main id='layout'>{props?.children}</main>
			<footer>
				<AuthorLink />
			</footer>
		</div>
	);
};

export default Layout;

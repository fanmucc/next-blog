import PageHeader from "./components/Header";
import AuthorLink from "@/components/AuthorLink";

import styles from "./layout.module.scss";

const Layout = (props: any) => {
	return (
		<div className={styles["page"]} id='body-wrap'>
			<PageHeader detail={props?.detail} title={props.title} />
			<main id='layout'>{props?.children}</main>
			<footer
				style={{
					margin: "100px 0 200px",
				}}
			>
				<AuthorLink />
			</footer>
		</div>
	);
};

export default Layout;

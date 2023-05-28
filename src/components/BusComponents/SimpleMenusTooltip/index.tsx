import styles from "./simpleMenusTooltip.module.scss";

interface ISimpleTooltip {
	children?: JSX.Element;
	title?: string;
	href?: string;
}

const SimpleMenusTooltip = ({ children, title, href }: ISimpleTooltip) => {
	return (
		<div className={styles["menus_items_box"]}>
			<a className={styles["nav_item"]} href={href}>
				<span>{title}</span>
			</a>
			{children && <div className={styles["children"]}>{children}</div>}
		</div>
	);
};

export default SimpleMenusTooltip;

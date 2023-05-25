// 标签
import classNames from "classnames";
import styles from "./tags.module.scss";
const Tags = ({
	radius,
	children,
	className,
	href,
	small,
	symbol = true,
}: any) => {
	return small ? (
		<a
			className={classNames(
				styles["tags"],
				{ [styles["tags-symbol"]]: symbol },
				className
			)}
		>
			标签
		</a>
	) : (
		<a className={classNames(styles["tags-big"], className)}>
			{symbol && <span className={styles["symbol"]}></span>}
			标签<span className={styles["total"]}>83</span>
		</a>
	);
};

export default Tags;

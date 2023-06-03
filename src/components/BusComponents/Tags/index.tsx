// 标签
import classNames from "classnames";
import styles from "./tags.module.scss";
const Tags = ({
	className,
	name = "标签",
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
			{name}
		</a>
	) : (
		<a className={classNames(styles["tags-big"], className)}>
			{symbol && <span className={styles["symbol"]}></span>}
			{name}
			<span className={styles["total"]}>83</span>
		</a>
	);
};

export default Tags;

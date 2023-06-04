// 标签
import classNames from "classnames";
import styles from "./tags.module.scss";
const Tags = ({
	className,
	name = "标签",
	href,
	small,
	symbol = true,
	num = 0,
}: any) => {
	return small ? (
		<a
			href={"/tags"}
			className={classNames(
				styles["tags"],
				{ [styles["tags-symbol"]]: symbol },
				className
			)}
		>
			{name}
		</a>
	) : (
		<a href={"/tags"} className={classNames(styles["tags-big"], className)}>
			{symbol && <span className={styles["symbol"]}></span>}
			{name}
			{num ? <span className={styles["total"]}>{num}</span> : null}
		</a>
	);
};

export default Tags;

// 分类
import classNames from "classnames";
import styles from "./categories.module.scss";
const Categories = ({
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
				styles["classification"],
				{ ["classification-symbol"]: symbol },
				className
			)}
		>
			标签
		</a>
	) : (
		<a className={classNames(styles["classification-big"], className)}>
			{symbol && <span className={styles["symbol"]}></span>}
			标签<span className={styles["total"]}>83</span>
		</a>
	);
};

export default Categories;

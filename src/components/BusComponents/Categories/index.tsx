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
		<a className={classNames(styles["classification"], className)}>分类</a>
	) : (
		<a className={classNames(styles["classification-big"], className)}>分类</a>
	);
};

export default Categories;

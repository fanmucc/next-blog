// 分类
import classNames from "classnames";
import styles from "./categories.module.scss";
const Categories = ({ className, href, small, id, name = "分类" }: any) => {
	return small ? (
		<a
			href={"/categories"}
			className={classNames(styles["classification"], className)}
		>
			{name}
		</a>
	) : (
		<a
			href={"/categories"}
			className={classNames(styles["classification-big"], className)}
		>
			{name}
		</a>
	);
};

export default Categories;

import Tags from "@/components/BusComponents/Tags";

import classNames from "classnames";
import styles from "../index.module.scss";

import type { IBlog, ICategories } from "@/utils/ts.d.ts";

interface IBlogDetails {
	detail: IBlog;
	className?: string;
}

const ListOne = ({ className, detail }: IBlogDetails) => {
	return (
		<div className={classNames(styles["list-single"], className)}>
			<div className={styles["list-single-cover"]}>
				<a
					className={styles["cover-a"]}
					href={detail?.href}
					title={detail?.title}
				>
					<img
						className={styles["img-bg"]}
						src={detail?.img}
						alt={detail?.title}
					/>
				</a>
			</div>
			<div className={styles["list-single-content"]}>
				<a
					className={styles["list-title"]}
					href={detail?.href}
					title={detail?.title}
				>
					{detail?.title}
				</a>
				<div className={styles["list-info"]}>
					<div className={styles["tags"]}>
						{detail?.tags?.map((i: ICategories) => {
							return <Tags small key={i?.id} id={i?.id} name={i?.name} />;
						})}
						<div className={styles["list-info-date"]}>{detail?.createTime}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListOne;

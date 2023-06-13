import Link from "next/link";

import classNames from "classnames";
import styles from "./index.module.scss";

interface ISimpleTooltip {
	title?: string;
	href?: string;
	list?: any[];
}

const SimpleMenusTooltip = ({ title, href = "", list }: ISimpleTooltip) => {
	return (
		<div className={styles["menus-items-box"]}>
			<Link className={styles["menus-items"]} href={href}>
				<span>{title}</span>
			</Link>
			{list && (
				<div className={classNames(styles["children-box"])}>
					{
						<ul className={styles["item-tooltip-content"]}>
							{list?.map((i: any, index: number) => {
								return (
									<li key={index}>
										<Link href={i?.href}>
											<span>{i?.title}</span>
										</Link>
									</li>
								);
							})}
						</ul>
					}
				</div>
			)}
		</div>
	);
};

export default SimpleMenusTooltip;

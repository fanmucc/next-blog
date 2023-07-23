import { useRouter } from "next/router";

import { Image } from "@nextui-org/react";
import Categories from "@/components/BusComponents/Categories";
import Tags from "@/components/BusComponents/Tags";

import styles from "../index.module.scss";

import type { IBlog, ICategories } from "@/utils/ts.d.ts";

interface IBlogDetails {
	detail: IBlog;
}

const ListTwo = ({ detail }: IBlogDetails) => {
	const router = useRouter();
	return (
		<div
			className={styles["list-multiple"]}
			onClick={() => {
				router.push(detail?.href);
			}}
		>
			<div className={styles["list-cover"]}>
				<a href={detail?.href} title={detail?.title}>
					<Image
						className={styles["img-bg"]}
						width={1000}
						height={450}
						src={detail?.img}
						alt={detail?.title}
						maxDelay={1000}
						objectFit='cover'
					/>
					{/* <img
						className={styles["img-bg"]}
						src={detail?.img}
						alt={detail?.title}
					/> */}
				</a>
			</div>
			<div className={styles["list-info"]}>
				<div className={styles["list-info-type"]}>
					{detail?.categories?.map((i: ICategories) => {
						return <Categories small key={i?.id} id={i?.id} name={i?.name} />;
					})}
				</div>
				<a
					className={styles["list-title"]}
					href={detail?.href}
					title={detail?.title}
				>
					{detail?.title}
				</a>
				<div className={styles["list-tags"]}>
					<div className={styles["tags-left"]}>
						<div>
							{detail?.tags?.map((i: ICategories) => {
								return <Tags small key={i?.id} id={i?.id} name={i?.name} />;
							})}
						</div>
						{/* <div>发布时间</div> */}
					</div>
					<div className={styles["tags-right"]}>{detail?.createTime}</div>
				</div>
			</div>
		</div>
	);
};

export default ListTwo;

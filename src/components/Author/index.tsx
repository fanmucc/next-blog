// 博客作者信息卡片
import Card from "../BusComponents/Card";
import IconButton from "../BusComponents/IconButton";
import Iconfont from "../BusComponents/Iconfont";

import styles from "./author.module.scss";
import classNames from "classnames";

const AuthorCard = () => {
	return (
		<Card>
			<div className={styles["author-info"]}>
				<div className={styles["hello"]}>晚上好！我是 🤝 专修交互与设计</div>
				<div className={styles["title"]}>Fan mu</div>
				<div className={styles["description"]}>这里是一段描述信息</div>
				<div className={styles["description2"]}>再次描述</div>
				<div className={styles["footer"]}>
					<div className={styles["footer-left"]}>
						<IconButton radius className={styles["button-icon"]}>
							<Iconfont
								type='icon-up-arrow'
								className={styles["iconfont-size"]}
							/>
						</IconButton>
						<IconButton radius className={styles["button-icon"]}>
							<Iconfont
								type='icon-up-arrow'
								className={styles["iconfont-size"]}
							/>
						</IconButton>
					</div>
					<a className={styles["footer-right"]}>
						<Iconfont
							type='icon-up-arrow'
							className={styles["iconfont-size"]}
						/>
						了解更多
					</a>
				</div>
			</div>
		</Card>
	);
};

export default AuthorCard;

import classNames from "classnames";
import styles from "./iconbutton.module.scss";

const Button = ({ radius, children, className, href }: any) => {
	return (
		<a
			href={href}
			className={classNames(styles["blog-icon-button"], className)}
		>
			{children}
		</a>
	);
};

export default Button;

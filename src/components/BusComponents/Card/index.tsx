import styles from "./card.module.scss";
interface ICard {
	children: JSX.Element;
}

const Card = ({ children }: ICard) => {
	return <div className={styles["card-info"]}>{children}</div>;
};

export default Card;

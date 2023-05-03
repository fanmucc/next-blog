import styles from "@/styles/markdown.module.scss";

const Markdown = (props: { markdown: string }) => {
	return (
		<div id={styles["post"]}>
			<div
				className={styles["markdown-content"]}
				id={styles["article-container"]}
				dangerouslySetInnerHTML={{ __html: props?.markdown || "" }}
			></div>
		</div>
	);
};

export default Markdown;

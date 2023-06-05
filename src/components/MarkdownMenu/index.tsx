// @ts-ignore
import { useEffect, useState, useMemo } from "react";
import { isInViewport } from "@/utils/index";

import classNames from "classnames";
import styles from "./index.module.scss";

const MarkdownMenu = ({ markdownContent }: { markdownContent: string }) => {
	const [activeHeading, setActiveHeading] = useState<string>("");
	const [headings, setHeadings] = useState<HTMLElement[]>([]);

	useEffect(() => {
		// const parser = new DOMParser();
		// const doc = parser.parseFromString(markdownContent, "text/html");
		// const headingElements = Array.from(doc.querySelectorAll("h1"));
		const headingElements = Array.from(
			(
				document.getElementById("article-container") as Element
			).querySelectorAll("h1")
		);
		const handleScroll = () => {
			const scrollTop = window.scrollY || window.pageYOffset;
			let active = "";
			for (let i = headingElements.length - 1; i >= 0; i--) {
				const heading = headingElements[i];
				const offsetTop = heading.offsetTop;
				const elementHeight = heading.offsetHeight;

				if (
					scrollTop + 20 >=
					headingElements[headingElements.length - 2].offsetTop
				) {
					// 特殊情况 滚动到底
					active = headingElements[headingElements.length - 1].id;
					break;
				}
				if (offsetTop - 200 <= scrollTop + elementHeight / 2) {
					active = heading.id;
					break;
				}
			}
			setActiveHeading(active);
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		setHeadings(headingElements);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [markdownContent]);

	const handleNavClick = (id: string) => {
		const targetHeading = headings.find((heading) => heading.id === id);

		if (targetHeading) {
			const offsetTop = targetHeading.offsetTop - 200;
			window.scrollTo({
				top: offsetTop,
				behavior: "smooth",
			});
		}
	};
	return (
		<div className={classNames(styles["markdown-menus"], "card")}>
			<ul className={styles["menus-list"]}>
				{headings.map((heading) => (
					<li
						key={heading.id}
						className={classNames(styles["menus-item"], {
							[styles["active"]]: activeHeading == heading.id,
						})}
					>
						<a
							// href={`#${heading.id}`}
							onClick={() => handleNavClick(heading.id)}
						>
							{heading.textContent}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MarkdownMenu;

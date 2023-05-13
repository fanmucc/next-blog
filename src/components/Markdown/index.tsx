const Markdown = (props: { markdown: string }) => {
	return (
		<div id='post'>
			<div
				className='markdown-content'
				id='article-container'
				dangerouslySetInnerHTML={{ __html: props?.markdown || "" }}
			></div>
		</div>
	);
};

export default Markdown;

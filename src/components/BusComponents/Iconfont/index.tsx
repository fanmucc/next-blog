const Iconfont = ({ type, className, ...props }: any) => {
	return <i className={`iconfont ${type} ${className}`} {...props}></i>;
};

export default Iconfont;

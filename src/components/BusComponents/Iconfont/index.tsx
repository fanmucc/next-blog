import Image from "next/image";

const Iconfont = ({
	src = "",
	alt = "",
	width = 16,
	height = 16,
	...props
}) => {
	return <Image src={src} alt={alt} width={width} height={height} {...props} />;
};

export default Iconfont;

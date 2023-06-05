/** @type {import('next').NextConfig} */

const path = require("path");

const regexEqual = (x, y) =>
	x instanceof RegExp &&
	y instanceof RegExp &&
	x.source === y.source &&
	x.global === y.global &&
	x.ignoreCase === y.ignoreCase &&
	x.multiline === y.multiline;

const nextConfig = {
	reactStrictMode: true,
	// images: {
	// remotePatterns: [
	// 	{
	// 		protocol: "https",
	// 		hostname: "p.zhheo.com",
	// 		port: "",
	// 		pathname: "/**",
	// 	},
	// ],
	// },
	webpack(config) {
		const sassRules = config.module.rules
			.find((rule) => typeof rule.oneOf === "object")
			.oneOf.find(
				(rule) =>
					rule.sideEffects === false &&
					regexEqual(rule.test, /\.module\.(scss|sass)$/)
			);
		sassRules.use = sassRules.use.map((rule) =>
			rule.loader.includes("sass-loader")
				? {
						...rule,
						options: {
							...rule.options,
							//引入你的全局样式
							// additionalData: `@import '../styles/globals.scss';`,
						},
				  }
				: rule
		);
		return config;
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};

module.exports = nextConfig;

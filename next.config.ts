import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				net: false,
				fs: false,
				http2: false,
			};
		}
		return config;
	},
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_URL: process.env.SERVER_URL,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*',
				port: '*',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				port: '',
			},
		],
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4200/uploads/:path*',
			},
		]
	},
}

module.exports = nextConfig

module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'xo',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			parserOptions: {
				project: ['tsconfig.json', 'tsconfig.node.json'],
			},
			files: [
				'*.ts',
				'*.tsx',
			],

			rules: {
				'@typescript-eslint/indent': 'off',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'vue',
	],
	rules: {
	},
};

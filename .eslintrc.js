module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', '@vue/airbnb'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 'off',
		'max-len': 'off',
		indent: ['error', 'tab'],
		'import/first': 'off',
		'linebreak-style': 'off',
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};

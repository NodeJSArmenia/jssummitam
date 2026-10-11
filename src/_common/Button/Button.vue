<template>
	<a class="Button" :href="link" target="_blank">
		{{ title }}
	</a>
</template>

<script>
export default {
	name: 'Button',
	props: {
		title: {
			type: String,
		},
		link: {
			type: String,
		},
	},
};
</script>

<style lang="scss">
	@import '../../_styles/colors';

	.Button {
		position: relative;
		line-height: 35px;
		font-weight: bold;
		text-decoration: none;
		text-transform: uppercase;
		font-size: 15px;
		text-align: center;
		color: $text-white;
		padding: 0 10px;
		height: 41px;
		background-color: #5d18b3;
		border-bottom: 2px solid #5d18b3;
		border-top: 2px solid #5d18b3;
		-webkit-transition: background-color 200ms linear;
		-ms-transition: background-color 200ms linear;
		transition: background-color 200ms linear;

		&:hover {
			background-color: #f26b5b;
			color: #2d0e4e;
			border-bottom: 2px solid #f26b5b;
			border-top: 2px solid #f26b5b;
			text-decoration: none;
			-webkit-transition: background-color 200ms linear;
			-ms-transition: background-color 200ms linear;
			transition: background-color 200ms linear;
		}

		// &:before,
		// &:after {
		// 	content: "";
		// 	position: absolute;
		// 	z-index: -1;
		// 	width: 33px;
		// 	height: 33px;
		// 	top: 2px;
		// 	border-radius: 8px;
		// 	-webkit-transform: scaleX(0.5) rotate(45deg);
		// 	-ms-transform: scaleX(0.5) rotate(45deg);
		// 	transform: scaleX(0.5) rotate(45deg);
		// 	background-color: inherit;
		// }

		// &:before {
		// 	right: -17px;
		// 	border-top: solid 3px $green-primary;
		// 	border-right: solid 3px $green-primary;
		// }

		// &:after {
		// 	left: -17px;
		// 	border-bottom: solid 3px $green-primary;
		// 	border-left: solid 3px $green-primary;
		// }
	}
</style>

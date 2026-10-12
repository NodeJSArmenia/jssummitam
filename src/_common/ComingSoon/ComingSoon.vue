<template>
	<p class="ComingSoon">Coming soon<span class="Dots"><span>.</span><span>.</span><span>.</span></span></p>
</template>

<script>
export default {
	name: 'ComingSoon',
};
</script>

<style scoped lang="scss">
.ComingSoon {
	width: 100%;
	max-width: 700px;
	box-sizing: border-box;
	margin: 0 auto;
	padding: 40px 20px;
	text-align: center;
	font-size: 32px;
	font-weight: bold;
	// same glass as the other cards
	background-color: rgb(122 42 254 / 58%)
	color: #fff;
	-webkit-backdrop-filter: blur(5px);
	backdrop-filter: blur(5px);
	border: 1px solid rgba(255, 255, 255, 0.45);
	box-shadow: 0 8px 32px rgba(45, 14, 78, 0.18);
}

// . -> .. -> ... -> . ; hidden dots keep their space so the text doesn't jump
.Dots span {
	opacity: 0;
	animation: dot-in 1.5s infinite;

	&:first-child {
		opacity: 1;
		animation: none;
	}

	&:nth-child(3) {
		animation-name: dot-in-late;
	}
}

@keyframes dot-in {
	0%, 32% { opacity: 0; }
	33%, 100% { opacity: 1; }
}

@keyframes dot-in-late {
	0%, 65% { opacity: 0; }
	66%, 100% { opacity: 1; }
}
</style>

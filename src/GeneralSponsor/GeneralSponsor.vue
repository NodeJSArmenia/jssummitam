<template>
	<section class="GeneralSponsor" id="GeneralSponsor">
		<div class="Container">
			<h2 class="Title">General Sponsor</h2>
			<div class="Card">
				<a class="Logo" :href="link" target="_blank" rel="noopener noreferrer" :aria-label="name">
					<img :src="logo" :alt="`${name} logo`">
				</a>
				<p class="Text">{{ text }}</p>
				<Button title="Visit Krisp" :link="link"></Button>
			</div>
		</div>
	</section>
</template>

<script>
import Button from '../_common/Button/Button.vue';
import logo from './krisp.svg';

export default {
	components: {
		Button,
	},
	data: () => ({
		name: 'Krisp',
		link: 'https://krisp.ai',
		logo,
		text: 'We are proud to have Krisp as the General Sponsor of JavaScript Summit Armenia 2026. Thank you for supporting the Armenian developer community!',
	}),
};
</script>

<style scoped lang="scss">
	.GeneralSponsor {
		padding: 50px;
	}

	.Title {
		margin-bottom: 30px;
	}

	.Card {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 700px;
		box-sizing: border-box;
		margin: 0 auto;
		padding: 30px 40px;
		text-align: center;
		// same glass as the Intro banner
		background-color: rgba(255, 255, 255, 0.22);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		border: 1px solid rgba(255, 255, 255, 0.45);
		border-radius: 20px;
		box-shadow: 0 8px 32px rgba(42, 22, 80, 0.18);
	}

	.Logo {
		display: block;
		width: 100%;
		max-width: 320px;
		margin-bottom: 20px;
		transition: 0.3s ease transform;

		&:hover {
			transform: scale(1.04);
		}

		img {
			display: block;
			width: 100%;
			height: auto;
		}
	}

	.Text {
		font-size: 20px;
		line-height: 1.4;
		margin-bottom: 20px;
	}

	@media (max-width: 600px) {
		.GeneralSponsor {
			padding: 30px 15px;
		}

		.Card {
			padding: 20px 16px;
		}
	}
</style>

<template>
	<section class="Intro" id="Intro">
		<div class="Container">
			<div id="Titles">
				<h1 class="Title HeadTitle"><span></span>JavaScript Summit Armenia</h1>
				<span class="Title Subtitle Simple">April 13 2024, 13:30 - AUA</span>
			</div>
		</div>
		<Banner title="Single-day conference for JavaScript developers"
				text="Welcome to JavaScript Summit Armenia—a day where enthusiasts and pros unite for insightful talks and community bonding. Get ready for a day of JavaScript joy and meaningful connections!"
				:iframe="true"
				:image-right="false"
				:button-link="buttonLink"
				:button-text="buttonText"
		></Banner>
	</section>

</template>

<script>
import Banner from '../_common/Banner/Banner.vue';
import { serverUri } from '../variables';
// import speakers from '../_services/speakers';

export default {
	components: {
		Banner,
	},
	data: () => ({
		imageSource: `${serverUri}/banners/polygons.png`,
		buttonText: 'Register Now',
		buttonLink: 'https://www.eventbrite.com/e/javascript-summit-2024-tickets-798904844897',
	}),
};
</script>

<style scoped lang="scss">
	.Intro {
		padding: 50px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
	}

	.Container {
		justify-content: center;
		display: flex;
	}

	.Title {
		font-family: Barlow;
		font-size: 70px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
		text-align: center;

		text-shadow: 3px 3px 9px #91a6d0;

		span {
			text-shadow: 3px 3px 9px #91a6d0;
		}
	}

	#Titles {
		display: inline-block;
	}

	.Subtitle {
		font-size: 24px;
		float: right;
		text-shadow: none;
	}

	.Simple {
		text-shadow: none;
	}

	@media (max-width: 940px) {
		#Titles {
			display: grid;
		}
	}

	@media (max-width: 900px) {
		.Subtitle {
			margin: 0 50px;
		}
	}

	@media (max-width: 800px) {
		.Title {
			font-size: 50px;
		}

		.Subtitle {
			font-size: 20px;
		}
	}

	@media (max-width: 700px) {
		.Title {
			font-size: 50px;
		}

		.Subtitle {
			font-size: 20px;
		}
	}

	@media (max-width: 600px) {
		.Button {
			padding: 0.7em 2em;
		}

		.Title {
			font-size: 40px;
		}

		.Subtitle {
			font-size: 20px;
		}
	}

	@media (max-width: 500px) {
		.Title {
			font-size: 40px;
		}

		.Subtitle {
			font-size: 20px;
		}
	}

	@media (max-width: 490px) {
		#Titles {
			display: grid;
		}
	}

	@media (max-height: 550px) {
		.Container {
			margin: -45px auto;
		}

		.HeadTitle {
			font-size: 40px;
		}
	}
</style>

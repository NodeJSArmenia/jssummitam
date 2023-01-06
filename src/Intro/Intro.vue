<template>
	<section class="Intro" id="Intro">
		<div class="Container">
			<div id="Titles">
				<h1 class="Title HeadTitle"><span>JavaScript Summit</span> Armenia</h1>
				<span class="Title Subtitle Simple">January 19, 10:30   -   Place info (soon)</span>
			</div>
		</div>
		<Banner title="A one-day event for JavaScript enthusiasts."
				text="JavaScript Summit Armenia is a one-day event related to the JavaScript programming language. It gathers all the community enthusiasts and professionals in one place to have valuable and helpful discussions."
				:image-source="imageSource"
				:image-right="false"
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
	}),
};
</script>

<style scoped lang="scss">
	.Intro {
		padding: 50px 0 0 0;
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

		text-shadow: 3px 3px 9px #807b9a;

		span {
			text-shadow: 3px 3px 9px black;
		}
	}

	#Titles {
		display: inline-block;
	}

	.Subtitle {
		font-size: 24px;
		float: left;
		text-shadow: none;
	}

	.Simple {
		text-shadow: none;
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
			font-size: 45px;
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

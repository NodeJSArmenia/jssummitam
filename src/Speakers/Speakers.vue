<template>
	<section class="Speakers" id="Speakers">
		<div class="Container">
			<h2 class="Title">Call for Enthusiastic <span>Speakers</span></h2>
			<Banner
				:text="bannerData.BannerText"
				:image-source="bannerData.imageSource"
				:button-link="bannerData.buttonLink"
				:button-text="bannerData.buttonText"
				:image-right="true"
			></Banner>
		</div>
	</section>
</template>

<script>
import speakers from '../_services/speakers';
import Banner from '../_common/Banner/Banner.vue';
import { serverUri } from '../variables';

export default {
	components: {
		Banner,
	},
	data: () => ({
		speakers,
		speakersList: [],
		bannerData: {
			BannerText: 'Share your experiance, knowledge and skills with the Armenian JavaScript community. Join to the enthusiastic speakers team!',
			imageSource: `${serverUri}/banners/speaker.png`,
			buttonLink: 'https://forms.gle/wte4c2FTste2qEY8A',
			buttonText: 'Join the team',
		},
	}),
	methods: {
		getSpeaker: function getSpeaker(speakerId) {
			return this.speakers[speakerId];
		},
	},
};
</script>

<style scoped lang="scss">
	.Speakers {
		padding: 50px 0 0 0;
		position: relative;
	}

	.Title {
		span {
			text-shadow: 3px 3px 9px black;
		}
	}

	@media (max-width: 600px) {
		.Speakers {
			padding: 50px 0 50px;
		}
	}
</style>

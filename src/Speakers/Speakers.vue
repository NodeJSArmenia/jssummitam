<template>
	<section class="Speakers" id="Speakers">
		<div class="Container">
			<h2 class="Title">Speakers</span></h2>
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
			BannerText: 'Share your experience, knowledge and skills with the Armenian JavaScript community. Join to the enthusiastic speakers team!',
			imageSource: `${serverUri}/banners/speaker.png`,
			buttonLink: 'https://forms.gle/kQBNAJ75o2Dh2yvM6',
			buttonText: "Join now",
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
		padding: 50px;
		position: relative;
	}

	.Title {
		span {
			text-shadow: 3px 3px 9px #91a6d0;
		}
	}
</style>

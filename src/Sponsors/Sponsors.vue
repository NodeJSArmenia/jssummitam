<template>
	<section class="Sponsors" id="Sponsors">
		<div class="Container">
			<section class="Section">
				<h2 class="Title">Sponsorship</h2>
				<Banner
					:text="bannerData.BannerText"
					:image-source="bannerData.imageSource"
					:button-link="bannerData.buttonLink"
					:button-text="bannerData.buttonText"
					:image-right="false"
				></Banner>
			</section>
		</div>
	</section>
</template>

<script>
import Banner from '../_common/Banner/Banner.vue';
import { serverUri } from '../variables';

export default {
	components: {
		Banner,
	},
	data: () => ({
		bannerData: {
			BannerText: 'Let\'s develop the JavaScript Armenian community together, by providing an opportunity to get knowledge and skills from high-class and enthusiastic engineers.',
			imageSource: `${serverUri}/banners/sponsor.png`,
			buttonLink: 'https://forms.gle/dFq39Rx8aYfPU3Vu5',
			buttonText: 'Support us',
		},
	}),
};
</script>

<style scoped lang="scss">
	.Container {
		position: relative;
		z-index: 3;
	}

	.Section {
		margin-bottom: 50px;
	}

	.Sponsors {
		padding: 50px;
	}

	.Title {
		span {
			text-shadow: 3px 3px 9px #91a6d0;
		}
	}
</style>

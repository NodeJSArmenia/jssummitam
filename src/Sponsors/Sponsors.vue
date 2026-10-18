<template>
	<section class="Sponsors" id="Sponsors">
		<div class="Container">
			<section class="Section">
				<h2 class="Title">Sponsorship</h2>
				<Banner
					:text="bannerData.BannerText"
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

export default {
	components: {
		Banner,
	},
	data: () => ({
		bannerData: {
			BannerText: 'Let\'s build up the JavaScript Armenian community together, giving everyone a chance to learn from skilled and excited engineers.',
			buttonLink: 'https://forms.gle/n4xjEzSXJcqysjTQ6',
			buttonText: 'Support us',
		},
	}),
};
</script>

<style scoped lang="scss">
	.Container {
		position: relative;
		z-index: 3;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.Section {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 50px;
	}

	.Sponsors {
		padding: 50px;
	}

	.Title {
		span {
			text-shadow: 3px 3px 9px #7a2afe;
		}
	}
</style>

<style lang="scss">
	// text-only banner: centered text and button
	.Sponsors .BannerText {
		width: auto;
		max-width: 600px;
		text-align: center;

		.BannerButton {
			justify-content: center;
		}
	}
</style>

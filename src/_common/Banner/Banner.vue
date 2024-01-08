<template>
	<div class="Banner" :style="{
    flexDirection: `row${imageRight ? '-reverse' : ''}`,
  }">
		<div v-if="iframe">
			<iframe
			src="https://www.youtube.com/embed/leb2NvCv7jw?si=xY1rNYmvz5RIrmRd&autoplay=1&mute=1&loop=1"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
			></iframe>
		</div>
  		<div v-else class="Banner BannerImage">
			<div
				class="Img"
				:style="{
        backgroundImage: `url(${imageSource})`,
      }">
			</div>
		</div>
  		
		<div class="BannerText" v-bind:class="{ 'left': !imageRight, 'right': imageRight }" :style="{
        fontWeight: `${isBoldText ? 'bold' : ''}`}">
			<div v-if="title" class="BannerTitle">
				{{ title }}
			</div>
			{{text}}
			<div class="BannerButton" v-if="buttonText">
				<Button v-bind:title="buttonText" v-bind:link="buttonLink"></Button>
			</div>
		</div>
	</div>
</template>

<script>
import Button from '../../_common/Button/Button.vue';

export default {
	name: 'Banner',
	components: {
		Button,
	},
	props: {
		imageRight: Boolean,
		imageSource: String,
		iframe: Boolean,
		title: String,
		text: String,
		buttonText: String,
		buttonLink: String,
		isBoldText: Boolean,
	},
};
</script>

<style lang="scss">
	@import '../../_styles/colors';

	.Banner {
		display: flex;
		justify-content: center;
		align-content: center;
		flex-wrap: wrap;
		margin: 50px 0 0 0;

		.left {
			text-align: left;
		}

		.right {
			text-align: right;

			.BannerButton {
				flex-direction: row-reverse;
			}
		}

		iframe {
			width: 500px;
    		height: 282px;
		}
	}

	.BannerImage {
		width: 400px;
		margin: 0 50px;

		.Img {
			background-size: contain;
			background-position: center;
			background-repeat: no-repeat;
			height: 200px;
			width: 100%;
		}
	}

	.BannerText {
		width: 282px;
		font-weight: normal;
		margin: 0 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-top: 0px;
	}

	.BannerTitle {
		font-weight: bold;
		font-size: 20px;
		margin-bottom: 20px;
	}

	.BannerButton {
		z-index: 2;
		margin: 10px 0px 0;
		display: inline-flex;
	}

	@media (max-width: 940px) {
		.Banner .left {
			width: 70%;
		}

		.BannerText {
			padding-top: 20px;
		}
	}

	@media (max-width: 700px) {
		.BannerText {
			width: 100%;
			text-align: center;
		}
		.BannerImage {
			width: 100%;

			.Img {
				height: 200px;
			}
		}
		.Banner iframe {
			width: 100%;
		}
	}
</style>

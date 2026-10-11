<template>
	<div class="Banner" :style="{
    flexDirection: `row${imageRight ? '-reverse' : ''}`,
  }">
		<div v-if="iframe" id="iframe">
			<figure v-for="video in videos" :key="video.id" class="BannerVideo">
				<iframe
				:src="`https://www.youtube.com/embed/${video.id}`"
				:title="`${video.label} video`"
				frameborder="0"
				allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
				></iframe>
				<figcaption>{{ video.label }}</figcaption>
			</figure>
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
		videos: {
			type: Array,
			default: () => [],
		},
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
		// explicit width: shrink-to-fit sizes the box from the iframe's 300px default, forcing the text to wrap
		width: 100%;
		max-width: 1000px;
		box-sizing: border-box;
		padding: 40px 50px 20px 50px;
		// glass: translucent fill + blur of the gold/shuriken background behind it
		background-color: rgba(255, 255, 255, 0.22);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(5px);
		border: 1px solid rgba(255, 255, 255, 0.45);
		border-radius: 20px;
		box-shadow: 0 8px 32px rgba(45, 14, 78, 0.18);

		.left {
			text-align: left;

			.BannerButton {
				flex-direction: row;
			}
		}

		.right {
			text-align: right;

			.BannerButton {
				flex-direction: row-reverse;
			}
		}

		#iframe {
			// 500px on desktop, shrinks on narrow screens (and then wraps above the text)
			flex: 0 1 500px;
			min-width: 0;
			max-width: 100%;
		}

		iframe {
			display: block;
			width: 100%;
			aspect-ratio: 16 / 9;
		}

		.BannerVideo {
			margin: 0 0 20px;

			figcaption {
				font-weight: bold;
				text-align: center;
				margin-top: 6px;
			}
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
		// background: white;
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
		.BannerText {
			width: 70%;
			padding-top: 20px;
		}
	}

	@media (max-width: 1024px) {
		.BannerText {
			width: 100%;
			margin: 10px 0 0;
		}
	}

	@media (max-width: 700px) {
		.Banner {
			margin-top: 30px;
			padding: 20px 16px;
		}



		.BannerImage {
			width: 100%;
			margin: 0;

			.Img {
				height: 200px;
			}
		}

		.BannerButton {
			justify-content: center;
		}
	}
</style>

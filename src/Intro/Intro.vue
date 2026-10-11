<template>
	<section class="Intro" id="Intro">
		<div class="Container">
			<div id="Titles">
				<h1 class="Title HeadTitle"><span></span>JavaScript Summit Armenia 2026</h1>
				<span class="Title Subtitle Simple">December 26 2026 - AUA</span>
			</div>
		</div>
		<Banner :title="tagline"
				:text="about"
				:iframe="true"
				:videos="videos"
				:image-right="false"
				:button-link="buttonLink"
				:button-text="buttonText"
		></Banner>

		<div class="Expect">
			<h2 class="ExpectTitle">What to expect</h2>
			<ul>
				<li v-for="item in expect" :key="item.title">
					<strong>{{ item.title }}:</strong> {{ item.text }}
				</li>
			</ul>
			<p class="Goal">{{ goal }}</p>
		</div>
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
		tagline: 'JavaScript, artificial intelligence and the future of programming',
		about: 'JavaScript Summit Armenia is back! This year we are bringing together around 200 developers, engineers and tech professionals for a smaller but more interactive and meaningful event. Expect insightful talks, hands-on experience sharing, panel discussions and new professional connections.',
		expect: [
			{
				title: 'Technical talks',
				text: 'JavaScript, Node.js, modern programming approaches and new technologies.',
			},
			{
				title: 'AI and programming',
				text: "How artificial intelligence is changing developers' daily work, the software development process and the future of the tech industry.",
			},
			{
				title: 'Panel discussions',
				text: 'Open, interactive discussions with experienced professionals about current challenges, new opportunities and the future of programming.',
			},
			{
				title: 'Networking',
				text: 'A great chance to meet like-minded people, exchange ideas and grow your professional network.',
			},
		],
		goal: 'Our aim is to create an environment where real experience, practical knowledge and valuable discussions come first, instead of theory you can already find on YouTube.',
		videos: [
			{ id: 'leb2NvCv7jw', label: '2023 Summit' },
			{ id: 'KvF9fnGODYg', label: '2024 Summit' },
		],
		imageSource: `${serverUri}/banners/polygons.png`,
		buttonText: 'Register Now',
		buttonLink: 'https://eventhub.am/am/intellectual/event/javascript-summit-armenia-2026-1d21f91d-f210-4510-b3ec-af465c026bb7',
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

		text-shadow: 3px 3px 9px #a8520f;

		span {
			text-shadow: 3px 3px 9px #a8520f;
		}
	}

	#Titles {
		display: inline-block;
	}

	.Expect {
		width: 100%;
		max-width: 1000px;
		box-sizing: border-box;
		margin: 40px auto 0;
		padding: 30px 50px;
		font-size: 20px;
		line-height: 1.4;
		// same glass as .Banner
		background-color: rgba(93, 24, 179, 0.55);
		color: #fff;
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		border: 1px solid rgba(255, 255, 255, 0.45);
		border-radius: 20px;
		box-shadow: 0 8px 32px rgba(45, 14, 78, 0.18);

		ul {
			padding-left: 1.2em;
		}

		li {
			margin-bottom: 0.8em;
		}
	}

	.ExpectTitle {
		font-weight: bold;
		margin-bottom: 0.6em;
	}

	.Goal {
		font-weight: bold;
		margin-top: 1.5em;
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

	@media (max-width: 700px) {
		.Expect {
			padding: 20px 16px;
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

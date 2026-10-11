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

			<div class="PartnersCard">
				<template v-for="group in groups">
					<h3 class="Title SubTitle" :key="`${group.title}-title`">{{ group.title }}</h3>
					<div class="Partners" :key="group.title">
						<div
							v-for="(partner, index) in group.partners"
							:key="index"
							class="Img"
							:class="group.className"
							:style="[{ backgroundImage: `url(${partner.img})` }, partner.style]">
						</div>
					</div>
				</template>
			</div>
		</div>
	</section>
</template>

<script>
import Button from '../_common/Button/Button.vue';
import { serverUri } from '../variables';
import logo from './krisp.svg';

export default {
	components: {
		Button,
	},
	data: () => ({
		name: 'Krisp',
		link: 'https://krisp.ai',
		logo,
		groups: [
			{
				title: 'Co-Organizers',
				className: 'Partner',
				partners: [
					{
						img: `${serverUri}/sponsors/js_armenia_logo.png`,
						style: { backgroundColor: 'rgb(1, 1, 1)', borderRadius: '50px' },
					},
					{ img: `${serverUri}/sponsors/aua.png` },
				],
			},
			// {
			// 	title: 'Gold sponsors',
			// 	className: 'GoldPartner',
			// 	partners: [
			// 		{ img: `${serverUri}/sponsors/lantern.png` },
			// 		{ img: `${serverUri}/sponsors/hydralab.png` },
			// 		{ img: `${serverUri}/sponsors/easydmarc.png` },
			// 	],
			// },
			// {
			// 	title: 'Fintech sponsors',
			// 	className: 'FintechPartner',
			// 	partners: [
			// 		{ img: `${serverUri}/sponsors/ameriabank.png` },
			// 	],
			// },
			// {
			// 	title: 'Media partners',
			// 	className: 'MediaPartner',
			// 	partners: [
			// 		{ img: `${serverUri}/sponsors/how2b.png` },
			// 	],
			// },
		],
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
		box-shadow: 0 8px 32px rgba(45, 14, 78, 0.18);
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
			width: 90%;
  			height: auto;
  			margin: auto;		
		}
	}

	.PartnersCard {
		width: 100%;
		max-width: 1000px;
		box-sizing: border-box;
		margin: 40px auto 0;
		padding: 30px 40px;
		// same glass as the card above
		background-color: rgba(255, 255, 255, 0.22);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		border: 1px solid rgba(255, 255, 255, 0.45);
		border-radius: 20px;
		box-shadow: 0 8px 32px rgba(45, 14, 78, 0.18);
	}

	.SubTitle {
		font-size: 25px;
		margin: 20px 0 10px;
	}

	.Partners {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-bottom: 20px;
	}

	.Img {
		max-width: 100%;
		background-position: 50%;
		background-repeat: no-repeat;
	}

	.Partner,
	.FintechPartner {
		width: 300px;
		height: 150px;
		background-size: cover;
	}

	.MediaPartner {
		width: 300px;
		height: 150px;
		background-size: contain;
	}

	.GoldPartner {
		width: 280px;
		height: 280px;
		background-size: contain;
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

		.Card,
		.PartnersCard {
			padding: 20px 16px;
		}
	}
</style>

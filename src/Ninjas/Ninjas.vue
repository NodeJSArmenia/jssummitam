<template>
    <section class="Ninjas" id="Ninjas">
        <div class="Container">
            <h2 class="Title" id="Speakers">Shinobies (Speakers)</h2>
            <ComingSoon v-if="comingSoon" />
            <template v-else>
                <div v-for="(ninja, ninjaIndex) in ninjas" :key="ninjaIndex">
                    <div class="MemberCol">
                        <div
                            class="Member"
                            v-for="(member, index) in ninja.members"
                            :key="index"
                        >
                            <div
                                class="Img"
                                :style="{ backgroundImage: `url(${member.img})` }"
                            ></div>
                            <h3 class="Name">{{ member.name }}</h3>
                            <h5 class="Position">{{ member.position }}</h5>
                            <a
                                class="Social"
                                :href="member.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                :aria-label="`${member.name} on ${isLinkedin(member) ? 'LinkedIn' : 'the web'}`"
                            >
                                <i class="fa" :class="isLinkedin(member) ? 'fa-linkedin' : 'fa-globe'" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>

<script>
import { serverUri } from '../variables';
import ComingSoon from '../_common/ComingSoon/ComingSoon.vue';

export default {
	components: {
		ComingSoon,
	},
	data: () => ({
		comingSoon: false, // set to false to show the speaker cards
		ninjas: [
			{
				members: [
					{
						img: `${serverUri}/2026-speaker/hovo.jpg`,
						name: 'Hovo Dallakyan',
						position: 'Lead Software Engineer @ EPAM Systems',
						link: 'https://hovo.me',
					},
                    {
						img: `${serverUri}/2026-speaker/narek.jpg`,
						name: 'Narek Mamikonyan',
						position: 'Engineering Manager',
						link: 'https://www.linkedin.com/in/mamikonyan',
					},
					{
						img: `${serverUri}/2026-speaker/satenik.jpg`,
						name: 'Satenik Matevosyan',
						position: 'Software Engineer @ LeverageIT',
						link: 'https://www.linkedin.com/in/satenik-matevosyan-6a6240190',
					},
                    {
						img: `${serverUri}/2026-speaker/varik.jpg`,
						name: 'Nairi Harutyunyan',
						position: 'Tech Lead @ BrainRocket (Portugal)',
						link: 'https://nairi.dev/',
					},
					{
						img: `${serverUri}/2026-speaker/lilit.jpg`,
						name: 'Lilit Tadevosyan',
						position: 'Engineering Manager @ Adobe',
						link: 'https://www.linkedin.com/in/lilittadevosyan',
					},
					{
						img: `${serverUri}/2026-speaker/dmitri.jpg`,
						name: 'Dmitri Eryomin',
						position: 'Staff Software Engineer @ TradingView (Spain)',
						link: 'https://www.linkedin.com/in/dmitri-eryomin',
					},
                    {
						img: `${serverUri}/2026-speaker/varik.jpg`,
						name: 'Varik Matevosyan',
						position: 'Sr. Software Engineer',
						link: 'https://varik.dev/',
					},
					{
						img: `${serverUri}/2026-speaker/ashot.jpg`,
						name: 'Ashot Hovhannisyan',
						position: 'Sr. Software Engineer @ Krisp',
						link: 'https://www.linkedin.com/in/iamashot/',
					},
				],
			},
		],
	}),
	methods: {
		// member.link = LinkedIn profile or personal website
		isLinkedin(member) {
			return member.link.includes('linkedin.com');
		},
	},
};
</script>

<style scoped lang="scss">
@import './../_styles/colors';

.Ninjas {
    padding: 50px 0;
}

.Title {
    span {
        text-shadow: 3px 3px 9px #7a2afe;
    }
}

.MemberCol {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
}

.Title {
    margin-bottom: 50px;
}

.Member {
    width: 19%;
    min-width: 180px;
    margin: 0 1% 25px 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px 10px;
    // glass card (same look as the Intro banner)
    background-color: rgba(122, 42, 254, 0.58);
    color: #fff;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.45);
    box-shadow: 0 8px 32px rgba(45, 14, 78, 0.18);
    transition: 0.3s ease all;
    transform: skew(-3deg);
}

.Social {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    margin-top: 12px;
    border-radius: 50%;
    font-size: 18px;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.2);
    transition: 0.2s ease all;

    &:hover {
        color: #7a2afe;
        background-color: #fff;
    }
}

.Img {
    width: 180px;
    max-width: 100%;
    aspect-ratio: 1 / 1;
    margin-bottom: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: 0.3s ease all;
    border-radius: 50%;
    filter: grayscale(0.5);
}

.Position {
    display: inline;
}

.Member:hover {
    background-color: rgba(93, 24, 179, 0.7);
    transform: skew(-3deg);

    .Img {
        transform: scale(1.1);
        filter: none;
    }
}

.Name {
    font-family: Barlow;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: 0.5px;
}

.Position {
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: 0.35px;
    text-align: center;
    color: #fff;
}

@media (max-width: 900px) {
    .Img {
        width: 120px;
    }
}

@media (max-width: 700px) {
    .Name {
        font-size: 20px;
    }
}

@media (max-width: 600px) {
    .MemberCol {
        justify-content: center;
    }

    .Member {
        width: 100%;
        padding: 10px 30px;
    }

    .Img {
        margin: 0 auto 10px;
        width: 140px;
    }

    .NinjaTitle {
        text-align: center;
        padding: 0;
    }
}
</style>

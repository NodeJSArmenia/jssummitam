<template>
    <section class="Ninjas" id="Ninjas">
        <div class="Container">
            <h2 class="Title" id="Speakers">Our Ninjas</h2>
            <ComingSoon v-if="comingSoon" />
            <template v-else>
            <div v-for="(ninja, ninjaIndex) in ninjas"
                 :key="ninjaIndex">
                <div class="MemberCol">
                    <div class="Member"
                         v-for="(member, index) in ninja.members"
                         :key="index">
                        <div class="Img" :style="{ backgroundImage: `url(${member.img})` }"></div>
                        <h3 class="Name">{{member.name}}</h3>
                        <h5 class="Position">{{member.position}}</h5>
                        <a class="Social"
                           :href="linkedinUrl(member)"
                           target="_blank"
                           rel="noopener noreferrer"
                           :aria-label="`${member.name} on LinkedIn`">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
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
		comingSoon: true, // set to false to show the speaker cards
		ninjas: [
			{
				members: [
					{
						img: `${serverUri}/speakers/tigran.jpg`,
						name: 'Tigran Bayburtsyan',
						position: 'Founder & CTO at TreeScale',
						linkedin: 'https://www.linkedin.com/', // TODO: real profile URL
					},
					{
						img: `${serverUri}/speakers/gevorg.jpg`,
						name: 'Gevorg Martirosyan',
						position: 'CTO at Blackmar (PhD, MBA)',
						linkedin: 'https://www.linkedin.com/', // TODO: real profile URL
					},
					{
						img: `${serverUri}/speakers/narek.jpg`,
						name: 'Narek Hakobyan',
						position: 'Co-Founder & CTO of HR Drone',
						linkedin: 'https://www.linkedin.com/', // TODO: real profile URL
					},
					{
						img: `${serverUri}/speakers/lilit.jpg`,
						name: 'Lilit Tadevosyan',
						position: 'Computer Scientist at Adobe',
						linkedin: 'https://www.linkedin.com/', // TODO: real profile URL
					},
					{
						img: `${serverUri}/team/4.jpg`,
						name: 'Varik Matevosyan',
						position: 'Software Engineer at Lantern',
						linkedin: 'https://www.linkedin.com/', // TODO: real profile URL
					},
					{
						img: `${serverUri}/speakers/svetlana.jpg`,
						name: 'Svetlana Hovhannisyan',
						position: 'Tech Sourcer at InConcept Labs',
						linkedin: 'https://www.linkedin.com/', // TODO: real profile URL
					},
					{
						img: `${serverUri}/speakers/armen.jpg`,
						name: 'Armen Vardanyan',
						position: 'Google DevExpert for Angular',
						linkedin: 'https://www.linkedin.com/', // TODO: real profile URL
					},
					{
						img: `${serverUri}/team/1.jpg`,
						name: 'Nairi Harutyunyan',
						position: 'Tech Writer, Podcaster',
						linkedin: 'https://www.linkedin.com/', // TODO: real profile URL
					},
					{
						img: `${serverUri}/speakers/tigran-2.jpg`,
						name: 'Tigran Hayrapteyan',
						position: 'Lecturer & Video Creator',
						linkedin: 'https://www.linkedin.com/', // TODO: real profile URL
					},
					{
						img: `${serverUri}/speakers/arsen.jpg`,
						name: 'Arsen Mazmanyan',
						position: 'Game Developer',
						linkedin: 'https://www.linkedin.com/', // TODO: real profile URL
					},
					{
						img: `${serverUri}/speakers/ruben.png`,
						name: 'Ruben Gabrielyan',
						position: 'Front End Engineer',
						linkedin: 'https://www.linkedin.com/', // TODO: real profile URL
					},
				],
			},
		],
	}),
	methods: {
		// member.linkedin = profile URL; falls back to a LinkedIn people search by name
		linkedinUrl(member) {
			return member.linkedin
				|| `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(member.name)}`;
		},
	},
};
</script>

<style scoped lang="scss">
@import "./../_styles/colors";

.Ninjas {
    padding: 50px 0;
}

.Title {
    span {
        text-shadow: 3px 3px 9px #a8520f;
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
    background-color: rgba(93, 24, 179, 0.55);
    color: #fff;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.45);
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(45, 14, 78, 0.18);
    transition: 0.3s ease all;
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
        color: #5d18b3;
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
    transform: translateY(-4px);

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
        margin: auto;
        width: 200px;
    }

    .NinjaTitle {
        text-align: center;
        padding: 0;
    }
}
</style>

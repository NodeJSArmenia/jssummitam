<template>
    <section class="Team" id="Organizers">
        <div class="Container">
            <h2 class="Title">Organizers</h2>
            <div v-for="(team, teamIndex) in teams"
                 :key="teamIndex">
                <div class="MemberCol">
                    <div class="Member"
                         v-for="(member, index) in team.members"
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
        </div>
    </section>
</template>

<script>
import { serverUri } from '../variables';

export default {
	data: () => ({
		teams: [
			{
				members: [
					{
						img: `${serverUri}/team/1.jpg`,
						name: 'Nairi Harutyunyan',
						position: 'Community Creator',
						linkedin: 'https://www.linkedin.com/', // TODO: real profile URL
					},
					{
						img: `${serverUri}/team/4.jpg`,
						name: 'Varik Matevosyan',
						position: 'Software Engineer',
						linkedin: 'https://www.linkedin.com/', // TODO: real profile URL
					},
					{
						img: `${serverUri}/team/2.jpg`,
						name: 'Vahagn Melkonyan',
						position: 'AI/ML Researcher',
						linkedin: 'https://www.linkedin.com/', // TODO: real profile URL
					},
					{
						img: `${serverUri}/team/3.jpg`,
						name: 'Gor Gharagyozyan',
						position: 'Software Engineer',
						linkedin: 'https://www.linkedin.com/', // TODO: real profile URL
					},
					{
						img: `${serverUri}/team/5.jpg`,
						name: 'Hrach Avagyan',
						position: 'CEO at HydraLab',
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
    @import './../_styles/colors';

    .Team {
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
        width: 100%;
        margin: 0 auto;
    }

    .Title {
        margin-bottom: 50px;
    }

    .Member {
        // equal share of the row, 180-220px: all members fit on one line when there is room
        flex: 1 1 0;
        min-width: 180px;
        max-width: 220px;
        margin: 0 8px 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 20px 10px;
        // glass card (same look as the Intro banner)
        background-color: rgba(255, 255, 255, 0.22);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.45);
        border-radius: 20px;
        box-shadow: 0 8px 32px rgba(42, 22, 80, 0.18);
        transition: .3s ease all;
    }

    .Img {
        width: 100%;
        max-width: 180px;
        aspect-ratio: 1 / 1;
        margin-bottom: 10px;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: contain;
        border-radius: 50%;
        transition: .3s ease all;
    }

    .Position {
        display: inline;
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
        color: #2a1650;
        background-color: rgba(255, 255, 255, 0.45);
        transition: .2s ease all;

        &:hover {
            color: #fff;
            background-color: #5b2fd4;
        }
    }

    .Member:hover {
        background-color: rgba(255, 255, 255, 0.34);
        transform: translateY(-4px);

        .Img {
            transform: scale(1.1);
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
        color: #2a1650;
    }

    @media (max-width: 700px) {
        .Name {
            font-size: 20px;
        }
    }

    @media (max-width: 600px) {
        .Name {
            font-size: 18px;
        }

        .Position {
            font-size: 12px;
        }

        .Member {
            flex-basis: 100%;
            max-width: none;
            padding: 20px 30px;
        }
    }
</style>

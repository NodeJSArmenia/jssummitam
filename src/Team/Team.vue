<template>
    <section class="Team" id="Organizers">
        <div class="Container">
            <h2 class="Title">Five Kage (Organizers)</h2>
            <div v-for="(team, teamIndex) in teams"
                 :key="teamIndex">
                <div class="MemberCol">
                    <div class="Member"
                         v-for="(member, index) in team.members"
                         :key="index">
                        <FlipImage class="Img" :front="member.img" :back="member.narutoImg" />
                        <h3 class="Name">{{member.name}}</h3>
                        <h4 class="Position">{{member.position}}</h4>
                         <h4 class="Kage"><b>{{member.kage}}</b></h4>
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
import FlipImage from '../_common/FlipImage/FlipImage.vue';
// TODO: same Naruto image for everyone for now; give each member their own
import narutoImg from '../_assets/naruto/mizukage.jpg';

export default {
	components: {
		FlipImage,
	},
	data: () => ({
		teams: [
			{
				members: [
					{
						img: `${serverUri}/team/1.jpg`,
						name: 'Nairi Harutyunyan',
						position: 'Tech Lead, Community Creator',
						kage: 'Hokage',
						narutoImg,
						linkedin: 'https://www.linkedin.com/in/nairihar/',
					},
					{
						img: `${serverUri}/team/4.jpg`,
						name: 'Varik Matevosyan',
						position: 'Security Researcher, Software Engineer',
						kage: 'Kazekage',
						narutoImg,
						linkedin: 'https://www.linkedin.com/in/varik-matevosyan-99200a108/',
					},
					{
						img: `${serverUri}/team/2.jpg`,
						name: 'Vahagn Melkonyan, PhD',
						position: 'UAV Researcher / Lecturer',
                        kage: 'Raikage',
						narutoImg,
						linkedin: 'https://www.linkedin.com/in/vahmelk/',
					},
					{
						img: `${serverUri}/team/3.jpg`,
						name: 'Gor Gharagyozyan, PhD',
						position: 'Software Engineer',
                        kage: 'Tsuchikage',
						narutoImg,
						linkedin: 'https://www.linkedin.com/in/gor-gharagyozyan/',
					},
					{
						img: `${serverUri}/team/5.jpg`,
						name: 'Hrach Avagyan',
						position: 'Software Engineer',
                        kage: 'Mizukage',
						narutoImg,
						linkedin: 'https://www.linkedin.com/in/hrach-avagyan/',
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
			text-shadow: 3px 3px 9px #7a2afe;
		}
	}

    .MemberCol {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        margin: 0 auto;
        
        > * {
            transform: skew(-3deg);
        }
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
        background-color: rgba(122, 42, 254, 0.58);
        color: #fff;
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.45);
        box-shadow: 0 8px 32px rgba(45, 14, 78, 0.18);
        transition: .3s ease all;
    }

    .Img {
        width: 100%;
        max-width: 180px;
        margin-bottom: 10px;
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
        color: #fff;
        background-color: rgba(255, 255, 255, 0.2);
        transition: .2s ease all;

        &:hover {
            color: #7a2afe;
            text-decoration: none;
            background-color: #fff;
        }
    }

    .Member:hover {
        background-color: rgba(93, 24, 179, 0.7);
        transform: translateY(-4px);
        transform: skew(-3deg);

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

    .Position, .Kage {
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: 0.35px;
        text-align: center;
        color: #fff;
    }

    .Kage {
        text-shadow: #ffe05c 0px 0px 5px;
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

        .Position, .Kage {
            font-size: 12px;
        }

        .Member {
            flex-basis: 100%;
            max-width: none;
            padding: 20px 30px;
        }
    }
</style>

<template>
    <section class="Team" id="Team">
        <div class="Container">
            <h2 class="Title">The Enthusiastic <span>Team</span></h2>
            <div class="row"
                 v-for="(team, teamIndex) in teams"
                 :key="teamIndex">
                <div class="MemberCol">
                    <div class="Member"
                         v-for="(member, index) in team.members"
                         :key="index">
                        <div class="Img" :style="{ backgroundImage: `url(${member.img})` }"></div>
                        <h3 class="Name">{{member.name}}</h3>
                        <h5 class="Position">{{member.position}}</h5>
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
						img: `${serverUri}/team/nairi.png`,
						name: 'Nairi Harutyunyan',
						position: 'Backend Engineer at Screenful, Co-Founder at Node.js Armenia',
					},
					{
						img: `${serverUri}/team/varik.png`,
						name: 'Varik Matevosyan',
						position: 'Project Manager at Node.js Armenia',
					},
					{
						img: `${serverUri}/team/gor.png`,
						name: 'Gor Karagyozyan',
						position: 'Project Manager at Node.js Armenia',
					},
					{
						img: `${serverUri}/team/vahagn.png`,
						name: 'Vahagn Melkonyan',
						position: 'Project Manager at Node.js Armenia',
					},
				],
			},
		],
	}),
};
</script>

<style scoped lang="scss">
    @import './../_styles/colors';

    .Team {
        padding: 50px 0;
    }

    .Title {
		span {
			text-shadow: 3px 3px 9px black;
		}
	}

    .MemberCol {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }

    .Title {
        margin-bottom: 50px;
    }

    .Member {
        width: 20%;
        text-align: center;
        margin-bottom: 25px;
        padding: 0 10px;
    }

    .Img {
        width: 100%;
        padding-bottom: 100%;
        margin-bottom: 10px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        transition: .3s ease all;
    }

    .Position {
        display: inline;
    }

    .Member:hover {
        .Img {
            transform: scale(1.1);
        }
    }

    .Name {
        font-family: Barlow;
        font-size: 24px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: 0.5px;
    }

    .Position {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: 0.35px;
        text-align: center;
        color: #e8e8e8;
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
            padding: 0 30px;
        }

        .Img {
            background-size: 80%;
        }

        .TeamTitle {
            text-align: center;
            padding: 0;
        }
    }
</style>

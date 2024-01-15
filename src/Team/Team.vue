<template>
    <section class="Team" id="Organizers">
        <div class="Container">
            <h2 class="Title">Organizers</h2>
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
						img: `${serverUri}/team/1.jpg`,
						name: 'Nairi Harutyunyan',
						position: 'Community Creator',
					},
					{
						img: `${serverUri}/team/4.jpg`,
						name: 'Varik Matevosyan',
						position: 'Software Engineer',
					},
					{
						img: `${serverUri}/team/2.jpg`,
						name: 'Vahagn Melkonyan',
						position: 'AI/ML Researcher',
					},
					{
						img: `${serverUri}/team/3.jpg`,
						name: 'Gor Gharagyozyan',
						position: 'Software Engineer',
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
			text-shadow: 3px 3px 9px #91a6d0;
		}
	}

    .MemberCol {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 80%;
        margin: 0 auto;
    }

    .Title {
        margin-bottom: 50px;
    }

    .Member {
        width: 21%;
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
        border-radius: 40px 10px;
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
        background: white;
        font-family: Barlow;
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: 0.5px;
    }

    .Position {
        background: white;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: 0.35px;
        text-align: center;
        color: #3d3c51;
    }


    .row {
        margin-left: 0px;
        margin-right: 0px;
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

        .Name {
            font-size: 18px;
        }

        .Position {
            font-size: 12px;
        }

        .Member {
            width: 100%;
            padding: 0 30px;
        }

        .Img {
            background-size: 100%;
            border-radius: 40px 10px;
        }

        .TeamTitle {
            text-align: center;
            padding: 0;
        }
    }
</style>

<template>
    <section class="Ninjas" id="Ninjas">
        <div class="Container">
            <h2 class="Title">The powerfull <span>Ninjas</span></h2>
            <div class="row"
                 v-for="(ninja, ninjaIndex) in ninjas"
                 :key="ninjaIndex">
                <div class="MemberCol">
                    <div class="Member"
                         v-for="(member, index) in ninja.members"
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
		ninjas: [
			{
				members: [
					{
						img: `${serverUri}/speakers/gagik.png`,
						name: 'Gagik Arustamyan',
						position: 'Lead JavaScript Developer at DataArt',
					},
					{
						img: `${serverUri}/speakers/hovo.png`,
						name: 'Hovo Gasparyan',
						position: 'Head of JavaScript Unit at EPAM Armenia',
					},
					{
						img: `${serverUri}/speakers/anushavan.png`,
						name: 'Anushavan Yeghiazaryan',
						position: 'Frontend Engineer at Fidem, React Tutor',
					},
				],
			},
		],
	}),
};
</script>

<style scoped lang="scss">
    @import './../_styles/colors';

    .Ninja {
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
        width: 80%;
        margin: 0 auto;
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
        color: #3d3c51;
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

        .NinjaTitle {
            text-align: center;
            padding: 0;
        }
    }
</style>

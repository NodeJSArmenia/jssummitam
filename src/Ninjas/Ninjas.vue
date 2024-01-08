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
						img: `${serverUri}/speakers/arsen.png`,
						name: 'Arsen Mazmanyan',
						position: 'Sr. Marketing Creatives Developer at Playrix',
					},
					{
						img: `${serverUri}/speakers/anushavan.png`,
						name: 'Anushavan Yeghiazaryan',
						position: 'Sr. Marketing Creatives Developer at Fidem',
					},
					{
						img: `${serverUri}/team/varik.png`,
						name: 'Varik Matevosyan ',
						position: 'Sr. Software Engineer at CoinStats',
					},
					{
						img: `${serverUri}/speakers/vardges.png`,
						name: 'Vardges Musheghyan',
						position: 'Software Engineer at Picsart',
					},
					{
						img: `${serverUri}/speakers/albert_.png`,
						name: 'Albert Hovhannisian',
						position: 'Co-Founder & CTO at SharpIdea',
					},
					{
						img: `${serverUri}/speakers/levon.png`,
						name: 'Levon Khachatryan',
						position: 'Software Engineer at inted.ai',
					},
					{
						img: `${serverUri}/speakers/ashot.png`,
						name: 'Ashot Hovhannisyan',
						position: 'Frontend Engineer at SoftConstruct',
					},
					{
						img: `${serverUri}/speakers/davit.png`,
						name: 'Davit Karapetyan',
						position: 'Product Security Engineer at Krisp',
					},
					{
						img: `${serverUri}/speakers/armen.png`,
						name: 'Armen Vardanyan',
						position: 'Front End Team Lead at VOLO LLC',
					},
					{
						img: `${serverUri}/speakers/alen.png`,
						name: 'Alen Abrahamyan',
						position: 'Software Engineer at SoftConstruct',
					},
					{
						img: `${serverUri}/speakers/rudolf.png`,
						name: 'Rudolf Gabrielyan',
						position: 'Sr. Software Engineer at Prelaunch',
					},
					{
						img: `${serverUri}/speakers/vahe.png`,
						name: 'Vahe Mkrtchyan',
						position: 'Senior Computer Scientist at Adobe',
					},
					{
						img: `${serverUri}/speakers/tigran.png`,
						name: 'Tigran Avetisyan',
						position: 'Senior Software Engineer',
					},
				],
			},
		],
	}),
};
</script>

<style scoped lang="scss">
@import "./../_styles/colors";

.Ninjas {
    padding: 50px 0;
}

.Title {
    span {
        text-shadow: 3px 3px 9px #91a6d0;
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
    margin: 0 2% 25px 2%;
    text-align: center;
    padding: 0 10px;
}

.Img {
    width: 100%;
    padding-bottom: 100%;
    margin-bottom: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: 0.3s ease all;
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

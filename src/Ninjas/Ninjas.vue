<template>
    <section class="Ninjas" id="Ninjas">
        <div class="Container">
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
						img: `${serverUri}/speakers/tigran.jpg`,
						name: 'Tigran Bayburtsyan',
						position: 'Founder & CTO at TreeScale',
					},
					{
						img: `${serverUri}/speakers/gevorg.jpg`,
						name: 'Gevorg Martirosyan',
						position: 'CTO at Blackmar (PhD, MBA)',
					},
					{
						img: `${serverUri}/speakers/narek.jpg`,
						name: 'Narek Hakobyan',
						position: 'Co-Founder & CTO of HR Drone',
					},
					{
						img: `${serverUri}/speakers/lilit.jpg`,
						name: 'Lilit Tadevosyan',
						position: 'Computer Scientist at Adobe',
					},
					{
						img: `${serverUri}/team/4.jpg`,
						name: 'Varik Matevosyan',
						position: 'Software Engineer at Lantern',
					},
					{
						img: `${serverUri}/speakers/svetlana.jpg`,
						name: 'Svetlana Hovhannisyan',
						position: 'Tech Sourcer at InConcept Labs',
					},
					{
						img: `${serverUri}/speakers/armen.jpg`,
						name: 'Armen Vardanyan',
						position: 'Google DevExpert for Angular',
					},
					{
						img: `${serverUri}/team/1.jpg`,
						name: 'Nairi Harutyunyan',
						position: 'Tech Writer, Podcaster',
					},
					{
						img: `${serverUri}/speakers/tigran-2.jpg`,
						name: 'Tigran Hayrapteyan',
						position: 'Lecturer & Video Creator',
					},
					{
						img: `${serverUri}/speakers/arsen.jpg`,
						name: 'Arsen Mazmanyan',
						position: 'Game Developer',
					},
					{
						img: `${serverUri}/speakers/ruben.png`,
						name: 'Ruben Gabrielyan',
						position: 'Front End Engineer',
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
    width: 180px;
    height: 180px;
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
    .Img {
        transform: scale(1.1);
        filter: none;
    }
}

.Name {
    background: white;
    font-family: Barlow;
    font-size: 16px;
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

@media (max-width: 900px) {
    .Img {
        width: 120px;
        height: 120px;
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
        padding: 0 30px;
    }

    .Img {
        margin: auto;
        width: 200px;
        height: 200px;
    }

    .NinjaTitle {
        text-align: center;
        padding: 0;
    }
}
</style>

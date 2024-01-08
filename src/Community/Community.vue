<template>
    <section class="Community" id="Community">
        <div class="Container">
            <h2 class="Title">Be part of our fantastic <span>Community</span></h2>
            <div class="CommunityItemCol row">
                    <div class="CommunityItem"
                         v-for="(community, index) in communities"
                         :key="index">
                        <a :href="community.url" target="_blank" class="Name">
                            <div class="Img" :style="{ backgroundImage: `url(${community.img})` }"></div>
                            <h3>{{community.name}}</h3>
                        </a>
                    </div>
                </div>
        </div>
    </section>
</template>

<script>
import { serverUri } from '../variables';

export default {
	data: () => ({
		communities: [
			{
				img: `${serverUri}/chats/5.jpg`,
				name: 'JavaScript Armenia',
				url: 'https://t.me/javascriptarmenia',
			},
			{
				img: `${serverUri}/chats/4.jpg`,
				name: 'Node.js Armenia',
				url: 'https://t.me/nodejsarmenia',
			},
			{
				img: `${serverUri}/chats/3.jpg`,
				url: 'https://t.me/reactarmenia',
				name: 'React Armenia',
			},
			{
				img: `${serverUri}/chats/2.jpg`,
				name: 'Vue.js Armenia',
				url: 'https://t.me/vuejsarmenia',
			},
		],
	}),
};
</script>

<style scoped lang="scss">
    @import './../_styles/colors';

    .Community {
        padding: 50px 0;
    }

    .Title {
		span {
			text-shadow: 3px 3px 9px #91a6d0;
		}
	}

    .CommunityItemCol {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 80%;
        margin: 0 auto;
    }

    .Title {
        margin-bottom: 50px;
    }

    .CommunityItem {
        width: 15%;
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
        border-radius: 10px 10px;
    }

    .Position {
        display: inline;
    }

    .CommunityItem:hover {
        .Img {
            transform: scale(1.1);
        }

        cursor: pointer;
    }

    .Name {
        font-family: Barlow;
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: 0.5px;
        color: #3d3c51;
    }

    .Name:hover {
        text-decoration: none;
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

    @media (max-width: 1000px) {
        .CommunityItem {
            width: 15%;
        }
    }

    @media (max-width: 600px) {
        .CommunityItemCol {
            justify-content: center;
        }

        .CommunityItem {
            width: 80%;
            padding: 0 30px;
        }

        .Img {
            background-size: 50%;
        }

        .CommunityTitle {
            text-align: center;
            padding: 0;
        }
    }
</style>

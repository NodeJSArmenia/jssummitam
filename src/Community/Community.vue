<template>
    <section class="Community" id="Community">
        <div class="Container">
            <h2 class="Title">Telegram Groups</h2>
            <div class="CommunityItemCol">
                    <div class="CommunityItem"
                         v-for="(community, index) in communities"
                         :key="index">
                        <a :href="community.url" target="_blank" class="Name">
                            <div class="Img" :style="{ backgroundImage: `url(${community.img})` }"></div>
                            <p>{{community.name}}</p>
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
				img: `${serverUri}/chats/8.jpg`,
				name: '@JavaScript',
				url: 'https://t.me/javascript',
			},
			{
				img: `${serverUri}/chats/7.jpg`,
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
				name: 'React Armenia',
				url: 'https://t.me/reactarmenia',
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
			text-shadow: 3px 3px 9px #a91cff;
		}
	}

    .CommunityItemCol {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        margin: 0 auto;
    }

    .Title {
        margin-bottom: 50px;
    }

    .CommunityItem {
        // equal share of the row, 130-180px: fits one line when there is room, wraps otherwise
        flex: 1 1 0;
        min-width: 130px;
        max-width: 180px;
        display: flex;
        flex-direction: column;
        margin: 0 8px 25px;
        text-align: center;
        // glass card (same look as the speaker and team cards)
        background-color: rgba(93, 24, 179, 0.55);
        color: #fff;
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.45);
        box-shadow: 0 8px 32px rgba(45, 14, 78, 0.18);
        transition: .3s ease all;
        
        > * {
            transform: skew(-3deg);
        }
    }

    .Img {
        aspect-ratio: 1 / 1;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: contain;
        border-radius: 50%;
        margin-bottom: 10px;
        max-width: 180px;
        width: 100%;
    }

    .Position {
        display: inline;
    }

    .CommunityItem:hover {
        background-color: rgba(93, 24, 179, 0.7);
        transform: translateY(-4px);

        .Img {
            transform: scale(1.1);
        }

        cursor: pointer;
    }

    // link fills the card, and the title fills what the logo leaves: all cards in a row look equal
    .Name {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 20px 10px; // padding on the link, not the card: the whole card is clickable
        font-family: Barlow;
        color: #fff;

        p {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.25;
            letter-spacing: 0.4px;
            transition: .2s ease all;
        }
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

    @media (max-width: 600px) {
        .Img {
            background-size: 100%;
        }

        .CommunityTitle {
            text-align: center;
            padding: 0;
        }
    }
</style>

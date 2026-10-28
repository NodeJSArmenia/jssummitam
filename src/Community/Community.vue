<template>
    <section class="Community" id="Community">
        <div class="Container">
            <h2 class="Title">Hidden Villages</h2>
            <div class="CommunityItemCol">
                    <div class="CommunityItem"
                         v-for="(community, index) in communities"
                         :key="index">
                        <a :href="community.url" target="_blank" class="Name">
                            <FlipImage class="Img" :front="community.img" :back="community.narutoImg" />
                            <p>{{community.name}}</p>
                            <p class="Village">{{ community.village }}</p>
                        </a>
                    </div>
                </div>
        </div>
    </section>
</template>

<script>
import { serverUri } from '../variables';
import FlipImage from '../_common/FlipImage/FlipImage.vue';
// TODO: same Naruto image for every village for now; give each its own
import narutoImg from '../_assets/naruto/mizukage.jpg';

export default {
	components: {
		FlipImage,
	},
	data: () => ({
		communities: [
			{
				img: `${serverUri}/chats/8.jpg`,
				name: '@JavaScript',
                url: 'https://t.me/javascript',
                village: 'Hidden Mist',
                narutoImg,
			},
			{
				img: `${serverUri}/chats/7.jpg`,
				name: 'JavaScript Armenia',
                url: 'https://t.me/javascriptarmenia',
                village: 'Hidden Leaf',
                narutoImg,
			},
			{
				img: `${serverUri}/chats/4.jpg`,
				name: 'Node.js Armenia',
                url: 'https://t.me/nodejsarmenia',
                village: 'Hidden Sand',
                narutoImg,
			},
			{
				img: `${serverUri}/chats/3.jpg`,
				name: 'React Armenia',
                url: 'https://t.me/reactarmenia',
                village: 'Hidden Stone',
                narutoImg,
			},
			{
				img: `${serverUri}/chats/2.jpg`,
				name: 'Vue.js Armenia',
                url: 'https://t.me/vuejsarmenia',
                village: 'Hidden Cloud',
                narutoImg,
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
			text-shadow: 3px 3px 9px #7a2afe;
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
        max-width: 170px;
        display: flex;
        flex-direction: column;
        margin: 0 8px 25px;
        text-align: center;
        // glass card (same look as the speaker and team cards)
        background-color: rgba(122, 42, 254, 0.58);
        color: #fff;
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.45);
        box-shadow: 0 8px 32px rgba(45, 14, 78, 0.18);
        transition: .3s ease all;
        transform: skew(-3deg);
    }

    .Img {
        margin-bottom: 10px;
        max-width: 180px;
        width: 100%;
    }

    .Village{
        font-size: 13px !important;
        text-shadow: 0px 0px 5px #ffe05c;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: 0.35px;
        text-align: center;
    }

    .Position {
        display: inline;
    }

    .CommunityItem:hover {
        background-color: rgba(93, 24, 179, 0.7);

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
        .CommunityTitle {
            text-align: center;
            padding: 0;
        }
    }
</style>

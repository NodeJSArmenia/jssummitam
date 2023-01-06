<template>
    <section class="Chat" id="Chat">
        <div class="Container">
            <h2 class="Title">Join <span>Community</span> telegram groups</h2>
            <div class="ChatItemCol row">
                    <div class="ChatItem"
                         v-for="(chat, index) in chats"
                         :key="index">
                        <a :href="chat.url" target="_blank" class="Name">
                            <div class="Img" :style="{ backgroundImage: `url(${chat.img})` }"></div>
                            <h3>{{chat.name}}</h3>
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
		chats: [
            {
                img: `${serverUri}/chats/js.png`,
                name: 'JavaScript Armenia',
                url: 'https://t.me/javascriptarmenia',
            },
            {
                img: `${serverUri}/chats/node.png`,
                name: 'Node.js Armenia',
                url: 'https://t.me/nodejsarmenia',
            },
            {
                img: `${serverUri}/chats/react.png`,
                url: 'https://t.me/reactarmenia',
                name: 'React Armenia',
            },
            {
                img: `${serverUri}/chats/vue.png`,
                name: 'Vue.js Armenia',
                url: 'https://t.me/vuejsarmenia',
            },
        ],
	}),
};
</script>

<style scoped lang="scss">
    @import './../_styles/colors';

    .Chat {
        padding: 50px 0;
    }

    .Title {
		span {
			text-shadow: 3px 3px 9px black;
		}
	}

    .ChatItemCol {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 80%;
        margin: 0 auto;
    }

    .Title {
        margin-bottom: 50px;
    }

    .ChatItem {
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
    }

    .Position {
        display: inline;
    }

    .ChatItem:hover {
        .Img {
            transform: scale(1.1);
        }

        cursor: pointer;
    }

    .Name {
        font-family: Barlow;
        font-size: 24px;
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
        .ChatItem {
            width: 15%;
        }
    }

    @media (max-width: 700px) {
        .Name {
            font-size: 20px;
        }
    }

    @media (max-width: 600px) {
        .ChatItemCol {
            justify-content: center;
        }

        .ChatItem {
            width: 80%;
            padding: 0 30px;
        }

        .Img {
            background-size: 50%;
        }

        .ChatTitle {
            text-align: center;
            padding: 0;
        }
    }
</style>

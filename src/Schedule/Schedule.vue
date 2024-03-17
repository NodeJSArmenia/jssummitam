<template>
  <section class="Schedule" id="Schedule">
    <div class="Container">
      <h2 class="Title"><span>Agenda</span></h2>
      <div class="schedule">
        <div class="schedule-in">
          <div class="schedule-timeline">
            <ul>
              <li>
                <span>14:00</span>
              </li>
              <li>
                <span>14:30</span>
              </li>
            </ul>
          </div>
          <div class="schedule-content">
            <div class="schedule-column">
              <div class="schedule-header">
              </div>
              <div class="schedule-body">
                <div
                  class="schedule-item"
                  :style="{
                    height: (eventDuration * quarterHour) / 30 + 'rem',
                  }"
                >
                  <div class="schedule-item-in">
                    <div class="schedule-item-title">
                      <h6 class="schedule-item-title-in">REGISTRATION</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="schedule-in">
          <div class="schedule-timeline">
            <ul>
                <li v-for="i in timeline" :key="i">
                  <span>{{i}}</span>
                </li>
            </ul>
          </div>
          <div class="schedule-content">
            <div
            v-for="room in rooms"
            :key="room.name"
            class="schedule-column">
              <div class="schedule-header">
                <h4 class="schedule-header-in">{{room.name}}</h4>
              </div>
              <div class="schedule-body">
                <div
                  class="schedule-item"
                  v-for="topic in room.talks"
                  :key="topic.topic_title + topic.end"
                  :style="{ height: ((topic.speaker == 'Vahe Mkrtchyan' ? 3 : topic.topic_title == 'Networking area' ? 8 : 1) * quarterHour) / 16 + 'rem', visibility: topic.empty && 'hidden' }"
                >
                  <div class="schedule-item-in">
                    <div class="schedule-item-title">
                        <a v-if="topic.videoUrl" class="schedule-item-title-in" :href="topic.videoUrl" target="_blank">
                            <!-- <i class="icon-youtube"></i> -->
                            {{topic.topic_title}}
                        </a>
                        <h6 v-else class="schedule-item-title-in">{{topic.topic_title}}</h6>
                    </div>
                    <div class="schedule-item-info" v-if="topic.speaker">
                      <div class="schedule-item-speaker">
                        <img
                            class="schedule-item-speaker-image"
                            :src="topic.img"
                        />
                        <span class="schedule-item-speaker-name"
                          >{{topic.speaker}}</span
                        >
                      </div>
                      <div>
                        <span class="schedule-item-speaker-name"
                          >{{topic.spk_lang}}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
		quarterHour: 100,
		eventDuration: 2,
		rooms: [
			{
				name: 'Main stage',
				talks: [
					{
						start: '14:30',
						end: '14:45',
						topic_title: 'OPENING',
					},
					{
						start: '14:45',
						end: '15:15',
						topic_title: 'Running LLMs in the browser, without servers',
						speaker: 'Tigran Bayburtsyan',
						spk_lang: 'EN',
						img: `${serverUri}/speakers/tigran.jpg`,
						// videoUrl: 'https://youtu.be/7lUwN_wSeJ8?si=IvciOJujtMWRkeB1',
					},
					{
						start: '15:20',
						end: '15:50',
						topic_title: 'Mastering the Web: Understanding JavaScript’s Influence on HTML Rendering',
						speaker: 'Lilit Tadevosyan',
						spk_lang: 'AM',
						img: `${serverUri}/speakers/lilit.jpg`,
						// videoUrl: 'https://youtu.be/_qA1tmIyohA?si=uFY636FFL4tU4Fpa',
					},
					{
						start: '15:55',
						end: '16:25',
						topic_title: 'Generative AI in Fintech: Secure, Efficient, Fast',
						speaker: 'Gevorg Martirosyan',
						spk_lang: 'AM',
						img: `${serverUri}/speakers/gevorg.jpg`,
						// videoUrl: 'https://youtu.be/M4d8s2IKPl0?si=6eqP-JQLCTdMycON',
					},
					{
						start: '16:25',
						end: '16:55',
						topic_title: 'BREAK 30 MIN',
					},
					{
						start: '16:55',
						end: '17:25',
						topic_title: 'Postgres is all you need for your AI application',
						speaker: 'Varik Matevosyan',
						spk_lang: 'EN',
						img: `${serverUri}/team/4.jpg`,
						// videoUrl: 'https://youtu.be/W2LJkPh9n4I?si=p542Yx6Bblk1PsRu',
					},
					{
						start: '17:30',
						end: '18:00',
						topic_title: 'Making your own game engine on JavaScript',
						speaker: 'Arsen Mazmanyan',
						spk_lang: 'EN',
						img: `${serverUri}/speakers/arsen.jpg`,
						// videoUrl: 'https://youtu.be/50t7eSSih8A?si=WFg544GQh8x_KmqY',
					},
					{
						start: '18:05',
						end: '18:35',
						topic_title: 'Multithreading with JavaScript',
						speaker: 'Nairi Harutyunyan',
						spk_lang: 'AM',
						img: `${serverUri}/team/1.jpg`,
						// videoUrl: 'https://youtu.be/50t7eSSih8A?si=WFg544GQh8x_KmqY',
					},
					{
						start: '18:40',
						end: '19:10',
						topic_title: 'Winning CV + Interview appearance do’s and don’ts',
						speaker: 'Svetlana Hovhannisyan',
						spk_lang: 'AM',
						img: `${serverUri}/speakers/svetlana.jpg`,
						// videoUrl: 'https://youtu.be/50t7eSSih8A?si=WFg544GQh8x_KmqY',
					},
					{
						start: '19:10',
						end: '19:25',
						topic_title: 'CLOSING',
					},
				],
			},
			{
				name: 'Manoogian',
				talks: [
					{
						start: '14:30',
						end: '14:45',
						empty: true,
					},
					{
						start: '14:45',
						end: '15:15',
                        empty:true,
					},
					{
						start: '15:20',
						end: '15:50',
						topic_title: 'Building the most performant web applications with Angular',
						speaker: 'Armen Vardanyan',
						spk_lang: 'EN',
						img: `${serverUri}/speakers/armen.jpg`,
						// videoUrl: 'https://youtu.be/aFr8sadgTd4?si=PiojPgNJFEd9Eopx',
					},
					{
						start: '15:55',
						end: '16:25',
						topic_title: 'When is it (not) good to ignore algorithms',
						speaker: 'Tigran Hayrapteyan',
						spk_lang: 'AM',
						img: `${serverUri}/speakers/tigran-2.jpg`,
						// videoUrl: 'https://youtu.be/PoC3qc5zcMI?si=4o3ZRZHl0Vi6rabp',
					},
					{
						start: '16:10',
						end: '16:40',
						topic_title: 'BREAK 30 MIN',
					},
					{
						start: '16:55',
						end: '17:25',
						topic_title: 'Three.js with React: Strategies and Challenges',
						speaker: 'Elmira Avagyan',
						spk_lang: 'AM',
						img: `${serverUri}/speakers/elmira.jpg`,
						// videoUrl: 'https://youtu.be/uXPTeJ31ntM?si=qbjplCNsW1XGj-XL',
					},
					{
						start: '17:30',
						end: '18:00',
						topic_title: 'Generative AI in your Startup',
						speaker: 'Narek Hakobyan',
						spk_lang: 'AM',
						img: `${serverUri}/speakers/narek.jpg`,
						// videoUrl: 'https://youtu.be/ewJRCxp3R-E?si=GM2ju03RXH-g2T62',
					},
					{
						start: '18:05',
						end: '18:35',
                        empty: true,
					},
					{
						start: '18:40',
						end: '19:10',
                        empty: true,
					},
				],
			},
			{
				name: 'Faculty Lounge',
				talks: [
					{
						start: '14:30',
						end: '14:45',
						empty: true,
					},
					{
						start: '14:45',
						end: '18:40',
						topic_title: 'Networking area',
					},
				],
			},
		],
		teams: [
			{
				members: [
					{
						img: `${serverUri}/team/nairi.png`,
						name: 'Nairi Harutyunyan',
						position:
                            'Sr. Backend Engineer at Screenful, Co-Founder at Node.js Armenia',
					},
					{
						img: `${serverUri}/team/varik.png`,
						name: 'Varik Matevosyan',
						position:
                            'Sr. Software Engineer at CoinStats, Co-Founder at Node.js Armenia',
					},
					{
						img: `${serverUri}/team/gor.png`,
						name: 'Gor Gharagyozyan',
						position: 'Software Engineer at SoftConstruct',
					},
					{
						img: `${serverUri}/team/vahagn.png`,
						name: 'Vahagn Melkonyan',
						position: 'AI/ML Engineer-Researcher at CAST',
					},
				],
			},
		],
		timeline: [
			'14:30',
			'14:45',
			'15:20',
			'15:55',
			'16:25',
			'16:55',
			'17:30',
			'18:05',
			'18:35',
			'18:40',
			'19:10',
			'19:25',
		],
	}),
};
</script>

<style scoped lang="scss">
@import "./../_styles/colors";
@function toRem($number) {
    @return $number/16 + rem;
}
:root {
    --ff-primary: "Poppins", sans-serif;
    --fs-primary: 16px;

    --white-rgb: 255, 255, 255;
    --black-rgb: 0, 0, 0;
    --schedule-item-bg-rgb: 248, 248, 248;

    --timeline-bg: rgb(var(--white-rgb));
    --schedule-item-bg: rgba(var(--schedule-item-bg-rgb), 0.95);
    --schedule-item-divider: rgba(var(--black-rgb), 0.2);
    --schedule-text: rgb(70, 67, 106);
    --grid-border: #8C52FF;
    --js-summit-yellow-rgb: 253, 223, 89;

    --am: lightcoral;
    --en: mediumseagreen;
    --beginner: orange;
    --intermediate: darkcyan;
    --advanced: indigo;
    --all-level: darkred;
    --schedule-item-bg-hex: rgb(230, 230, 230);
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: "";
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

button {
    padding: 0;
    background: 0 0;
    border: 0;
    font-family: inherit;
    outline: 0;
}

*,
:before,
:after {
    box-sizing: border-box;
}
.Team {
    padding: 50px 0;
}

.Title {
    span {
        background: #fff;
        color: #3d3c51;
        font-family: Barlow;
        font-size: 40px;
        font-weight: 400;
        margin-bottom: .2em;
        text-align: center;
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
.Container {
    margin: 0 auto;
    padding-top: 50px;
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
.schedule {
    padding: 16px 16px 75px 16px;
    overflow: hidden;
    background-color: #fff;
    background-image: radial-gradient(rgba(140,130,255,0.5) 1px, rgba(140,130,255,0.5) 0);
    background-size: 75px 75px;
    border-radius: 16px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 3px, rgba(14, 30, 37, 0.32) 0px 2px 16px 3px;

    &-in {
        position: relative;
        width: 100%;
        max-width: 1200px;
        display: grid;
        grid-template-columns: toRem(70) 1fr;
        margin: auto;

        &:not(:last-child) {
            margin-bottom: toRem(16);
        }
    }

    &-timeline {
        position: sticky;
        top: 0;
        left: 0;
        padding-top: toRem(60);
        // background-color: var(--timeline-bg);
        z-index: 2;

        ul {
            position: relative;
        }

        li {
            height: toRem(100);
            display: flex;
            align-items: flex-start;

            &:after {
                content: "";
                flex: 1 0 0;
                height: 1px;
                background-color: var(--grid-border);
            }

            &:nth-child(odd) {
                span {
                    padding-right: toRem(6);

                    &:hover {
                        color: var(--beginner);
                    }
                }
            }

            &:nth-child(even) {
                span {
                    padding-right: toRem(12);

                    &:hover {
                        color: var(--beginner);
                    }
                }
            }

            &:last-child {
                position: absolute;
                top: 100%;
                right: 0;
                left: 0;
                transform: translateY(-1px);
            }
        }

        span {
            flex: 0 0 auto;
            font-size: toRem(14);
            color: var(--schedule-text);
            transform: translateY(-50%);
        }
    }

    &-content {
        width: 100%;
        display: flex;
        background-position: center top, center center, center bottom;
        background-size: 100% toRem(100), 100% 100%, 100% toRem(100);
        background-repeat: repeat-y, no-repeat, no-repeat;
        overflow-x: auto;
        overflow-y: hidden;
    }

    &-column {
        min-width: toRem(220);
        flex: 1 0 0;
    }

    &-header {
        height: toRem(60);
        padding: 2px 4px;
        display: flex;
        justify-content: center;
        align-items: center;

        &-in {
            font-size: toRem(16);
            font-weight: 700;
            color: var(--schedule-text);
            text-align: center;
        }
    }

    &-body {
        position: relative;
        width: 100%;
    }

    &-item {
        width: 100%;
        padding: 4px;
        position: relative;
        &-in {
            width: 100%;
            height: 100%;
            padding: 8px;
            background-color: var(--schedule-item-bg);
            box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 8px 0px;
            border-radius: 12px;
        }

        &-title {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            &:first-child:last-child {
                height: 100%;
            }

            &, a {
                text-decoration: underline;
            }

            &, a:hover {
                color: var(--beginner);
            }

            &:not(a) {
                text-decoration: none;
                user-select: none;
            }

            &:not(:first-child:last-child) {
                height: 50%;
                margin-bottom: toRem(2);
            }
            svg {
                width: toRem(13);
                height: toRem(13);

                path {
                    fill: var(--schedule-text);
                }
            }

            &-in {
                display: block;
                font-size: toRem(13);
                line-height: toRem(16);
                font-weight: 600;
                color: var(--schedule-text);
                text-align: center;

                i {
                    display: inline-block;
                    vertical-align: top;
                }
            }
        }

        &-info {
            height: 50%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: toRem(30);
            padding-right: toRem(30);

            &-in {
                display: flex;

                li {
                    width: toRem(22);
                    height: toRem(22);

                    &:not(:last-child) {
                        margin-right: toRem(4);
                    }
                }

                span {
                    width: 100%;
                    height: 100%;
                    display: block;
                    border-radius: 50%;
                    font-size: toRem(14);
                    line-height: toRem(19);
                    text-align: center;

                    &.am {
                        border: 1px solid;
                        border-color: var(--am);
                        color: var(--am);
                    }

                    &.en {
                        border: 1px solid;
                        border-color: var(--en);
                        color: var(--en);
                    }

                    &.level {
                        border-width: toRem(11);
                        border-style: solid;
                    }

                    &.beginner {
                        border-color: var(--beginner);
                    }

                    &.intermediate {
                        border-color: var(--intermediate);
                    }

                    &.advanced {
                        border-color: var(--advanced);
                    }

                    &.all {
                        border-color: var(--all-level);
                    }
                }
            }
        }

        &-speaker {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &-image {
                width: toRem(22);
                height: toRem(22);
                border-radius: 50%;
                object-fit: cover;
            }

            &-name {
                padding-left: toRem(6);
                font-size: toRem(12);
                font-weight: 500;
                color: var(--schedule-text);
            }
        }
    }
}

.Title {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 1.1em;
    text-align: center;
    color: $text-primary;
}
</style>

<template>
  <section class="Schedule" id="Schedule">
    <div class="Container">
      <h2 class="Title">Summit <span>Schedule</span></h2>
      <div class="schedule">
        <div class="schedule-in">
          <div class="schedule-timeline">
            <ul>
              <li>
                <span>10:00</span>
              </li>
              <li>
                <span>10:30</span>
              </li>
              <li>
                <span>11:00</span>
              </li>
            </ul>
          </div>
          <div class="schedule-content">
            <div class="schedule-column">
              <div class="schedule-header">
                <h4 class="schedule-header-in">Entry</h4>
              </div>
              <div class="schedule-body">
                <div
                  class="schedule-item"
                  :style="{
                    height: (eventDuration * quarterHour) / 16 + 'rem',
                  }"
                >
                  <div class="schedule-item-in">
                    <div class="schedule-item-title">
                      <h6 class="schedule-item-title-in">Registration</h6>
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
                  :style="{ height: ((topic.speaker == 'Vahe Mkrtchyan' ? 3 : topic.topic_title == 'Adobe challenges' ? 11 : 1) * quarterHour) / 16 + 'rem', visibility: topic.empty && 'hidden' }"
                >
                  <div class="schedule-item-in">
                    <div class="schedule-item-title">
                      <h6 class="schedule-item-title-in">{{topic.topic_title}}</h6>
                    </div>
                    <div class="schedule-item-info" v-if="topic.speaker">
                      <div class="schedule-item-speaker">
                        <span class="schedule-item-speaker-name"
                          >{{topic.speaker}}</span
                        >
                        <img
                          class="schedule-item-speaker-image"
                          :src="topic.img"
                        />
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
import { serverUri } from "../variables";
export default {
    data: () => ({
        quarterHour: 100,
        eventDuration: 2,
        rooms: [
            {
                name: "Manoogian hall",
                talks: [
                    {
                        start: "11:00",
                        end: "11:10",
                        topic_title: "Opening"
                    },
                    {
                        start: "11:10",
                        end: "11:40",
                        topic_title: "Let's make games with JavaScript",
                        speaker: "Arsen Mazmanyan",
                        img: `${serverUri}/speakers/arsen.png`
                    },
                    {
                        start: "11:40",
                        end: "11:50",
                        // empty: true
                        topic_title: "BREAK 10 MIN"
                    },
                    {
                        start: "11:50",
                        end: "12:20",
                        topic_title: "React with Web3 and Smart contracts",
                        speaker: "Anushavan Yeghiazaryan",
                        img: `${serverUri}/speakers/anushavan.png`
                    },
                    {
                        start: "12:20",
                        end: "12:30",
                        // empty: true
                        topic_title: "BREAK 10 MIN"
                    },
                    {
                        start: "12:30",
                        end: "13:00",
                        topic_title:
                            "From Denial to Acceptance: The Journey to Microservice Adoption",
                        speaker: "Tigran Avetisyan",
                        img: `${serverUri}/speakers/tigran.png`
                    },
                    {
                        start: "13:00",
                        end: "13:30",
                        topic_title: "BREAK"
                    },
                    {
                        start: "13:30",
                        end: "14:00",
                        topic_title: "The Future of Angular",
                        speaker: "Armen Vardanyan",
                        img: `${serverUri}/speakers/armen.png`
                    },
                    {
                        start: "14:00",
                        end: "14:10",
                        // empty: true
                        topic_title: "BREAK 10 MIN"
                    },
                    {
                        start: "14:10",
                        end: "14:40",
                        topic_title: "Software design",
                        speaker: "Vardges Musheghyan",
                        img: `${serverUri}/speakers/vardges.png`
                    },
                    {
                        start: "14:40",
                        end: "14:50",
                        topic_title: "CLOSING"
                    }
                ]
            },
            {
                name: "113W PAB",
                talks: [
                    {
                        start: "11:00",
                        end: "11:10",
                        empty: true
                    },
                    {
                        start: "11:10",
                        end: "11:40",
                        topic_title: "JavaScript attack surface",
                        speaker: "Davit Karapetyan",
                        img: `${serverUri}/speakers/davit.png`
                    },
                    {
                        start: "11:40",
                        end: "11:50",
                        // empty: true
                        topic_title: "BREAK 10 MIN"
                    },
                    {
                        start: "11:50",
                        end: "12:20",
                        topic_title: "ML/AI models in JavaScript environment",
                        speaker: "Levon Khachatryan",
                        img: `${serverUri}/speakers/levon.png`
                    },
                    {
                        start: "12:20",
                        end: "12:30",
                        // empty: true
                        topic_title: "BREAK 10 MIN"
                    },
                    {
                        start: "12:30",
                        end: "13:00",
                        topic_title: "Be prepared for production incidents",
                        speaker: "Varik Matevosyan",
                        img: `${serverUri}/team/varik.png`
                    },
                    {
                        start: "13:00",
                        end: "13:30",
                        topic_title: "BREAK"
                    },
                    {
                        start: "13:30",
                        end: "14:00",
                        topic_title: "The Power of Mathematics in JavaScript",
                        speaker: "Alen Abrahamyan",
                        img: `${serverUri}/speakers/alen.png`
                    },
                    {
                        start: "14:00",
                        end: "14:10",
                        // empty: true
                        topic_title: "BREAK 10 MIN"
                    },
                    {
                        start: "14:10",
                        end: "14:40",
                        topic_title: "Cracking the JavaScript Interviews",
                        speaker: "Albert Hovhannisyan",
                        img: `${serverUri}/speakers/albert_.png`
                    },
                    {
                        start: "14:40",
                        end: "14:50",
                        empty: true
                    }
                ]
            },
            {
                name: "112W PAB",
                talks: [
                    {
                        start: "11:00",
                        end: "11:10",
                        empty: true
                    },
                    {
                        start: "11:10",
                        end: "11:40",
                        topic_title: "",
                        speaker: ""
                    },
                    {
                        start: "11:40",
                        end: "11:50",
                        // empty: true
                        topic_title: "BREAK 10 MIN"
                    },
                    {
                        start: "11:50",
                        end: "12:20",
                        topic_title: "Building Fullstack applications on AWS",
                        speaker: "Rudolf Gabrielyan",
                        img: `${serverUri}/speakers/rudolf.png`
                    },
                    {
                        start: "12:20",
                        end: "12:30",
                        // empty: true
                        topic_title: "BREAK 10 MIN"
                    },
                    {
                        start: "12:30",
                        end: "13:00",
                        topic_title: "Stop using Redux",
                        speaker: "Ashot Hovhannisyan",
                        img: `${serverUri}/speakers/ashot.png`
                    },
                    {
                        start: "13:00",
                        end: "13:30",
                        topic_title: "BREAK"
                    },
                    {
                        start: "13:30",
                        end: "14:40",
                        topic_title:
                            "Terminal session: From scratch to Production",
                        speaker: "Vahe Mkrtchyan",
                        img: `${serverUri}/speakers/vahe.png`
                    }
                ]
            },
            {
                name: "Faculty Lounge",
                talks: [
                    {
                        start: "11:00",
                        end: "11:10",
                        empty: true
                    },
                    {
                        start: "11:50",
                        end: "15:30",
                        topic_title: "Adobe challenges"
                    }
                ]
            }
        ],
        teams: [
            {
                members: [
                    {
                        img: `${serverUri}/team/nairi.png`,
                        name: "Nairi Harutyunyan",
                        position:
                            "Sr. Backend Engineer at Screenful, Co-Founder at Node.js Armenia"
                    },
                    {
                        img: `${serverUri}/team/varik.png`,
                        name: "Varik Matevosyan",
                        position:
                            "Sr. Software Engineer at CoinStats, Co-Founder at Node.js Armenia"
                    },
                    {
                        img: `${serverUri}/team/gor.png`,
                        name: "Gor Gharagyozyan",
                        position: "Software Engineer at SoftConstruct"
                    },
                    {
                        img: `${serverUri}/team/vahagn.png`,
                        name: "Vahagn Melkonyan",
                        position: "AI/ML Engineer-Researcher at CAST"
                    }
                ]
            }
        ],
        timeline: [
            "11:00",
            "11:10",
            "11:40",
            "11:50",
            "12:20",
            "12:30",
            "13:00",
            "13:30",
            "14:00",
            "14:10",
            "14:40",
            "14:50",
            "15:30"
        ]
    })
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
    --grid-border: #46436aab;
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

.Schedule {
    padding: 50px 0;
}

.schedule {
    padding: 16px;
    overflow: hidden;
    background-color: #fff;
    background-image: radial-gradient(#46436a 1px, #e6e6e6 0);
    background-size: 75px 75px;

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
        padding-top: toRem(100);
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
                }
            }

            &:nth-child(even) {
                span {
                    padding-right: toRem(12);
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
        background-image: linear-gradient(
                to bottom,
                var(--grid-border) 0,
                transparent 1px
            ),
            linear-gradient(
                to right,
                var(--grid-border) 0,
                transparent 1px,
                transparent calc(100% - 1px),
                var(--grid-border) 100%
            ),
            linear-gradient(to top, var(--grid-border) 0, transparent 1px);
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
        height: toRem(100);
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
            border-radius: 3px;
        }

        &-title {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            &:first-child:last-child {
                height: 100%;
            }

            &:not(:first-child:last-child) {
                height: 50%;
                border-bottom: 1px solid var(--schedule-item-divider);
                margin-bottom: toRem(2);
            }

            &-in {
                font-size: toRem(13);
                font-weight: 600;
                color: var(--schedule-text);
                text-align: center;
            }
        }

        &-info {
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

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
                padding-right: toRem(4);
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
    margin-bottom: 0.2em;
    text-align: center;
    color: $text-primary;

    span {
        color: $green-primary;
    }
}
</style>

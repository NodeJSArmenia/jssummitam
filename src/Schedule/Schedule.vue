<template>
  <section class="Schedule" id="Schedule">
    <div class="Container">
      <h2 class="Title"><span>Agenda</span></h2>
      <ComingSoon v-if="comingSoon" />
      <div v-else class="schedule">
        <p class="schedule-date">December 26, 2026</p>
        <ol class="schedule-list">
          <li
            v-for="item in agenda"
            :key="item.start"
            class="schedule-row"
            :class="`-${item.type}`"
          >
            <time class="schedule-time">{{ item.start }} – {{ item.end }}</time>
            <div class="schedule-item">
              <h3 class="schedule-item-title">{{ item.title }}</h3>
              <p v-if="item.subtitle" class="schedule-item-subtitle">{{ item.subtitle }}</p>
              <div v-if="item.speaker" class="schedule-item-speaker">
                <img
                  v-if="item.speaker.img"
                  class="schedule-item-speaker-image"
                  :src="item.speaker.img"
                  :alt="item.speaker.name"
                />
                <span class="schedule-item-speaker-name">{{ item.speaker.name }}</span>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
import ComingSoon from '../_common/ComingSoon/ComingSoon.vue';
import speakers from '../_services/speakers';

// type: 'talk' | 'break' | 'event'
const talk = (start, end, speakerId, title, subtitle) => ({
	start, end, type: 'talk', speaker: speakers[speakerId], title, subtitle,
});

export default {
	components: {
		ComingSoon,
	},
	data: () => ({
		comingSoon: false, // set to true to hide the agenda
		agenda: [
            {
                start: '09:00', end: '10:15', type: 'event', title: 'Doors open & registration',
            },
            {
                start: '10:15', end: '10:30', type: 'event', title: 'Opening ceremony',
            },
            talk('10:30', '10:55', 'narek', 'To Be Announced (AI)'),
            talk('11:00', '11:25', 'armen', 'Agents and Graphs', 'Building Knowledge Graphs for Agentic Applications'),
            talk('11:30', '11:55', 'lilit', 'What makes a great engineer today?', "AI is changing not just how we build software, but what we expect from the engineers building it. As traditional roles, responsibilities, and ways of working evolve, so does our understanding of what makes a great engineer. In this talk, we'll explore how AI is reshaping the software engineering profession, challenging long-established assumptions, and pushing us to rethink what it means to be a great engineer today."),
            {
                start: '11:55', end: '12:10', type: 'break', title: '☕ Coffee & networking (15 Min)',
            },
            talk('12:10', '12:35', 'varik', 'Browsers Have Their Own Insecurities', "Even browsers have insecurities: JavaScriptCore and WebCore are full of memory bugs that a single web page can turn against the person viewing it. We'll go through the most common bug classes, then follow one use-after-free all the way from a crash to code execution in Safari."),
            talk('12:40', '13:05', 'ashot', 'Local-First: Bring Your Data Home', "Your data shouldn't need a server's permission to exist. This talk is about local-first web apps: what changes when the device comes first, and how to own your identity without anyone's login server."),
            {
                start: '13:05', end: '13:25', type: 'break', title: '🍽️ Lunch & networking (20 Min)',
            },
            talk('13:25', '13:50', 'dmitri', 'The new Full-Stack Developer', 'What if Full-Stack meant more than Frontend and Backend? Let’s explore a new kind of developer who combines engineering expertise with Product Thinking and UX knowledge to build better products, not just better software.'),
            talk('13:55', '14:20', 'gnel', 'Write the Spec, Not the Prompt', 'AI writes code faster than any team can review it, and without a shared source of truth, the result is sloppy, drifting code that nobody fully understands, built from prompts that start from scratch every time. This talk is about spec-driven development: how a living spec, written in a language both product and developers speak, keeps the domain in sync, and how organizing prompts and memory around it helps AI agents build what the team actually meant.'),
            talk('14:25', '14:50', 'satenik', 'New project. Zero context. Now what?', "Joining a new software project has always meant navigating unfamiliar code, understanding its architecture, discovering business logic and figuring out how everything fits together. In this talk, let's explore what has changed in the AI era and how developers can approach getting familiar with a new project today."),
            {
                start: '14:50', end: '15:05', type: 'break', title: '☕ Coffee break (15 Min)',
            },
            talk('15:05', '15:30', 'hovo', "How I Became an AI Engineer After 10 Years of JavaScript", "After many years of working with JavaScript, I started exploring AI by building my own AI SaaS projects with the goal of generating passive income. What began as personal experimentation eventually led me to work on AI solutions in enterprise environments. In this talk, I'll share my journey, the lessons I learned along the way, and how I transitioned into AI engineering."),
            talk('15:35', '16:00', 'nairi', 'Production Incidents', "€500,000 in financial losses, 6-hour overnight debugging sessions, 3 a.m. meetings, sleepless nights, burnout, and even hospital visits. This talk is about the harsh reality of production incidents, lessons learned under pressure, and what it takes to keep critical systems running when everything goes wrong."),
            {
                start: '16:00', end: '16:10', type: 'event', title: 'Closing ceremony & group photo',
            },
		],
	}),
};
</script>

<style scoped lang="scss">
@import "./../_styles/colors";

.Container {
    margin: 0 auto;
    padding-top: 50px;
}

.Title {
    font-size: 40px;
    margin-bottom: 1.1em;
    text-align: center;
}

.schedule {
    max-width: 900px;
    margin: 0 auto;
    padding: 24px;
    background-color: #fff;
    background-image: radial-gradient(rgba(93, 24, 179, 0.4) 1px, rgba(93, 24, 179, 0.4) 0);
    background-size: 75px 75px;
    border-radius: 16px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 3px, rgba(14, 30, 37, 0.32) 0px 2px 16px 3px;
    color: #2d0e4e;
}

.schedule-date {
    margin: 0 0 16px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
}

.schedule-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.schedule-row {
    display: grid;
    grid-template-columns: 120px 1fr;
    align-items: center;
    gap: 16px;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
}

.schedule-time {
    font-size: 15px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
}

.schedule-item {
    padding: 12px 16px;
    border-radius: 12px;
    background-color: rgba(248, 248, 248, 0.95);
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 8px 0px;

    &-title {
        margin: 0;
        font-size: 16px;
        font-weight: 700;
        line-height: 1.3;
    }

    &-subtitle {
        margin: 4px 0 0;
        font-size: 14px;
        line-height: 1.35;
        opacity: 0.8;
    }

    &-speaker {
        display: flex;
        align-items: center;
        margin-top: 8px;

        &-image {
            width: 28px;
            height: 28px;
            margin-right: 8px;
            border-radius: 50%;
            object-fit: cover;
        }

        &-name {
            font-size: 14px;
            font-weight: 500;
        }
    }
}

// talks: purple glass, like the speaker cards
.-talk .schedule-item {
    background-color: rgba(122, 42, 254, 0.58);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.45);
}

.-event .schedule-item-title {
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.-break .schedule-item {
    padding-block: 8px;
    background-color: #fff;

    .schedule-item-title {
        font-weight: 600;
    }
}

@media (max-width: 600px) {
    .schedule {
        padding: 16px 12px;
    }

    .schedule-row {
        grid-template-columns: 1fr;
        gap: 4px;
    }
}
</style>

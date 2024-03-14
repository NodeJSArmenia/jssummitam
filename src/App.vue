<template>
	<div id="app">
		<Welcome/>
		<AppHeader/>
		<Intro/>
		<Speakers/>
        <Schedule/>
		<Ninjas />
		<Sponsors/>
		<Team/>
		<Community/>
		<!-- <Location/> -->
		<!-- <Faq/> -->
		<AppFooter/>
	</div>
</template>

<script>
import Welcome from './Welcome/Welcome.vue';
import AppHeader from './Header/Header.vue';
import Intro from './Intro/Intro.vue';
import Speakers from './Speakers/Speakers.vue';
import Dummy from './Dummy/Dummy.vue';
import lazyLoadComponent from './utils/lazy-load-component';

export default {
	name: 'app',
	components: {
		Welcome,
		AppHeader,
		Intro,
		Speakers,
		Dummy,
		AppFooter: lazyLoadComponent({
			componentFactory: () => import('./Footer/Footer.vue'),
			loading: Dummy,
		}),
		Location: lazyLoadComponent({
			componentFactory: () => import('./Location/Location.vue'),
			loading: Dummy,
		}),
		Community: lazyLoadComponent({
			componentFactory: () => import('./Community/Community.vue'),
			loading: Dummy,
		}),
		Team: lazyLoadComponent({
			componentFactory: () => import('./Team/Team.vue'),
			loading: Dummy,
		}),
		Schedule: lazyLoadComponent({
			componentFactory: () => import('./Schedule/Schedule.vue'),
			loading: Dummy,
		}),
		Ninjas: lazyLoadComponent({
			componentFactory: () => import('./Ninjas/Ninjas.vue'),
			loading: Dummy,
		}),
		Sponsors: lazyLoadComponent({
			componentFactory: () => import('./Sponsors/Sponsors.vue'),
			loading: Dummy,
		}),
	},
};
</script>

<style lang="scss">
@import "/fonts/Barlow/stylesheet.css";
@import "./_styles/colors";
// @import "./_styles/helpers/index";
// @import "./_styles/base/index";

#app {
    font-family: "Barlow", "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;

    // background: url(https://topentol.sirv.com/jssummit/bg.jpg) $bg-primary repeat;

    background-color: #fff;
    background-image: radial-gradient(#000000 1px,#ffffff 0);
    background-size: 50px 50px;
    color: #1b1c32;
}

.Container {
    margin: 0 auto;
    max-width: 1180px;
    width: 100%;
}

.Title {
	background: white;
    font-family: Barlow;
    color: #2b2c53;
    font-weight: initial;
    font-size: 40px;
    margin-bottom: 0.2em;
    text-align: center;
    color: $text-primary;

    span {
        color: $green-primary;
    }
}

.Subtitle {
    font-size: 24px;
    font-weight: 600;
}

@media (max-width: 600px) {
	#app > section {
		padding: 0px 15px !important;
		margin-bottom: 50px;
	}
}
</style>

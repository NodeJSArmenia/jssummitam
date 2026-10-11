<template>
	<div id="app">
		<canvas ref="ninjaBg" class="NinjaBg"></canvas>
		<Welcome/>
		<AppHeader/>
		<Intro/>
		<Speakers/>
		<Ninjas />
        <!-- <Schedule/>
		<Sponsors/>
		<Team/>
		<Community/> -->
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

// Background icons (page-fixed 200px tiles) that spin faster the closer the mouse is.
const TILE = 200;
const RADIUS = 260; // px; beyond this icons are still
const MAX_SPEED = 14; // rad/s right under the cursor
const SHURIKEN = new Path2D('M0 -25L7 -7L25 0L7 7L0 25L-7 7L-25 0L-7 -7Z M4 0A4 4 0 1 0 -4 0A4 4 0 1 0 4 0Z');
const SPIRAL = new Path2D('M0 0a4 4 0 0 1 8 0a8 8 0 0 1-16 0a12 12 0 0 1 24 0a16 16 0 0 1-32 0');
const ICONS = [
	{
		x: 40, y: 40, path: SHURIKEN, fill: true,
	},
	{
		x: 140, y: 140, path: SPIRAL, fill: false,
	},
];

export default {
	name: 'app',
	mounted() {
		const canvas = this.$refs.ninjaBg;
		const ctx = canvas.getContext('2d');
		const angles = {};
		const mouse = { x: -1e4, y: -1e4 };
		let last = performance.now();
		let raf;

		const resize = () => {
			const dpr = window.devicePixelRatio || 1;
			canvas.width = window.innerWidth * dpr;
			canvas.height = window.innerHeight * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		const onMove = (e) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		};

		const frame = (now) => {
			const dt = Math.min((now - last) / 1000, 0.05);
			last = now;
			// ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); 
			ctx.fillStyle = 'rgba(42, 22, 80, 0.16)';
			ctx.strokeStyle = 'rgba(42, 22, 80, 0.16)';
			ctx.lineWidth = 3;
			ctx.lineCap = 'round';
			const sy = window.scrollY;
			const cols = Math.ceil(window.innerWidth / TILE) + 1;
			const rows = Math.ceil(window.innerHeight / TILE) + 1;
			const row0 = Math.floor(sy / TILE);
			for (let r = row0; r < row0 + rows; r += 1) {
				for (let c = 0; c < cols; c += 1) {
					ICONS.forEach((icon, i) => {
						const x = (c * TILE) + icon.x;
						const y = ((r * TILE) + icon.y) - sy;
						const near = Math.max(0, 1 - (Math.hypot(mouse.x - x, mouse.y - y) / RADIUS));
						const key = `${r},${c},${i}`;
						angles[key] = (angles[key] || 0) + (near * near * MAX_SPEED * dt);
						ctx.save();
						ctx.translate(x, y);
						ctx.rotate(angles[key]);
						if (icon.fill) ctx.fill(icon.path, 'evenodd'); else ctx.stroke(icon.path);
						ctx.restore();
					});
				}
			}
			raf = requestAnimationFrame(frame);
		};

		resize();
		window.addEventListener('resize', resize);
		window.addEventListener('mousemove', onMove);
		raf = requestAnimationFrame(frame);
		this.stopNinjaBg = () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', resize);
			window.removeEventListener('mousemove', onMove);
		};
	},
	beforeDestroy() {
		if (this.stopNinjaBg) this.stopNinjaBg();
	},
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
    position: relative;
    isolation: isolate; // lets the z-index:-1 canvas sit above #app's background, below content

    // background: url(https://topentol.sirv.com/jssummit/bg.jpg) $bg-primary repeat;

    background-color: #e8a21c;
    // Naruto x JS tile: shuriken, leaf-village spiral, code glyphs
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cg fill='%232a1650' stroke='%232a1650' opacity='.16'%3E%3Cpath d='M170 40l-8 14 8 14' fill='none' stroke-width='3' stroke-linecap='round'/%3E%3Ctext x='100' y='60' font-family='monospace' font-size='20' font-weight='bold' stroke='none'%3E=%3E%3C/text%3E%3Ctext x='20' y='150' font-family='monospace' font-size='18' font-weight='bold' stroke='none'%3E%7B jutsu %7D%3C/text%3E%3Ctext x='95' y='110' font-family='monospace' font-size='16' stroke='none'%3E&lt;/&gt;%3C/text%3E%3C/g%3E%3C/svg%3E");
    background-size: 200px 200px;
    color: #2a1650;
}

.NinjaBg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    pointer-events: none;
}

.Container {
    margin: 0 auto;
    max-width: 1180px;
    width: 100%;
}

.Title {
	background: transparent;
    font-family: Barlow;
    color: #2a1650;
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

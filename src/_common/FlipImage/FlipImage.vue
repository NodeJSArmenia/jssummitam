<template>
	<div class="FlipImage" :class="[`-${effect}`, { '-active': shown, '-touched': poofId > 0 }]">
		<div class="FlipFace FlipFront" :style="{ backgroundImage: `url(${front})` }"></div>
		<div class="FlipFace FlipBack" :style="{ backgroundImage: `url(${back})` }"></div>
		<div v-if="effect === 'poof' && poofId" class="Smoke" :key="poofId" aria-hidden="true">
			<span
				v-for="(puff, index) in puffs"
				:key="index"
				class="Puff"
				:style="{ '--x': `${puff.x}%`, '--y': `${puff.y}%`, '--s': puff.s, '--d': `${puff.d}ms` }"
			></span>
		</div>
	</div>
</template>

<script>
// Round photo that turns into its Naruto version while its parent (the card) is hovered.
// effect 'poof': Shadow Clone smoke cloud, the image swaps while hidden by the smoke;
// changing back is a plain fade.
// effect 'flip': card flip (fallback).
// Size it from the parent with a class (width / max-width / margin).

const CLOSE_DELAY = 350; // ms; moving to the next card opens it before the previous one changes back
const SWAP_AT = 180; // ms into the poof, when the smoke covers the photo

// [x %, y %, scale, delay ms] of each smoke puff
const PUFFS = [
	[50, 50, 1.3, 0],
	[22, 30, 0.8, 40],
	[78, 28, 0.9, 20],
	[16, 70, 0.85, 60],
	[84, 72, 0.8, 30],
	[50, 88, 0.9, 50],
	[50, 12, 0.8, 70],
];

export default {
	name: 'FlipImage',
	props: {
		front: String,
		back: String,
		effect: {
			type: String,
			default: 'poof',
		},
	},
	data: () => ({
		shown: false, // true: Naruto version is showing
		poofId: 0, // bumped per poof to restart the smoke animation
		puffs: PUFFS.map(([x, y, s, d]) => ({
			x, y, s, d,
		})),
	}),
	mounted() {
		this.card = this.$el.parentNode;
		this.wanted = false; // state the latest change asked for (shown lags behind it during a poof)
		this.card.addEventListener('mouseenter', this.onEnter);
		this.card.addEventListener('mouseleave', this.onLeave);
	},
	beforeDestroy() {
		this.card.removeEventListener('mouseenter', this.onEnter);
		this.card.removeEventListener('mouseleave', this.onLeave);
		clearTimeout(this.leaveTimer);
		clearTimeout(this.swapTimer);
	},
	methods: {
		onEnter() {
			clearTimeout(this.leaveTimer);
			this.change(true);
		},
		onLeave() {
			clearTimeout(this.leaveTimer);
			this.leaveTimer = setTimeout(() => this.change(false), CLOSE_DELAY);
		},
		change(toBack) {
			if (this.wanted === toBack) return;
			this.wanted = toBack;
			clearTimeout(this.swapTimer);
			if (this.effect !== 'poof' || !toBack) {
				this.shown = toBack;
				return;
			}
			this.poofId += 1;
			this.swapTimer = setTimeout(() => { this.shown = toBack; }, SWAP_AT);
		},
	},
};
</script>

<style lang="scss">
	.FlipImage {
		position: relative;
		aspect-ratio: 1 / 1;
		transition: transform 0.3s ease;

		&.-active {
			transform: scale(1.1);
		}
	}

	.FlipFace {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: contain;
	}

	.FlipBack {
		// portrait card art: fill the circle and keep the face in view
		background-size: cover;
		background-position: 50% 30%;
	}

	// --- Shadow Clone poof ---

	.FlipImage.-poof {
		.FlipBack {
			opacity: 0;
		}

		&.-active {
			.FlipFront {
				opacity: 0;
			}

			.FlipBack {
				opacity: 1;
			}
		}

		// back to the photo: plain fade (going to Naruto swaps instantly, under the smoke)
		&:not(.-active) .FlipFace {
			transition: opacity 0.3s ease;
		}

		// the Naruto image pops out of the smoke (not on first render)
		&.-touched.-active .FlipBack {
			animation: FlipImagePop 0.35s ease-out;
		}
	}

	.Smoke {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;
	}

	.Puff {
		position: absolute;
		left: calc(var(--x) - 30%);
		top: calc(var(--y) - 30%);
		width: 60%;
		height: 60%;
		border-radius: 50%;
		background: radial-gradient(circle at 40% 35%, #fff 0%, #f3eff9 45%, rgba(228, 222, 240, 0.85) 60%, rgba(228, 222, 240, 0) 72%);
		opacity: 0;
		animation: FlipImagePuff 0.55s ease-out var(--d) both;
	}

	@keyframes FlipImagePuff {
		0% {
			transform: scale(0.2);
			opacity: 0;
		}

		25% {
			opacity: 1;
		}

		60% {
			transform: scale(var(--s));
			opacity: 0.9;
		}

		100% {
			transform: scale(calc(var(--s) * 1.3));
			opacity: 0;
		}
	}

	@keyframes FlipImagePop {
		0% {
			transform: scale(0.85);
		}

		60% {
			transform: scale(1.06);
		}

		100% {
			transform: scale(1);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.Smoke {
			display: none;
		}

		.FlipImage.-poof .FlipFace {
			animation: none !important;
		}
	}

	// --- card flip (fallback) ---

	.FlipImage.-flip {
		transform-style: preserve-3d;
		transform: perspective(600px) rotateY(0);
		transition: transform 0.6s ease;

		&.-active {
			transform: perspective(600px) rotateY(180deg) scale(1.1);
		}

		.FlipFace {
			-webkit-backface-visibility: hidden;
			backface-visibility: hidden;
		}

		.FlipBack {
			transform: rotateY(180deg);
		}
	}
</style>

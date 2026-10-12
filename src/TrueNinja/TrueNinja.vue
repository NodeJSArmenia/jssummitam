<template>
    <main class="TrueNinja">
        <div class="Masks" aria-hidden="true">
            <img v-for="(mask, index) in masks"
                 :key="index"
                 class="Mask"
                 src="/anbu.png"
                 alt=""
                 :style="mask">
        </div>
        <div class="Content">
        <h1 class="Title">Six Paths Sage Mode</h1>
        <p class="Riddle">
            Hokage asked nobody, but Raikage always remembers.
            Kazekage opens its door for Tsuchikage's every test.
            Tell Mizukage: it slips, so you did not understand, little lie.
        </p>
        <form class="Summon" :class="{ '-wrong': status === 'wrong', '-ok': status === 'ok' }" @submit.prevent="summon">
            <div class="Inputs">
                <input v-for="(answer, index) in answers"
                       :key="index"
                       v-model="answers[index]"
                       class="Input"
                       type="text"
                       autocomplete="off"
                       autocapitalize="off"
                       spellcheck="false"
                       :aria-label="`Answer ${index + 1}`"
                       :disabled="status === 'ok'">
            </div>
            <button class="Button" type="submit" :disabled="status === 'ok'">Summon</button>
            <p class="Message" v-if="message">{{ message }}</p>
            <p class="Prize" v-if="status === 'ok'">
                Screenshot this page and send to JS Armenia chat to get your prize
            </p>
        </form>
        </div>
    </main>
</template>

<script>
import md5 from '../utils/md5';

const COLS = 7;
const ROWS = 5;

// Jittered grid: looks random but never leaves big empty areas or heaps masks together.
const rand = (min, max) => min + (Math.random() * (max - min));

const createMasks = () => {
	const masks = [];
	for (let r = 0; r < ROWS; r += 1) {
		for (let c = 0; c < COLS; c += 1) {
			masks.push({
				left: `${((c + rand(0, 1)) / COLS) * 100}%`,
				top: `${((r + rand(0, 1)) / ROWS) * 100}%`,
				width: `${rand(60, 150)}px`,
				opacity: rand(0.04, 0.14).toFixed(2),
				transform: `translate(-50%, -50%) rotate(${rand(-180, 180).toFixed(0)}deg)`,
			});
		}
	}
	return masks;
};

// Only salted MD5 hashes of the answers are shipped, so they can't be read from the source.
const SALT = 'jssummit.am/true-ninja:';
const SOLUTION = [
	'6d4655b1f41bee64a6b9bddddab89951',
	'a9a03ff2279e9ecc8d655bf8443583e3',
	'55f6dcb2f0e26ab5dd715f46c0868c65',
	'c3446fd6d63ac7b2715ad4e4c1b8370d',
	'8bf7fa85a4919eb8c7da23d49f0271fd',
	'10e6ffa5ced143951f33c4c63cbb63f6',
];

export default {
	name: 'true-ninja',
	data: () => ({
		masks: createMasks(),
		answers: SOLUTION.map(() => ''),
		status: 'idle', // idle | wrong | ok
		message: '',
	}),
	created() {
		document.title = 'Six Paths Sage Mode';
	},
	methods: {
		// Answers can be entered in any order; each solution word must be matched once.
		summon() {
			const remaining = [...SOLUTION];
			let correct = 0;
			this.answers.forEach((answer) => {
				const index = remaining.indexOf(md5(SALT + answer.trim().toLowerCase()));
				if (index !== -1) {
					remaining.splice(index, 1);
					correct += 1;
				}
			});
			if (correct === SOLUTION.length) {
				this.status = 'ok';
				this.message = 'The scroll opens. You are a true ninja!';
				return;
			}
			this.status = 'wrong';
			this.message = `The seal holds. ${correct} of ${SOLUTION.length} correct.`;
			// let the shake animation replay on repeated wrong answers
			setTimeout(() => { if (this.status === 'wrong') this.status = 'idle'; }, 500);
		},
	},
};
</script>

<style scoped lang="scss">
.TrueNinja {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto; // scrolls when the window is too short for the content
    background: #000;
}

.Masks {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
}

.Content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    padding: 6vh 16px 36px;
    box-sizing: border-box;
}

.Title {
    width: 100%;
    margin: 0 0 24px;
    background: linear-gradient(90deg, #ff7a18, #ff4d6d, #7a2afe);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    font: 900 56px/1.2 "Barlow", Helvetica, Arial, sans-serif;
    letter-spacing: 3px;
    text-align: center;
    text-transform: uppercase;
}

@media (max-width: 600px) {
    .Title {
        font-size: 32px;
    }
}

.Riddle {
    width: 100%;
    max-width: 680px;
    margin: auto 0; // centred in the free space between title and form, with a gap when tight
    padding: 28px 32px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.72);
    color: #f1ecf8;
    font-family: "Barlow", "Avenir", Helvetica, Arial, sans-serif;
    font-size: 26px;
    line-height: 1.5;
    text-align: center;
    text-shadow: 0 0 18px rgba(122, 42, 254, 0.6);
}

@media (max-width: 600px) {
    .Riddle {
        padding: 20px;
        font-size: 20px;
    }
}

.Summon {
    width: 100%;
    max-width: 760px;
    margin-top: 24px;
    text-align: center;
    font-family: "Barlow", "Avenir", Helvetica, Arial, sans-serif;

    &.-wrong .Inputs {
        animation: shake 0.4s;
    }
}

.Inputs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}

.Input {
    flex: 1 1 100px;
    min-width: 0;
    max-width: 150px;
    padding: 10px 12px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.75);
    color: #f1ecf8;
    font: 600 18px/1.2 monospace;
    text-align: center;
    outline: none;

    &:focus {
        border-color: #ff7a18;
        box-shadow: 0 0 12px rgba(255, 122, 24, 0.45);
    }

    &:disabled {
        border-color: #3ddc84;
        color: #3ddc84;
    }
}

.Button {
    margin-top: 16px;
    padding: 12px 44px;
    border: 0;
    border-radius: 8px;
    background: linear-gradient(90deg, #ff7a18, #ff4d6d);
    color: #fff;
    font: 700 18px/1 "Barlow", Helvetica, Arial, sans-serif;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover:not(:disabled) {
        filter: brightness(1.12);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
}

.Message {
    margin: 14px 0 0;
    color: #f1ecf8;
    font-size: 18px;

    .-ok & {
        color: #3ddc84;
    }
}

.Prize {
    margin: 10px 0 0;
    padding: 12px 18px;
    border: 1px solid rgba(255, 122, 24, 0.6);
    border-radius: 8px;
    background: rgba(255, 122, 24, 0.12);
    color: #ffb27a;
    font-size: 20px;
    font-weight: 600;
}

@keyframes shake {
    20%, 60% { transform: translateX(-8px); }
    40%, 80% { transform: translateX(8px); }
}

.Mask {
    position: absolute;
    height: auto;
    pointer-events: none;
    user-select: none;
}
</style>

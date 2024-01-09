<template>
    <section class="Welcome" id="Welcome">
        <div class="Network" :class="{ '-visible': netoworkVisible }"></div>
        <div class="Logo" :class="{ '-visible': logoVisible }"></div>
        <div class="ExclusiveSponsor" :class="{ '-visible': logoVisible }"></div>
    </section>
</template>

<script>
export default {
	data() {
		return {
			netoworkVisible: false,
			logoVisible: false,
		};
	},
	methods: {
		showLogo() {
			setTimeout(() => {
				this.netoworkVisible = true;
			}, 1200);
		},
		showNetwork() {
			requestAnimationFrame(() => {
				this.logoVisible = true;
			});
		},
		scrollToIntro() {
			if (!window.location.hash) {
				setTimeout(() => {
					if (document.documentElement.scrollTop <= 100) {
						document.getElementById('IntroLogo').click();
					}
				}, 2500);
			}
		},
	},
	mounted() {
		window.onload = () => {
			this.showLogo();
			this.showNetwork();
			this.scrollToIntro();
		};
	},
};
</script>

<style scoped lang="scss">
    .Welcome {
        width: 100%;
        height: 100%;
    }

    .Welcome {
        height: 100vh;
        // background-image: url(https://topentol.sirv.com/jssummit/bg.jpg);
        background-repeat: repeat;
    }

    .Network {
        position: absolute;
        // background-image: url(https://topentol.sirv.com/jssummit/bg.jpg);
        transition: opacity 0.25s cubic-bezier(0.4, 0, 1, 1);
        opacity: 0;
    }

    .Logo {
        position: relative;
        top: 15%;
        width: 100%;
        height: 60%;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(https://topentol.sirv.com/jssummit/logo-big.png);
        transition: opacity 1s cubic-bezier(0.4, 0, 1, 1);
        opacity: 0;
    }

    /* .ExclusiveSponsor {
        position: relative;
        width: 12%;
        margin: 0 auto;
        top: 25%;
        height: 10%;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(https://topentol.sirv.com/jssummit/sponsors/adobe.svg);
        transition: opacity 1s cubic-bezier(0.4, 0, 1, 1);
        opacity: 0;
    } */

    .Logo, .Network, .ExclusiveSponsor {
        &.-visible {
            opacity: 1;
        }
    }

    @media (max-width: 1000px) {
        .ExclusiveSponsor {
            width: 18%;
        }
    }

    @media (max-width: 800px) {
        .ExclusiveSponsor {
            width: 24%;
        }
    }

    @media (max-width: 600px) {
        .ExclusiveSponsor {
            top: 23.5%;
            width: 30%;
        }
    }

</style>

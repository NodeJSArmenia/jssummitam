<template>
    <div class="Location" id="Location">
        <h2 class="Title">The <span>Location</span></h2>
        <div class="MapContainer">
            <iframe src="https://snazzymaps.com/embed/451534" width="100%" height="600px" style="border:none;"></iframe>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
    .Location {
        padding: 50px 0 0 0;
        position: relative;
    }

    .Title {
        margin-bottom: 50px;
		span {
			text-shadow: 3px 3px 9px black;
		}
    }

    .MapContainer {
        // height: 40vw;
        // display: flex;
        // align-items: center;
        // justify-content: space-evenly;

        height: 600px;
        margin: auto;
        width: 65%;

        // -ms-mask: url(https://topentol.sirv.com/jssummit/chack.svg) no-repeat 0 0;
        // -webkit-mask: url(https://topentol.sirv.com/jssummit/chack.svg) no-repeat 0 0;
        // mask: url(https://topentol.sirv.com/jssummit/chack.svg) no-repeat 0 0;
        // -webkit-mask-position: center;
        // -ms-mask-position: center;
        // mask-position: center;
        // -webkit-mask-size: contain;
        // -ms-mask-size: contain;
        // mask-size: contain;
    }

    .MapShadow {
        height: 40vw;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        -ms-mask: url(https://topentol.sirv.com/jssummit/chack.svg) no-repeat 0 0;
        -webkit-mask: url(https://topentol.sirv.com/jssummit/chack.svg) no-repeat 0 0;
        mask: url(https://topentol.sirv.com/jssummit/chack.svg) no-repeat 0 0;
        -webkit-mask-position: center;
        -ms-mask-position: center;
        mask-position: center;
        -webkit-mask-size: contain;
        -ms-mask-size: contain;
        mask-size: contain;
    }

    .Map {
        width: 100%;
        height: 30vw;
        top: 0;
        left: 0;
        box-shadow: 1px -4px 23px -6px grey;
        border-radius: 10px;
        overflow: hidden;
    }

    @media (max-width: 680px) {
        .Location {
            flex-direction: column;
        }

        .Map {
            width: 100%;
            height: 70vw;
            margin: -10%;
        }

        .MapContainer {
            width: 80%;
        }
    }

</style>

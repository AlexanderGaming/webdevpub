<script>
    import Spinner from "./Spinner.svelte";
    import Results from "./Results.svelte";
    import Search from "./Search.svelte";
    import { promise } from "./stores.js";
    import { HtmlTag } from "svelte/internal";

    var windowwidth = 1500;
    var windowheight = 900;
    var id = 1;


    function random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function display_image(src, width, height, alt, style) {
        var a = document.createElement("img");
        a.src = src;
        a.width = width;
        a.height = height;
        a.alt = alt;
        a.style = style;
        a.onmouseover = (e) => { document.getElementById(e.target.id).remove() };
        a.id = id;
        document.body.appendChild(a);
    }
    function startRandomizer() {
        window.setTimeout(function () {
            
            var randomw = random(220, 400);
            var randomh = randomw*0.65;
            var randomx = random(0, windowwidth-randomw);
            var randomy = random(0, windowheight-randomh);
            var randompic = Math.ceil(Math.random() * 21);
            id += 1;
            
            if (randompic == 1) {
                randompic = "ad.jpg";
            } else if (randompic == 2) {
                randompic = "sussy.png";
            }   else if (randompic == 3) {
                    randompic = "virus.png";
                }else if (randompic == 4) {
                    randompic = "claim.jpg";
                }else if (randompic == 5) {
                    randompic = "download.gif";
                }else if (randompic == 6) {
                    randompic = "download2.gif";
                }else if (randompic == 7) {
                    randompic = "free.png";
                }else if (randompic == 8) {
                    randompic = "millisecond.png";
                }else if (randompic == 9) {
                    randompic = "bitcoin.png";
                }else if (randompic == 10) {
                    randompic = "complete.png";
                }else if (randompic == 11) {
                    randompic = "callsaul.jpg";
                }else if (randompic == 12) {
                    randompic = "winner.PNG";
                }
                else if (randompic == 13) {
                    randompic = "Infected.png";
                }
                else if (randompic == 14) {
                    randompic = "cpu.gif";
                }
                else if (randompic == 15) {
                    randompic = "congratulations.png";
                }
                else if (randompic == 16) {
                    randompic = "alive.gif";
                }else if (randompic == 17) {
                    randompic = "harddrive.png";
                }else if (randompic == 18) {
                    randompic = "snekoil.webp";
                }else if (randompic == 19) {
                    randompic = "putin.jpg";
                }else if (randompic == 20) {
                    randompic = "gus.gif";
                }else if (randompic == 21) {
                    randompic = "milf.jpeg";
                }



            display_image(
                randompic,
                randomw,
                randomh,
                "JavaScriptImage",
                `position: absolute;left:${randomx}px;top:${randomy}px;`
            );
            startRandomizer();
        }, Math.random() * 10000);
    }

    startRandomizer();

    let hidden = false;

    $: hidden=$promise!=undefined;

</script>
<svelte:window bind:innerWidth={windowwidth}
bind:innerHeight={windowheight}
/>
<main class:hidden>
    
    

    <img class:hidden src="firefox.png" alt="test" id="hidepic"/>

    <Search />

    {#await $promise}
        <Spinner />
    {:then result}
        <Results json={result} />
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</main>

<style>
    :global(body) {
        padding: 0;
        margin: 0;
    }

    #hidepic {
        transition: all 1s;
    }

    #hidepic.hidden{
        display: none;
    }

    main {
        height: 100vh;
        width: 100vw;
        background: linear-gradient(
            -45deg,
            #b966522f,
            #8a65743a,
            #939ea13d,
            #ddf5ef3f
        );
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        gap: 50px;
        padding-top: 10%;
        padding-left: 10%;
        padding-right: 10%;
        padding-bottom: 5%;
        box-sizing: border-box;
        transition: all 0.25s;
    }

    main.hidden{
        padding-top: 3%;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>

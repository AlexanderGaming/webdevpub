<script>
    export let json;
import { dataset_dev } from "svelte/internal";
    import { fly, fade, slide, draw } from "svelte/transition";

</script>

{#if json && "data" in json && "items" in json.data && json.data.items.length > 0}
    <img src="firefox.png" alt="lol" id="topleft"/>
    <div id = "item-holder">  

        {#each json.data.items as item}
            <div id = "item">
                <p id=url>{item.url}</p>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <p id=name>{item.name}</p>
                </a>
                <p id=desc>You should click the link above</p>
                <p id=date>Published at {item.published_at}</p>
            <!--{#each Object.entries(item) as [key, value]}{/each}-->
            </div>
        {/each}
    </div>
{:else if json}


    <div id=error>
        <p2 in:fade>{"Could not find what you were looking for. *Starts crying*"}</p2>
        <img src=tense.gif alt="" width= 300 height= 140 id=gap>
    </div>
{/if}

<style>

    #topleft {
        position:fixed;
	    left:0;
	    right:0;
	    top:0;
	    bottom:0;
        max-width: 20%;
        
    }

    #gap {
        padding: 30px;
    }

    #error {
        flex-direction: column;
        display: flex;
        align-items: center;
    }
    

    #url {
        color: gray;
    }
    #name {
        text-decoration-color: blue;
        text-decoration-line: underline;
        color: blue;
    }
    #item-holder {
        position: absolute;
        
        left: 10px;
        bottom: 0;
        top: 0;
        float: left;
        display: flex;
        justify-content: start;
        align-items: left;
        flex-direction: column;
        overflow-y: scroll;
        box-sizing: border-box;
        margin-top: 13%;
        padding-right: 100px;
        max-width: 100%;
        row-gap: 40px;
    }

    #item {
        padding: 1px;
        width: 100%;
        box-sizing: border-box;
        word-wrap: break-word;
    }

    p2 {

        color: red
    }

    p {
                padding: 5px;
                margin: -3px;
                flex-direction: left;

    }

    /** https://onaircode.com/html-css-custom-scrollbar-examples/ */
    ::-webkit-scrollbar {
        width: 15px;
        height: 15px;
    }
    ::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.1);
    }
    ::-webkit-scrollbar-thumb {
        background-image: linear-gradient(45deg, #00aeff, #d26327);
        border-radius: 10px;
        -webkit-box-shadow: rgba(0, 0, 0, 0.12) 0 3px 13px 1px;
    }
    @media only screen and (max-width: 870px) {
        #item-holder{
            padding-top: 10%
        }
    }
</style>

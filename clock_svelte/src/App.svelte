<script>
import {Clock} from './minclock';
import {fly, fade, slide, draw } from "svelte/transition";
import {spring} from "svelte/motion";
let clock = new Clock(10, 44); 
setInterval(()=>{clock.tick(); clock = clock; }, 1000);
let clock2 = new Clock(10, 10);  
setInterval(()=>{clock2.tick(); clock2 = clock2;}, 1000);
let clock3 = new Clock(5, 10); 
setInterval(()=>{clock3.tick(); clock3 = clock3;}, 1000);
let alarmMoment = "";
let minutes = spring(
        parseInt(clock3.hour) * 60 + parseInt(clock3.minute)
    );
    setInterval(()=>{
        clock3.tick(); 
        minutes.set(
            parseInt(clock3.hour) * 60 + parseInt(clock3.minute)
        );}
        , 50)

let alarmDisableMan = false

function updateMinute()
{
  minuteCounter = clock.minute*5 + 1
}
function updateHour()
{
  hourCounter = clock.hour*7 + 1
}

setInterval(updateMinute, 50);
setInterval(updateHour, 50);

var minuteCounter = "";
var hourCounter = "";

</script>

<main>

  <div class="grid-container">

    <div class="grid-item">

      <div class="flex">
      <svg width="300" height="200">
        
        {#each [...Array(61).keys()] as hour}
          <line x1="{0 + hour*5}" y1="210" x2="{0 + hour*5}" y2="220" style="stroke-width: 1; stroke: black;" />
        {/each}
        {#each [...Array(13).keys()] as hour}
        <line x1="{0 + hour*25}" y1="208" x2="{0 + hour*25}" y2="222" style="stroke-width: 2; stroke: black;" />
      {/each}
      {#each [...Array(24).keys()] as hour}
      <line x1="-20" y1="{200 - hour*7}" x2="-10" y2="{200 - hour*7}" style="stroke-width: 1; stroke: black;" />
    {/each}
    {#each [...Array(9).keys()] as hour}
    <line x1="-22" y1="{200 - hour*21}" x2="-8" y2="{200 - hour*21}" style="stroke-width: 2; stroke: black;" />
    {/each}
    <text x="-5" y="240" class="small">0</text>
    <text x="20" y="240" class="small">5</text>
    <text x="40" y="240" class="small">10</text>
    <text x="65" y="240" class="small">15</text>
    <text x="90" y="240" class="small">20</text>
    <text x="115" y="240" class="small">25</text>
    <text x="140" y="240" class="small">30</text>
    <text x="165" y="240" class="small">35</text>
    <text x="190" y="240" class="small">40</text>
    <text x="215" y="240" class="small">45</text>
    <text x="240" y="240" class="small">50</text>
    <text x="265" y="240" class="small">55</text>
    <text x="290" y="240" class="small">60</text>

    <text x="-35" y="205" class="small">0</text>
    <text x="-35" y="184" class="small">3</text>
    <text x="-35" y="163" class="small">6</text>
    <text x="-35" y="142" class="small">9</text>
    <text x="-43" y="121" class="small">12</text>
    <text x="-43" y="100" class="small">15</text>
    <text x="-43" y="79" class="small">18</text>
    <text x="-43" y="58" class="small">21</text>
    <text x="-43" y="38" class="small">24</text>




        <line x1="-15" y1="215" x2="320" y2="215" style="stroke-width: 3; stroke: black;"/>
        <line x1="-15" y1="25" x2="-15" y2="215" style="stroke-width: 3; stroke: black;"/>
        <svg height="210" width="500">
        <polygon points="325,215 305,222 305,208" style="fill:black;stroke:black;stroke-width:1" />
        <polygon points="-15,5 -22,25 -8,25" style="fill:black;stroke:black;stroke-width:1" />
        </svg>
        <rect x=0 y=0 width={minuteCounter} height={hourCounter} transform="scale (1, -1)" transform-origin="center" style= fill:rgb(150,150,150);stroke-width:3;stroke:rgb(0,0,0) />
       </svg>
    
       
      </div>

      <div class="grid-box">

        <input type="time" bind:value={clock.alarm}>
      </div>

      </div>

      

    <div class="grid-item">
      <h2>      <div>
        {#key clock2.hour}
            <span in:fly={{ y: -20 }}>
                {clock2.hour}
            </span>
        {/key}
        <span>:</span>
        {#key clock2.minute}
            <span in:fly={{ y: -20 }}>
                {clock2.minute}
            </span>
        {/key}
    </div></h2>
      <div class="grid-box1">

        <input type="time" bind:value={clock.alarm}>
      </div>
    </div>

    <div class="grid-item">
      <h3><svg viewBox="0 -50 100 100">
        <circle class="clock-face" r="48" />

        <!-- markers -->
        {#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minute}
            <line class="major" y1="40" y2="45" transform="rotate({30 * minute})" />

            {#each [1, 2, 3, 4] as offset}
                <line
                    class="minor"
                    y1="42"
                    y2="45"
                    transform="rotate({6 * (minute + offset)})"
                />
            {/each}
        {/each}

        <!-- hour hand -->
        <line
            class="hour"
            y1="33"
            y2="38"
            transform="rotate({(6 / 12) * $minutes - 180})"
        />

        <!-- minute hand -->
        <g transform="rotate({6 * $minutes - 180})">
            <line class="minute" y1="30" y2="38" />
        </g>
    </svg></h3>
    <div class="grid-box2">

      <input type="time" bind:value={clock.alarm}>
    </div>

    
    </div>
    
<!--     <div class="grid-item">
      <div id="input">
        <button on:click={alarmSetter}>Set alarm</button>
      </div>
    </div>

    <div class="grid-item">
      <div id="input">
        <button on:click={alarmSetter2}>Set alarm</button>
      </div>
    </div>

    <div class="grid-item">
      <div id="input">
        <button on:click={alarmSetter3}>Set alarm</button>
      </div>
    </div>
 -->


  </div>

    {#if clock.time == clock.alarm}
    <script>
        alert("Detta är en certifierad alarm händelse");
    </script>
        {/if}

    {#if clock2.time == clock2.alarm}
    <script>
        alert("Detta är en certifierad alarm händelse");
    </script>
    {/if}
      {#if clock3.time == clock3.alarm}
    <script>
        alert("Detta är en certifierad alarm händelse");
    </script>
    {/if}
</main>

<style>
    :global(body){
        background-color: rgb(75, 75, 75);
        text-align: center;
    }

    .small{
       font: bold 16px sans-serif; 
       text-align: center;
      }

    img {
  opacity: 0.4;

    }
    main {
        color: red;
        background-color: rgb(105, 105, 105);
    }

    
    h1 {
        color: black;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 6em;
        text-align: center;
    }
    h2 {
        color: black;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 6em;
        text-align: center;
    }

    h3 {
        color: black;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 6em;
        text-align: center;
    }

.container {
position: relative;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
  color: black;
}

.grid-container {
  display: grid;
  align-items: center;
  justify-items: center start;
  grid-template-rows: auto auto auto;
  grid-template-columns: auto auto auto;
  row-gap: 0px;
  
}

.grid-item{
  margin: 0px;
  padding: 0px;
  flex-direction: column;

}

.grid-box{
padding: 50px;
margin: 0px;

}
.grid-box1{
padding: -100px;
margin: 0px;

}
.grid-box2{

padding-bottom: 35%;
margin: 0px;

}

span {
        display: inline-block;
        font-weight: bolder;
    }

svg{
  padding-bottom: 10px;
  padding-left: 250px;
  margin: 0px;
  align-self:center;
  overflow: visible;
}
.flex{
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 300px;
  margin: 0px;
  align-self:center;

}

    .clock-face {
        stroke: #333;
        fill: none;
    }

    .minor {
        stroke: rgb(56, 56, 56);
        stroke-width: 0.4;
    }

    .major {
        stroke: #333;
        stroke-width: 0.8;
    }

    .minute {
        stroke: rgb(150, 150, 150);
        stroke-width: 1;
    }

    .hour {
        stroke: #333;
        stroke-width: 2;
    }



@keyframes move {
  from {
    transform: translateY(0vh);
  }
  to {
    transform: translateY(-20vh);
  }}

  @media only screen and (max-width: 870px) {
        .grid-container{
            display: flex;
            flex-direction: column;
            column-gap: 1em;
            height: 100%;
            padding: 1em;
        }

      }

</style>

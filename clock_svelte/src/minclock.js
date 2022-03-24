import { time_ranges_to_array } from "svelte/internal";
import { get } from "svelte/store";

export class Clock {
    
    constructor(hour, minute){
        this.hour = hour;
        this.minute = minute;
        this.minutezero = false;
        this.hourzero = false;
        this.zero = "";
        this.zero2 = "";


        this.minute = minute;
        this.alarm = 0;
        this.alarmIsActive = true;

    }


    activateAlarm(){
        this.alarmIsActive = true;

    }
    deactivateAlarm(){
        this.alarmIsActive = false;

    }

    tick() {
        this.minutezero = false;
        this.hourzero = false;
        this.zero = "";
        this.zero2 = "";


        if (this.hour == this.hour2 && this.minute == this.minute2){
            if(this.alarmIsActive){
                console.log("Alarm!!!");
            }
        }

        if (this.minute == 59){
            this.hour++;
            this.minute = 0;

        }
        else{
            this.minute++;
        }
        if (this.hour == 24){
            this.hour = 0;
            this.minute = 0;
        }
        if (this.minute < 10){
            this.minutezero = true;
        }
        if (this.hour < 10){
            this.hourzero = true;

        }
        if (this.minutezero){
            this.zero = "0"
        }
        if (this.hourzero){
            this.zero2 = "0"
        }
    }
    get time(){
        return this.zero2+this.hour +":"+this.zero+ this.minute
    }
        
    setAlarm(hour2, minute2){
        this.hour2 = hour2;
        this.minute2 = minute2;
    }
}
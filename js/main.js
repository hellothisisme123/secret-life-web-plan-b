import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://tbhhusuwhwdoyvywniqq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiaGh1c3V3aHdkb3l2eXduaXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczNjMxNDYsImV4cCI6MjAyMjkzOTE0Nn0.bu4Qa7V1dOAcSXOU6V-bN4pfMSU-NmNHKLo93Nd0-og')

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector(".seeSwitch").addEventListener("click", (e) => {
    document.querySelector(".switch").classList.toggle("on")

    document.querySelectorAll(".section").forEach(c => c.classList.toggle("lightCover"))
})


document.querySelector(".red.spawn").addEventListener("click", async (e) => {
    RedOnClick();
})

document.querySelector(".hard.spawn").addEventListener("click", async (e) => {
    HardOnClick();
})

document.querySelector(".easy.spawn").addEventListener("click", async (e) => {
    EasyOnClick();
})

async function RedOnClick() {
    console.log("red")
    
    let redTasks = await supabase
        .from("TASKS")
        .select()
        .eq("type", "red")
        redTasks = redTasks.data
    let redTask = await redTasks[getRandomInt(0, await redTasks.length-1)]

    console.log(`Your challenge: ${redTask.challenge} --- Created By: ${redTask.createdBy}`)
    const challenge = `Your challenge: ${redTask.challenge} --- Created By: ${redTask.createdBy}`
    document.querySelector(".section.red").innerText = challenge
    navigator.clipboard.writeText(challenge)
}

async function HardOnClick() {
    console.log("hard")
    
    let hardTasks = await supabase
        .from("TASKS")
        .select()
        .eq("type", "hard")
        hardTasks = hardTasks.data
    let hardTask = await hardTasks[getRandomInt(0, await hardTasks.length-1)]

    console.log(`Your challenge: ${hardTask.challenge} --- Created By: ${hardTask.createdBy}`)
    const challenge = `Your challenge: ${hardTask.challenge} --- Created By: ${hardTask.createdBy}`
    document.querySelector(".section.hard").innerText = challenge
    navigator.clipboard.writeText(challenge)
}

async function EasyOnClick() {
    console.log("easy")
    
    let easyTasks = await supabase
        .from("TASKS")
        .select()
        .eq("type", "easy")
        easyTasks = easyTasks.data
    let easyTask = await easyTasks[getRandomInt(0, await easyTasks.length-1)]

    console.log(`Your challenge: ${easyTask.challenge} --- Created By: ${easyTask.createdBy}`)
    const challenge = `Your challenge: ${easyTask.challenge} --- Created By: ${easyTask.createdBy}`
    document.querySelector(".section.easy").innerText = challenge
    navigator.clipboard.writeText(challenge)
}
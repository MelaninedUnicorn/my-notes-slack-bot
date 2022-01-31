import {RTMClient} from '@slack/rtm-api'
import { WebClient } from '@slack/web-api'
import {SLACK_BOT_TOKEN} from './constants'
const packageJson = require("../package.json")

const rtm = new RTMClient(SLACK_BOT_TOKEN )
const web = new WebClient(SLACK_BOT_TOKEN)

rtm.start().then(({self,team})=> console.log(self,team)).catch(console.error)

rtm.on("ready", async () => {
    console.log("bot started");
    sendMessage("#a-slack-bot-for-notes",`The bot ${packageJson.version} is online`)
})

rtm.on('slack_event',async (eventType,event) => {
  
    if (event && event.type === "message") {
        if (event.text==="!create-note") {
            
            sendMessage(event.channel,`Okay <@${event.user}> ! Lets start with a title `)
        }
        
    }
})

async function sendMessage(channel: string,message: string) {
    await web.chat.postMessage({
        channel: channel,
        text: message
    })
    
}
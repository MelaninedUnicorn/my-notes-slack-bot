import {RTMClient} from '@slack/rtm-api';
import {SLACK_OAUTH_TOKEN} from './constants';
;


const rtm = new RTMClient(SLACK_OAUTH_TOKEN)
console.log(SLACK_OAUTH_TOKEN);
rtm.start().catch(console.error)
rtm.on("ready", async () => {
    console.log("bot started");
})

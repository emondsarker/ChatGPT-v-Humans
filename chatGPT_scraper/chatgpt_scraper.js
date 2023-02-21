import { ChatGPTAPI, ChatGPTUnofficialProxyAPI } from 'chatgpt'

  
// send a message and wait for the response
let res = await api2.sendMessage("Have we just witnessed ChatGPT completely transform the working world? I've been using it for a while and I feel like I really don't need to hire that many people for my small business now.")
console.log(res.text)


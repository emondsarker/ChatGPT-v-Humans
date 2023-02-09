import { ChatGPTAPI } from 'chatgpt'



async function example() {
    const api = new ChatGPTAPI({
      apiKey: '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'
    })
  
const res = await api.sendMessage('Hello World!')
    console.log(res.text)
  }

  example()
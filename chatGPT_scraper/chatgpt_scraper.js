import { ChatGPTAPI } from 'chatgpt'

  const api = new ChatGPTAPI({ apiKey: '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' })

// send a message and wait for the response
let res = await api.sendMessage('What is OpenAI?')
console.log(res.text)

// send a follow-up
res = await api.sendMessage('Can you expand on that?', {
  conversationId: res.conversationId,
  parentMessageId: res.id
})
console.log(res.text)

// send another follow-up
res = await api.sendMessage('What were we talking about?', {
  conversationId: res.conversationId,
  parentMessageId: res.id
})
console.log(res.text)

  example()
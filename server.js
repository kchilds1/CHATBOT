//Import
const express = require("express");
const OpenAI = require("openai");
const app = express();
 app.use(express.json())
 const bodyParser = require('body-parser');
 app.use(bodyParser.json());
 const cors = require('cors');
 app.use(cors());

 require("dotenv").config();
app.use(express.static('public'))




//creating an instance of the openai connection using the API key
const openai = new OpenAI({
   apiKey: process.env.OPENAIAPI_KEY
  
});
//  // Start the server
app.listen(5000, () => {
   console.log("Server is active");
  });



//Configuration of Model,route, and messages
app.post('/chat', async(req, res) => {
  try{
const chatCompletion = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [{"role": "user", "content": req.body.question}
]
})

res.status(200).json({message: resp.data.choices[0].message.content})
  } catch(e) {
      res.status(400).json({message: e.message})
  }
})





 const { Configuration, OpenAIApi } = require("openai");
 const express = require("express");
 const bodyParser = require("body-parser");
 const cors = require("cors");
 require("dotenv").config();
 const env = require('./env');
 const token = process.env.OPENAIAPI_KEY;

//creating an instance of the openai connection using the API key
 const openai = new OpenAIApi(
   new Configuration({apiKey: token})
 )

 const app = express();
 // Middleware to parse JSON in the request body
  app.use(bodyParser.json());
  app.use(cors())
 //Serve static files from the 'public' directory
 app.use(express.static("public"))
//creating the route
 app.post("/chat", async (req, res) => {
   try {
     const resp = await openai.createChatCompletion({
       model: "gpt-3.5-turbo",
       messages: [{ role: "user", content: req.body.question }],
     })
     res.status(200).json({ message: resp.data.choices[0].message.content });
   } catch (e) {
     res.status(400).json({ message: e.message });
   }
 })
 // Start the server
 app.listen(5000, () => {
   console.log("Server is active");
 });




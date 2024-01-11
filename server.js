//Import
const express = require("express");
const OpenAI = require("openai");
const app = express();
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

require("dotenv").config();
app.use(express.static("public"));

//creating an instance of the openai connection using the API key
const x = new OpenAI({
  apiKey: process.env.OPENAIAPI_KEY,
});
//  // Start the server
app.listen(5000, () => {
  console.log("Server is active");
});

//Configuration of Model,route, and messages
app.post("/chat", async (req, res) => {
  try {
    const chatCompletion = await x.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.question }],
      max_tokens: 100,
    });

    if (
      chatCompletion &&
      chatCompletion.choices &&
      chatCompletion.choices.length > 0 &&
      chatCompletion.choices[0].message &&
      chatCompletion.choices[0].message.content
    ) {
      const responseMessage = chatCompletion.choices[0].message.content;
      res.status(200).json({ message: responseMessage });
    } else {
      res.status(200).json({ message: "Unexpected response structure" });
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

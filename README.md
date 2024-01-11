# Chatbot with OpenAI
* I followed instructjions provided by [Chatbot](https://www.freecodecamp.org/news/how-to-create-a-chatbot-with-the-chatgpt-api/)
* Front end functionality is working fine, but I'm unable to communicate with the server and I'm getting an error saying Configuration and OpenAIApi isn't a configurator
* After looking up the error about the configurator, I found out that the code provided in [Chatbot](https://www.freecodecamp.org/news/how-to-create-a-chatbot-with-the-chatgpt-api/) is only compatible with openai version 3.0 and lower.
* Followed along with [video](https://www.youtube.com/watch?v=bmaMQ4Ph6hU) that references [v3 to v4 Migration Guide #217](https://github.com/openai/openai-node/discussions/217) to see if this will provide a solution.But this didn't work
* Followed [video](https://youtu.be/clwoDeSn48c?si=Krm_Xeb2Ww1C5zn4). Now I'm able to get a response from the server, but it is now returning a 429 You exceeded your current quota,please check your plan and billing details
* I added credit to my OpenAI account. Now I'm able to get it to work.

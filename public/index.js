const btn = document.getElementById("btn");
btn.addEventListener("click", getResponse);

async function getResponse() {
  let inputText = document.getElementById("input").value;
  const parentDiv = document.getElementById("chat-area");

  //return nothing if inputText is empty
  if (inputText === "") {
    return;
  }

  //add the question to the chat area in the UI
  const question = document.createElement("div");
  question.innerHTML = inputText;
  question.classList.add("box");
  parentDiv.appendChild(question);

  //we reset the text area so it's blank
  document.getElementById("input").value = "";

  //send the question to our server so that the server can send it to the OpenAI API and send us back a response
  let res = await fetch('http://localhost:5000/chat', 
  {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json'                
    },
    body: JSON.stringify({
      question: inputText          
    })
  }
)
    
const data = await res.json() 

//If the response has a message property, we add the message content to the chat area in the UI
if(data.message) {
    const answer = document.createElement('div')
    answer.innerHTML = data.message
    answer.classList.add("box", "answer")
    parentDiv.appendChild(answer)
  }
}

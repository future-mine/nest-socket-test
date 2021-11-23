const socket = io("http://localhost:3000", {
  rejectUnauthorized: false // WARN: please do not do this in production
})

const message = document.getElementById('message');
const messages = document.getElementById('messages');

const handleSubmitNewMessage = () => {
  socket.emit('message', { data: message.value })
}

socket.on('message', ({ data }) => {
  handleNewMessage(data);
})

const handleNewMessage = (message) => {
  messages.appendChild(buildNewMessage(message));
}

const buildNewMessage = (message) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(message))
  return li;
}
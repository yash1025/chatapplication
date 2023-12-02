function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const chatBox = document.getElementById('chat-box');
  
    const message = messageInput.value.trim();
    if (message !== '') {
      const sentMessage = document.createElement('div');
      sentMessage.textContent = message;
      sentMessage.classList.add('message', 'sent');
      chatBox.appendChild(sentMessage);
      messageInput.value = '';
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }
  
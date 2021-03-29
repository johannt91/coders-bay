const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const room = document.getElementById('room-name').textContent;
const username = document.getElementById('currentUser').textContent;
const userList = document.getElementById('users');

// //Get username and room from URL
// const { username, room } = Qs.parse(location.search, {
//     ignoreQueryPrefix: true
// });

const socket = io();

// //Join chatroom
socket.emit('joinRoom', { username, room });

// // get room and users
socket.on('roomUsers', ({ room, users }) => {
    outputRoomName(room);
    outputUsers(users);
});

socket.on('message', message => {
   console.log(message);
   outputMessage(message);

//    scroll down
   chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Message Submit
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //Get messsage Text
    const msg = e.target.elements.msg.value;

    //Emit Message to server
    socket.emit('chatMessage', msg);

    //clear input
    e.target.elements.msg.value ='';
    e.target.elements.msg.focus();
});

// //Output message to DOM
function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
        ${message.text}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
}
// //Add room name to DOM
function outputRoomName(room) {
    room.innerText = room;
}

// //Add users to DOM
function outputUsers(users) {
    userList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
    `;
}

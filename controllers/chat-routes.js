const router = require('express').Router();
const http = require('http');
const io = require('../server')



// Chat Page
router.get("/", function (req, res) {
   
  //  const server = require('http').createServer();
  // const io = require('socket.io')(server);


//Join chatroom
let username = req.query.username || "demo";
let room = req.query.room || "demoroom";




// get room and users
// io.on('roomUsers', ({ room, users }) => {
//     outputRoomName(room);
//     outputUsers(users);
// });

// io.on('message', message => {
//    console.log(message);
//    outputMessage(message);

//    //scroll down
//    chatMessages.scrollTop = chatMessages.scrollHeight;
// });

// // //Message Submit
// chatForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     //Get messsage Text
//     const msg = e.target.elements.msg.value;

//     //Emit Message to server
//     io.emit('chatMessage', msg);

//     //clear input
//     e.target.elements.msg.value ='';
//     e.target.elements.msg.focus();
// });




    res.render("chatroom",{
        username,
        room
    });
});

// Chat Page
router.get("/startconnection", function (req, res) {
    // res.("chatroom",{});
    // console.log("io ", io)

});

module.exports = router;
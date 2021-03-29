//======= DEPENDENCIES ========//
const express = require('express');
const socketio = require('socket.io');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const http = require('http');
const session = require('express-session');
// const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const formatMessage = require('./utils/messages')
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/user')

const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });


const app = express();
const server = http.Server(app);
const io = socketio(server);

const PORT = process.env.PORT || 3001;
//Run when client connects
io.on('connection', socket => {
    console.log('CONNECTED!!!!')
socket.on('joinRoom', ({ username, room }) => {
    console.log({ username, room })
    const user = userJoin(socket.id, username, room);

    console.log({ user })
    
    socket.join(user.room);

    //Welcome current user
    socket.emit('message', formatMessage(botName, `Welcome to The Coders Bay, ${user.username} !`)
    );

  //Broadcast when a user connects
  socket.broadcast.to(user.room).emit('message', formatMessage(botName, `${user.username} has joined the chat`)
  );

  //Send users and room info
  io.to(user.room).emit('roomUsers', {
      room: user.room, 
      users: getRoomUsers(user.room)
       });
});

  //Listen for chatMessage
  socket.on('chatMessage', (msg) => {
    const user = getCurrentUser(socket.id);

      io.to(user.room).emit('message', formatMessage(user.username, msg));
  });

    //Runs when client disconnects
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);

        if(user) {
            io.to(user.room).emit('message', 
            formatMessage(botName, `${user.username} has left the chat`)
            );

            //Send users and room info
            io.to(user.room).emit('roomUsers', {
            room: user.room, 
            users: getRoomUsers(user.room)
        });

        }
       });
});

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

//===== HANDLEBARS TEMPLATE ENGINE =====//
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//===== TURN ON ROUTES =====//
app.use(routes);

const botName = 'Coders Bot';


//===== TURN ON CONNECTION TO DB AND SERVER =====//
sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, () => console.log(`NOW LISTENING ON PORT ${PORT}`));
})

module.exports = {
    io
}
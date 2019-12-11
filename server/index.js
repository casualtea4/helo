require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      ctrl = require('./controller'),
      {SERVER_PORT,CONNECTION_STRING,SESSION_SECRET} = process.env,
      app = express();

app.use(express.json());
app.use(session({
    resave:false,
    saveUninitialized: true,
    cookie: {maxAge: 1000*60*60*8},
    secret: SESSION_SECRET
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db',db)
    console.log('db connected')
})

//endpoints
app.post('/api/register', ctrl.register);
app.post('/api/login', ctrl.login);
app.post('/api/logout', ctrl.logout);

app.get('/api/posts/:id', ctrl.getPosts);

const port = SERVER_PORT;
app.listen(port, () => console.log(`server running on ${port}`));
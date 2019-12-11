const bcrypt = require('bcryptjs');

module.exports = {
    register: async(req,res) => {
        const {username,password} = req.body;
        const {session} = req;
        const db = req.app.get('db');

        let user = await db.check_user(username);
        user = user[0];
        if(user){
            return res.status(400).send('username taken')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password,salt);
        let newUser = await db.register_user({username,hash});
        newUser = newUser [0];
        session.user = newUser;
        res.status(201).send(session.user);
    },
    login: async(req,res) => {
        const {username,password} = req.body;
        const {session} = req;
        const db = req.app.get('db');

        let user = await db.check_user([username]);
        user=user[0];
        if(!user){
            return res.status(400).send('username not found')
        }
        // const authenticated = bcrypt.compareSync(password,user.password);
        // if(!authenticated){
        //     return res.status(403).send('incorrect password')
        // }
        // session.user = user;
        // delete user.password;
        // return res.status(202).send(session.user)
        const authenticated = bcrypt.compareSync(password,user.password);
        if(authenticated){
            delete user.password;
            session.user = user;
            res.status(202).send(session.user);
        }else{
            res.status(401).send('incorrect password')
        }
    },
    logout: (req,res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    getPosts: (req,res) => {
        const {id} = req.params;
        const db = req.app.get('db');

        // if(check=true){
        //     if(string !== ''){
        //         //return posts with title that contains search string
        //     }else{
        //         //return all posts
        //     }
        //     //return posts where the current user is not the author
        // }if(string!==''){
        //     //return posts where current user is not author and title contains the search string
        // }

        db.get_posts(id).then(posts => {
            res.status(200).send(posts)
        })
        .catch(err => res.status(500).send(err))
    }
}
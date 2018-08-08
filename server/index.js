require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

//Environmental Vairables
let {
    CONNECTION_STRING,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    SUCCESS_REDIRECT,
    FAILURE_REDIRECT
    } = process.env;

//Connection To Database w/ Massive
massive(CONNECTION_STRING).then(db => {
    console.log('Database Connected')
    app.set('db', db)
});

//Auth0 authentication
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, (accessToken, refreshToken, extraParams, profile, done) => {
    let db = app.get('db');
    let {displayName, id} = profile;
    db.find_user([id]).then(foundUser => {
        if(foundUser[0]){
            done(null, foundUser[0].id)
        }else {
            db.create_user([id, displayName]).then(user => {
                done(null, user[0].id)
            })
        }
    })
}));

passport.serializeUser((id, done) => {
    done(null, id)
});
passport.deserializeUser((id, done) => {
    app.get('db').find_session_user([id]).then(user => {

        done(null, user[0]);
    })
});

//Auth0 Endpoints
app.get('/login', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: SUCCESS_REDIRECT,
    failureRedirect: FAILURE_REDIRECT
}));


//End Points

//Get Featured Items
app.get('/featured', controller.getFeatured);

app.listen(3005, () => console.log('Connected on port 3005'));
const passport = require('passport')
const User = require('../app/models/user')
const { decrypt } = require('../app/controllers/base')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: `${PORT}/success`
},

function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({ googleId: profile.id}, function(err, user) {
    return done(err,user);
  });
}
));

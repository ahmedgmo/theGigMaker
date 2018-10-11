const passport = require('passport')
const User = require('../app/models/user')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL
    },

    (accessToken, refreshToken, profile, done) => {
      User.findOrCreate({ googleId: profile.id }, (err, user) => {
        console.log(accessToken, refreshToken)
        return done(err, user)
      })
    }
  )
)

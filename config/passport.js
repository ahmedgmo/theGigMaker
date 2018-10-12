const passport = require('passport')
const User = require('../app/models/user')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

passport.use(
  new GoogleStrategy(
    {
      clientID:
        process.env.GOOGLE_CLIENT_ID ||
        '513188597183-aschf9rpomu1oak1kgprdoj36n5tk7cu.apps.googleusercontent.com',
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET || 'SDP6IcKVwhowgJAgPJex9PBT',
      callbackURL: process.env.GOOGLE_CALLBACK_URL || 'google/callback'
    },

    (accessToken, refreshToken, profile, done) => {
      User.findOrCreate({ googleId: profile.id }, (err, user) => {
        console.log(accessToken, refreshToken)
        return done(err, user)
      })
    }
  )
)

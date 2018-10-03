const passport = require('passport')
const User = require('../app/models/user')
const { decrypt } = require('../app/controllers/base')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '513188597183-aschf9rpomu1oak1kgprdoj36n5tk7cu.apps.googleusercontent.com',
      clientSecret: 'SDP6IcKVwhowgJAgPJex9PBT',
      callbackURL: `google/callback`
    },

    (accessToken, refreshToken, profile, done) => {
      User.findOrCreate({ googleId: profile.id }, (err, user) => {
        console.log(accessToken, refreshToken)
        return done(err, user)
      })
    }
  )
)

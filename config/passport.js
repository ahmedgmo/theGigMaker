const passport = require('passport')
const User = require('../app/models/projects/users')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const axios = require('axios')

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
      User.findOne(
        { googleid: profile.id }.then(currentUser => {
          if (currentUser) {
            axios.post(`/api/get-dbuser/${currentUser._id}`)
          } else {
            new User({
              username: profile.displayName,
              email: profile.emails,
              googleid: profile.id
            })
              .save()
              .then(newUser => {
                axios.post(`/api/get-dbuser/${newUser._id}`)
              })
          }
        })
      )
    }
  )
)

const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId: profile.id }).then(existingUser => {
                existingUser
                    ? // we have that user already
                      done(null, existingUser)
                    : // we dont have that user creat new one
                      new User({ googleId: profile.id })
                          .save()
                          .then(user => done(null, user));
            });
        }
    )
);

passport.use(
    new FacebookStrategy(
        {
            clientID: keys.facebookClientID,
            clientSecret: keys.facebookClientSecret,
            callbackURL: '/auth/facebook/callback',
        },
        function (accessToken, refreshToken, profile, done) {
            User.findOne({ facebookId: profile.id }).then(existingUser => {
                existingUser
                    ? done(null, existingUser)
                    : new User({ facebookId: profile.id })
                          .save()
                          .then(user => done(null, user));
            });
        }
    )
);

passport.use(
    new GitHubStrategy(
        {
            clientID: keys.githubClientID,
            clientSecret: keys.githubClientSecret,
            callbackURL: '/auth/github/callback',
        },
        function (accessToken, refreshToken, profile, done) {
            User.findOne({ githubId: profile.id }).then(existingUser => {
                existingUser
                    ? done(null, existingUser)
                    : new User({ githubId: profile.id })
                          .save()
                          .then(user => done(null, user));
            });
        }
    )
);

const passport = require('passport');

module.exports = app => {
  // google auth
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  // github auth
  app.get('/auth/github', passport.authenticate('github'));

  app.get(
    '/auth/github/callback',
    passport.authenticate('github'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  // facebook auth
  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', { scope: ['email'] })
  );

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  // logout and get current user
  app.get('/api/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

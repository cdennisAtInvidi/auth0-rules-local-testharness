function setGlobalAuth0Object(user, context, callback) {
  global.safe_user = _.pick(user, ['user_id', 'email', 'email_verified']);
  request.post('http://slowly.com/delay/1second', (err, response, body) => {
    // simulate a failure with >= 400
    if (response.statusCode >= 400) {
      callback(new Error("Failed posting"), user, context)
    } else {
      callback(err, user, context);
    }
  });
}

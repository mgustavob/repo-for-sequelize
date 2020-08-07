const db = require('./models');

db.user.create({
    firstName: 'Martin',
    lastName: 'Briceno',
    age: 42,
    email: 'martin.briceno@live.com'
  }).then(function(data) {
    // you can now access the newly created task via the variable data
  });

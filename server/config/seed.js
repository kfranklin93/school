/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import School from '../api/school/school.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'ASL Beginning 101',
      info: 'Beginning 101 includes ABS, Expressions, .'
    }, {
      name: 'ASL for Mathematics',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'ASL for Literature',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'ASL for Philosophy',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'ASL for Web Developers',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create(
    {
      provider: 'local',
      role: 'student',
      name: 'Student User',
      email: 'student@example.com',
      password: 'student'
    }, 
    {
      provider: 'local',
      role: 'teacher',
      name: 'Techer User',
      email: 'teacher@example.com',
      password: 'teacher'
    },
    {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    },
    {
      provider: 'local',
      role: 'student',
      name: 'Kenan Franklin',
      email: 'kenan@example.com',
      password: 'student'
    }, 
    {
      provider: 'local',
      role: 'teacher',
      name: 'Annie Rai',
      email: 'annie@example.com',
      password: 'teacher'
    },
    {
      provider: 'local',
      role: 'admin',
      name: 'Michael Gokey',
      email: 'michael@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });



School.find({}).remove()
.then(() => {
  return School.create(
    {
      name: 'Atlanta Life Lessons',
      info: 'ASL Life Lessons',
      address: '675 Ponce de Leon Avenue NE',
      city: 'Atlanta',
      state: 'Georgia',
      zipcode: '30308',
      description: 'The Atlanta Life Lessons offers local Atlanta language classes in over 60 languages, hold corporate training for language learning, and provide translations and interpretation services. We are an Atlanta language school staffed with knowledgeable native instructors who are committed to helping you to achieve your language learning goals.',
      imageFile:   'icons/skull-and-bones.png'
    }
  )
})
.then(() => {
  return School.find({});
})
.then((schools) => {
  console.log('Finished populating ' + schools.length + ' schools.');
})
.catch((err) => {
  console.log('ERROR:', err);
});
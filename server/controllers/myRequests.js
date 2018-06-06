const User = require('../models').User;
const Request = require('../models').Request;
const Customerinfo = require('../models').Customerinfo;
const Customer = require('../models').Customer;

// {
//   "id": 13,
//   "username": "admin",
//   "password": "U2FsdGVkX19v57k4ttbZcl6ucpe60rXJ5A/SJ7i1+LY=",
//   "createdAt": "2018-05-11T18:29:25.989Z",
//   "updatedAt": "2018-05-11T18:29:25.989Z",
//   "requests": [
//       {
//           "id": 2,
//           "complete": false,
//           "urgencyLevel": 1,
//           "message": "oi gente blz",
//           "createdAt": "2018-06-05T20:34:26.929Z",
//           "updatedAt": "2018-06-05T20:34:26.929Z",
//           "userId": 13,
//           "customers": [
//               {
//                   "id": 1,
//                   "regNumber": "8797098123",
//                   "name": null,
//                   "createdAt": "2018-06-05T21:37:15.504Z",
//                   "updatedAt": "2018-06-05T21:37:15.504Z",
//                   "RequestCustomers": {
//                       "createdAt": "2018-06-06T15:11:32.676Z",
//                       "updatedAt": "2018-06-06T15:11:32.676Z",
//                       "CustomerId": 1,
//                       "RequestId": 2
//                   }
//               },
//               {
//                   "id": 2,
//                   "regNumber": "9987654321",
//                   "name": null,
//                   "createdAt": "2018-06-05T21:37:45.825Z",
//                   "updatedAt": "2018-06-05T21:37:45.825Z",
//                   "RequestCustomers": {
//                       "createdAt": "2018-06-06T16:30:02.566Z",
//                       "updatedAt": "2018-06-06T16:30:02.566Z",
//                       "CustomerId": 2,
//                       "RequestId": 2
//                   }
//               },
//               {
//                   "id": 3,
//                   "regNumber": "9987654321",
//                   "name": "roquete ltda",
//                   "createdAt": "2018-06-06T16:33:59.683Z",
//                   "updatedAt": "2018-06-06T16:33:59.683Z",
//                   "RequestCustomers": {
//                       "createdAt": "2018-06-06T16:34:59.440Z",
//                       "updatedAt": "2018-06-06T16:34:59.440Z",
//                       "CustomerId": 3,
//                       "RequestId": 2
//                   }
//               },
//               {
//                   "id": 4,
//                   "regNumber": "1234567809",
//                   "name": "bende boas",
//                   "createdAt": "2018-06-06T16:34:25.697Z",
//                   "updatedAt": "2018-06-06T16:34:25.697Z",
//                   "RequestCustomers": {
//                       "createdAt": "2018-06-06T16:35:05.009Z",
//                       "updatedAt": "2018-06-06T16:35:05.009Z",
//                       "CustomerId": 4,
//                       "RequestId": 2
//                   }
//               }
//           ]
//       },
//       {
//           "id": 1,
//           "complete": false,
//           "urgencyLevel": 5,
//           "message": "mt urgente",
//           "createdAt": "2018-06-05T20:24:09.602Z",
//           "updatedAt": "2018-06-05T20:24:09.602Z",
//           "userId": 13,
//           "customers": [
//               {
//                   "id": 2,
//                   "regNumber": "9987654321",
//                   "name": null,
//                   "createdAt": "2018-06-05T21:37:45.825Z",
//                   "updatedAt": "2018-06-05T21:37:45.825Z",
//                   "RequestCustomers": {
//                       "createdAt": "2018-06-06T15:11:47.776Z",
//                       "updatedAt": "2018-06-06T15:11:47.776Z",
//                       "CustomerId": 2,
//                       "RequestId": 1
//                   }
//               },
//               {
//                   "id": 1,
//                   "regNumber": "8797098123",
//                   "name": null,
//                   "createdAt": "2018-06-05T21:37:15.504Z",
//                   "updatedAt": "2018-06-05T21:37:15.504Z",
//                   "RequestCustomers": {
//                       "createdAt": "2018-06-06T15:11:54.863Z",
//                       "updatedAt": "2018-06-06T15:11:54.863Z",
//                       "CustomerId": 1,
//                       "RequestId": 1
//                   }
//               }
//           ]
//       },
//       {
//           "id": 4,
//           "complete": false,
//           "urgencyLevel": 3,
//           "message": "vlw gente bjs",
//           "createdAt": "2018-06-05T20:35:15.990Z",
//           "updatedAt": "2018-06-05T20:35:15.990Z",
//           "userId": 13,
//           "customers": []
//       },
//       {
//           "id": 3,
//           "complete": false,
//           "urgencyLevel": 5,
//           "message": "como faz procv?",
//           "createdAt": "2018-06-05T20:34:46.350Z",
//           "updatedAt": "2018-06-05T20:34:46.350Z",
//           "userId": 13,
//           "customers": []
//       }
//   ]
// }

// objRequest = [{
//   requestId: 10,
//   urgencyLevel: 4,
//   createdAt: "2018-05-26T21:27:11.385Z",
//   customers:[{
//     name: "Rocket League ltda",
//     number: "1029384756"
//   },{
//     name: "Freezing laser inc",
//     number: "9987654321"
//   }]
// },{
//   requestId: 12,
//   urgencyLevel: 1,
//   createdAt: "2018-06-04T21:27:11.385Z",
//   customers:[{
//     name: "Paper Berry",
//     number: "1112223334"
//   }]
// }]

module.exports = {
  myRequests(req, res) {
    let objRequest;
    objRequest = listFromUser(req.params.userId);
    console.log (objRequest)
    return res.status(200).send(objRequest);
  },
  listFromUser(userId) {
    return User
      .findById(userId, {
        include: [{
          model: Request,
          as: 'requests',
          include: ['customers']
        }],
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'user Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch(error => res.status(400).send(error));
  },
}
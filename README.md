## Basic RESTAPI

  - Done with Typescipt, NodeJS and ExpressJS.
 -  Used Mongodb and mongoose as ODM.
 -  Used JOI for validating requests.

## Folder Structure

    /src 
	  /config 
	  /controller
	  /db
	    /models 
        /repository
      /services 
      /routes
      /util

## Endpoints

POST: /api/grade
	Creates new student with grades.
	Example:

    `{ "name": "Ali", "surname": "Yilmaz", "stdNumber": "B012X00012",    "grades": [ { "code": "MT101", "value": 90 }, { "code": "PH101",    "value": 75 },  ] }`

PUT: /api/grade/:stdNumber
 Updates provided student fields
 Example: 

    `{    "name": "Ali",    "surname": "Yilmaz",    "stdNumber": "B012X00012",    "grades": [    {    "code": "MT101",    "value": 90    }, {    "code": "PH101",    "value": 75    },     ]    }``


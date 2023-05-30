# ecommerce

Challenge 13

## Author

Mark Edwards

## Deployment

clone git repository ```https://github.com/mark-227-g/ecommerce```

This runs in expressjs

* npm install
* npm run seed
* npm start

## Usage

use insomnia to test
Example:

* Get all
  * get http://localhost:3001/api/categories
* Get by id
  * get http://localhost:3001/api/categories/1
* Create
  * post http://localhost:3001/api/categories
  * { "category_name":"Book"}
  * Update
    * put http://localhost:3001/api/categories/6
    * {"category_name": "Books and Newspapers"}
  * Delete
    * http://localhost:3001/api/categories/6

### Video
  
* [Video Part 1](https://github.com/mark-227-g/ecommerce/video/ORMpart1.mov)
* [Video Part 2](https://github.com/mark-227-g/ecommerce/video/ORMpart2.mov)
* [Video Part 3](https://github.com/mark-227-g/ecommerce/video/ORMpart3.mov)

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Technology used

* expressjs
* node.js
* sequelize
* insomnia
* ORM
* CU Week "13 - ORM" for sample code

## References

* [node.js documentation](https://nodejs.org/dist/latest-v19.x/docs/api/)
* [npm documentation](https://docs.npmjs.com)
* [expressjs](https://expressjs.com)
* [sequelize](https://sequelize.org)
* [github](https://github.com/mark-227-g/ecommerce)
* [Bootcamp Tutor](https://github.com/BrockAtwood/ORM_E-Commerce-Back-End/blob/main/routes/api/product-routes.js)
  
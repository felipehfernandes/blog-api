# Blog API!

<details>
  <summary><strong>👨‍💻 What was developed</strong></summary>

  In this project an API and a database were developed for the production of content for a blog!

  The application was developed in `Node.js` using the `sequelize` package to make a `CRUD` of posts.

   1. Endpoints were developed that are connected to the database following REST principles;

   2. To make a post you need a user and a login, so the **relationship between** `user` and `post` is worked on;

   3. Categories were used for the posts, thus working the **relation of** `posts` to `categories` and `categories` to `posts`.

<br />
</details>

<details>
  <summary  id="diagrama"><strong>🎲 ER Diagram, Entities and Scripts</strong></summary>

  #### Entity-Relationship Diagram

  To guide the manipulation of the tables, use the following DER:

  ![DER](./public/der.png)

  ---

  #### Entities format

  The project uses `ORM Sequelize` to create and update the database.

   - A table called **users**, contains data with the following structure:

    | id  | display_name    | email           | password | image                                                                                   |
    | --- | --------------- | --------------- | -------- | --------------------------------------------------------------------------------------- |
    | 1   | Brett Wiltshire | brett@email.com // tem quer ser único | 123456   | http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png |

  - A table called **categories**, contains data with the following structure:

    | id  | name |
    | --- | ---- |
    | 18  | News |

  - A table called **blog_posts** contains data with the following structure:

    | id  | title                      | content                                                | user_id | published                | updated                  |
    | --- | -------------------------- | ------------------------------------------------------ | ------- | ------------------------ | ------------------------ |
    | 21  | Latest updates, August 1st | The whole text for the blog post goes here in this key | 14  // Chave estrangeira, referenciando o id de `users`    | 2011-08-01T19:58:00.000Z | 2011-08-01T19:58:51.947Z |


  - A table called **PostCategories**, contains a **composite primary key** using the two structure attributes:

    | post_id | category_id |
    | ------- | ----------- |
    | 50 // Chave primária e estrangeira, referenciando o id de `BlogPosts`     | 20  // Chave primária e estrangeira, referenciando o id de `Categories`     |


    ---

    #### Ready-made script tips

    - Delete the database:
    ```json
    "drop": "npx sequelize-cli db:drop"
    ```

    - Create the database and generate the tables:
    ```json
    "prestart": "npx sequelize-cli db:create && npx sequelize-cli db:migrate"
    ```

    - Insert data / Populate the table:
    ```json
    "seed": "npx sequelize-cli db:seed:all"
    ```

<br />
</details>


# Planner-App

> Planner-App is a React/Rails web application that allows you to create task according to categories.
> Live demo [_ ]().  fixing a problem while deploying....

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Ruby Gems](#ruby-gems)
- [Screenshots](#screenshots)
- [Set Up](#set-up)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## General Information
- This application is an example of how authentication and authorization works by 
use of react to perform client side and  rails to perform server side.
-My application a user can login and add his daily plans categorically i.e exercise, coding, chores and shopping.
-Hence there after a user can log out hence its very secure to ensure your daily plans no one can have a look at it.
The app has three models users, tasks and categories
-The app performs CRUD operations i.e create, read, update and delete.


## Technologies Used

- React 17.0.2
- Ruby 2.7.4p191
- Rails 7.0.4

##### Ruby Gems:

- bcrypt 3.1.16
- watir 7.1.0
- nokogiri 1.11.7
- pg 1.2.3


## Screenshot

## Setup

To get started:

1. Clone this repository
2. Install dependencies
3. Start rails server and start react app

```
bundle install
rails db:create 
rails db:migrate db:seed
rails s

open another terminal and run 
npm install --prefix client
npm start --prefix client
```
## Acknowledgements

- Many thanks to my Technical Mentor  at Moringa, Titus Ouko: for teaching me a solid foundation in React and Rails, and supporting and encouraging me throughout the entire  program.

## Contact
 https://www.linkedin.com/in/amos-koech-3b2310212?

--

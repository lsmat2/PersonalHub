# Personal Hub

A personalizable web application to help you with daily tasks. Provides basic information such as weather, news, and the time. Also, allows the management of a to-do list via the Todoist API.

## Table of Contents
* [Motivation](#motivation)
* [Technical Architecture](#technical-architecture)
  * [Diagram](#diagram)
  * [Layout](#layout)
  * [Descriptions](#descriptions)
* [Dependencies](#dependencies)
* [Running](#running)
* [Group Memebers](#group-members)

## Motivation

The motivation behind this project was to create a non-physical web application to provide the same information and 'personal assistant' feel as, say, an Amazon Echo. Unlike a physical device, our personal hub is integrated as a web application and is portable to your tablet or computer providing the same 'all in one' feel where you can check the current time, weather, or news, organize a task list, receive discord messages, or simply play games.

## Technical Architecture

### Diagram:

![Diagram](/client/src/assets/diagrams/TechArch.jpg)

### Layout:

![Layout](/client/src/assets/diagrams/Layout.jpg)

### Descriptions

#### Web Client

Front-end application to display each componenet. Built upon the Angular TypeScript, HTML, and CSS framework.

The nav bar acts as the constant source of navigation throughout the web app. The home page, weather app, to-do app, news app, games app, and discord app are all indipendent components. Various components use API calls to other websites for information, such as the weather, to-do, and news apps.

#### Server

Back-end server to listen for new Discord messages on a specified channel. Built upon the Express.js server framework.

## Dependencies

- [Node.js](https://nodejs.org) - Recommended LTS
- [npm](https://www.npmjs.com)
- [Angular](https://angular.io) - Installed Globally

## Running

For the server and client, you will need to run `npm install` to install all the dependencies. Then you will need to run the client and server in two seperate terminals.

Server: `node app.js`

Client: `ng serve -o`

## Contributors

| Memeber         | Role                                                         |
| :-------------: | :----------------------------------------------------------- |
| Leo Smat        | Developed news, weather and clock components for the client  |
| Rayaan Ahmad    | Developed news, weather and clock components for the client  |
| Drew Mink       | Setup framework and developed nav bar and server components  |
| Mia Erdenebileg | Developed todo list component for the client                 |
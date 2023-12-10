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

The motivation behind this project was to create a customizable Amazon Echo Show. Alongside some of the functionality of the Echo Show, besides the voice assistent part, the Personal Hub allows you to customize and add your own components as you see fit.

## Technical Architecture

### Diagram:

![Diagram](docs/TechArch.jpg)

### Layout:

![Layout](docs/Layout.jpg)

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

## Group Members

| Memeber         | NetID   | Role                                                         |
| :-------------: | :-----: | :----------------------------------------------------------- |
| Rayaan Ahmad    | rahma4  | Developed components for the client                          |
| Drew Mink       | armink2 | Setup the framework and developed the nav bar and the server |
| Leo Smat        | lsmat2  | Developed components for the client                          |
| Mia Erdenebileg | merden2 | Developed components for the client                          |
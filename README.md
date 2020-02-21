# Overview

Starter kit for frontend web development with react and antd

# Development

Project started by using these libraries and frameworks:

- [NextJS](https://nextjs.org/)
- [Ant Design](https://ant.design/)
- [react-redux](https://react-redux.js.org/)
- [redux-saga](https://redux-saga.js.org/)

## Project structure

- `config`: Global configuration of project
- `layouts`: Directory for different page layouts in projects 
- `pages`: Page to display, following routing rule in NextJS
- `views`: React Components for views. It follows same structure in `pages` directory
- `components`: Common react components for reuse
- `redux`: contains redux stores, actions and reducers. See [Redux concept](https://redux.js.org/introduction/core-concepts) for more detail. [redux-saga](https://redux-saga.js.org/) is also included 
- `public`: contains static assets, such as css, images or javascript

## Development

## Local machine

- Install [NodeJS](https://nodejs.org) (version: 12)
- Run `yarn install` to install node_modules
- Run `yarn dev` to start local server
- Open [http://localhost:3000](http://localhost:3000)


## Docker

- Install [Docker](https://docs.docker.com/install/)
- Install [docker-compose](https://docs.docker.com/compose/install/)
- Run `docker-compose up -d`
- Open [http://localhost:3000](http://localhost:3000)

# UI Component Library

This project is a React UI Component Library with Storybook for showcasing components. The application is containerized using Docker.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Docker.
- You have installed Node.js and npm.

## Getting Started

Follow these steps to get the project up and running:

### 1. Clone the Repository

```bash
git clone git@github.com:kdeluz/docker12.git
cd docker12
```

### 2. Install Dependencies

To install the dependencies, run:

```bash
npm install 
```

If that mode doesn't work, use:

```bash
npm install --legacy-peer-deps
```

### 3. Build and Run with Docker

To containerize the application and run it using Docker, follow these steps:

#### Build the Docker Image

```bash
docker build -t deluz_kyle_storybook:1.0.0 .
```

#### Run the Docker Container

```bash
docker run -p 8083:8083 deluz_kyle_storybook:1.0.0
```

This will start the Storybook application on port 8083. Open your browser and go to `http://localhost:8083` to view the application.

### Dockerfile

The `Dockerfile` used to build the image is as follows:

```Dockerfile
FROM node:18-alpine

WORKDIR /deluz_kyle_ui_garden

ENV PATH /deluz_kyle_ui_garden/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./

RUN npm cache clean --force

CMD ["npm", "run", "storybook"]

```
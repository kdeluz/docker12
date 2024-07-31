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

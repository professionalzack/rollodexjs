FROM node:12-alpine

WORKDIR /home/node/rollodex

# Install the required packages
COPY package*.json ./
RUN npm install --quiet

# Copy app files over
COPY . ./

# Set the exposed port and run the start script
EXPOSE 8080
CMD ["npm", "run", "start"]

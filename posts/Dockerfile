# Specify base image
FROM node:alpine

# Set the working directory to '/app' in the container. All subsequent commands will be issued relative to this directory.
WORKDIR /app

# Copy over only package.json
COPY package.json ./

# Install all dependencies
RUN npm install

# Copy over all remaining source code (i.e. index.js in this case)
COPY ./ ./

# Set the command to run when the container starts up
CMD ["npm", "start"]
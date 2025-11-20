# mini-microservices-app

## Description and Usage

A mini microservices app, using React, Express, and NodeJS.

The application enables the user to create posts and add comments to posts. It displays user-created data ("read" functionality in CRUD terms), and it moderates comments with a "pending," "approved," or "rejected" status based on an arbitrary flagged word (e.g. "orange"). An event bus communicates between the different layers of the app to prevent direct dependencies between services.

Data are stored in memory and so won't persist across sessions. Refresh the page to see the UI update once a change is made.

## Learning Objectives

- To gain a better conceptual and practical understanding of the advantages and complexities of microservices architecture.
- To build an application with microservices for two resources--posts and comments--then adding a query service and a comment moderation service.
- To build the architecture with an informed understanding of the tradeoffs of synchronous and asynchronous communication between services.
- To implement a basic event bus from scratch, which handles the emitting and processing of different events across microservices without introducing any direct dependencies.
- To gain experience handling updates to resources via communication with the event bus.

### Secondary Technologies & Techniques

Axios, Nodemon, CORS (errors handling), Express route handling, React Hooks, Bootstrap (for rapid prototyping), Diagrams.net (for visualizing microservices architecture and communication between services), zsh (command line), Google Chrome Developer Tools Network tab monitoring for GET and POST requests while testing services

### Course Attribution

This learning project was instructed by Stephen Grider in his course [Microservices with NodeJS and React](https://www.udemy.com/course/microservices-with-node-js-and-react/?couponCode=CP251118BG1).

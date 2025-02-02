# Running this React App for Docker

This project includes a Create React App and Storybook for accessing and using components.

## Prerequisites

- Have Docker installed on your machine.

## Dockerfile Overview

The Dockerfile does the following:

1. Uses Node.js runtime.
2. Sets directory to `/usr/src/app/mercredi_patrick_ui_garden`.
3. Copies project files into the container.
4. Installs project dependencies.
5. Builds App for production.
6. Builds Storybook web app.
7. Installs `serve` and `http-server`.
8. Exposes port 8083 for the Create React App and port 8084 for Storybook.
9. Serves both Create React App and Storybook.

## Building the Image

To build, navigate to the project directory and run:

```sh
docker build -t mercredi_patrick_coding_assignment12 .
```

## Running the Container

After building the container, run the following command:

```sh
docker run -d --name mercredi_patrick_coding_assignment12 -p 8083:8083 -p 8084:8084 mercredi_patrick_coding_assignment12
```

## Accessing the Applications

Once the container is running, you can access the apps in your browser:

React App: http://localhost:8083

Storybook: http://localhost:8084

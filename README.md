# WSPR
Simple Websocket Client with Command Line Arguments

# Why?
Turns out a lot of people want to easily send a single message and recieve a single response from a websocket server. This makes it easy to just send the message, get the response, and disconnect.

# Use Cases
APIs that use websocket connections, but are being used within a script that runs and exists. Languages that don't have built in libraries for handling connections to a websocket server.

# Install
You need NodeJS installed, but after that it is simple.

`npm install`

# Configure

`config.json` contains server and port information

# Run

`node app.js message` or `node app.js 'message'`

You can also override the connection information in config.json by supplying the server info in ip:port format

`node app.js 'message' localhost:9454`

# Piping Results

Use just like any terminal Command

`node app.js message > results.txt`

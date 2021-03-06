
Node.js
----------
cross-platform runtime environment and library for running JavaScript applications outside the browser
for creating server-side and networking web applications
open source and free to use
cross-platform applications can run on many os

why should we use
-------------------
server-side proxy where it can handle a large amount of simultaneous connections in a non-blocking manner.
useful for proxying different services with different response times, or collecting data from multiple source points.

Node.js Architecture
----------------------
uses the “Single Threaded Event Loop” architecture to handle multiple clients at the same time. 


working
------------
multiple 
incoming --event-------event-------worker
request	  queue		loop	thread pool

Whenever a request comes, Node.js places it into a queue.
When a request comes in, the event loop picks it up from the queue and checks whether it requires a blocking input/output (I/O) operation.
If not, it processes the request and sends a response.
If the request has a blocking operation to perform, the event loop assigns a thread from the internal thread pool to process the request.
There are limited internal threads available. This group of auxiliary threads is called the worker group.
The event loop tracks blocking requests and places them in the queue once the blocking task is processed.
This is how it maintains its non-blocking nature.
Clusters in node?
Answer:
The Node. js Cluster module enables the creation of child processes (workers) that run simultaneously and share the same server port. Each spawned child has its own event loop, memory, and V8 instance. The child processes use IPC (Inter-process communication) to communicate with the parent Node.

Find out env in node? Answer: process.env. We can use dotEnv module to configure envs.
How to pass cli args in node? Answer: node app.js arg1 arg2 arg3

How to scale node?
Answer: Decomposing, splitting, cloning
Decomposing: into multiple micro services
Splitting: or sharding into multiple instances based on specific data point
cloning: into multiple same apps and serve using load balancer like ngnix or aws app-loader-balancer.

Option1:
The Cluster Module
Node’s cluster module makes a great starter for scaling up your application on a single machine.
How does it work precisely?
It makes setting up child processes sharing server ports conveniently easy.
Practically, one “master” process will be in charge with spawning all the child processes (and there’s one “worker” for each core), those that actually run your Node.js app.
**This can be done with ease using PM2 module**

Option2:
Clone apps into multiple environments and using a load balancer(eg: nginx) to route the traffic

How to handle IO blocking operations in node like file read and db read etc?
Answer: Can be handled using `event-stream` module in nodejs with `createReadStream` and `pipe` the data.
What is event loop in node?
JWT Refresh token in node?
session handling in node?
sso in node? https://codeburst.io/building-a-simple-single-sign-on-sso-server-and-solution-from-scratch-in-node-js-ea6ee5fdf340
node micro services and docker?

<!-- #region  File streams in node? or How to read a large file in node?-->
<!-- READ -->

var fs = require('fs');
var readline = require('readline');

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8.
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
data += chunk;
});

readerStream.on('end',function() {
console.log(data);
});

readerStream.on('error', function(err) {
console.log(err.stack);
});

<!-- WRITE -->

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
console.log("Write completed.");
});

writerStream.on('error', function(err) {
console.log(err.stack);
});

<!-- #region Types of Streams# -->

https://www.tutorialspoint.com/nodejs/nodejs_streams.htm

Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In
Node.js, there are four types of streams −

Readable − Stream which is used for read operation.

Writable − Stream which is used for write operation.

Duplex − Stream which can be used for both read and write operation.

Transform − A type of duplex stream where the output is computed based on input.

Each type of Stream is an EventEmitter instance and throws several events at different instance of times. For example,
some of the commonly used events are −

data − This event is fired when there is data is available to read.

end − This event is fired when there is no more data to read.

error − This event is fired when there is any error receiving or writing data.

finish − This event is fired when all the data has been flushed to underlying system.

<!-- #endregion -->

<!-- #region  -->

https://www.tutorialspoint.com/nodejs/nodejs_buffers.htm

Central error handling in node js?
Refer to this URL: https://www.toptal.com/nodejs/node-js-error-handling
Refer to this Image:
https://bs-uploads.toptal.io/blackfish-uploads/uploaded_file/file/270782/image-1591684414699.js_error_handling_Lina_In-Article-90b1396ab45c0d7c4fc5dd7f8c9b481b.png

<!-- #region Node process.nextTick vs setTimeout vs setImmediate vs I/O operations:  -->
**region Node process.nextTick vs setTimeout vs setImmediate vs I/O operations:**
describe('deferredExecution', () => {
  it('deferredExecution', (done) => {
    console.log('Start');
    setTimeout(() => console.log('setTimeout 1'), 0);
    setImmediate(() => console.log('setImmediate 1'));
    process.nextTick(() => console.log('nextTick 1'));
    setImmediate(() => console.log('setImmediate 2'));
    process.nextTick(() => console.log('nextTick 2'));
    http.get(options, () => console.log('network IO'));
    fs.readdir(process.cwd(), () => console.log('file system IO 1'));
    setImmediate(() => console.log('setImmediate 3'));
    process.nextTick(() => console.log('nextTick 3'));
    setImmediate(() => console.log('setImmediate 4'));
    fs.readdir(process.cwd(), () => console.log('file system IO 2'));
    console.log('End');
    setTimeout(done, 1500);
  });
});

As an illustration

import fs from 'fs';
import http from 'http';

const options = {
  host: 'www.stackoverflow.com',
  port: 80,
  path: '/index.html'
};

describe('deferredExecution', () => {
  it('deferredExecution', (done) => {
    console.log('Start');
    setTimeout(() => console.log('setTimeout 1'), 0);
    setImmediate(() => console.log('setImmediate 1'));
    process.nextTick(() => console.log('nextTick 1'));
    setImmediate(() => console.log('setImmediate 2'));
    process.nextTick(() => console.log('nextTick 2'));
    http.get(options, () => console.log('network IO'));
    fs.readdir(process.cwd(), () => console.log('file system IO 1'));
    setImmediate(() => console.log('setImmediate 3'));
    process.nextTick(() => console.log('nextTick 3'));
    setImmediate(() => console.log('setImmediate 4'));
    fs.readdir(process.cwd(), () => console.log('file system IO 2'));
    console.log('End');
    setTimeout(done, 1500);
  });
});
will give the following output

Start // synchronous
End // synchronous
nextTick 1 // microtask
nextTick 2 // microtask
nextTick 3 // microtask
setTimeout 1 // macrotask
file system IO 1 // macrotask
file system IO 2 // macrotask
setImmediate 1 // macrotask
setImmediate 2 // macrotask
setImmediate 3 // macrotask
setImmediate 4 // macrotask
network IO // macrotask

Callbacks deferred with process.nextTick() run before any other I/O event is fired, while with setImmediate(), the execution is queued behind any I/O event that is already in the queue.
<!-- #endregion -->



<!-- #endregion -->



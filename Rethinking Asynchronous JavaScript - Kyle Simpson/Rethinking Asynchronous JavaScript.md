# Rethinking Asynchronous JavaScript

## Parallel Vs Async

* parallelism = multi-threads
    - multiple lines run at once with communication
    - optimization
* single thread = only line runs at a time with no communication
* concurrency = multiple task happening in the same timeframe

## Callback Hell

* Inversion of Control = having control of code execution of one part of the code and handing control to a callback on another part
* trust issues
* callbacks hard to be reasoned about
* we naturally plan things sequentially 
* nested callbacks show temporal dependencies 

## Thunks
* thunk = function with closure that everything it needs to return a value
* container wrap around state
* time is most complex state in program
* use closure to maintain state === eliminate time as a factor on state

## Promises

* promises a container that wraps around a value.
* promises = future values and completion events
* uninvert the inversion of control = retain control
* Promise Trust
    - only resolved once
    - either success or error
    - massage passed
    - exceptions = error
    - immutable once resolved
* promise =  callback manager\
* Promise chaining = flow control
* ``Promise.all(::array of Promises)``
    - wait for an array of promises to resolve
    - all must be successful
* ``Promise.race(::array of Promises)``
    - waits for the first promise in array to resolve
* sequence = automatically chained promises

## Generator

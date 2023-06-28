## 1 - Event Loops / Timers / Promises vs Observables / Event Emitters
### 1- Event LOOP => (CallStack => Micro Tasks => Macro Tasks)

EVENT LOOP JAVASCRIPT

THE EVENT LOOP ACTIVATES THE CALLSTACK, THE CALLSTACK ARE AN QUEUE OF TASKS THAT SHOULD BE EXECUTED IN ORDER, AND IT IS THE WAY THAT JAVASCRIPT ENGINE READ AND EXECUTE YOUR CODE.
IT WORKS WITH THE FIFO PATTERN ( FIRST IN FIRST OUT ), WICH IS CLEARLY DECLARED IN THIS EXAMPLE.


READ THIS AS A LINE, FROM THE LEFT TO THE RIGHT, WHERE THE EVENTS ARE BEING EXECUTED.


CALLSTACK QUEUE                                                                                                                             // LOW PRIORITY
================= MICRO TASK =================================== MACRO TASK =======================================================


MACROTASKQUEUE                                                                                                                              // THIS ONE HAS SECONDARY PRIORITY 
                                                                =============
                                        ( here the task is just pushed to the queue, and executes async )

MICROTASKQEUE                                                                                                                                // THIS QUEUE GOT HIGH PRIORITY EXECUTION 
                  ==========
      (here browser stops if it is async is declared, if it isnt, just keeps going with the pile reading )


```sh
CALLSTACK 
( synchhrounous functions LIFO Last in First out )

MICROTASKS
(process.nextTick, Promises ES6 , Object.observe, MutationObserver, async await ES8)

MACRO TASKS
( tTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering )
```

EVENT LOOP NODEJS

```sh                          
                               INTERVAL BETWEEN ANY OF THESE PHASES =>
1st Expired timer callbacks                     |          
2nd I/O Polling and callbacks                   |           => Process.nextTick             
3rd SetImmediate                                |           => Other Microtasks ( Resolved Promises)
4th Close callbacks                             |
```


# Javascripto 10 tips - Following Durand Neto

## 1 - Event Loops / Timers / Promises vs Observables / Event Emitters
### 1- Event LOOP => (CallStack => Micro Tasks => Macro Tasks)

EVENT LOOP 

```sh
1st Scope => Call CallStack 
( synchhrounous functions LIFO Last in First out )

2nd Scope => Microtasks ( Here is where the browser stops )

(process.nextTick, Promises, Object.observe, MutationObserver)
3rd Scope => Macro Tasks ( Here is the last scope to be executed )
( tTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering )
```




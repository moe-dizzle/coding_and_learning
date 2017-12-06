# 1 - Scope 

* Nested Scope
* Hoisting (made up term!)
* Closure (most important concept ever invented in computing!)
* Modules

1. Understanding Scope
    * Scope = where to look for things
    * JS is a compiled language!! :sunglasses:
    * 2 phases compile and execution
    * lexical scope determine during  compile time 
2. Compiling Phase
    * set up variable declaration 
    * shadowing :smiling_imp: = declared variable has same name as a declared variable from an outer scope
3. Execution Phase
    * declarations compiled out
    * determine if LHS is in scope 
    * If LHS is unfulfilled in strict mode you get reference error
    * If LHS is unfulfilled while not in strict mode, its added to global scope BAD!!! :scream: :astonished: :skull:
    *  If RHS is unfulfilled, always get a reference error 
    *  undefined = declared but doesn't currently have a value
    *  not defined =  never been declared
4. Strict Mode
    * USE IT! :stuck_out_tongue:
    * set of suggestions to make code run faster
    * MYTHS :sweat:
        - Strict mode in one JS file makes it strict in other files
        - its all or nothing
5. Function Expressions (FE)
    ```javascript
    //anonymous functions expression
    var clickHandler = function(){
        // ...
    }

    //named functions expression
    var keyHandler = function keyHandler(){
        // ...
    }
    ```
    * :point_right: always prefer named FE vs anonymous FE :point_left:
        - name is a handy/reliable self-reference
            - good for recursion 
            - name is immutable
        - more debuggable stack traces ( good for production code!!! :simple_smile:)
        - self-documenting code :memo:
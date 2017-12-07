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
    * LHS = left of equal sign 
        - ex,  ``a = 'foo'``, LHS = a
        - ex, ``function b(){}``,  (function being declared) LHS = b
    * RHS = right of equal sign 
        - ex, ``a = 'foo'``, RHS = 'foo'
        - EX, ``b()``, (function being invoked) RHS = b
    * determine if LHS is in scope 
    * If LHS variable is unresolvable in strict mode you get reference error
    * If LHS variable is unresolvable while not in strict mode, its added to global scope BAD!!! :scream: :dizzy_face: :skull:
    *  If RHS variable is unresolvable, always get a reference error 
    *  undefined = declared but doesn't currently have a value
    *  undeclared =  never been declared
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
        - more debuggable stack traces ( good for production code!!! :smile: )
        - self-documenting code :memo:
6. Lexical Scope
    * fixed relationships determined only at compile time
    * based on where variable is declared
    * **predictable**
    * dynamic scope = determined at run time 
        - based on where variables are used 
        -  **flexible**
7. Function Scoping
    ```javascript
    var foo = "foo"

    function bob(){
        var foo = "foo2"
        console.log(foo) //"foo2"
    }
    bob() //"foo2"
    console.log(foo) //"foo"
    ```
    * use function to create a scope
    * Heavy way of creating a scope
    * :white_check_mark: protect naming collisions (foo outside bob vs foo inside bob)
    * :white_check_mark: protect access (foo inside bob unavailable outside the function)
    * :x: the named function bob pollutes the global name space and is accessible 
   

8. IIFE (Immediately Invoked Function Expression ) Pattern
     ```javascript
    var foo = "foo"

    (function bob(){
        var foo = "foo2"
        console.log(foo) //"foo2"
    })()
  
    console.log(foo) //"foo"
    ```
    * :white_check_mark: all benefits of creating a function scope :heavy_plus_sign: bob isn't added added to global namespace and is unaccessible
    * most prevalent pattern in JS!
    * alway name IIFE!
9. Block Scoping
    * Lite way to create a scope
    
    ```javascript
    function diff(x,y){
        if(x > y){ created
            //Implicit block scope 
            let tmp = x
            x = y
            y = tmp
        }
        console.log(tmp) //Reference Error!
        return y - x
    }
    ```

    * ``let`` is not the new ``var``!!! :pray:
    * use  ``let`` to stylistically reinforce what you are already functionally doing :pray: :pray:
    * create small explicit block scope by adding curly bracket! :pray: :pray: :pray:
        ```javascript
        function diff(x,y){
            if( x > y){
                
                {let temp; //Explicit block scope 
                    temp = x
                    x = y
                    y = tmp
                }
            }
            return y - x 
        }
        ```
10. Problems with ``let``
    * alway use ``for(let i =0; ..)`` instead of ``for(var i = 0; ..)``
    * `var` attaches to function , to be use across function. 
        - good stylistic signal for that
    * use ``let`` + ``var``  responsibly can help with readability 
    * Sometimes ``var`` > ``let``
        - want a variable declaration to escape a unintentional scope (ex ``try/catch``)
        - sometime redeclare variable for readability (only done with ``var``)
11. ``const`` keyword
    * popular culture = "use ``const`` first"
    * ``const`` is variable that can't be reassigned (nothing to do with value of variable)
    * Kyle Simpson opinion = ``const`` is minimally useful 
        - use it values that are already immutable literals (i.e. not objects, arrays, functions etc)
12. Hoisting
    * Made up term!:speak_no_evil: It's a metaphor
    * variable/function declaration are "hoisted" to the top of the scope
    * ``let`` and ``const`` hoisted but are not initialized to ``undefined``


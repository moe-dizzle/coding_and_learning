2 - Closure
1. Intro
    * closure = function remembers lexical scope , even if executed outside that scope :ok_woman:
    * can accidentally prevent a scope from being garbage collected when creating a closure 
    * :star: a function != closure and closure != function :star:
        - closure is a characteristic of a function
        - it allow function to access outer variables independent of where it is invoked
    ```javascript
    //not what we want!
    for (var i=1; i<=5; i++){
        setTimeout(function(){
            console.log("i: " + i)
        , i*1000})
    }
    //6
    //6
    //6
    //6
    //6
    //6
    ```
    * each timeTimeOut is closing over the same i 
    ```javascript
    //Fixed with an function scoping (IIFE)!
    for (var i=1; i<=5; i++){
        function(i){
            setTimeout(function(){
                console.log("i: " + i)
            }, i*1000)
        }(i)
    }
    //1
    //2
    //3
    //4
    //5
    //6
    ```
    ```javascript
    //Fixed with an block scoping!
    for (let i=1; i<=5; i++){
        setTimeout(function(){
            console.log("i: " + i)
        }, i*1000)
        
    }
    //1
    //2
    //3
    //4
    //5
    //6
    ```
2. Module Patterns
    * most important code organization pattern :boom:
    ```javascript 
    //NOT A MODULE
    //can still access  variable o
    //Not really encapsulation 
    var foo = {
        o: {bar: "bar"},
        bar(){
            console.log(this.o.bar)
        }
    }

    foo.bar() //"bar"
    ```
    * encapsulation :pill: = hiding info not necessary to be known to outside world
    * lot of examples people using "private" methods :cry: = need true  encapsulation
    * use closure :thumbsup: to realize the module pattern
    ```javascript
    //classic module pattern
    // cant access variable o
    // only allowed to access info in returning public api object
    var foo = (function(){
        var o = {bar: "bar"};
        return {
            bar: function{
                console.log(o.bar);
            }
        }
    })()

    foo.bar();  //bar
    ```
    * competing pattern to modules is classes 
    * modules = forces you to think about separation of responsibility
    * A module may want to have a internal ref to public api object(unlike above ex). 
        - may want to call public api methods internally
        - add/remove/update props of public api
        - make clear you are changing pub api

     ```javascript
    //classic module pattern: modified 
    //save api ref as internal variable

    //this ex is a singleton (run onces)

    var foo = (function(){
        var o = {bar: "bar"};
        var publicAPI = {
            bar: function{
                console.log(o.bar);
            }
        return publicAPI
    })()

    foo.bar();  //bar
    ```
    * :star: always save api ref as internal variable 
        - stylistically clearer
    * Characteristics of Module Pattern 
        1. Must be an outer enclosing scope (in exampless function scope) that run at least once
        2. inner function with closure of that scope that get return
    
    ```javascript
    //modern module pattern

    //same as classic but don't see function being executed and //return value being set to foo
   
    define( "foo", function(){
        var o = {bar: "bar"};
        return {
            bar: function{
                console.log(o.bar);
            }
        }
    })

    foo.bar();  //bar
    ```

    * es6+ we have dedicated syntax for MODULES!!! :facepunch:
        ```javascript
        //foo.js 
        var o = {bar: "bar"}

        export function bar(){
            return o.bar
        }
        ``
        ```javascript
        //main.js
        import {bar} from "foo.js"
        bar() //bar
        import * as foo from "foo.js"
        foo.bar() //bar
        ```
        - file "foo.js" is the module (**file-base modules**) 
        - if loads by import file is interpreted as module and only export is exposed 
        - can't put multiple modules in one file cause whole file will be consider one module
        - dont use es6+ modules if your not using HTML Ver. 2
        -  **modules are singletons** importing will not create new instance
        - can't use es6+ modern pattern  yet, use classic common.js/umd
    * white-boxing testing are harder in module pattern

    

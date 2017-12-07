2 - Closure
1. Intro
    * closure = function remembers lexical scope , even if executed outside that scope
    * can accidentally prevent a scope from being garbage collected when creating a closure 
    * a function != closure and closure != function
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
    //Fixed with an IIFE!
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
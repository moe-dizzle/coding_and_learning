# Object-Orienting

1. ``this`` keyword
    * ``this`` is dynamic scope
    * **determining ``this``= how function is invoked**
        ```javascript
        function foo(){
            //this-aware function (it has ``this`` keyword)
            console.log(this.bar)
        }

        var bar = "bar1"
        var o = {bar: "bar"}
        var o2 = {bar:"bar2", foo:foo};
        var o3 = { bar: "bar3", foo: foo };
        var o4 = { bar: "bar4"};

        /*1 - default binding rule! ``this`` to global when not in strict mode. If in strict mode will get an error because deafult will be undefined. Never want to call a this-ware function like this. */
        foo(): //"bar1" 
        
        /*2 - implicit binding rule! Implicity call foo in the context of o2 or o3. MOST IMPORTANT*/
        o2.foo(); //"bar2" 
        o3.foo();//"bar3"

        /*3 - explict Binding rule! Explictily call foo in the context of o4*/
        foo.call(o4) //"bar4"

        /*3a - explict hard binding. Explictly hard bind hardFoo to the context of o . hardFoo will always use context of o*/
        var hardFoo = foo.bind(o)}
        hardFoo.call(o4) //"bar"

        /* 4 - ``new`` keyword rule! Create an object for ``this`` to point to*/
        function foo1(){
            this.baz = 'baz'
            console.log(this.bar + ' ' + baz)
        }
        var baz = new foo(); //

        ```
        * JS has both dynamic (this) and lexical scope
        * ``new`` keyword
            1. creates new object
            2. newly created obj link to another obj
            3. the new created obj (from part 1) is passed in as ``this`` to function call
            4. if no ``return`` statment in function, return ``this`` object
        * ``this`` determination
            1. if function is called by ``new``, ``this`` = newly created object, if not next
            2. if function called explictly with ``call()`` or ``apply()`` use that context, if not next
                - Note ``bind()`` uses ``apply()`` underhood
            3. if was called with context object use that, if not next
            4. *DEFAULT*: ``this`` = global object unless in `strict mode` then ``this`` = ``undefined``
        * arrow function doesn't have ``this`` keyword. So ``this`` determined by lexical scope 
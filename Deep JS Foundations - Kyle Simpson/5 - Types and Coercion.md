# 5 - Types and Coercion

## Types
1. Primitive Types
    * all types
        * ``undefined``
        * ``string``
        * ``number``
        * ``boolean``
        * ``object``
        * ``symbol``
        * ``function``
        * ``null``
    * ``typeof`` = what type of value of variable
    ```javascript
    typeof foo; //undefined
    typeof "foo" //string
    typeof 123 //number
    typeof true //boolean
    typeof {a:1} //object
    typeof function(){}  //function
    typeof null //object :{ it's a bug
    ```
2. Special Types
    * ``NaN`` (not a number)
        - failed conversion to a number
        - use ``Number.isNaN`` or ``num != num``
    * ``Infinity, -Infinity``
    * ``null``
    * ``undefined(void)``
    * ``+0,-0``
    ```javascript
    //es6 Object.is(...)

    Object.is("foo", NaN) //false
    Object.is(NaN, NaN) //true

    Object.is(0, -0) //false
    Object.is(-0, -0) //true
    ```
3. Native Functions
    * All Types of native functions
        * ``String()``
        * ``Number()``
        * ``Boolean()`` 
        * ``Function()``
        * ``Object()``
        * ``Array()``
        * ``RegExp()``
        * ``Date()``
        * ``Error()``
    * use ``String(...)`` or ``Number(...)``  or ``Boolean(...)``    for coercion instead of constructors with the ``new`` keyword
    * use literal instead of constructor
    *  use ``new`` of dynamic RegExp and Dates

## Coercion

1. Abstract Value Operations
    * ex ToString = set ops to convert to string
    *  ex ToNumber = set ops to convert to number
    * ``"".toNumber()  //0`` is the root of all evil :imp:
    * ToPrimitive = valueOf() and toString()
    * ex ToBoolean = set ops to convert to boolean
        - Falsy = when coerce to boolean (``toBoolean(...)``) always get ``false``
            - ``""``
            - ``0, +0, -0``
            - ``NaN``
            - ``false``
            - ``undefined``
        - Truthy = when coerce to boolean (``toBoolean(...)``) always get ``true``
            - ex. anything not in Falsy list
        - **Truthy and Falsy Rules only apply of toBoolean is invoked!**
2. Explicit Coercion
    ```javascript
    /* String to Number */
    var foo = "123"
    var baz = parseInt(foo,10) //not the same as coercion is parsing string until non-decimal number
    baz; //123

    baz = Number(foo)  //123

    baz = +foo //123 + = coerce to number

    baz = 456;
    foo = baz.toString() //"456"
    foo = String(baz) / "456"

    /* ANY to Boolean */
    var foo = "123"
    var baz = Boolean(foo); //true

    baz = !!foo //true

    //explicitly implicit
    baz = foo ? true : false; //true
    ```
    * code you can't understand = don't trust
3. Implicit Coercion
    ```javascript
    var foo ="123"
    var baz = foo - 0 //123

    baz = foo - "0" //123

    baz = foo / 1 // 123

    baz = 456
    foo = baz +  "" //"456" string overload + 
    
    foo = baz - '' //456 !!! :{
    ```
4. Equals ``==``, ``====``
    * readable code = code that doesn't have to be read = familiar = hide what i don't need to read
    ```javascript
    var foo = "123";
    if(foo){ //if implicitly convert to boolean
        alert("sure.")    //yup
    }

    foo = 0
    //happy accident that works! == coverts both sides to numbers then compares
    if(foo == false){ 
        alert("sure.")    //yup
    }

    var baz = foo || "foo" //"foo"
    ```
    * ``==`` doesn't do boolean compare, it prefers numbers
        - **NEVER COMPARE WITH ``== true`` or ``== false``**
    * When to Avoid ``==``
        - can either values be ``true`` or ``false``
        - can either values be ``[]``, ``""``, or ``0``
    * ``==`` vs ``===``
        - ``==`` allows coercion and ``===`` does not
        - **use ``===`` where its safer and ``==`` where it's helpful**

**use explicit coercion where its safer and implicit  coercion where it's helpful**



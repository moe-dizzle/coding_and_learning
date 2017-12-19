# Prototypes and Classes

1. Explaining Prototypes
    * obj built by constructor calls (``new``)
    * constructor makes an object **linked to** its own **prototype**
    * ``[prototype]]`` = prototype chain
    * ``[[prototype]]`` =  linkage to one object to another, created when an obj is created
    * ``[prototype]]`` = is method or property not on function it delagates up chain
    * find where objects ``[[prototype]]`` links to
        - ``__proto__``
        - ``Object.getPrototypeOf(obj)``
        - ``obj.constructor.prototype``
2. ES6 Classes
    * syntactic sugar + extra things
        - prototypes underhood
        - statics methods = add method to class instead of instance
    * can't extend an object
    * must call ``super`` before ``this`` is called 
3. Behavior Delegation Design Pattern (OOLO - OBJECT LINKED TO OTHER OBJECTS)
    * OOP w/o classes
    * easier testing


# Part II - Creating Hight-Quality Code (ch 5-9)

## Chapter 5: Design in Construction

### 5.2 Design Problems

* design = messy, restricted, involves trial and error

### 5.3 Key Design Concepts

* main goal of software design = manage complexity
* good design = minimal complexity, maintainable, loose coupling, extensible, reusable
* divide program into meaningful subsystems
* abstractions = look at code at high level
* encapsulation = forces you to only stay on level
* information hiding
  * hide complexity
  * hide implementation, so changes are only local

## Chapter 6: Working Classes

### 6.1 Abstract Data Types (ADT)

* ADT = collection of data and operations that work on that data
* :thumbsup: of ADTs

  * hide implementation details
  * changes not affect whole program
  * make api more informative
  * **self-documentation**
  * don't have pass data everywhere

* Classes = ADT + inherence + polymorphism

### 6.2 Good Class Interfaces

* don't expose member data in public
* favor read convenience over write convenience
* program to interface not implementation

### 6.3 Design and Implementation Issues

* Containment ("has a" Relationship)
  * EX Employee "has a" name, phone number
  * more then 7 data members = split up the class more
* Inheritance ("is a" Relationship)
  * add complexity so it must be designed and documented or prohibited ie try to avoid
  * Liskov Substitution Principle (LSP) = derived class more specific version of base
  * avoid deep inheritance trees
* Law of Demeter = Obj `A` instanites an Obj `B`, then `A` can call `B` methods `A.B.method()` but if Obj `B` has an Obj `C` , `A` can't `A.B.C.method()` too deep

## Chapter 7: High-Quality Routines

### 7.1 Valid Reasons to Create a Routine

* well name routine = self-documentation
* don't be afraid to create small routines with a few lines of code
  * self-docs
  * hide operations as things get complex

### 7.2 Design at the Routine Level

* **_Functional cohesion_** = routines perform only one operation

### 7.3 Good routine names

* Describe what routine does
* for function -> use return val
* for procedure -> use verb + object
* make naming conventions when necessary

### 7.4 How long can a Routine be?

`¯\_(ツ)\_/¯`

* get diffcult after 200 lines

### 7.5 How to use Routine Paramaters

* be consistent
* put error/message/status variable last
* document param assumpts and use asserts

## Chapter 8 : Defensive programming

* program anticipating problems

### 8.1 Protecting Your Program from Invalid Inputs

* always check for bad data and handle

### 8.2 Assertions

* useful in large, complicated programs
* assertions for dev, not prod ( compile them out for performance)
* assertion != error, if assert not passed there is a bug not error
* **assert = error that should never occur**
* no executable code inside asserts

### 8.4 Exceptions

* use if can't handle error locally
* exception consistent with level of abstraction

### 8.6 Debugging Aids

* PROD constraints doesn't mean DEV constraints
  * trade speed and resources usage in DEV to use tools to aid development

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

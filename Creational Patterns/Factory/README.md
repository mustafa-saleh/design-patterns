# Factory Pattern

- Factory Defines an interface for creating an object but let subclasses decides which class to instantiate. Factory method let the class defer instantiation to subclasses
- In this example if we have many user types [Employee, shopper, dev, student, ...] instead of keep tracking of all instanciation constructors and importing classes all over clinet applicationCache, we can use factory methods and tell it what to instantiate.

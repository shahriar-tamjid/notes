# Decorators looks like this -> @name_of_decorator
# It always starts with "@"
# Followed by any name

def hi():
    print("Hi World!")

wave = hi

del hi
# This will delete the "hi" word from the memory, but as the "wave" variable points to the "hi" function the interpreter will keep the contents of the function into the memory
# We cannot access the "hi" function though
# But we can access the contents inside the "hi" function

print(wave())

# Output:
# Hi World!
# None


def hello(func):
    func()

def greet():
    print("Hello World!")

a = hello(greet)

print(a)

# Output:
# Hello World!
# None
'''
Decorator super-charge our functions
It tells our function to have some extra features
We can see here that functions are treated as first class citizens in python just like variables
Decorators uses this facility of functions under the hood

Higher Order Function (HOF)
Higher Order Functions are special functions that accepts another function as their parameter
Another definition is, HOF are special functions that returns another function
'''

# This is a HOF
def greet(func):
    func()

# This is another HOF
def greet_2():
    def func():
        return 5
    return func

# map() is another HOF

# Example of Decorator

def my_decorator(func):
    def wrap_func():
        print("*************")
        func()
        print("*************")
    return wrap_func

@my_decorator
def hello():
    print("Hello World!")

hello()

# Output:
# *************
# Hello World!
# *************

@my_decorator
def bye():
    print("Bye World!")

bye()

# Output:
# *************
# Bye World!
# *************

# Another way of writing decorator
hello_2 = my_decorator(hello)
hello_2()
# Output
# *************
# *************
# Hello World!
# *************
# *************

bye_2 = my_decorator(bye)
bye_2()
# Output
# *************
# *************
# Bye World!
# *************
# *************

# Another way of writing decorator
my_decorator(hello)()
# Output
# *************
# *************
# Hello World!
# *************
# *************

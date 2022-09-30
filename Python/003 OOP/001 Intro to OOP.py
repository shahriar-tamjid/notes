## Everything in Python is an object
# As everything is an object so we can access methods for anything that is built in in python

print(type(None)) # <class 'NoneType'>
print(type(True)) # <class 'bool'>
print(type(5)) # <class 'int'>
print(type(3.1416)) # <class 'float'>
print(type([])) # <class 'list'>
print(type(())) # <class 'tuple'>
print(type({})) # <class 'dict'>

# Everything falls under a class

# What is a class?
# Class is a blueprint for what we want to create. What functionality should our product have is defined there.

# What is an object?
# Objects are the products that we create by using the blueprint or the class.

# Class (Blueprint) -> Instantiate (action) -> Different Instances (Different Objects)

# When someone says "I've just instantiated a class" it means "I've just created an instance (object)"

# Creating a class
class BigObject:
    # code
    pass

print(type(BigObject)) # <class 'type'>

# Creating an object (Instantiating an object)
obj1 = BigObject() # We have instantiated "obj1" by adding "()" after the created class "BigObject"

print(type(obj1)) # <class '__main__.BigObject'>

# We can create multiple objects from the same blueprint or class
obj2 = BigObject()
obj3 = BigObject()

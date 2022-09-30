# Creating our own objects
class PlayerCharacter:
    # Class Object Attribute
    membership = True # This is a static property so we don't need to use it inside __init__ or anything

    # We can also set default values to our __init__ parameters
    def __init__(self, name = "Robert", age = 18): # We can have multiple parameters after the "self"
        self.name = name # This is an attribute or a property
        self.age = age # This is an attribute or a property
    
    def run(self): # This is a method
        print("run")
        return "done"
    
    def shout(self): # This is another method
        return (f"My name is {self.name}!") # Using the property of __init__ in another method of the class

# Instantiating player3 without any parameters
player3 = PlayerCharacter()
print(player3.name) # Robert
print(player3.age) # 18
print(player3.shout()) # My name is Robert!

player1 = PlayerCharacter("Tamjid", 13)
print(player1) # Output: <__main__.PlayerCharacter object at 0x00000159F629EEC0>
print(player1.name) # Output: Tamjid

# Let's create another object
player2 = PlayerCharacter("Shahriar", 22)
print(player2.name) # Output: Shahriar

print(player1.age) # 13
print(player2.age) # 22

# __init__() method is the constructor method and it is usually stays at the top of our class
# To successfully create an object we must fulfill the properties and functions defined inside __init__
# "self" is the default parameter. It is like the "this" keyword in JavaScript
# "self" refers to the "PlayerCharacter" class
# Whenever we call class we accept whatever that is after "self" of __init__() as the parameter. Like "name"
# We can access the properties of "PlayerCharacter" class with "." (dot operator)

# To access Class Object Attribute we don't need "self" we can do "PlayerCharacter.membership"
# To access any other attributes we must need "self"

# To access the run method we need to add parenthesis when we call that method
print(player1.run())
# Output
# run
# None

# Why did we get None with run? That's because our method isn't returning anything.
# If we return "done" then we can see that instead of "None"

print(player1.run())
# Output
# run
# done

# Assigning property directly to an object
player1.attack = 50

print(player1.attack) # 50
# print(player2.attack) # ERROR

# If we want to know more about any object the we can use the help function
help(player1)
# Output:
# Help on PlayerCharacter in module __main__ object:

# class PlayerCharacter(builtins.object)
#  |  PlayerCharacter(name, age)
#  |
#  |  # Creating our own objects
#  |
#  |  Methods defined here:
#  |
#  |  __init__(self, name, age)
#  |      Initialize self.  See help(type(self)) for accurate signature.
#  |
#  |  run(self)

# Class Object Attribute is available for all instances
print(player1.membership) # True
print(player2.membership) # True
# We can also access the class attribute directly from the class without instantiating any object
print(PlayerCharacter.membership) # True

# Accessing the shout method
print(player1.shout()) # My name is Tamjid!

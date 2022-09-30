class PlayerCharacter:
    # Class Object Attribute
    membership = True # This is a static property so we don't need to use it inside __init__ or anything

    # Similarly we can create Class Methods by using "@classmethod"
    # Here we need to pass parameters after the "cls", which is the default parameter of "PlayerCharcter" class
    # The "cls" is similar to "slef" which references to the "PlayerCharacter" class

    @classmethod
    def adding_things(cls, num1, num2):
        return num1 + num2

    # We can also set default values to our __init__ parameters
    def __init__(self, name = "Robert", age = 18): # We can have multiple parameters after the "self"
        self.name = name # This is an attribute or a property
        self.age = age # This is an attribute or a property
    
    def run(self): # This is a method
        print("run")
        return "done"
    
    def shout(self): # This is another method
        return (f"My name is {self.name}!") # Using the property of __init__ in another method of the class

    # We can create objects inside this class by using the "cls" keyowrd of "@classmethod"
    @classmethod
    def nested_object(cls, num1, num2):
        return cls("Nested Object", num1 + num2)

    # @staticmethod are some normal static methods that are staying inside a class
    # To access thos methods we can call the class and access them just like any other method
    @staticmethod
    def multiplying_numbers(num1, num2):
        return num1 * num2


# For @classmethod we don't even need to instantiate the object. We can directly access the method
print(PlayerCharacter.adding_things(35, 23)) # 58

generated_player = PlayerCharacter.nested_object(10, 7)
print(generated_player.age) # 17
print(generated_player.name) # Nested Object
print(generated_player) # <__main__.PlayerCharacter object at 0x00000182126F7BE0>

# Accessing static methods
print(PlayerCharacter.multiplying_numbers(3, 7)) # 21

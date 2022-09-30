# Basic structure of a class and its objects

class NameOfClass:
    class_attribute = "value"
    def __init__(self, param1, param2):
        self.param1 = param1
        self.param2 = param2
    
    def method(self):
        # code
        pass

    @classmethod
    def cls_method(cls, param1, param2):
        # code
        pass

    @staticmethod
    def static_method(param1, param2):
        # code
        pass

# Instantiating an object
object_1 = NameOfClass("arg1", "arg2")

# Accessing attributes / properties
object_1.param1

# Accessing methods
object_1.method()

# Accessing class attributes ... There are 2 ways
object_1.class_attribute # by instantiating an onject
NameOfClass.class_attribute # without instantiating any object

# Accessing class methods ... There are 2 ways
object_1.cls_method() # by instantiating an onject
NameOfClass.cls_method() # without instantiating any object

# Accessing static methods ... There are 2 ways
object_1.static_method() # by instantiating an onject
NameOfClass.static_method() # without instantiating any object

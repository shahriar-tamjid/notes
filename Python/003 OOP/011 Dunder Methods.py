# Dunder is a special type of methods
# They are built-in Python
# We can modify them but we should no do that

class Toy:
    def __init__(self, color, price):
        self.color = color
        self.price = price
        self.my_dict = {
            "name": "YoYo",
            "has_pets": False
        }
    
    def __str__(self):
        return f"{self.color}"
    
    def __len__(self):
        return 5
    
    def __call__(self):
        return "Hello!"
    
    def __getitem__(self, i):
        return self.my_dict[i]

action_figure = Toy("Red", 100)

# Using __str__ dunder method ... There are 2 ways
print(action_figure.__str__()) # Red
print(str(action_figure)) # Red

# Using the __len__ dunder method
print(len(action_figure)) # 5

# Using the __call__ dunder method
print(action_figure()) # Hello!

# Using the __getitem__ dunder method
print(action_figure["name"]) # YoYo

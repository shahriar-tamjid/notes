# Decorator
def my_decorator(func):
    def wrap_func(x):
        print("$$$$$$$$$$$$")
        func(x)
        print("$$$$$$$$$$$$")
    return wrap_func

@my_decorator
def hello(greeting):
    print(greeting)

hello("Hello, I am a decorated function!")

# Output
# $$$$$$$$$$$$
# Hello, I am a decorated function!
# $$$$$$$$$$$$

# If we have multiple parameters to pass then we can follow this pattern
def our_decorator(func):
    def wrap_func(*args, **kwargs): # We can pass as many arguments as we want from decorated function
        print("*****$$$$$*****")
        func(*args, **kwargs) # We unpack those arguments here
        print("*****$$$$$*****")
    return wrap_func

@our_decorator
def cities(capital, city, default_city="New York"):
    print(capital, city, default_city)

cities("London", "Paris")
# Output
# *****$$$$$*****
# London Paris New York
# *****$$$$$*****

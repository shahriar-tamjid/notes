# A function either modifies something in the program or returns something to the program

# Defining a function
def say_hello():
    print('Hello World!')

# Calling a function
say_hello()  # Hello World!

# Tree printing function
picture = [
    [0,0,0,1,0,0,0],
    [0,0,1,1,1,0,0],
    [0,1,1,1,1,1,0],
    [1,1,1,1,1,1,1],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0]
]

def show_tree():
    for row in picture:
        for pixel in row:
            if (pixel): # Because 1 is a truthy value
                print('$', end='')
            else:
                print(' ', end='')
        print('') # need a new line after every row

show_tree()
# Output:
#    $
#   $$$
#  $$$$$
# $$$$$$$
#    $
#    $

# Parameters
def greet(name):
    print(f'Hello, {name}! Nice to meet you.')

# Arguments
greet('Shahriar')  # Hello, Shahriar! Nice to meet you.

# Default Parameters
def fav_city(city = 'New York'):
    print(f'{city} is an awesome city!')

fav_city('Las Vegas') # Las Vegas is an awesome city!
fav_city() # New York is an awesome city!

# return keyword
def add(num1, num2):
    return num1 + num2

print(add(12, 7)) # 19

# Nested Function
def multiply(num1, num2):
    def another_func(n1, n2):
        return n1 * n2
    return another_func(num1, num2)

result = multiply(12, 5)
print(result) # 60

# We can use help() function to learn more about a function
# For that we need to provide the message inside the doc strings or ''' lorem ipsum '''
def div(n1, n2):
    '''
    Info: This function divides two numbers
    '''
    return n1 / n2

print(div(150, 5)) # 30.0

help(div)
# Output
# Help on function div in module __main__:

# div(n1, n2)
#     This function divides two numbers

# There is another way to learn more about any function. That is by using "__doc__" method
print(div.__doc__)
# Output
# Info: This function divides two numbers

# Clean Code

# Version-1
def is_even(num):
    if num % 2 == 0:
        return True
    else:
        return False

print(is_even(50)) # True
print(is_even(17)) # False

# Version-2
def is_even(num):
    return num % 2 == 0

print(is_even(20)) # True
print(is_even(9)) # False

# Accepting any numbers of parameters with "*args"
def super_func(*args):
    print(args)
    return sum(args)

print(super_func(1,2,3,4,5))
# Output
# (1, 2, 3, 4, 5)
# 15

# Note: We should not put "*args" inside the code block of function

# By using **kwargs we can pass the keyword parameters in the function
# keyword args --> **kwargs
def super_func_2(*args, **kwargs):
    total = 0
    for items in kwargs.values():
        total += items
    return sum(args) + total

print(super_func_2(1,2,3,4,5, num1 = 5, num2 = 10)) # 30

# Rule for writing functions with various types of parameters
# Rule: params, *args, default params, **kwargs
def rule_func(name, *args, i='hi', **kwargs):
    print(f'params: {name}, *args: {args}, default params: {i}, **kwargs: {kwargs}')

rule_func('Shahriar', 1,2,3, n1=90, n2=21)
# Output: params: Shahriar, *args: (1, 2, 3), default params: hi, **kwargs: {'n1': 90, 'n2': 21}

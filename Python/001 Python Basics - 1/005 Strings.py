username = "super coder"
password = "super secret"
print(type(username)) # <class 'str'>

# We can store very large text inside any variable by using '''Sample_Text'''
large_text = '''
WOW
O O
---
'''
print(large_text)
# WOW
# O O
# ---

# String concatenation
first_name = "Tamjid"
last_name = "Shahriar"
full_name = last_name + " " + first_name
print(full_name) # Shahriar Tamjid
print("Hello, " + first_name) # Hello, Tamjid

# print("Hello " + first_name + ", it's " + 2022)
# TypeError: can only concatenate str (not "int") to str

# Type Conversion
print(type(str(100))) # <class 'str'>
print(type(int(str(100)))) # <class 'int'>

print("Hello " + first_name + ", it's " + str(2022)) # Hello Tamjid, it's 2022

# Escape sequence
# It means whatever comes after \ is a string
weather = "It\'s \"kind of\" sunny"
print(weather) # It's "kind of" sunny

# \t --> TAB (4 spaces)
# \n --> new line
greeting = "\tHey, Mr. Shahriar\n Hope you have a nice day!"
print(greeting)
#         Hey, Mr. Shahriar
#  Hope you have a nice day!

# Formatted strings
name = "Tamjid"
age = 21
# => The ugly way...
print("Hi, "+name+". You are "+str(age)+" years old.") # Hi, Tamjid. You are 21 years old.
# => The clean way...
print(f"Hi, {name}. You are {age} years old.") # Hi, Tamjid. You are 21 years old.
# In formatted strings we need to use 'f' before the string and inside the single or double quotes we need to put the vaiables inside of curly braces {}

# In the Python v.2 we use something called .format() on the string for fromatting strings
print("Hi, {0}. You are {1} years old.".format(name, age)) # Hi, Tamjid. You are 21 years old.
# We can change the position of the variables also
print("Hi, {1}. You are {0} years old.".format(name, age)) # Hi, 21. You are Tamjid years old.

# String indexes and String slicing
my_num = "01234567"
print(my_num[3]) # 3
print(my_num[0:7]) # 0123456 --> [start:stop], we include start index and exclude stop index
print(my_num[0:8]) # 01234567
print(my_num[0:8:2]) # 0246 --> [start:stop:stepover], we stepover by num of elements specified. By default it's 1, so we don't need to give 1 because it will return the entire string
# Here as we specified 2, it means we will step over or skip 1 element and take the next one
print(my_num[0:8:3]) # 036 --> Now we skipped 2 elements and took the next one
print(my_num[1:]) # 1234567 --> This means start from index 1 and stop where it ends
print(my_num[:5]) # 01234 --> This means start from the beginnig of the string and stop at index 5 (exclude index 5)
print(my_num[::1]) # 01234567 --> This means start from start index, stop at last index and stepover 1 step. Thus it will return the entire string
print(my_num[-1]) # 7 --> This means start at the end of the string
print(my_num[-2]) # 6
print(my_num[-3]) # 5
# To reverse the string
print(my_num[::-1]) # 76543210

# Strings are immutable
# We cannot change the content of a string when it is created.
# For example: if we do this --> my_num[0] = 8 --> Then it will give us a TypeError saying 'str' object does not support item assignment
# The only way we can change the contents of a string is by completely reassigning the whole variable. Like: my_num = 8
# If we do this --> my_num = my_num + 8 --> 012345678 --> This will generate a whole new string and the previous one will be gone

# Built-in Functions
# Functions are block of codes that perform a specific task. They can be used on anything regardless of their types. Such as: len()
# Methods are also functions but they are owned by a specific type or an object. Such as: format()
# We need to use '.' operator before methods but we don't need to use anything before functions
print(len(my_num)) # 8
# len() function is very useful while looping
greet = "Hellooo"
print(len(greet)) # 7
print(greet + " {0}".format(2022)) # Hellooo 2022
# format() method only works with strings

quote = "to be or not to be"
print(quote.upper()) # TO BE OR NOT TO BE
print(quote.capitalize()) # To be or not to be
print(quote.find("be")) # 3 --> It finds the first occurance of that part of the string
print(quote.replace("be", "me")) # to me or not to me
print(quote) # to be or not to be
# This happend because strings are immutable. So when we replaced then it created a copy of that string.

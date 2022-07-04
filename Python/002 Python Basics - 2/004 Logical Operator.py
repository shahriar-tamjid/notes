# > < == != >= <= and or not

print(not(True)) # False
print(5 > 3) # True
print(8 <= 2) # False
print(0 != 0) # False
print(1 != 0) # True
print('a' > 'A') # True --> ASCII value

# Exercise
is_expert = True
is_magician = False
# "You are a master magician" --> if the user is both magician and expert
if is_expert and is_magician:
    print("You are a master magician")
# "At least you're getting there" --> if the user is expert but not magician
elif is_expert and not is_magician:
    print("At least you're getting there")
# "You need more magic" --> if the user is neither magician nor expert
else:
    print("You need more magic")

# Brainstorming
print(True == 1) # True
print('' == 1) # False
print([] == 1) # False
print(10 == 10.0) # True
print([] == []) # True
print('1' == 1) # False
print([1,2,3] == [1,2,3]) # True
# "==" checks for equality in value ... That's why we get True when any expression is equal to True

# "is" is a keyword that is "strict equality checker" .. It checks if the data is stored in the same memory location too ... That's why we have gotten False as output for every expression
print(True is 1) # False
print('' is 1) # False
print([] is 1) # False
print(10 is 10.0) # False
print([] is []) # False
print('1' is 1) # False
print([1,2,3] is [1,2,3]) # False

# So to make them true we go through them once again
print(True is True) # True
print('1' is '1') # True
print(1 is 1) # True
print([] is []) # False
print([1,2,3] is [1,2,3]) # False
# Because every time we create a new list, interpreter allocates it to a new address in the memory

# For Loops
for items in "Shahriar":
    print(items)
# Output:
# S
# h
# a
# h
# r
# i
# a
# r

for my_numbers in [1,2,3,4,5]:
    print(my_numbers)
# Output:
# 1
# 2
# 3
# 4
# 5

# Nested For Loop
for x in (1,2,3):
    for y in ['a', 'b', 'c']:
        print(x, y)
# Output:
# 1 a
# 1 b
# 1 c
# 2 a
# 2 b
# 2 c
# 3 a
# 3 b
# 3 c

# Using For loop to iterate over dictionary
user = {
    'name': "Tamjid",
    'age': 21,
    'can_swim': True
}

for i in user:
    print(i)
# Output:
# name
# age
# can_swim

for i in user.items():
    print(i)
# Output:
# ('name', 'Tamjid')
# ('age', 21)
# ('can_swim', True)

for i in user.values():
    print(i)
# Output:
# Tamjid
# 21
# True

for i in user.keys():
    print(i)
# Output:
# name
# age
# can_swim

# Destructuring values and keys using for loop
for key, value in user.items():
    print(key, value)
# Output:
# name Tamjid
# age 21
# can_swim True

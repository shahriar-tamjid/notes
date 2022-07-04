# Dictionary
# It is a data type in Python but also a data structure
# It is an unordered key-value pair
# A dictionary looks something like this...
# dictionary = {
#     'key': value,
#     'key': value,
#     'key': value
# }
dictionary = {
    'p': 7,
    'q': 13,
    'r': 11
}
print(dictionary) # {'p': 7, 'q': 13, 'r': 11}

# we can use the key to access the value
dictionary = {
    'a': "Shahriar",
    'b': "Tamjid",
    'c': 2001
}
print(dictionary['a']) # Shahriar
print(dictionary['c']) # 2001

# A dictionary can store all kinds of values
dictionary = {
    'a': [1,2,3],
    'b': "Tamjid",
    'c': True
}
print(dictionary['c']) # True
print(dictionary['a']) # [1, 2, 3]
print(dictionary['a'][1]) # 2 --> This is how we can access list items form a dictionary

# We can use the combination of list and dictionary if we need to make a complex data structure
my_list = [
    {
        'a': [100,200,300],
        'b': 100,
        'c': True
    },
    {
        'a': "Tamjid",
        'b': False,
        'c': 404
    }
]
print(my_list[0]['a'][1]) # 200
print(my_list[1]['a']) # Tamjid

# A dictionary doesn't have any order
# A list is orderd by index number

# The keys in dictionary needs to be immutable values like numbers, strings, booleans.
# Any mutable value cannot be a key in dictionary
dictionary = {
    123: [1,2,3],
    'hi': "Hello World!"
}
print(dictionary[123]) # [1, 2, 3]
print(dictionary['hi']) # Hello World!
# But if we give list as a key it will give us error saying value is unhashable
# dictionary = {
#     123: [1,2,3],
#     'hi': "Hello World!",
#     [100,200]: 33
# }
# print(dictionary[[100,200]]) # ERROR

# Again if we have duplicate keys then the interpreter will overwrite the value and the key hoding the previous value will be lost
dictionary = {
    123: [1,2,3],
    123: "Hello World!"
}
print(dictionary[123]) # Hello World!

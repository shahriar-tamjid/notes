# Applicable to list, set, dictionary

## List Comprehension

# Without using the comprehension technique
my_list = []

for char in "hello":
    my_list.append(char)

print(my_list) # ['h', 'e', 'l', 'l', 'o']

# By using the comprehension technique
my_list_2 = [char for char in "shahriar"]
print(my_list_2) # ['s', 'h', 'a', 'h', 'r', 'i', 'a', 'r']

# generating 0 to 99 numbers using comprehension
my_list_3 = [num for num in range(0, 100)]
print(my_list_3)
# Output
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]

# squaring all the numbers from 0 to 99 by using comprehension
my_list_4 = [num ** 2 for num in range(0, 100)]
print(my_list_4)
# Output
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961, 1024, 1089, 1156, 1225, 1296, 1369, 1444, 1521, 1600, 1681, 1764, 1849, 1936, 2025, 2116, 2209, 2304, 2401, 2500, 2601, 2704, 2809, 2916, 3025, 3136, 3249, 3364, 3481, 3600, 3721, 3844, 3969, 4096, 4225, 4356, 4489, 4624, 4761, 4900, 5041, 5184, 5329, 5476, 5625, 5776, 5929, 6084, 6241, 6400, 6561, 6724, 6889, 7056, 7225, 7396, 7569, 7744, 7921, 8100, 8281, 8464, 8649, 8836, 9025, 9216, 9409, 9604, 9801]

# listing all the even numbers after squaring them from 0 to 99
my_list_5 = [num ** 2 for num in range(0, 100) if num % 2 == 0]
print(my_list_5)
# Output
# [0, 4, 16, 36, 64, 100, 144, 196, 256, 324, 400, 484, 576, 676, 784, 900, 1024, 1156, 1296, 1444, 1600, 1764, 1936, 2116, 2304, 2500, 2704, 2916, 3136, 3364, 3600, 3844, 4096, 4356, 4624, 4900, 5184, 5476, 5776, 6084, 6400, 6724, 7056, 7396, 7744, 8100, 8464, 8836, 9216, 9604]

# So the format looks like this:
# list_OR_set_OR_dictionary = [expression "for" variable "in" iterable "if" condition]


## Set Comprehension
# completely similar to list comprehension

my_set = {char for char in "hello"}
print(my_set) # {'l', 'o', 'e', 'h'}

my_set_1 = {num for num in range(0, 20)}
print(my_set_1) # {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19}

my_set_2 = {num ** 2 for num in range(0, 50) if num % 2 != 0} # for odd numbers
print(my_set_2) # {1, 9, 529, 1681, 25, 289, 2209, 169, 49, 441, 1849, 961, 1089, 841, 1225, 81, 1369, 729, 225, 2401, 361, 2025, 625, 1521, 121}


# Dictionary Comprehension

simple_dictionary = {
    "a": 3,
    "b": 5,
    "c": 7,
    "d": 11
}

my_dictionary = {key: value ** 2 for key, value in simple_dictionary.items()}
print(my_dictionary)
# Output: {'a': 9, 'b': 25, 'c': 49, 'd': 121}

# We can also add conditions like before
my_dictionary_1 = {key: value ** 2 for key, value in simple_dictionary.items() if value > 5}
print(my_dictionary_1)
# Output: {'c': 49, 'd': 121}

# If there is no given dictionary to iterate over then we can construct a "key, value" from the list
my_dictionary_2 = {num: num ** 2 for num in [5,6,7]}
print(my_dictionary_2)
# Output: {5: 25, 6: 36, 7: 49}

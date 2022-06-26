# Sets are simply unordered collection of unique objects
my_set = {1,2,3,4,5}
print(my_set) # {1, 2, 3, 4, 5}
another_set = {2,5,5,5,5,5,2,2,2,4} # set with duplicates values
print(another_set) # {2, 4, 5}
# There cannot be any duplicates in the set, everything must be unique
another_set.add(100)
another_set.add(1)
another_set.add(5)
print(another_set) # {1, 2, 100, 4, 5}
# Here 100 and 1 got added but as 5 was existing before so it didn't get added

# Converting a list to a set
my_list = [100,200,300,100,200,200,100,500]
print(set(my_list)) # {200, 100, 500, 300}

# Set does not support indexing
# To check if an item is in the list we can use the 'in' keyword
print(5 in my_set) # True
# len() function can return us the length of a set
print(len(my_set)) # 5

# Converting a set to a list
print(list(my_set)) # [1, 2, 3, 4, 5]

# .copy() methods creates a copy of the set
new_set = my_set.copy()
print(new_set) # {1, 2, 3, 4, 5}
# .clear() method clears the set
new_set.clear()
print(new_set) # set()

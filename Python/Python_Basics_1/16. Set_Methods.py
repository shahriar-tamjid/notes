my_set = {1,2,3,4,5}
yout_set = {4,5,6,7,8,9,10}

# .difference()
# Finds the difference between two sets
print(my_set.difference(yout_set)) # {1, 2, 3}

# .discard()
# Removes an elements form a set if it is a member
my_set.discard(5)
print(my_set) # {1, 2, 3, 4}

# .difference_update()
# Removes all elements of another set from this set
my_set.difference_update(yout_set)
print(my_set) # {1, 2, 3}

# .intersection()
# Finds what is in common on two sets
my_set = {1,2,3,4,5}
print(my_set.intersection(yout_set)) # {4, 5}
# There is a shortcut for intersection operation
print(my_set & yout_set) # {4, 5}

# .isdisjoint()
# Asks if two sets anything in common
print(my_set.isdisjoint(yout_set)) # False

# .union()
# Combines two sets
print(my_set.union(yout_set)) # {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
# There is a shortcut for union operation
print(my_set | yout_set) # {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

# .issubset()
my_set = {1,2,3,4,5}
your_set = {1,2,3}
print(your_set.issubset(my_set)) # True

# .issuperset()
print(your_set.issuperset(my_set)) # False
print(my_set.issuperset(your_set)) # True

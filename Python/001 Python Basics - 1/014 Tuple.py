# Tuple
# Tuple are immutable list. Once we created it, then it cannot be changed, sorted or reversed
# We can initiate tuples by putting values inside of parenthesis ()
my_tuple = (1,2,3,4,5)
print(my_tuple) # (1, 2, 3, 4, 5)
print(my_tuple[1]) # 2
# We can also serach for items in tuple by using 'in' keyword
print(5 in my_tuple) # True
# As tuples are static (they don't change) so if we use tuples in our program then it performs faster than list or dictionary

# As tuples are immutable that means we can use tuples as keys in our dictionary
dictionary = {
    (1,2): [1,2,3],
    'hi': "Hello World!",
    'i': True
}
print(dictionary[(1,2)]) # [1, 2, 3]

# We can slice tuples like lists
your_tuple = my_tuple[1:3]
print(your_tuple) # (2, 3)

# We can even destructure tuple like list
x,y,z, *others = my_tuple
print(x) # 1
print(y) # 2
print(z) # 3 
print(others) # [4, 5]

a,b, *others, last = my_tuple
print(b) # 2
print(others) # [3, 4]
print(last) # 5

# .count() method counts the occurances of a particular item in the tuple
cars = ('BMW','Audi','Mercedes','BMW')
print(cars.count('BMW')) # 2
# .index() method finds the index of a particular value
print(cars.index('Audi')) # 1
# len() function returns the length of a tuple
print(len(cars)) # 4

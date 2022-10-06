# In map() function we have 2 parameters:
# 1. The function which will perform the task
# 2. The data for the function to perform action on

def multiply_by_2(item):
    return item * 2

print(list(map(multiply_by_2, [1,2,3]))) # [2, 4, 6]

# Here the map function will take care of the data type for us
# We don't need to separately define the data type inside the function
# map() will read the data type for us and return the valu as an object
# We can convert that object according to our need. Like here we have converted to "list"

my_list = [5,6,7]
print(list(map(multiply_by_2, my_list))) # [10, 12, 14]
print(my_list) # [5, 6, 7]

# A pure function is a function that doesn't affect the outside world of a function
# So map() is a pure function

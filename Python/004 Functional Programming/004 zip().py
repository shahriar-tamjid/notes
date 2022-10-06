# zip() function acts like a zipper
# It combines multiple items in a single set or tuple and packages the sets into an object

my_list = [1,2,3]
your_list = [10,20,30]

print(list(zip(my_list, your_list))) # [(1, 10), (2, 20), (3, 30)]

print(list(zip(your_list, my_list))) # [(10, 1), (20, 2), (30, 3)]

# If we want to zip more items...
their_list = [100,200,300]
print(list(zip(my_list, your_list, their_list))) # [(1, 10, 100), (2, 20, 200), (3, 30, 300)]

# Square the list using lambda
my_list = [5,4,3]

print(list(map(lambda item: item ** 2, my_list))) # [25, 16, 9]


# Sort the list using lambda
a = [(0,2), (4,3), (10,-1), (9,9)]
a.sort()
print(a) # [(0, 2), (4, 3), (9, 9), (10, -1)]
# If we use the built in function then the list gets sorted according to the first item

# But if we want to sort according to the 2nd item
a.sort(key=lambda x: x[1])
print(a) # [(10, -1), (0, 2), (4, 3), (9, 9)]

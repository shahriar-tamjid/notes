# Check for duplicates in list

some_list = ['a','b','c','b','d','m','n','n']

duplicates = []
for value in some_list:
    if some_list.count(value) > 1:  # count() method is used to count the occurance of an item in a list
        if value not in duplicates:
            duplicates.append(value)
print(duplicates)

# Output
# ['b', 'n']

some_list = ["a","b","c","b","d","m","n","n"]

duplicates = []

for char in some_list:
    if some_list.count(char) > 1:
        if char not in duplicates:
            duplicates.append(char)

print(duplicates) # ['b', 'n']

# Same solution using comprehension...

duplicates_1 = list(set([x for x in some_list if some_list.count(x) > 1]))
print(duplicates_1) # ['n', 'b']

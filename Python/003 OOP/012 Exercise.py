class SuperList(list): # We are making list as the parent of this SuperList class
    def __len__(self):
        return 1000

super_list_1 = SuperList()
print(len(super_list_1)) # 1000

# Accessing list method into our SuperList object
super_list_1.append(55)
print(super_list_1[0]) # 55

# Checking is SuperLIst is the child of list class
print(issubclass(SuperList, list)) # True

print(issubclass(list, object)) # True
# Because everything in Python is an object

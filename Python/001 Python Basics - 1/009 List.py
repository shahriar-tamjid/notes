# List slicing
amazon_cart = [
    "notebooks",
    "sunglasses",
    "toys",
    "grapes"]
print(amazon_cart) # ['notebooks', 'sunglasses', 'toys', 'grapes']

# [start:end:stepover]
print(amazon_cart[::2]) # ['notebooks', 'toys']

# Unlike strings, lists are mutable
amazon_cart[0] = "laptop"
print(amazon_cart) # ['laptop', 'sunglasses', 'toys', 'grapes']
amazon_cart[2] = "smartphone"
print(amazon_cart) # ['laptop', 'sunglasses', 'smartphone', 'grapes']

# Everytime we slice list we do not change the list. Rather we create a new copy of the list.
print(amazon_cart[1:3]) # ['sunglasses', 'smartphone']

# If we put that list on a separate variable then it will be more clear to us...
new_cart = amazon_cart[0:2]
print(new_cart) # ['laptop', 'sunglasses']
print(amazon_cart) # ['laptop', 'sunglasses', 'smartphone', 'grapes']
# Now if we change the content of the new_cart and trace back to the amazon_cart we will find it to be as it is
new_cart[0] = "bag"
print(new_cart) # ['bag', 'sunglasses']
print(amazon_cart[0:2]) # ['laptop', 'sunglasses']

# Copying vs Modifying
# If we just set my_cart = amazon_cart then our code will copy the referance of amazon_cart to new_cart
# and because of that if we change anything in the my_cart the contents of amazon_cart will also get changed
my_cart = amazon_cart
my_cart[0] = "watch"
print(my_cart) # ['watch', 'sunglasses', 'smartphone', 'grapes']
print(amazon_cart) # ['watch', 'sunglasses', 'smartphone', 'grapes']
# So if we want to copy one list to another variable the we need to add [:] at the end of the first list
your_cart = amazon_cart[:]
your_cart[0] = "perfume"
print(your_cart) # ['perfume', 'sunglasses', 'smartphone', 'grapes']
print(amazon_cart) # ['watch', 'sunglasses', 'smartphone', 'grapes']
# Now the list is being copied

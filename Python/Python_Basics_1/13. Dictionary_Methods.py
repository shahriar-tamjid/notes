# Dictionary Methods
# .get() method is used to check if a property exists in the dictionary or an object
user = {
    'first_name': "Tamjid",
    'last_name': "Shahriar",
    'occupation': "Software Engineer"
}
print(user.get('age')) # None
print(user.get('first_name')) # Tamjid
# If a certain property is not available in dictionary then we can pass a default which will get used then
print(user.get('age', 21)) # 21
# But if the property exists then the default value won't get passed
user = {
    'first_name': "Tamjid",
    'last_name': "Shahriar",
    'occupation': "Software Engineer",
    'age': 20
}
print(user.get('age', 21)) # 20

# There is another way to create a dictionary, which is by using dict() function.
# Inside dict() function we can pass properties as: key = 'value' in this format
user2 = dict(name = 'Hena', gender = 'Female', age = 41)
print(user2) # {'name': 'Hena', 'gender': 'Female', 'age': 41}

# In dictionary we can check for something by using the 'in' keyword
print('first_name' in user) # True
print('height' in user) # False
# If we want to check the keys only then we have the keys() method
print('last_name' in user.keys()) # True
# If we want to check the values then we have the values() method
print('Shahriar' in user.values()) # True

# To grab all the items from the dictionary we can use the .items() method
print(user.items()) # dict_items([('first_name', 'Tamjid'), ('last_name', 'Shahriar'), ('occupation', 'Software Engineer'), ('age', 20)])
# Here every item is displayed as a tuple

# .clear() method is used to empty the dictionary
user2.clear()
print(user2) # {}

# .copy() method is used to copy the whole dictionary
user2 = user.copy()
print(user) # {'first_name': 'Tamjid', 'last_name': 'Shahriar', 'occupation': 'Software Engineer', 'age': 20}
print(user2) # {'first_name': 'Tamjid', 'last_name': 'Shahriar', 'occupation': 'Software Engineer', 'age': 20}
user2.clear()
print(user2) # {}
print(user) # {'first_name': 'Tamjid', 'last_name': 'Shahriar', 'occupation': 'Software Engineer', 'age': 20}

# .pop() method is used to pop out an item from the dictionary
print(user.pop('occupation')) # Software Engineer
print(user) # {'first_name': 'Tamjid', 'last_name': 'Shahriar', 'age': 20}

# .update() method is used to update the any value inside the dictionary
user.update({'age': 22})
print(user['age']) # 22
# But if the property we want to update doesn't exist then the method will still update but now it will create that property
user.update({'ages': 37})
print(user) # {'first_name': 'Tamjid', 'last_name': 'Shahriar', 'age': 22, 'ages': 37}

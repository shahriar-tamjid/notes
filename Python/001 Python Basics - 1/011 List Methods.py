# Adding

basket = [1,2,3,4,5]
basket.append(100)
print(basket) # [1, 2, 3, 4, 5, 100]
print(basket.append(300)) # None --> Because .append() doesn't return any value. It just performs action.
new_basket = basket.append(500)
print(new_basket) # None --> Because .append() doesn't return any value. It just performs action.
# That is because .append() method modifies the list in place, it doesn't creates a copy of the list.
# So, in order to get the appended item into a new list we need to perform the append operation first and then we need to assign them
basket.append(700)
another_basket = basket
print(another_basket) # [1, 2, 3, 4, 5, 100, 300, 500, 700]

# with .insert() method we can add items anywhere in the list we want
even_numbers = [2,4,10,12]
even_numbers.insert(2, 6)
print(even_numbers) # [2, 4, 6, 10, 12]
even_numbers.insert(0, 0)
print(even_numbers) # [0, 2, 4, 6, 10, 12]
new_even_numbers = even_numbers.insert(4, 8)
print(new_even_numbers) # None --> Because .insert() also doesn't return any value. It just performs action.

# with .extend() method we can add multiple lists or extend a list into another.
odd_numbers = [1,3,5,7,9]
new_odd_numbers = odd_numbers.extend([11,13,15,17])
print(odd_numbers) # [1, 3, 5, 7, 9, 11, 13, 15, 17]
print(new_odd_numbers) # None

# Removing

# .pop() method removes the very last item on the list
prime_numbers = [2,3,5,7,11]
prime_numbers.pop()
print(prime_numbers) # [2, 3, 5, 7]
# we can also remove an item from a specific location
# To remove an item from a specific index we can use .pop() method and pass the index number
new_prime_numbers = prime_numbers.pop(0)
print(prime_numbers) # [3, 5, 7]
print(new_prime_numbers) # 2 --> Because, .pop() returns the item which it removes
# To remove an item by their value we can use the .remove() method and pass the value
new_prime_numbers_2 = prime_numbers.remove(5)
print(prime_numbers) # [3, 7]
print(new_prime_numbers_2) # None --> Because, .remove() removes the item on the place and doesn't return anything
# .clear() removes everything in the list
clear_prime_numbers = prime_numbers.clear()
print(prime_numbers) # []
print(clear_prime_numbers) # None --> .clear() removes the item on the place and doesn't return anything

chars = ['a', 'b', 'c', 'd', 'e']
print(chars.index('d')) # 3

# We can look for items in the list by using a keyword called 'in'
print('d' in chars) # True
print('x' in chars) # False
# we can also use it to search anything in the string
print('i' in 'Tamjid') # True
# .count() method counts how many time does an item occur in the list or in a string
print(chars.count('e')) # 1
my_name = 'Shahriar Tamjid'
print(my_name.count('a')) # 3

# .sort() method is used to sort the list. But it doesn't return any value rather performs task
chars2 = ['x', 'k', 'd', 'a', 'z', 't', 'f']
chars2.sort()
print(chars2) # ['a', 'd', 'f', 'k', 't', 'x', 'z']
# sorted() is a built-in function which perform the same sorting but unlike this it returns the value
print(sorted(chars2)) # ['a', 'd', 'f', 'k', 't', 'x', 'z']
# If we need to modify the list first and to do an operation then we should use the .sort() method
# Again if we just need to show the sorted result directly then we need to use the sorted() function

# .reverse() methods switches the index numbers. Like the last index will be the first one and the first index will be the last one.
sample_list = ["BMW", "Mercedes", "Ford", "Toyota", "Tesla", "Audi"]
sample_list.reverse()
print(sample_list) # ['Audi', 'Tesla', 'Toyota', 'Ford', 'Mercedes', 'BMW']
# To get the reversed sorted list we need to first sort the list and then reverse it
big_numbers = [200,400,700,100,500]
big_numbers.sort()
big_numbers.reverse()
print(big_numbers) # [700, 500, 400, 200, 100]
# We can reverse a list by using the list-slicing. It that way it will also create a copy of the list
# But .reverse() method will modify it
chars3 = ['y','x','z','b','a','c']
chars3.sort()
print(chars3[::-1]) # ['z', 'y', 'x', 'c', 'b', 'a']
print(chars3.reverse()) # None --> Because, .reverse() method returns nothing, just performs action
print(chars3) # ['z', 'y', 'x', 'c', 'b', 'a'] --> Reversly sorted by list-slicing
chars3.reverse()
print(chars3) # ['a', 'b', 'c', 'x', 'y', 'z'] --> Reversly sorted the previous list with .reverse()

# If we want to generate list quickly the we can use the range() function inside a list() function
# In range() function we need to pass the start and stop point
print(list(range(1,10))) # [1, 2, 3, 4, 5, 6, 7, 8, 9]
# If we pass a single digit then we will get a result from 0 and stop before the end point
print(list(range(20))) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

# .join() method is often used to join something to a string or a list with the iterables its got
sentence = '!'
new_sentence = sentence.join(['hi','my','name','is','Tamjid'])
print(new_sentence) # hi!my!name!is!Tamjid
# We can even use string or no string directly with .join() method
sentence_2 = ''.join(['i','am','from','Dhaka','Bangladesh'])
print(sentence_2) # iamfromDhakaBangladesh
sentence_3 = ' '.join(['i','want','to','be','a','software','engineer'])
print(sentence_3) # i want to be a software engineer

# List unpacking
a,b,c = [1,2,3]
print(a) # 1
print(b) # 2
print(c) # 3
# We can do the same with variables too
a,b,c = 10,20,30
print(a) # 10
print(b) # 20
print(c) # 30
# But this is where list unpacking comes in. We can spearate the individual items and keep the rest of the items in another list
x,y,z, *others = [1,2,3,4,5,6,7,8,9]
print(x) # 1
print(y) # 2
print(z) # 3
print(others) # [4, 5, 6, 7, 8, 9]
# We can segment the list from where ever we want
first, second, third, *middle, last = [10,20,30,40,50,60,70]
print(first) # 10
print(second) # 20
print(third) # 30
print(middle) # [40, 50, 60]
print(last) # 70

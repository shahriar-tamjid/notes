# enumerate() is a function that takes any object and gives index number to each of its items

# If we take a string the it will give index number to each of the characeters
for i, char in enumerate('Hello!'):
    print(i, char)
# Output:
# 0 H
# 1 e
# 2 l
# 3 l
# 4 o
# 5 !

for i, item in enumerate(['Dhaka', 'Mumbai', 'Karachi']):
    print(i, item)
# Output:
# 0 Dhaka
# 1 Mumbai
# 2 Karachi

for a, b in enumerate((178, 912, 560)):
    print(a, b)
# Output:
# 0 178
# 1 912
# 2 560

# Find the index of 50 from a given list of numbers from 0 to 100
for i, num in enumerate(list(range(100))):
    if num == 50:
        print('Index of 50 is '+str(i))
        #Output: Index of 50 is 50


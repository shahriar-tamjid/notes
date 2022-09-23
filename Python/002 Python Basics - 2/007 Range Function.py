# The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and stops before a specified number.

print(range(100)) # range(0, 100)

# range() is heavily used in loops
for number in range(0, 10):
    print(number)
# Output:
# 0
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9

for number in range(0, 5):
    print('Hello World!')
# Output:
# Hello World!
# Hello World!
# Hello World!
# Hello World!
# Hello World!

# If we don't care about the variable, we just need to loop through thr range. Then we can replace the variable with underscore "_"
# This means we are not using this variable inside the loop

for _ in range(0, 5):
    print(_)
# Output:
# 0
# 1
# 2
# 3
# 4

# There is a 3rd parameter in the range() which is called step-over
for _ in range(0, 10, 2):
    print(_)
# Output:
# 0
# 2
# 4
# 6
# 8

# Traversing in reverse order: we need to put higher limit first and step-over by -1
for _ in range(10, 0, -1):
    print(_)
# Output:
# 10
# 9
# 8
# 7
# 6
# 5
# 4
# 3
# 2
# 1

# Reverse and step-over by 2
for _ in range(10, 0, -2):
    print(_)
# Output:
# 10
# 8
# 6
# 4
# 2

# Range with list
for _ in range(3):
    print(list(range(10)))
# Output:
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


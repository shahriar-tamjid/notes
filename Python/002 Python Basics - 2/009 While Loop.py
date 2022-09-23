i = 0
while i < 10:
    print(i)
    i += 1
else:
    print('Done with all the work.')

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
# Done with all the work.

# The else condition will only execute when the while condition will turn into false
# If we break the loop when the condition is still true the else block will not be executed
while i < 50:
    print(i)
    break
else:
    print('Done with all the work.')
# Output:
# 10 ---> Because we already incremented this i to 10 in the previous loop

while True:
    response = input('Say something: ')
    if response == 'bye':
        break
# Output:
# Say something: hi
# Say something: hi
# Say something: hi
# Say something: bye

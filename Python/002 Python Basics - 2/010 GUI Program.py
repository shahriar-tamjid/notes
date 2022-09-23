picture = [
    [0,0,0,1,0,0,0],
    [0,0,1,1,1,0,0],
    [0,1,1,1,1,1,0],
    [1,1,1,1,1,1,1],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0]
]

for row in picture:
    for pixel in row:
        if (pixel == 1):
            print('*', end='')
        else:
            print(' ', end='')
    print('') # need a new line after every row

# Output:
#    *   
#   ***
#  *****
# *******
#    *
#    *

### Example of Clean Code
fill = '$'
empty = ' '

for row in picture:
    for pixel in row:
        if (pixel): # Because 1 is a truthy value
            print(fill, end='')
        else:
            print(empty, end='')
    print('') # need a new line after every row

# Output:
#    $
#   $$$
#  $$$$$
# $$$$$$$
#    $
#    $

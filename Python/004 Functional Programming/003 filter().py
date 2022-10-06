# map() returns the same amonut of data that it receives
# But filter() checks the condition and returns the valid data only
# Here we need to put the condition in the return statement

def only_odd(item):
    return item % 2 != 0 # returning the condition

my_list = [1,2,4,7,8,9,22,27,31,68]
print(list(filter(only_odd, my_list))) # [1, 7, 9, 27, 31]


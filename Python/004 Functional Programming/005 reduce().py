# reduce() is an advanced concept
# Here we take 3 things: function, data, iterable

from functools import reduce
# To use reduce() we need to import reduce from functools

def accumulator(acc, item):
    print(acc, item)
    return acc + item

my_list = [1,2,3]

print(reduce(accumulator, my_list, 10))

## Output
# 10 1 -> The initial iterable was 10 -> After 1st iteration -> acc + item -> 10 + 1 -> 11
# 11 2 -> After 2nd iteration -> acc + item -> 11 + 2 = 13
# 13 3 -> After 3rd iteration -> acc + item -> 13 + 3 = 16
# 16 <- This is the final result

# Here we don't need to convert it to any list. reduce automatiocally provides the single result only (i.e: 16)

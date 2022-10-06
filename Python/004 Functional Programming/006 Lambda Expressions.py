# Lambda Functions
# We use them only once
# They are annonymous functions
# Becasue we use them only once so we don't need any name for them

# Structure of a lambda function
# lambda param: action_statement_of_function
# We don't have to write the function name

# Let's say have to use the multiply_by_2() function for once
# So we can convert it to a lambda expression in the followinf way

# Original multiply_by_2() function

# def multiply_by_2(item):
#     return item * 2

# After converting it to a lambda expression
print(list(map(lambda item: item * 2, [1,2,3]))) # [2, 4, 6] <- accurate output

# Using lambda in filtering task

# Original filter function

# def only_odd(item):
#     return item % 2 != 0 # returning the condition

print(list(filter(lambda item: item % 2 != 0, [2,3,6,8,9,17,11,10,18,22,23]))) # [3, 9, 17, 11, 23] <- accurate output

# Using lambda in reduce()

# Original reduce function

from functools import reduce
# # To use reduce() we need to import reduce from functools

# def accumulator(acc, item):
#     print(acc, item)
#     return acc + item

print(reduce(lambda acc, item: acc + item, [1,2,3])) # 6 <- accurate output

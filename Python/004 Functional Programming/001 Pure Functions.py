# Pure functions are such type of functions that follows one simple principle. That is:
# Given the same input one function will always produce the same output

def multiply_by_2(li):
    new_list = []
    for item in li:
        new_list.append(item * 2)
    return new_list

print(multiply_by_2([1,2,3])) # [2, 4, 6]'

# A pure function also cannot have any side effects like returning print() function or defining any variable that is used inside the function (i.e: if new_list[] were defined outside the function)

# In pure function we always keep data and functions separate from each other


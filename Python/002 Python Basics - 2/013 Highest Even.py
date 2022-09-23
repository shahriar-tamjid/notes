# Find the highest even from a given list of numbers
def highest_even(li):
    evens = []
    # Keep the even numbers only
    for item in li:
        if item % 2 == 0:
            evens.append(item)
    # return the max from the evens list
    return max(evens)

print(highest_even([10,1,2,3,4,8,9,11]))  # 10

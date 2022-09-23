# Scoping Levels
# 1. Local Scope 
# 2. Parent Scope 
# 3. Global Scope 
# 4. Built-in Functions 

# Accessing global variables inside a function
total = 0
def count():
    global total
    total += 1
    return total

count()
count()
print(count())  # 3

# But accessing global vaiables by using global keyword can be confusing
# So a better way of doing this is "dependency injection"
total_better = 0
def count_better(total_better):
    total_better += 1
    return total_better

print(count_better(count_better(count_better(total_better))))  # 3

# nonlocal keyword
# The nonlocal keyword is used to refer the parent scope
# It means I want to use a variable that is not a global vaiable but it is also outside my scope
def outer():
    x = 'local'
    def inner():
        nonlocal x
        x = 'nonlocal'
        print('inner', x)
    
    inner()
    print('outer', x)

outer()

# Output
# inner nonlocal
# outer nonlocal

# Calculate the time that a function takes to execute
from time import time 
# This is to calculate the time

def performance(func):
    def wrapper(*args, **kwargs):
        t1 = time()
        result = func(*args, **kwargs)
        t2 = time()
        print(f'took {t2 - t1} s')
        return result
    return wrapper

@performance
def long_time():
    for i in range(100000000):
        i * 5

long_time()
# Output: took 4.614502429962158 s

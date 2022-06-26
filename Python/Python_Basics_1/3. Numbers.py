# int and float

print(9.9+1.1) # 11.0

print(type(6)) # <class 'int'>
print(type(4-2)) # <class 'int'>
print(type(3.14159)) # <class 'float'>
print(type(7/2)) # <class 'float'>

# int is efficient on memory. It takes less space on the memory
# float takes more space on the memory than int

print(2 ** 3) # 8 --> 2^3
print(7 / 2) # 3.5 --> Normal division
print(7 // 2) # 3 --> Normal division without floating number
print(99 / 2) # 49.5 --> Normal division
print(99 // 2) # 49 --> Normal division without floating number
print(7 % 2) # 1 --> Modulo operation

# Math function

# => round() is used to round up any fractional number
print(round(3.2)) # 3
print(round(3.9)) # 4
# => abs() is used to return absolute value of a number
print(abs(-20)) # 20
# => bin() is used to return the binary representation of any number
print(bin(5)) # 0b101
# We can also convert that binary to an integer using the int("number", base)
print(int("0b101", 2)) # 5

# Operator precedence
# ()
# **
# * /
# + -

print((20 - 3) + 2 ** 2) # 21 ... because 17+4 = 21


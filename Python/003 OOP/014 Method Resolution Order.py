# MRO -- Method Resolution Order

# When we have a complicated reations between objects then Python follows MRO rules to operate

class A:
    num = 10

class B(A):
    pass

class C(A):
    num = 1

class D(B, C):
    pass


'''
        A
      /   \
     /     \
    B       C
     \     /
      \   /
        D
'''
'''
D inherits from B and C
B and C inherits from A
According to MRO: Inheritance order for D will be: D -> B -> C -> A
'''

print(D.num) # 1 -> Inherited from C

# We can check the MRO for any object by using the "mro()" method
print(D.mro())
# Output: [<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>]

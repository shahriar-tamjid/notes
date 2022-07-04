# Conditionals are if-else statements which gives us logical output
# In Python the indentation is the scope of a statement or code block
# If we go outside the indentation then the intrepreter will thing that code doesn't belong to the block

is_old = True
is_licenced = False

if is_old and is_licenced:
    print('You can drive now!')
elif is_old:
    print('You are old enough to drive :) But your license is required!')
else:
    print('You are not old enough to drive :(')

print('Hello World!')

# All values are considered Truthy except 0, None, empty string, empty set, empty object etc are Falsy

username = 'Johnny'
password = '123'

if username and password: # This outputs a Truthy value
    print('You are good to go.')
else:
    print('Please, enter both username and password.')

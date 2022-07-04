# If we do 'a' * 5 then we will get 'aaaaa'. It means our characters will get multiplied.

name = input("What is your name? ==> ") # Tamjid
password = input("Enter your password: ") # secret

print(f"{name}, your password is {'*' * len(password)} and it's {len(password)} characeters long.")
# Output: Tamjid, your password is ****** and it's 6 characeters long.

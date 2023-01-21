# Error Handling

# Suppose a user is entering an invalid age

while True:
    try:
        # Validate and check for error
        age = int(input("What is your age? "))
        print(age)
    except:
        # Catch the error and display appropriate message
        print("Please enter your age in number format")
    else:
        # Break the loop
        print("Thank you!")
        break

# We can wrap the entire code file with this try-except-else block

# We can specify specific errors and appropriate responses in the "except" section

while True:
    try:
        # Validate and check for error
        age = int(input("What is your age? "))
        print(age)
        # Age divided by 10
        10/age
    except ValueError:
        # Catch the value error
        print("Please enter your age in number format")
    except ZeroDivisionError:
        # Catch Zero divisor error
        print("Your age cannot be less than or equal to 0")
    else:
        print("Thank you!")
        break

# Getting the error message from the interpreter

def div(num1, num2):
    try:
        return num1/num2
    except (TypeError, ZeroDivisionError) as err:
        print(f"The Python interpreter says: {err}")

div(9, '3')


# Enhancing the error handling process

while True:
    try:
        # Validate and check for error
        age = int(input("What is your age? "))
        print(age)
        # Age divided by 10
        10/age
    except ValueError:
        # Catch the value error
        print("Please enter your age in number format")
        continue # This will return to the start of the try block
    except ZeroDivisionError:
        # Catch Zero divisor error
        print("Your age cannot be less than or equal to 0")
    else:
        print("Thank you!")
        break
    finally:
        # This is like the very last part of the block which will run after the excecution of everything
        print("OK, Finally I'm done now!")


# Sometimes we want to stop when a particular error occurs and let user know that something is wrong
# Then we use the "raise" to announce our error message

while True:
    try:
        # Validate and check for error
        age = int(input("What is your age? "))
        print(age)
        # Age divided by 10
        10/age
        raise ValueError("Value Error Occured!!")
    except ZeroDivisionError:
        # Catch Zero divisor error
        print("Your age cannot be less than or equal to 0")
    else:
        print("Thank you!")
        break
    finally:
        # This is like the very last part of the block which will run after the excecution of everything
        print("OK, Finally I'm done now!")

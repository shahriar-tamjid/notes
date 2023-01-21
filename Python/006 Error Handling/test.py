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

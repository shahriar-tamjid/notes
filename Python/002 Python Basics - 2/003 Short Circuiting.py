# A short circuit happens when one of any two or multiple conditions are true
# Like the following...
if True or False:
    print("It's a short circuit")

is_user_on_fb = True
is_friend = False
if is_friend or is_user_on_fb:
    print('This person is your friend on Facebook.')

# The walrus operator creates an assignment expression. The operator allows us to assign a value to a variable inside a Python expression. It is a convenient operator which makes our code more compact.

# We ask the user to write words, which are appended to a list.

words = []

while (word := input('Enter word: ')) != 'quit':
    words.append(word)

print(words)

# Output:
# Enter word: Rome
# Enter word: Paris
# Enter word: Amsterdam
# Enter word: quit
# ['Rome', 'Paris', 'Amsterdam']

# we use the walrus operator to test the length of a word. If a word has less than three characters, a warning is issued. We determine and assign the length of a word in one shot.

words = ['tree', 'water', 'u', 'river', 'to', 'hi']

for word in words:
    if ((a := len(word)) < 3):
        print(f'Warning! The word has {a} characters.')

# Output
# Warning! The word has 1 characters.
# Warning! The word has 2 characters.
# Warning! The word has 2 characters.

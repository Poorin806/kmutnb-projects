# index
text = "Python" # String is array of chars

print(text[0])

print(len(text))

for i in range(len(text)):
  print(i, text[i], " ", "is uppercase" if text[i].isupper() else "is lowercase")

print()
import json
 
# Opening JSON file
with open('words_dictionary.json') as json_file:
    data = json.load(json_file)

letters = ['a', 'g', 'c', 'o', 'i', 'l']
required_letter = 'b'

"""
 num letters  word count
 4 - 17
 5 - 6
 6 - 5
 7 - 1
 8 - 4
 10 - 1
"""

# minimum of 4 letters
valid_words = dict(filter(lambda item:  len(item[0]) > 3, data.items()))

print("all words length: {}".format(len(data)))
print("all words > 3 letters: {}".format(len(valid_words)))

print("finding words that contain only these letters: {}".format(letters))
print("with this required letter: {}".format(required_letter))

allowed_letters = {"a", "g", "c", "o", "i", "l", "b"}

letter_words = dict(filter(lambda item: set(item[0]) <= allowed_letters, valid_words.items()))
print("words with allowed letters: {}".format(len(letter_words)))

req_letter_words = dict(filter(lambda item:  required_letter in item[0], letter_words.items()))
print("words with required letter: {}".format(len(req_letter_words)))

words = req_letter_words.keys()
sorted_words = sorted(words, key=len)

len_words_cnt = {}
for i in range(4, 15):
   len_words_cnt[i] = 0

for item in sorted_words:
   len_words_cnt[len(item)] += 1

print(len_words_cnt)   

print(sorted_words)

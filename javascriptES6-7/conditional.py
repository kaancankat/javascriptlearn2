age= input("yaş girin: ")
if(int(age) >= 18):
    print("you are allowed")
else:
    print("sorry you are not allowed")


exam_score = input('Enter your exam score: ')
if(int(exam_score) > 90):
  print('You have got grade A+')
elif(int(exam_score) > 80):
  print('You have got grade A')
else:
  print('You have got grade B')

knows_javascript = True
knows_python = True

if(knows_javascript or knows_python): # doesn't depend on value of knows_python
  print('Javscript or python developer')
else:
  print('Some other developer')


print(10 > 100) # False
print(10 < 100) # True
print(10 == 10) # True
print(10 != 50) # True
print(2 > 1 and 2 > 0) # True
print(not(True)) # False
print(not False) # Tru
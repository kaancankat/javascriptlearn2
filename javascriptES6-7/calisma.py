scores = [44,48,55,89,34]
scores.pop()
print(scores)

#dictionaries

KaanKimlikBilgileri = {"Kaanin_yasi": 15,"Kaanin_Boyu": 153}

print(KaanKimlikBilgileri["Kaanin_yasi"])


user = {'name': 'Raghav', 'age': 20, 'country': 'India'}
print('name' in user.keys()) # True
print('gender' in user.keys()) # False #var mı yok mu
print('Raghav' in user.values()) # True

#List = [] ve Tuple = () Farkı

#List indexi degistiirlebilir, Tuple sıralanamaz(büyükten kücüge, degistirilemez)

KaanList = [1,2,3,"e"]

KaanTuple = (1,2,3,"e")

KaanList[0] = 2

KaanSet = {1,2,2,4,3}

print(KaanList)
print(KaanTuple)
print(KaanSet)

emails = {"kaan@asdasd", "aleyna@akjdlkasd", "kaan@asdasd"}

print(emails)

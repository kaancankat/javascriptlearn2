i=0
import random
x=random.randint(1,50)
print(x)
while(i<5):
    a=int(input("tahmininizi giriniz: "))
    i+=1
    if a==x and i==1:
        print("doğru tahmin 100 aldınız")
        break
    elif a==x and i==2:
        print("doğru tahmin 80 aldınız")
        break
    elif a==x and i==3:
        print("doğru tahmin 70 aldınız")
        break
    elif a==x and i==4:
        print("doğru tahmin 100 aldınız")
        break
    else:
        print("lütfen tekrar deneyiniz")
        
        
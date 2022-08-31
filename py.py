
# ask the user to input a number
#Please enter any number to convert it into words
# For example 203029890
dic_=[{
    "0":"",
    "1":"one",
    "2":"two",
    "3":"three",
    "4":"four",
    "5":"five",
    "6":"six",
    "7":"seven",
    "8":"eight",
    "9":"nine"
}
,
{   "10":"ten",
    "11":"eleven",
    "12":"twelve",
    "13":"thirtheen",
    "14":"fourtheen",
    "15":"fiftheen",
    "16":"sixtheen",
    "17":"seventheen",
    "18":"eightheen",
    "19":"ninethen"
},
{ "0":"903",
    "2":"twenty",
    "3":"thirty",
    "4":"forty",
    "5":"fifty",
    "6":"sixty",
    "7":"seventy",
    "8":"eighty",
    "9":"ninety"
},
 ["","Thousand","Million","Billion","Trillion","Zillion","Quadrillion","Quintillion","Sextillion","Septilion","Octillion","Nonillion","Decillion"]
]

def check_(val_):
    _valLen=len(val_)
    if _valLen==1:
        return dic_[0].get(val_)
    if _valLen==2:
        if int(val_) >19:
            _=""
            _+=dic_[2].get(val_[:1],val_)
            if val_[1:]!="0":
                _+="-"
            _+=dic_[0].get(val_[1:],val_)
            return _
        else:
           return dic_[1].get(val_,"ey") if val_[0]!="0" else dic_[0].get(val_[1:],"solve")


def check(val_):
    _valLen=len(val_)
    if _valLen<=2:
      return check_(val_)
    else:
      return (dic_[0].get(val_[:1],val_[:1])+ " Hundred and "+ check_(val_[1:])) if val_[:1] !="0" else check_(val_[1:])


def convert_number(number=""):
    number=str(number)
    if number=="":
        print("please input a value")
        return ""
    if any([i for i in number if i.isalpha()]):
         print("no character in string")
         return ""
    if number=="0":
        print("Zero")
        return 0
    if all([i=="0" for i in number if i]):
        print("dont enter trilling zeroes")
        return 0
    for i in range(len(number)):
        if number[i] !="0":
            number=number[i:]
            break

    number=number[::-1]
    slicenumber=[]
    _len=int(len(number)/3)
    _rm=int(len(number)%3)
    i=0
    y=0
    for num in range(_len):
        i=i+3 
        slicenumber.append(number[y:i])
        y=i
    if _rm>0:
        slicenumber.append(number[i:])
    value="-".join(slicenumber)[::-1].split("-")
    _len=len(value)
    for val in value:
       _len=_len-1
       print(check(val),end=" ")
       if val!="000" and val[1:]!="00":
          print(dic_[3][(_len)],end=" ")
    print("\n",",".join(slicenumber)[::-1])
user_input=input("please enter the number in digits : ")
convert_number(user_input)
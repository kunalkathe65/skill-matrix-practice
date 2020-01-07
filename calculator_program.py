import math as m

# FUNCTION DEFINITIONS
# hello world

def add(num1,num2):
    return num1 + num2

def substract(num1,num2):
    return num1 - num2

def multiply(num1,num2):
    return num1 * num2

def divide( num1,num2):
    return num1 / num2

def modulo(num1,num2):
    return num1 % num2                   

print("Please choose from below options:")
print("1. ARITHMETIC CALCULATIONS")
print("2. TRIGONOMETRIC CALCULATIONS")
print("3. LOGARITHEMIC CALCULATIONS")

choice = input("Enter choice 1/2/3 ==>  ")

if choice == '1':
    
    print("----ARITHMETIC CALCULATIONS----")
    print("1. ADDITION")
    print("2. SUBSTRACTION")
    print("3. MULTIPLICATION")
    print("4. DIVISION")
    print("5. MODULO")

    num1 = float(input("Enter first number ==>"))
    num2 = float(input("Enter second number ==>"))

    choice = input("Enter choice 1/2/3/4/5 ==>")

    if choice == '1':
        print("Addition :", add(num1,num2))
    elif choice == '2':
        print("Substraction :",substract(num1,num2))
    elif choice == '3':
        print("Multiplication :",multiply(num1,num2))
    elif choice == '4':
        if num2 == 0:
            print("Denominator can't be zero!!")
        else:
            print("Division :",divide(num1,num2))
    elif choice == '5':
        print("Modulo :",modulo(num1,num2))
    else:
        print("INVALID CHOICE!!")        

elif choice == '2': 
    
    print("----TRIGONOMETRIC CALCULATIONS----")
    measure = float(input("Enter the measure ==>  "))
    radian = m.radians(measure)

    print("Please choose from below trigonometric operations:")
    print("1. COSINE")
    print("2. SINE")
    print("3. TANGENT")
    print("4. SECANT")
    print("5. COSECANT")
    print("6. COTANGENT")
    
    choice = input("Enter choice 1/2/3/4/5/6 ==>  ")   

    if choice == '1':
        print("Cosine of" ,measure, "is ==> ",m.cos(radian))
    elif choice == '2':
        print("Sine of",measure, "is ==> ",m.sin(radian))
    elif choice == '3':
        print("Tangent of",measure, "is ==> ",m.tan(radian))
    elif choice == '4':
        print("Secant of",measure, "is ==> ",1/(m.cos(radian)))
    elif choice == '5':
        print("Cosecant of",measure, "is ==> ",1/(m.sin(radian)))
    elif choice == '6':
        print("Cotangent of",measure, "is ==> ",1/(m.tan(radian)))
    else:
        print("INVALID CHOICE!!")

elif choice == '3' :

    print("----LOGARITHEMIC CALCULATIONS----")
    print("1. Natural Log")
    print("2. Log with base (2)")
    print("3. Log with base (10)")
    print("4. Log with desired base")

    choice = input("Enter the choice 1/2/3/4 ==> ")
    number = float(input("Enter the number ==> "))

    if choice == '1':
        print("The natural log is :",m.log(number))
    elif choice == '2':
        print("The log with base 2 is :",m.log2(number))
    elif choice == '3':
        print("The log with base 10 is :",m.log10(number))
    elif choice== '4':
        base = int(input("Enter the base value ==>"))
        print("The log with base",base,"is :",m.log(number,base))
    else:
        print("INVALID CHOICE!!")

else :
    print("INVALID CHOICE!!")        


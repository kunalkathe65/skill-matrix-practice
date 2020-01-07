package oopsconcepts;
import java.util.Scanner;
class MethodOverloadingExample{

    public int addition(int num1,int num2){   // METHOD-1
        return (num1+num2);
    }

    public double addition(double num1,double num2, double num3){  //addition() METHOD OVERLOADED
        return (num1+num2+num3);
    }
}

class TestMethodOverloading{
    public static void main(String[] args){
        
        Scanner input = new Scanner(System.in);
        MethodOverloadingExample moe = new MethodOverloadingExample();
        System.out.println("Enter two integer numbers:");
        int num1 = input.nextInt();
        int num2 = input.nextInt();
        System.out.println("Addition of two integer numbers:"+moe.addition(num1,num2)); // METHOD-1 IS BEING CALLED WHICH IS THE EXACT MATCH SIGNATURE

        System.out.println("Enter three decimal numbers:");
        double num3 = input.nextDouble();
        double num4 = input.nextDouble();
        double num5 = input.nextDouble();
        System.out.println("Addition of three decimal numbers:"+moe.addition(num3,num4,num5)); // METHOD-2 IS BEING CALLED WHICH IS OVERLOADED METHOD        
    }
}
class Vehicle{

    public void countNoOfWheels(){             //OVERRIDDED METHOD
        System.out.println("A Vehicle can have two,three,four or six wheels...");
    }
}

class Bus extends Vehicle{

    public void countNoOfWheels(){             //OVERRIDING METHOD
        System.out.println("A Bus have six wheels...");
    }
}

class Autorickshaw extends Vehicle{

    public void countNoOfWheels(){              //OVERRIDING METHOD
        System.out.println("A Autorickshaw have three wheels...");
    }
}

class TestMethodOverriding{
    public static void main(String[] args){

        Vehicle v = new Vehicle();
        v.countNoOfWheels();   //PARENT CLASS METHOD CALLED
        Bus b = new Bus();
        b.countNoOfWheels();   //CHILD CLASS METHOD CALLED
        Autorickshaw ar = new Autorickshaw();
        ar.countNoOfWheels();  //CHILD CLASS METHOD CALLED

        Vehicle v1 = new Bus() ;  //PARENT CLASS OBJECT HOLDING REFERENCE OF CHILD CLASS
        v1.countNoOfWheels();
        Vehicle v2 = new Autorickshaw() ;  //PARENT CLASS OBJECT HOLDING REFERENCE OF CHILD CLASS
        v2.countNoOfWheels();
    }
}
class Aeroplanes{

    public void speedOfPlanes(){         //OVERRIDDED METHOD
        System.out.println("Air travel is the fastest...");
    }
}

class CommercialPlanes extends Aeroplanes{

    public void typesOfplanes(){
        System.out.println("Boeing and Airbus are two manufacturing giants of commercial aircrafts...");
    }
}

class Boeing extends CommercialPlanes{

    public void speedOfPlanes(){           //OVERRIDING METHOD
        System.out.println("Boeing planes are faster than Airbus...");
    }
}

class TestMultilevelInheritance{

    public static void main(String[] args){

        Aeroplanes a = new Aeroplanes();
        a.speedOfPlanes();

        CommercialPlanes cp = new CommercialPlanes();
        cp.speedOfPlanes();
        cp.typesOfplanes();

        Boeing b = new Boeing();
        b.typesOfplanes();
        b.speedOfPlanes();    //METHOD IN Boeing class is called because runtime object is of type Boeing

        Aeroplanes a1 = new Boeing();
        a1.speedOfPlanes();   //METHOD IN Boeing class is called because runtime object is of type Boeing
    }
}
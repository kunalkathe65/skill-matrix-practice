class AreaOfRectangle{

    double length = 0.0;
    double breadth =0.0;

    public AreaOfRectangle(double l, double b){
        this.length = l;
        this.breadth = b;
    }

    public void calculateArea(){       
        System.out.println("Area of rectangle: "+ length * breadth);
    }
}

class RectangleParameters extends AreaOfRectangle{                 //SIMPLE INHERITANCE

    public RectangleParameters(){
        super(10.5,20.5);                                          //CALLING SUPER CLASS CONSTRUCTOR
    }

    public void calculatePerimeter(){                                                  
        System.out.println("Perimeter of rectngle: "+ 2 * (length + breadth));
    }
}

class TestSimpleInheritance{

    public static void main(String[] args){

        RectangleParameters rp = new RectangleParameters();
        rp.calculateArea();
        rp.calculatePerimeter();
    }
}
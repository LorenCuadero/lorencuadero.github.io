import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;

public class CustomArray{
    public int[] data;
    public static int defaultSize = 10;
    public int size = 0;
    public String position;
    public String destination;
    public String name;
    public int age;
    int n= 3;
	public int length;
public CustomArray(){
    System.out.println("=================================================================");
    System.out.println("                 Amazing Race Online Registration");
    System.out.println("=================================================================");

}
    
CustomArray( String name, int age, String position) {
        data = new int[defaultSize];
       
        this.name = name;
        this.age = age;
        this.position = position;
 

}

    public String toString() {
        return " Name: "+ name + " Age: " + age +  " Registered as : "  + position + "  " ;
    }
    public void add(int destination2) {
        if (isFull()) {
            resize();
        }
        data[size++] = destination2;
    }public void addValues(String name, int age, String position){
        ArrayList<CustomArray>  list = new ArrayList<CustomArray>();
 
        for (int i = 0; i < n; i++) {
            // create an object and send values to the
            // constructor to be saved in the Data class
            list.add(new CustomArray(name, age, position));
        }
 
        // after adding values printing the values to test
        // the custom arraylist
    }
    public void printValues(ArrayList list)
    {
 
        // list- the custom arraylist is sent from
        // previous function
 
        for (int i = 0; i < n; i++) {
 
            // Data received from arraylist is of Data type
            // which is custom (int, String, int,)
            // based on class Data
            CustomArray data = (CustomArray) list.get(i);
 
            // Print and display custom ArrayList elements
            // that holds for student attribute
 
            // Data variable of type Data has four primitive
            // datatypes roll -int name- String marks- int
            // phone- long
            System.out.println(data.name + " " + data.age
                               + " " + data.position);
        }
    }


    public void resize() {
        int[] temp = new int[data.length * 2];
        for (int i = 0; i < data.length; i++) {
            temp[i] = data[i];
        }
        data = temp;
    }

    public boolean isFull() {
        return size == data.length;
    }

    public int remove() {
        int removed = data[--size];
        return removed;
    }

    public int get(int index) {
        return data[index];
    }

    public int size() {
        return size;
    }

    public void set(int index, int value) {
        data[index] = value;
    }

    
    public String getPosition(){
        return position;

    }
    public void setPosition(String position){
        this.position = position;
    }
    
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }
    public int getAge(){
        return age;
    }
    public void setAge(int age){
        this.age = age;
    }

    public void remove(int removes) {
    }
    public String showAll() {
        return name + " " + age + " " + position; 
        
    }
}
import java.lang.reflect.Array;

public class JavaAppClass{
    private String name;
    private int age;
    private double height;
    public char data;
    public static int defaultSize = 10;
    public int size = 0;
    public JavaAppClass(String name, int age, double height){
        this.name = name;
        this.age = age;
        this.height = height;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public double getHeight() {
        return height;
    }
    public void setHeight(double height) {
        this.height = height; 
    }
    public void add(int choice1) {
        this.age += choice1;
    }
    public void sub(int choice1) {
        this.age -= choice1;
    }
  
    
}
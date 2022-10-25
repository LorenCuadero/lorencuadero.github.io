import java.util.Scanner;

public class NumException extends Exception{
          public NumException(String message){
                    super(message);
          }
          public void errorExc(){
            System.out.println("========================================================");
            System.out.println("Error Message: Invalid Input, please input integer value. \nNote: String inputs might ruin the running process");
            System.out.println("========================================================");
          } 
          public void ageExc(){
            System.out.println("========================================================================");
            System.out.println("Error Message: Invalid Input, please edit or update this data later on");
            System.out.println("========================================================================");
          } 
          public void errorNum(int a){
                    System.out.println("Error Message: Not a number!");
          }
          public static int errorNumber(String messageni){
            Scanner sc = new Scanner(System.in);

            System.out.println(messageni);
            while(!sc.hasNextInt()){
                sc.next();
                System.out.println("Incorrect input!");
            }
           return sc.nextInt();

          }
        public  static boolean isNumber(String s){
            for (int i = 0; i < s.length(); i++) 
                if (!Character.isDigit(s.charAt(i))) {
                    return false;
                }
                return true;
                
            
          }
}

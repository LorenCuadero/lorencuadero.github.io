public class NameException extends Exception {
          public NameException(String message){
                    super(message);
          }
          public void errorName(){
                    System.out.println("Error Message: Invalid Name Characters!");
          }
}

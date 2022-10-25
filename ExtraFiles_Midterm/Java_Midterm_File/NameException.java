public class NameException extends Exception {
          public NameException(String message){
                    super(message);
          }
          public void errorName(){
            System.out.println("=======================================================================");
            System.out.println("Message: This data will be invalid, your input must be from the choices");
            System.out.println("=======================================================================");
          }
          public void errorNamenako(){
            System.out.println("==============================================================================================");
            System.out.println("Message: This data might be invalid, please edit or update this data later on for validation");
            System.out.println("==============================================================================================");
        
          }
}

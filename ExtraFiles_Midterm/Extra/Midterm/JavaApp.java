import java.util.*;

public class JavaApp {

  public static void main(String[] args) {
    List<JavaAppClass> appClass = new ArrayList<JavaAppClass>();
    List<String> lists = new ArrayList<String>();
    List<String> lists2 = new ArrayList<String>();
    Scanner scan = new Scanner(System.in);

    boolean mainLoop = true;

    int choice;
    String name;
    int age;
    double height;
    while (true) {
      System.out.println("Menu: \n");

      lists.add("1.) Record Data \n");
      lists.add("2.) Logout \n");

      for (int x = 0; x < 2; x++) {
        System.out.println(lists.get(x));
      }
      System.out.print("\nEnter Choice [Ex. 1] :  ");

      choice = scan.nextInt();
      switch (choice) {
        case 1:
          boolean secondLoop = true;

          while (true) {
            System.out.println("Data Processes Menu: \n");
            lists2.add("1.) Add\n");
            lists2.add("2.) Remove\n");
            lists2.add("3.) Display\n");
            lists2.add("4.) Clear\n");
            lists2.add("5.) Exit\n");

            for (int i = 0; i < lists2.size(); i++) {
              System.out.println(lists2.get(i));
            }
            System.out.print("\nEnter Your Menu Choice: ");

            int choice1 = scan.nextInt();
            switch (choice1) {
              case 1:
                System.out.println("Adding Data to Record: ");
                System.out.println("Name: ");
                name = scan.next();
                try {
                  var length = name.length();
                  int count = 0;
                  for (int i = 0; i < length; i++) {
                    if (
                      !Character.isDigit(name.charAt(i)) &&
                      !Character.isLetter(name.charAt(i)) &&
                      !Character.isWhitespace(name.charAt(i))
                    ) {
                      count++;
                      throw new NameException(
                        "              -->   Invalid Name!  <--"
                      );
                    }
                  }
                } catch (NameException e) {
                  e.errorName();
                }
                System.out.println("Age: ");
                age = scan.nextInt();
                System.out.println("Height: ");
                height = scan.nextDouble();
                appClass.add(new JavaAppClass(name, age, height));
                break;
              case 2:
                System.out.println("Removing Data from Record: ");
                for (int i = 0; i < appClass.size(); i++) {
                  System.out.println(
                    "Enter index number of the Data to be romoved: "
                  + appClass.get(i) );
                  int index = scan.nextInt();
                  appClass.remove(index);
                }

                break;
              case 3:
                System.out.println("Displaying Record Data: ");
                for (int i = 0; i < appClass.size(); i++) {
                  System.out.println(
                    appClass.add(new JavaAppClass("Lorenfe", 21, 4.82))
                  );
                  System.out.println(
                    appClass.add(new JavaAppClass("Bebie", 21, 5.00))
                  );
                  System.out.println(
                    appClass.add(new JavaAppClass("Gio", 24, 6.82))
                  );
                }

                break;
              case 4:
                for (int i = 0; i < appClass.size(); i++) {
                  System.out.println("Data Records: " + appClass.get(i));
                }
                System.out.println(
                  "Are you sure you want to clear all the data?"
                );
                char choiceChar = scan.next().charAt(0);
                if (choiceChar == 'y' || choiceChar == 'Y') {
                  for (int i = 0; i < appClass.size(); i++) {
                    System.out.println("Data Records: " + appClass.remove(i));
                  }
                } else {
                  System.exit(0);
                  break;
                }
              default:
                System.out.println(
                  "This is not a valid Menu Option! Please Select Another"
                );
            }break;
          }
        case 2:
          System.out.println(" Exiting Program...");
          System.exit(0);
          break;
        default:
          try {
            throw new IllegalStateException("Invalid Menu Option!");
          } catch (Exception e) {
            // TODO: handle exception
          }
      }
    }
  }
}

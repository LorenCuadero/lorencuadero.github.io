
    import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Scanner;

public class app { 

    public static void main(String[] args) {

        boolean mainLoop = true;

        int choice;

        int num;
        Scanner scan = new Scanner(System.in);
        int choices;
       List<JavaAppClass> numArray = new ArrayList<JavaAppClass>();
       List<String> listni = new ArrayList<String>();
        
        while (mainLoop) {
            numArray.add(new JavaAppClass("Loreign", 21, 4.82));
            numArray.add(new JavaAppClass("Bebie", 21, 5.2));
            System.out.println("Choices:");
            listni.add("1. Record ")
            System.out.println("Enter your choice:");
            choices = scan.nextInt();
            switch (choices) {
                case 1:
                    
                default: break;
            }
        }
        


        // numArray.add(15);
        // numArray.add(22);
        // numArray.add(30);
        // numArray.add(40);
        // numArray.add(10);
        
        // while (true) {
        //     System.out.println("Calculator Main Menu\n");
        //     System.out.print("1.) Add\n");
        //     System.out.print("2.) Remove\n");
        //     System.out.print("3.) Display\n");
        //     System.out.print("4.) Clear\n");
        //     System.out.print("5.) Exit\n");
        //     System.out.print("\nEnter Your Menu Choice: ");

        //     choice = scan.nextInt();
        //     switch (choice) {

        //         case 1:
        //             // add to the list
        //             // displayed added numbers on the list
        //             // Allow Return/exit
        //             // can't add negative naumber

        //             do {
        //                 System.out.print("Enter integer you want to add:");

        //                 num = scan.nextInt();

        //                 if (num > 0) {
        //                     System.out.println(num + " is added and displayed on the List");
        //                     for (int i = 0; i < 1; i++) {
        //                         numArray.add(num);
        //                         for (Integer numbers : numArray) {
        //                             System.out.println("Number = " + numbers);
        //                         }
        //                     }
        //                 }

        //                 else if (num < 0) {

        //                     System.out.println("negative number is not allowed!");
        //                 }

        //                 System.out.println("Do You Want To Continue( Y/ N(Return exit) )");
        //                 choices = scan.next().charAt(0);
        //             } while (choices == 'Y' || choices == 'y');

        //             break;

        //         case 2:
        //             System.out.println("Number Lists");
        //             System.out.println("=================");
        //             for (int i = 0; i < 1; i++) {

        //                 for (Integer number : numArray) {
        //                     System.out.println("Number = " + number);
        //                 }
        //             }

        //             do {
        //                 System.out.print("Enter Index number you want to remove: ");
        //                 int i = scan.nextInt();

        //                 if (i >= 0 && i < numArray.size()) {
        //                     System.out.print(" Index Number " + i + " Successfully REMOVED!\n");
        //                     numArray.remove(i);
        //                     System.out.println(numArray);
        //                 } else {
        //                     System.out.print("Invalid Index! Try to check the maximum number of Index. \n");
        //                 }

        //                 System.out.println("Do You Want To Continue(Y/N)");
        //                 choice = scan.next().charAt(0);
        //             } while (choice == 'Y' || choice == 'y');

        //             break;

        //         case 3:

        //             do {
        //                 // Display number list
        //                 for (int i = 0; i < 5; i++) {
        //                     System.out.println(numArray.get(i));
        //                 }

        //                 System.out.println("Do You Want To Continue( Y/ N(Return exit) )");
        //                 choices = scan.next().charAt(0);
        //             } while (choices == 'Y' || choices == 'y');

        //             break;

        //         case 4:
        //             System.out.println("Number Lists");
        //             System.out.println("=================");
        //             for (int i = 0; i < 1; i++) {

        //                 for (Integer number : numArray) {
        //                     System.out.println("Number = " + number);
        //                 }
        //             }

        //             do {
        //                 System.out.print(" Type 1 to Clear number  List?: ");
        //                 int i = scan.nextInt();
        //                 int a = 1;

        //                 if (i == a) {
        //                     System.out.print(" Successfully REMOVED/ clear all in the list!\n");
        //                     numArray.clear();
        //                     System.out.println("Empty list");
        //                 } else {
        //                     System.out.print("Unable to clear the list!\n");

        //                 }
        //                 System.out.println("Type to exit..: )");
        //                 choices = scan.next().charAt(0);
        //             } while (choice == 'Y' || choice == 'y');
        //             break;

        //         case 5:
        //             System.out.println("Exiting Program...");
        //             System.exit(0);
        //             break;
        //         default:
        //             System.out.println("This is not a valid Menu Option! Please Select Another");
        //             break;

        //     }

        // }

    }

}



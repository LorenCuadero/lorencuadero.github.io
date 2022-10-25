import java.util.ArrayList;
import java.util.Scanner;

public class Main_ArrayList {

    public static void main(String[] args) {

        boolean mainLoop = true;

        int choice;

        int num;
        String order;
        int quantity;
        int price;

        Scanner scan = new Scanner(System.in);
        char choices;
        ArrayList<String> numArray = new ArrayList<String>();
        ArrayList<String> numArray1 = new ArrayList<String>();
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        ArrayList<OrderingList> ords = new ArrayList<OrderingList>();
        OrderingList orderList = new OrderingList();

        // numArray.add(15);
        // numArray.add(22);
        // numArray.add(30);
        // numArray.add(40);
        // numArray.add(10);

        while (true) {
            System.out.println("Main Menu\n");
            numArray.add("1.) Order\n");
            numArray.add("2.) View Products\n");
            numArray.add("3.) Exit\n");
            for (int x = 0; x < 3; x++) {

                System.out.println(numArray.get(x));
            }

            System.out.println("\nEnter Your Menu Choice: ");

            choice = scan.nextInt();
            switch (choice) {

                case 1:

                    while (true) {
                        System.out.print("Aavailable Products: \n");
                        numArray1.add("1. Coffee \n");
                        numArray1.add("2. Cookies \n");
                        numArray1.add("3. Milk \n");
                        numArray1.add("4. Cakes \n");
                        numArray1.add("5. View Order \n");
                        numArray1.add("61. Exit \n");
                        for (int i = 0; i < numArray1.size(); i++) {
                            System.out.println(numArray1.get(i));
                        }
                        System.out.println("\nEnter choice: ");
                        num = scan.nextInt();

                        switch (num) {

                            case 1:
                                orderList.setOrder(numArray1.get(0));
                                System.out.print("Your Order: " + orderList.getOrder());
                                System.out.print("Quantity: ");
                                quantity = scan.nextInt();
                                numbers.add(50);
                                orderList.setPrice();
                                int price1 = 50;
                                System.out.print("Price: " + price1);
                                System.out.print("Total Bill: " + price1 * quantity);
                                break;

                            case 2:
                                orderList.setOrder(numArray1.get(1));
                                System.out.print("Your Order: " + orderList.getOrder());
                                System.out.print("Quantity: ");
                                quantity = scan.nextInt();
                                numbers.add(40);
                                orderList.setPrice();
                                int price11 = 40;
                                System.out.print("Price: " + price11);
                                System.out.print("Total Bill: " + price11 * quantity);
                                break;
                            case 3:
                                orderList.setOrder(numArray1.get(2));
                                System.out.print("Your Order: " + orderList.getOrder());
                                System.out.print("Quantity: ");
                                quantity = scan.nextInt();
                                numbers.add(50);
                                orderList.setPrice();
                                int price111 = 50;
                                System.out.print("Price: " + price111);
                                System.out.print("Total Bill: " + price111 * quantity);
                                break;
                            case 4:
                                orderList.setOrder(numArray1.get(3));
                                System.out.print("Your Order: " + orderList.getOrder());
                                System.out.print("Quantity: ");
                                quantity = scan.nextInt();
                                numbers.add(100);
                                orderList.setPrice();
                                int price1111 = 100;
                                System.out.print("Price: " + price1111);
                                System.out.print("Total Bill: " + price1111 * quantity);
                                break;
                            case 5:
                                if (orderList.getOrder() == null) {
                                    System.out.println(" --> There is no Order yet <--");
                                } else if (orderList.getOrder() == orderList.getOrder()) {
                                    System.out.println("Your Order: " + orderList.getOrder());
                                }
                                break;

                            default:
                        }
                    }

                case 2:
                default:
                    // System.out.println("This is not a valid Menu Option! Please Select Another");
                    // break;

            }

        }

    }

}

import java.util.*;

public class Main {

  String name;
  int age;
  String position;

  public static void main(String[] args) throws NumException {

    int length;
    int count = 0;
    CustomArray list1 = new CustomArray();
    ArrayList list = new ArrayList();
    ArrayList list2 = new ArrayList();
    ArrayList list3 = new ArrayList();
    Scanner sc = new Scanner(System.in);
    ArrayList<CustomArray> listing = new ArrayList<CustomArray>();

    boolean mainLoop = true;

    while (mainLoop) {
      // list1.add(45);
      // list1.add(1);
      // list1.add(2);
      System.out.println("Menu: \n");

      list.add("1. Register \n");
      list.add("2. Visit \n");
      list.add("3. Exit \n");
      for (int i = 0; i < 3; i++) {
        System.out.println(list.get(i));
      }

      System.out.println("Enter Choice [Ex. 1, 2, 3 ] :\n");
      int choice = sc.nextInt();

      // Pattern pattern = Pattern.compile("[^abc]");
      // Matcher matcher = pattern.matcher(choice);
      // boolean matchFound = matcher.find();
      // if(matcher.find()) {
      // try {
      // throw new NumException("Error");

      // } catch (NumException e) {
      // e.errorExc();
      // }

      // }

      switch (choice) {
        case 1:
          do {
            // list2.add("Lorenfe Cuadero");
            // list2.add("October 19, 2022");
            // list2.add("Been busy working on my midterm exam.");
            try {
              System.out.println("Registration Portal: \n");

              System.out.println("Please enter your name:\n");
              sc.nextLine();
              String answer = sc.nextLine();

              try {
                length = answer.length();
                for (int i = 0; i < length; i++) {
                  if (!Character.isDigit(answer.charAt(i)) &&
                      !Character.isLetter(answer.charAt(i)) &&
                      !Character.isWhitespace(answer.charAt(i))) {
                    count++;
                    throw new NameException(
                        "              -->   Error Input!  <--");
                  }
                }
              } catch (NameException e) {
                e.errorNamenako();
              }

              try {
                while (true) {
                  System.out.println("Please enter age:\n");
                  int ages = sc.nextInt();
                  if (ages < 1) {
                    try {
                      throw new NumException("Error");
                    } catch (NumException e) {
                      e.ageExc();
                    }
                  }
                  System.out.println("Joining as [Spectator, Contestant, Facilitator]:");
                  sc.nextLine();
                  String positioning = sc.nextLine();
                  try {
                    length = positioning.length();
                    for (int i = 0; i < length; i++) {
                      if (!Character.isDigit(positioning.charAt(i)) &&
                          !Character.isLetter(positioning.charAt(i)) &&
                          !Character.isWhitespace(positioning.charAt(i))) {
                        count++;
                        throw new NameException(
                            "              -->   Error Input!  <--");
                      }
                    }

                  } catch (NameException e) {
                    e.errorNamenako();
                  }

                  list1.setName(answer);
                  list1.setAge(ages);
                  list1.setPosition(positioning);
                  list1.addValues(answer, ages, positioning);

                  listing.add(new CustomArray(answer, ages, positioning));
                  Boolean thirdLoop = true;
                  while (thirdLoop) {
                    System.out.println("\nMenu:\n");
                    list3.add("1. Add a person to register?\n");
                    list3.add("2. Remove unnecessary data registered?\n");
                    list3.add("3. Update data registered?\n");
                    list3.add("4. Display of registered data? \n");
                    list3.add("5. Clear \n");
                    list3.add("6. Exit \n");

                    for (int i = 0; i < 6; i++) {
                      System.out.println(list3.get(i));
                    }
                    System.out.println("Enter Choice [1 , 2, 3, 4, 5, 6]:");
                    int key = sc.nextInt();
                    if (key < 1 || key > 6) {
                      try {
                        throw new NumException("Error");
                      } catch (NumException ne) {
                        ne.errorExc();
                      }
                    }
                    switch (key) {
                      case 1:
                        try {
                          System.out.println("Registration Portal: \n");

                          System.out.println("Please enter your full name:\n");
                          sc.nextLine();
                          String answer1 = sc.nextLine();

                          try {
                            length = answer1.length();
                            for (int i = 0; i < length; i++) {
                              if (!Character.isDigit(answer1.charAt(i)) &&
                                  !Character.isLetter(answer1.charAt(i)) &&
                                  !Character.isWhitespace(answer1.charAt(i))) {
                                count++;
                                throw new NameException(
                                    "              -->   Error Input!  <--");
                              }
                            }
                          } catch (NameException e) {
                            e.errorNamenako();
                          }

                          System.out
                              .println("Please enter age [Note:Inputing string might ruin the running process]:\n");
                          int ages1 = sc.nextInt();
                          if (ages1 < 1) {
                            try {
                              throw new NumException("Error");
                            } catch (NumException e) {
                              e.ageExc();
                            }
                          }
                          System.out.println("Joining as [Spectator, Contestant, Facilitator]: \n");
                          sc.nextLine();
                          String positioning1 = sc.nextLine();
                          try {
                            length = positioning1.length();
                            for (int i = 0; i < length; i++) {
                              if (!Character.isDigit(positioning1.charAt(i)) &&
                                  !Character.isLetter(positioning1.charAt(i)) &&
                                  !Character.isWhitespace(positioning1.charAt(i))) {
                                count++;
                                throw new NameException(
                                    "              -->   Error Input!  <--");
                              }
                            }

                          } catch (NameException e) {
                            e.errorNamenako();
                          }

                          list1.setName(answer1);
                          list1.setAge(ages1);
                          list1.setPosition(positioning1);
                          list1.addValues(answer1, ages1, positioning1);

                          listing.add(new CustomArray(answer1, ages1, positioning1));
                        } catch (Exception e) {
                          // TODO: handle exception
                        }

                        break;
                      case 2:
                        System.out.println("Remove Data here: \n");
                        System.out.println("Registrant: \n");
                        for (int index = 0; index < listing.size(); index++) {
                          System.out.println("Index No." + index + listing.get(index));
                        }
                        System.out.println("Enter index number of the data to be removed: \n");
                        int removes = sc.nextInt();
                        listing.remove(removes);
                        System.out.println("Succesfully removed the data!");

                        break;
                      case 3:
                        System.out.println("Update Data: \n");

                        for (int index = 0; index < listing.size(); index++) {
                          System.out.println("Index No." + index + listing.get(index));
                        }
                        System.out.println("Enter index number of the data to be updated: \n");
                        int updates = sc.nextInt();

                        System.out.println("Full name:\n");
                        sc.nextLine();
                        String answer12 = sc.nextLine();

                        try {
                          length = answer12.length();
                          for (int i = 0; i < length; i++) {
                            if (!Character.isDigit(answer12.charAt(i)) &&
                                !Character.isLetter(answer12.charAt(i)) &&
                                !Character.isWhitespace(answer12.charAt(i))) {
                              count++;
                              throw new NameException(
                                  "              -->   Error Input!  <--");
                            }
                          }
                        } catch (NameException e) {
                          e.errorNamenako();
                        }

                        System.out.println("age:\n");
                        int ages12 = sc.nextInt();
                        if (ages12 < 1) {
                          try {
                            throw new NumException("Error");
                          } catch (NumException e) {
                            e.ageExc();
                          }
                        }
                        System.out.println("Joining as [Spectator, Contestant, Facilitator]: \n");
                        sc.nextLine();
                        String positioning12 = sc.nextLine();
                        try {
                          length = positioning12.length();
                          for (int i = 0; i < length; i++) {
                            if (!Character.isDigit(positioning12.charAt(i)) &&
                                !Character.isLetter(positioning12.charAt(i)) &&
                                !Character.isWhitespace(positioning12.charAt(i))) {
                              count++;
                              throw new NameException(
                                  "              -->   Error Input!  <--");
                            }
                          }

                        } catch (NameException e) {
                          e.errorNamenako();
                        }

                        list1.setName(answer12);
                        list1.setAge(ages12);
                        list1.setPosition(positioning12);
                        list1.addValues(answer12, ages12, positioning12);

                        System.out.println(listing.set(updates, new CustomArray(answer12, ages12, positioning12)));

                        System.out.println("================================================================");
                        System.out.println("              ---->  Updated Successfully   <----");
                        System.out.println("================================================================");

                        break;

                      case 4:
                        System.out.println("Preview of Registrants: \n");
                        System.out.println("Registrants: \n" + listing);

                        break;
                      case 5:
                        System.out.println("Are you sure to clear all? [Type 0 = No and 1 = Yes] \n");
                        int obj = sc.nextInt();
                        if (obj == 1) {
                          System.out.println("Deleting all data...");
                          listing.removeAll(listing);
                          System.out.println("================================================================");
                          System.out.println("             ---->  Cleared All Successfully   <----");
                          System.out.println("================================================================");

                        } else {
                          System.out.println("Clearing undone...");
                          System.out.println("================================================================");
                        }
                        break;

                      case 6:
                        System.out.println("================================================================");
                        System.out.println("                ---->  Exiting Program  <----");
                        System.out.println("================================================================");

                        System.exit(0);
                        break;
                      default:

                    }
                  }

                }
              } catch (Exception e) {
              }
            } catch (Exception e) {
              // TODO: handle exception
            }
            break;
          } while (true);
          break;
        case 2:
          do {
            list1.setName("Gio Martin ");
            list1.setAge(23);
            list1.setPosition(" Spectator ");
            try {
              System.out.println("Amazing Race Online Registrants\n");
              System.out.println("Please enter your name:\n");
              sc.nextLine();
              String answer = sc.nextLine();

              try {
                length = answer.length();
                for (int i = 0; i < length; i++) {
                  if (!Character.isDigit(answer.charAt(i)) &&
                      !Character.isLetter(answer.charAt(i)) &&
                      !Character.isWhitespace(answer.charAt(i))) {
                    count++;
                    throw new NameException(
                        "              -->   Error Input!  <--");
                  }
                }
              } catch (NameException e) {
                e.errorNamenako();
              }
              list2.add(answer);
              System.out.println("Welcome " + answer + " !" + "\n");
              System.out.println(
                  "The Amazing Race is an American adventure reality game show in which 11 or 12 teams of two race around the world (except the Family edition which featured 10 teams of four and was contested entirely within North and Central America). The race is split into legs, with each leg requiring teams to deduce clues, navigate themselves in foreign areas, interact with locals, perform physical and mental challenges, and travel by airplane, boat, taxi, and other public transportation options on a limited budget provided by the show. Teams are progressively eliminated at the end of most legs, while the first team to arrive at the end of the final leg wins the grand prize of US$1 million. ");
              System.out.println("Preview of Registrants: \n");
              System.out.println("Registrants: \n" + listing);
            } catch (Exception e) {
            }
            break;
          } while (true);
        case 3:
          System.out.println("================================================================");
          System.out.println("                ---->  Exiting Program  <----");
          System.out.println("================================================================");
          break;
        default:
          if (choice < 1 || choice > 3) {
            try {
              throw new NumException("  --> Invalid Input <--");
            } catch (NumException e) {
              e.errorExc();
            }
          } else {
            try {
              throw new NumException("  --> Invalid Input <--");
            } catch (NumException e) {
              e.errorExc();
            }
          }
        
          
          
      }

    }
  }
}

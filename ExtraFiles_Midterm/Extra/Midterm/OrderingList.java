import java.text.*;

public class OrderingList {
    public String order;
    public int quantity;
   public int price;

    public OrderingList() {
        System.out.println("\n              Welcome to LC's Snack Bar Ordering Application");
        System.out.println("____________________________________________________________________________\n");
 this.order = "";
 this.quantity = 0;
 this.price = 0;

    }

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }

    public int getquantity() {
        return quantity;
    }

    public void setquantity(int quantity) {
        this.quantity = quantity;
    }

    public int getPrice() {
        return price;
    }
    public void setPrice(){
        this.price = price;
    
}
}
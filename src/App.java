package src;
import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner greeting = new Scanner(System.in);
        System.out.print("Vad heter du?: ");

        String name = greeting.nextLine();
        System.out.println("Hej " + name + "!🫡");
        greeting.close();
    }
    
}

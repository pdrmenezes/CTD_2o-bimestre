package Aula02;

import java.util.Scanner;

public class AtvProf {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String firstName = sc.nextLine();
        String lastName = sc.nextLine();

        String day = sc.nextLine();
        String month = sc.nextLine();
        String year = sc.nextLine();

        char initialFN = firstName.charAt(0);
        char initialLN = lastName.charAt(0);

        System.out.println("First Name: " + firstName + "\nLast Name: " + lastName + "\nInitials: " + initialFN + "." + initialLN + "." + "\ndate of birth (dd/mm/yyyy): " + day + "/" + month + "/" + year);



    }
}

package Aula03;

import java.util.Scanner;

public class FeedDog {

    public static void amountPacks(float food){
        Scanner sc = new Scanner(System.in);
        float kg = 0.0f;
        int packs = 0;

        while(kg < food){
            System.out.println("Enter the packs' weight: ");
            String scAux = sc.nextLine();
            float aux = Float.parseFloat(scAux);

            kg = kg + aux;
            packs++;
        }
        System.out.println("You'll need " + packs + " pack(s)");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("What's your buddy called?: ");

        String name = sc.nextLine();
        System.out.println("How much does your dog eat/day?: ");
        String foodString = sc.nextLine();
        float food = Float.parseFloat(foodString);

        amountPacks(food);
    }
}
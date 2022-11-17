package Aula15_Mesa;

public class Main {
    public static void main(String[] args) {
        Capitao capitao = new Capitao("Jack Sparrow", "Silva", "200202000200");

        Iate iate1 = new Iate(200000.50, 500.50, 2021, 50.50, capitao, 6);

    Iate iate2 = new Iate(1000, 0, 1830, 15, capitao, 2);

    Iate iate3 = new Iate(100000.47, 232.13, 2022, 40, capitao, 4);

    Veleiro veleiro1 = new Veleiro(25000, 150, 2022, 10, capitao, 6);

    Veleiro veleiro2 = new Veleiro(4000, 0, 2015, 8, capitao, 2);

    System.out.println("O veleiro é grande: " + veleiro1.eGrande());
        System.out.println("O veleiro é grande: " + veleiro2.eGrande());

    System.out.println();

    }

}

package Aula05_ClasseDeDiagrama;

public class Main {
    public static void main(String[] args) {
        Cliente c = new Cliente(123, "Diego");
        System.out.println(c.getNome());
        c.auemntarDivida(100);
        c.pagarDivida(10);
        System.out.println(c.getDivida());
    }
}

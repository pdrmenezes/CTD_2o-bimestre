package Aula12_Mesa;

public class Main {
    public static void main(String[] args) {
        Administrativo administrativo = new Administrativo("Roberto", 2500, "001", "noite");
        Tecnico tecnico = new Tecnico("Bob", 3000, "002", 250);

        administrativo.exibirDados();
        System.out.println("-----------------------");
        tecnico.exibirDados();
    }
}

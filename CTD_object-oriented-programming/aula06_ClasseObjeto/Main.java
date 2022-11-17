package aula06_ClasseObjeto;

import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        Impressora impressora = new Impressora("Epson", "Wifi", LocalDate.of(2021,5,12));
        System.out.println(impressora.getDataFabricacao());
        impressora.imprimir("Olá mundo!");
        impressora.setFolhasDisponiveis(100);
        impressora.imprimir("Olá mundo!");
        System.out.println(impressora.getFolhasDisponiveis());
    }
}

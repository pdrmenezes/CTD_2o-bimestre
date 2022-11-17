package Aula11_Mesa;

public class Preguica extends Animal {
    public Preguica(String nome, int idade) {
        super(nome, idade);
        this.especie = "preguiça";
    }

    @Override
    public String emiteSom() {
        return "ZzzZzzZZ";
    }

    @Override
    public String talento() {
        return "sobe, preguicinha, sobe!";
    }
}

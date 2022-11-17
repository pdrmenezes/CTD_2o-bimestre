package Aula11_Mesa;

public class Cavalo extends Animal {
    public Cavalo(String nome, int idade) {
        super(nome, idade);
        this.especie = "cavalo";
    }

    @Override
    public String emiteSom() {
        return "reliiiiiiiincha";
    }

    @Override
    public String talento() {
        return "corre, cavalinho, corre!";
    }

}

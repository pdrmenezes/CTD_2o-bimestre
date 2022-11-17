package Aula11_Mesa;

public class Cachorro extends Animal{
    public Cachorro(String nome, int idade) {
        super(nome, idade);
        this.especie = "cachorro";
    }

    @Override
    public String emiteSom() {
        return "latiiiiir";
    }

    @Override
    public String talento() {
        return "corre, catioro, corre!";
    }
}

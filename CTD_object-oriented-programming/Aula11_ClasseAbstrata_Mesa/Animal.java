package Aula11_Mesa;

public abstract class Animal {
    private String nome;
    private int idade;
    protected String especie;

    public Animal(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public abstract String emiteSom();

    public abstract String talento();

    @Override
    public String toString() {
        return "\n" + especie + " {" + "\nnome: " + nome + "," +
                "\nidade: " + idade + ',' + "\nsom: " +
                emiteSom() + "\ntalento: " + talento() +
                "\n}";
    }
}

package Aula12_Integração;

public abstract class Funcionario {

    private String nome;
    private String sobrenome;
    private String cpf;
    private String email;
    private String matricula;

    public Funcionario(String nome, String sobrenome, String cpf, String email, String matricula) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.email = email;
        this.matricula = matricula;
    }

    public abstract void pagamento();
}
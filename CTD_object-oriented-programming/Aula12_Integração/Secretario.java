package Aula12_Integração;

public class Secretario extends Funcionario{

    private double salario;

    public Secretario(String nome, String sobrenome, String cpf, String email, String matricula, double salario) {
        super(nome, sobrenome, cpf, email, matricula);
        this.salario = salario;
    }

    @Override
    public void pagamento() {
        System.out.println("O seu salário é " + salario);
    }

}
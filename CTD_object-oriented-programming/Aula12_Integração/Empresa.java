package Aula12_Integração;

import java.util.ArrayList;

public class Empresa {
    private String nome;
    private String cnpj;
    // se fosse uma relação de 1 pra 1, adicionaria um funcionario com a classe funcionario: private Funcionario funcionario;
    ArrayList<Funcionario> funcionarios = new ArrayList<>();

    public Empresa(String nome, String cnpj) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    public void addFuncionario(Funcionario funcionario) {
        funcionarios.add(funcionario);

    }
}

package Aula13_Interface;

public class ContaCorrente extends Conta implements GravarImposto{
    private double valorPermitido;


    public ContaCorrente(double saldo, double valorPermitido) {
        super(saldo);
        this.valorPermitido = valorPermitido;
    }

    @Override
    public void sacar(double valor) {
        if (valor <= informarSaldo()){
            setSaldo(informarSaldo() - valor);
        } else {
            System.out.println("Saldo insuficiente");
        }
    }

    @Override
    public double imposto(double porc) {
        return 0;
    }
}

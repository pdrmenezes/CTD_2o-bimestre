package Aula13_Interface;

public class ContaPoupanca extends Conta {
    public ContaPoupanca(double saldo) {
        super(saldo);
    }

    @Override
    public void sacar(double valor) {
        if (valor <= informarSaldo()){
            setSaldo(informarSaldo() - valor);
        } else {
            System.out.println("Saldo insuficiente");
        }
    }

    public void cobrarJuros(){
        double juros = 0.05;
        setSaldo(informarSaldo() * (1 + juros));
    }
}

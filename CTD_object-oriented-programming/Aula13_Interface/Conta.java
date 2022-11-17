package Aula13_Interface;

public abstract class Conta {
    private double saldo;

    public Conta(double saldo) {
        this.saldo = saldo;
    }

    public void depositar(double valor){
        this.saldo += valor;
        System.out.println("Depósito realizado com sucesso.");
    }

    public abstract void sacar(double valor);

    public double informarSaldo(){
        return this.saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }
}

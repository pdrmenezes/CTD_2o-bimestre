package Aula06_Extra_Janete;

import java.text.DateFormat;
import java.text.NumberFormat;
import java.util.Date;

public class ContaBancaria {
    private double saldo;
    private Date dataAbertura;

    public ContaBancaria() {
        this.saldo = 0.0;
        this.dataAbertura = new Date();
        System.out.println("Conta aberta com sucesso!");
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public String getSaldoFormatado(){
        NumberFormat nf = NumberFormat.getCurrencyInstance();
        return nf.format(this.saldo);
    }

    public Date getDataAbertura() {
        return dataAbertura;
    }

    public void setDataAbertura(Date dataAbertura) {
        this.dataAbertura = dataAbertura;
    }

    public String getDataAberturaFormatada(){
        DateFormat df = DateFormat.getDateInstance(DateFormat.MEDIUM);
        return df.format(this.dataAbertura);
    }

    public void depositar(double quantia) {
        this.saldo += quantia;
        System.out.println("Novo depósito efetuado.");
    }

    public void sacar(double quantia){
        if (this.saldo<quantia){
            System.out.println("Saldo insuficiente. Seu saldo é: " + getSaldoFormatado());
        } else {
            this.saldo -= quantia;
            System.out.println("Saque efetuado com sucesso. Seu saldo atual é: " + getSaldoFormatado());
        }
    }
}
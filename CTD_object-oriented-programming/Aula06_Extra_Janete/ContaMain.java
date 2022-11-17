package Aula06_Extra_Janete;

import java.util.Scanner;

public class ContaMain {
    public static void main(String[] args) {
        ContaBancaria conta = new ContaBancaria();
        System.out.println("Salto atual: " + conta.getSaldoFormatado());
        System.out.println("Data de abertura: " + conta.getDataAberturaFormatada());

        Scanner sc = new Scanner(System.in);

        System.out.println("Valor para depósito: ");
        double valorDeposito = sc.nextDouble();
        conta.depositar(valorDeposito);

        conta.depositar(100.50);
        System.out.println("Saldo após depósito: " + conta.getSaldoFormatado());

        double valorSaque = sc.nextDouble();
        conta.sacar(valorSaque);

        conta.sacar(50);
        System.out.println("Saldo após saque: " + conta.getSaldoFormatado());

        conta.sacar(60);
        System.out.println("Saldo após saque: " + conta.getSaldoFormatado());
    }
}

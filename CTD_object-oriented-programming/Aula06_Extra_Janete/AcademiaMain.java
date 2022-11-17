package Aula06_Extra_Janete;

import java.util.Scanner;

public class AcademiaMain {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite seu nome: ");
        String inputNome = sc.nextLine();

        System.out.println("Sua idade: ");
        int inputIdade = sc.nextInt();

        System.out.println("Seu peso (em kg): ");
        double inputPeso = sc.nextDouble();

        System.out.println("E sua altura (em cm): ");
        double inputAltura = sc.nextDouble();

        Academia aluno = new Academia(inputNome,inputIdade,inputPeso,inputAltura);

        aluno.calcularIMC();
    }
}

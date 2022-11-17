package aula03.mesa;

import java.util.Scanner;

public class RockPaperScisors {
    static String jogador1Nome;
    static String jogador1Opcao;
    static String jogador2Nome;
    static String jogador2Opcao;
    static boolean jogando;
    static Scanner scanner;

    public static void main(String[] args) {
        scanner = new Scanner(System.in);
        jogando = true;

        System.out.print("Nome do Jogador 1: ");
        jogador1Nome = scanner.nextLine();

        System.out.print("Nome do Jogador 2: ");
        jogador2Nome = scanner.nextLine();

        while (jogando) {
            iniciarRodada();
        }
    }

    private static void iniciarRodada() {
        System.out.println("\n" + jogador1Nome + ", escolha sua opção: \n1 - Pedra \n2 - Papel \n3 - Tesoura \n* - Terminar");
        jogador1Opcao = scanner.next();

        if (jogador1Opcao.equals("*")) {
            jogando = false;
            return;
        }

        scanner.nextLine();
        System.out.println("\n" + jogador2Nome + ", escolha sua opção: \n1 - Pedra \n2 - Papel \n3 - Tesoura");
        jogador2Opcao = scanner.next();

        exibirResultado();
    }

    private static int whichWin(int jogador1Opcao, int jogador2Opcao) {
        if (jogador1Opcao == 1) {
            if (jogador2Opcao == 2) return 2;
            if (jogador2Opcao == 3) return 1;
        }
        if (jogador1Opcao == 2) {
            if (jogador2Opcao == 1) return 1;
            if (jogador2Opcao == 3) return 2;
        }
        if (jogador1Opcao == 3) {
            if (jogador2Opcao == 1) return 2;
            if (jogador2Opcao == 2) return 1;
        }
        return 0;
    }

    private static void exibirResultado() {
        int resultado = whichWin(Integer.parseInt(jogador1Opcao), Integer.parseInt(jogador2Opcao));
        if (resultado == 1) System.out.println("\n" + jogador1Nome + " venceu!");
        if (resultado == 2) System.out.println("\n" + jogador2Nome + " venceu!");
        if (resultado == 0) System.out.println("\nEmpatou!");
    }
}

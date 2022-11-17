package Aula05_ClasseDeDiagrama;

public class Cliente {
    private int numeroCliente;
    private String nome;
    private double divida;

    public Cliente(int numero, String nome){
        this.numeroCliente = numero;
        this.nome = nome;
        this.divida = 0;
    }

    public String getNome(){
        return this.nome;
    }

    public void setNome (String nome){
        this.nome = nome;
    }

    public int getNumeroCliente(){
        return this.numeroCliente;
    }

    public void setNumeroCliente(int numero){
        this.numeroCliente = numero;
    }
    public double getDivida(){
        return this.divida;
    }

    public void auemntarDivida(double valor){
        this.divida += valor;
        System.out.println("Sua dívida agora é de: " + this.divida);
    }
    public void pagarDivida(double valor){
        if (this.divida == 0)
            System.out.println("Você não tem dívidas!!");
        else
            this.divida -= valor;
    }
}

package Aula15_Mesa;

public abstract class Embarcacao {
    private double precoBase;
    private double valorAdicional;
    private int anoFabricacao;
    private double comprimento;
    private Capitao capitao;

    public Embarcacao(double precoBase, double valorAdicional, int anoFabricacao, double comprimento, Capitao capitao) {
        this.precoBase = precoBase;
        this.valorAdicional = valorAdicional;
        this.anoFabricacao = anoFabricacao;
        this.comprimento = comprimento;
        this.capitao = capitao;
    }

    public int getAnoFabricacao() {
        return anoFabricacao;
    }

    public double getPrecoBase() {
        return precoBase;
    }

    public double getValorAdicional() {
        return valorAdicional;
    }
}







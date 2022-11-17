package Aula15_Mesa;

public class Iate extends Embarcacao implements Comparable<Iate>{
    private int cabines;

    public Iate(double precoBase, double valorAdicional, int anoFabricacao, double comprimento, Capitao capitao, int cabines) {
        super(precoBase, valorAdicional, anoFabricacao, comprimento, capitao);
        this.cabines = cabines;
    }

    @Override
    public int compareTo(Iate o) {
        return Integer.compare(this.cabines, o.cabines);
    }

    public int getCabines() {
        return cabines;
    }
}

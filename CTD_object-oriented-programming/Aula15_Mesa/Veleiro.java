package Aula15_Mesa;

public class Veleiro extends Embarcacao{
    private int mastros;

    public Veleiro(double precoBase, double valorAdicional, int anoFabricacao, double comprimento, Capitao capitao, int mastros) {
        super(precoBase, valorAdicional, anoFabricacao, comprimento, capitao);
        this.mastros = mastros;
    }

    public boolean eGrande(){
        if(this.mastros > 4) {
            return true;
        } else {
            return false;
        }
    }
}

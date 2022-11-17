package Aula07_Herança_Mesa;

public class Nave extends Objeto {
    private double velocidade;
    private int vida;

    public Nave (int posx, int posy, char direcao){
        super (posx, posy, direcao);
        this.velocidade = velocidade;
    }

    public void girar (char direcao){
        super.setDirecao(direcao);
    }

    public void restaVida(int valor){
        if(valor <= this.vida){
            this.vida -= valor;
        }
    }

    public double getVelocidade() {
        return velocidade;
    }

    public void setVelocidade(double velocidade) {
        this.velocidade = velocidade;
    }

    public int getVida() {
        return vida;
    }

    public void setVida(int vida) {
        this.vida = vida;
    }
}

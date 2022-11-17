package Aula07_Herança_Mesa;

public class Objeto {
    private int posx;
    private int posy;
    private char direcao;

    public Objeto (int posx, int posy, char direcao){
        this.posx = posx;
        this.posy = posy;
        this.direcao = direcao;
    }

    public void irA (int posx, int posy, char direcao){
        this.posx = posx;
        this.posy = posy;
        this.direcao = direcao;
    }

    public int getPosx() {
        return posx;
    }

    public void setPosx(int posx) {
        this.posx = posx;
    }

    public int getPosy() {
        return posy;
    }

    public void setPosy(int posy) {
        this.posy = posy;
    }

    public char getDirecao() {
        return direcao;
    }

    public void setDirecao(char direcao) {
        this.direcao = direcao;
    }
}


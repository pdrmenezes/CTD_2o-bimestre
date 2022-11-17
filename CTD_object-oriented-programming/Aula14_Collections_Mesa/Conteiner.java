package Aula14_Collections_Mesa;

public class Conteiner implements Comparable<Conteiner> {
    private int id;
    private String descricao;
    private String pais;
    private boolean perigoso;

    public Conteiner(int id, String descricao, String pais, boolean perigoso) {
        this.id = id;
        this.descricao = descricao;
        this.pais = pais;
        this.perigoso = perigoso;
    }

    @Override
    public int compareTo(Conteiner o) {
        if (this.id == o.id) {
            return 0;

        } else if (this.id < o.id) {
            return -1;
        } else {
            return 1;
        }
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public boolean isPerigoso() {
        return perigoso;
    }

    public void setPerigoso(boolean perigoso) {
        this.perigoso = perigoso;
    }
}

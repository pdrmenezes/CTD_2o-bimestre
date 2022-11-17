package Aula11_ClasseAbstrata;

import java.time.LocalDate;

public abstract class Impressora {

    private String modelo;
    private String tipoConexao;
    private LocalDate dataFabricacao;
    private int folhasDiponiveis;
    private double porcentagemTinta;

    public Impressora(String modelo, String tipoConexao, LocalDate dataFabricacao, int folhasDiponiveis, double porcentagemTinta) {
        this.modelo = modelo;
        this.tipoConexao = tipoConexao;
        this.dataFabricacao = dataFabricacao;
        this.folhasDiponiveis = folhasDiponiveis;
        this.porcentagemTinta = porcentagemTinta;
    }

    public int getFolhasDiponiveis() {
        return folhasDiponiveis;
    }

    public void setFolhasDiponiveis(int folhasDiponiveis) {
        this.folhasDiponiveis = folhasDiponiveis;
    }

    public double getPorcentagemTinta() {
        return porcentagemTinta;
    }

    public void setPorcentagemTinta(double porcentagemTinta) {
        this.porcentagemTinta = porcentagemTinta;
    }

    public boolean temPapel (){
        if (this.folhasDiponiveis != 0) {
            return true;
        } else {
            return false;
        }
    }

    public boolean precisaTinta(){
        if(porcentagemTinta == 0){
            return true;
        } else {
            return false;
        }
    }

    public abstract String imprimir ();
}

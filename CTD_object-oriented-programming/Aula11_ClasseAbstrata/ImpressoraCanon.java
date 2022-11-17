package Aula11_ClasseAbstrata;

import java.time.LocalDate;

public class ImpressoraCanon extends Impressora{
    public ImpressoraCanon(String modelo, String tipoConexao, LocalDate dataFabricacao, int folhasDiponiveis, double porcentagemTinta) {
        super(modelo, tipoConexao, dataFabricacao, folhasDiponiveis, porcentagemTinta);
    }

    @Override
    public String imprimir() {
        if (temPapel() && !precisaTinta()) {
            setFolhasDiponiveis(getFolhasDiponiveis() - 1);
            setPorcentagemTinta(getPorcentagemTinta() - 0.1);
            return "Imprimindo";
        } else if (temPapel() && precisaTinta()) {
            return "Você precisa adicionar tinta";
        } else if (!temPapel() && precisaTinta()) {
            return "Insira papel / Recarregue os cartuchos";
        } else if (!temPapel() && !precisaTinta()) {
            return "Insira Papel";
        } else {
            return "Erro!";
        }
    }

    @Override
    public boolean precisaTinta(){
        return super.precisaTinta();
    }
}

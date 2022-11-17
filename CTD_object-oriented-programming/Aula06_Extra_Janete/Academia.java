package Aula06_Extra_Janete;

public class Academia {
    private String nome;
    private int idade;
    private double peso;
    private double altura;
    private double imc;

    public Academia(String nome, int idade, double peso, double altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura/100;
        this.imc = 0;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public double getAltura() {
        return altura;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }

    public void calcularIMC(){
        this.imc = peso / (altura*altura);
        if (this.imc < 18.5) {
            System.out.println("Você está abaixo do peso ideal.");
        } else if (this.imc >= 18.5 && this.imc <= 25){
            System.out.println("Você está na faixa de peso ideal.");
        } else{
            System.out.println("Você está acima do peso ideal.");
        }
    }
}

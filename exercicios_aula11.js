// OPÇÃO 1: Sistema de Reservas de Hotel:

//Crie uma classe Hotel com propriedades: nome, cidade, quartosDisponiveis.
//Adicione métodos para reservarQuarto() e cancelarReserva().
//Crie uma classe Cliente com nome, CPF e historicoReservas.
//Implemente a interação entre elas.

class reservasHotel{
    constructor(nome, cidade, quartosDisponiveis){
        this.nome = nome;
        this.cidade = cidade;
        this.quartosDisponiveis = quartosDisponiveis;
    }
    
}

class SistemaReservas{
    reservarQuarto(quarto){
        if(quarto.quartosDisponiveis > 0){
            quarto.quartosDisponiveis--;
            return true;
        }else{
            return false;
        }
}
    constructor(){
        this.hotel = [];
        this.clientes = [];
    }
}       
class Cliente{
    constructor(nome, cpf, historicoReservas){
        this.nome = nome;
        this.cpf = cpf;
        this.historicoReservas = historicoReservas;
    }
}


    const sistema = new SistemaReservas();
    
    cliente1 = new Cliente("Yuri Silva", "123.456.789-00", []);
    cliente2 = new Cliente("Katelyn Souza", "987.654.321-00", []);
    
    sistema.clientes.push(cliente1);
    sistema.clientes.push(cliente2);
    
    quarto1 = new reservasHotel("Hilton", "Recreio dos Bandeirantes", 10);
    quarto2 = new reservasHotel("Copacabana Pallace", "Copacabana", 5);
    
    sistema.Hilton.push(quarto1);
    sistema.Copacabanapallace.push(quarto2);
    
    console.log(sistema.reservarQuarto(quarto1));
    console.log(sistema.reservarQuarto(quarto2));
    console.log(sistema.reservarQuarto(quarto2));
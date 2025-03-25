// OPÇÃO 1: Sistema de Reservas de Hotel:

//Crie uma classe Hotel com propriedades: nome, cidade, quartosDisponiveis.
//Adicione métodos para reservarQuarto() e cancelarReserva().
//Crie uma classe Cliente com nome, CPF e historicoReservas.
//Implemente a interação entre elas.
class ReservasHotel {
    constructor(nome, cidade, quartosDisponiveis) {
        this.nome = nome;
        this.cidade = cidade;
        this.quartosDisponiveis = quartosDisponiveis;
    }
}

class SistemaReservas {
    constructor() {
        this.hotel = []; // Array de hotéis
        this.clientes = []; // Lista de clientes
    }

    reservarQuarto(quarto) {
        if (quarto.quartosDisponiveis > 0) {
            quarto.quartosDisponiveis--;
            return true;
        } else {
            return false;
        }
    }
}

class Cliente {
    constructor(nome, cpf, historicoReservas) {
        this.nome = nome;
        this.cpf = cpf;
        this.historicoReservas = historicoReservas;
    }
}

const sistema = new SistemaReservas();

const cliente1 = new Cliente("Yuri Silva", "123.456.789-00", []);
const cliente2 = new Cliente("Katelyn Souza", "987.654.321-00", []);

sistema.clientes.push(cliente1);
sistema.clientes.push(cliente2);

const quarto1 = new ReservasHotel("Hilton", "Recreio dos Bandeirantes", 10);
const quarto2 = new ReservasHotel("Copacabana Pallace", "Copacabana", 5);

sistema.hotel.push(quarto1);
sistema.hotel.push(quarto2);

if (sistema.reservarQuarto(quarto1)) {
    cliente1.historicoReservas.push(quarto1);
    console.log("Quarto reservado com sucesso!");
} else {
    console.log("Quarto indisponível.");
}
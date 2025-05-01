import Cliente_Controller from "../controller/index.js";
import prompt from "prompt-sync";

const input = prompt()

class Cliente_View {
    static async criar_Cliente() {
        const id_cliente = input('Digite o ID do cliente: ')
        const nome = input('Digite o nome do cliente: ')
        const cpf = input('Digite o CPF do cliente: ')
        const telefone = input('Digite o telefone do cliente: ')

        const cliente = await Cliente_Controller.criar_Cliente(id_cliente, nome, cpf, telefone);
        console.table(cliente)
    }

    static async atualizar_Cliente() {
        const id_cliente = input('Digite o ID do cliente: ')
        const nome = input('Digite o nome do cliente: ')
        const cpf = input('Digite o CPF do cliente: ')
        const telefone = input('Digite o telefone do cliente: ')

        const cliente = await Cliente_Controller.atualizar_Cliente(id_cliente, nome, cpf, telefone);
        console.table(cliente)
    }

    static async listar_Clientes() {
        const clientes = await Cliente_Controller.listar_Clientes();
        console.table(clientes)
    }

    static async buscar_cliente_por_cpf() {
        const cpf = input('Digite o CPF do cliente: ')
        const cliente = await Cliente_Controller.buscar_cliente_por_cpf(cpf);
        console.table(cliente)
    }

    static async deletar_cliente() {
        const id_cliente = input('Digite o ID do cliente: ')
        const cliente = await Cliente_Controller.deletar_cliente(id_cliente);
        console.table(cliente)
    }
}

export default Cliente_View

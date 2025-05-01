// Importando o modelo de cliente
import Cliente_Model from "../model/index.js";

class Cliente_Controller {

    static async criar_Cliente(id_cliente, nome, cpf, telefone) {
        try {
            if (!id_cliente || !nome || !cpf || !telefone) {
                return console.error('Todos os campos devem ser preenchidos.')
            }
            const cliente = await Cliente_Model.criar_Cliente(id_cliente, nome, cpf, telefone);
            console.log(`Cliente ${nome} criado com sucesso!`);
            return cliente
        } catch (error) {
            console.error(error);
        }
    }

    static async atualizar_Cliente(id_cliente, nome, cpf, telefone) {
        try {
            if (!id_cliente || !nome || !cpf || !telefone) {
                return console.error('Todos os campos devem ser preenchidos.')
            }
            const cliente = await Cliente_Model.atualizar_Cliente(id_cliente, nome, cpf, telefone);
            if (cliente.length === 0) {
                return console.error('Cliente não encontrado.');
            }
            console.log(`Cliente ${nome} atualizado com sucesso!`);
            return cliente
        } catch (error) {
            console.log('Erro ao Atualizar Cliente', error.message);
        }
    }


    static async listar_Clientes() {
        try {
            const clientes = await Cliente_Model.listar_Clientes();
            if (clientes.length === 0) {
                return console.error('Nenhum cliente encontrado.');
            }
            console.log('Lista de Clientes:', clientes);
            return clientes
        } catch (error) {
            console.log('Erro ao Listar Clientes', error.message);
        }
    }

    static async buscar_cliente_por_cpf(cpf) {
        try {
            const cliente = await Cliente_Model.buscar_cliente_por_cpf(cpf);
            if (cliente.length === 0) {
                return console.error('Cliente não encontrado.');
            }
            console.log('Cliente: ');
            return cliente
        } catch (error) {
            console.log('Erro ao Buscar Cliente', error.message);
        }
    }

    static async deletar_cliente(id_cliente) {
        try {
            const cliente = await Cliente_Model.deletar_cliente(id_cliente);
            if (cliente.length === 0) {
                return console.error('Cliente não encontrado.');
            }
            console.log(`Cliente deletado com sucesso!`);
            return cliente
        } catch (error) {
            console.log('Erro ao Deletar Cliente', error.message);
        }
    }


}


export default Cliente_Controller;
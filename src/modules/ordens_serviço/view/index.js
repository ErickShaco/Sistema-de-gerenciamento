import OrdemServicoController from "../controller/index.js";
import prompt from "prompt-sync";

const input = prompt();


class OrdemServicoView {

    static async cadastrar_ordem_servico() {
        console.log("Cadastrar Ordem de Serviço");
        const id_veiculo = input("ID do Veículo: ");
        const data = input("Data (YYYY-MM-DD): ");
        const descricao = input("Descrição: ");
        const valor = parseFloat(input("Valor: "));
        const status = input("Status: ");

        const resultado = await OrdemServicoController.cadastrar_ordem_servico(id_veiculo, data, descricao, valor, status);
        console.table(resultado);
    }

    static async listar_ordem_servico_veiculo() {
        console.log("Listar Ordens de Serviço por Veículo");
        const id_veiculo = input("ID do Veículo: ");

        const resultado = await OrdemServicoController.listar_ordem_servico_veiculo(id_veiculo);
        console.table(resultado);
    }

    static async filtrar_ordem_servico_por_status() {
        console.log("Filtrar Ordens de Serviço por Status");
        const status = input("Status: ");

        const resultado = await OrdemServicoController.filtrar_ordem_servico_por_status(status);
        console.table(resultado);
    }


    static async contar_somar_valor_por_cliente() {
        console.log("Contar e Somar Valor por Cliente");
        const id_cliente = input("Digite o ID do Cliente: ");

        const resultado = await OrdemServicoController.contar_somar_valor_por_cliente(id_cliente);
        console.table(resultado);
    }

    static async atualizar_ordem_servico() {
        console.log("Atualizar Ordem de Serviço");
        const id_ordem_servico = input("ID da Ordem de Serviço: ");
        const descricao = input("Descrição: ");
        const valor = input("Valor: ");
        const status = input("Status: ");

        const resultado = await OrdemServicoController.atualizar_ordem_servico(id_ordem_servico, descricao, valor, status);
        console.table(resultado);
    }

    static async deletar_ordem_servico() {
        console.log("Deletar Ordem de Serviço");
        const id_ordem_servico = input("Digite o ID da Ordem de Serviço: ");

        const resultado = await OrdemServicoController.deletar_ordem_servico(id_ordem_servico);
        console.table(resultado);
    }

}

export default OrdemServicoView;
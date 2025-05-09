import OrdemServicoModel from "../model/index.js";


class OrdemServicoController {
    static async cadastrar_ordem_servico(id_veiculo, data, descricao, valor, status) {
        try {
            if ( !id_veiculo || !data || !descricao || !valor || !status) {
               return console.error("Todos os campos são obrigatórios.");
            }
            const resultado = await OrdemServicoModel.cadastrar_ordem_servico( id_veiculo, data, descricao, valor, status);
            return resultado;
        } catch (error) {
            console.error('Erro ao cadastrar ordem de serviço:', error.message);
        }
    }

    static async listar_ordem_servico_veiculo(id_veiculo) {
        try {
            if (!id_veiculo) {
                return console.error("O ID do veículo deve ser preenchido.");
            }
            const resultado = await OrdemServicoModel.listar_ordem_servico_veiculo(id_veiculo);
            if (resultado.length === 0) {
                return console.error("Nenhuma ordem de serviço encontrada para este veículo.");
            }
            return resultado;
        } catch (error) {
            console.error('Erro ao listar ordens de serviço do veículo:', error.message);
        }
    }

    static async filtrar_ordem_servico_por_status(status) {
        try {
            if (!status) {
                return console.error("O status deve ser preenchido.");
            }
            const resultado = await OrdemServicoModel.filtrar_ordem_servico_por_status(status);
            if (resultado.length === 0) {
                return console.error("Nenhuma ordem de serviço encontrada com este status.");
            }
            return resultado;
        } catch (error) {
            console.error('Erro ao filtrar ordens de serviço por status:', error.message);
        }
    }

    static async contar_somar_valor_por_cliente(id_cliente) {
        try {
            if (!id_cliente) {
                return console.error("O ID do cliente deve ser preenchido.");
            }
            const resultado = await OrdemServicoModel.contar_somar_valor_por_cliente(id_cliente);
            if (resultado.length === 0) {
                return console.error("Nenhuma ordem de serviço encontrada para este cliente.");
            }
            return resultado;
        } catch (error) {
            console.error('Erro ao contar e somar valor por cliente:', error.message);
        }
    }

    static async atualizar_ordem_servico(id_ordem_servico,descricao, valor, status) {
        try {
            if (!id_ordem_servico || !descricao || !valor || !status) {
                return console.error("Todos os campos são obrigatórios.");
            }
            const resultado = await OrdemServicoModel.atualizar_ordem_servico(id_ordem_servico, descricao, valor, status);
            if (resultado.length === 0) {
                return console.error("Ordem de serviço não encontrada.");
            }
            return resultado;
        } catch (error) {
            console.error('Erro ao atualizar ordem de serviço:', error.message);
        }
    }

    static async deletar_ordem_servico(id_ordem_servico) {
        try {
            if (!id_ordem_servico) {
                return console.error("O ID da ordem de serviço deve ser preenchido.");
            }
            const resultado = await OrdemServicoModel.deletar_ordem_servico(id_ordem_servico);
            if (resultado.length === 0) {
                return console.error("Ordem de serviço não encontrada.");
            }
            return resultado;
        } catch (error) {
            console.error('Erro ao deletar ordem de serviço:', error.message);
        }
    }


}

export default OrdemServicoController;
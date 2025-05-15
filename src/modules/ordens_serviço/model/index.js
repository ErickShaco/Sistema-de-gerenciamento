import client from "../../../config/database.js";

class OrdemServicoModel{

    static async cadastrar_ordem_servico( id_veiculo, data, descricao,valor, status) {
        const dados = [id_veiculo, data, descricao, valor, status];
        const consulta = `insert into ordens_servico(id_veiculo,data,descricao,valor,status) values($1,$2,$3,$4,$5) returning *`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }


    static async listar_ordem_servico_veiculo(id_veiculo) { 
        const dados = [id_veiculo];
        const consulta = `
        select * from listar_ordem_por_veiculos
        where veiculos.id_veiculo = $1
       `;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async filtrar_ordem_servico_por_status(status) {
        const dados = [status];
        const consulta = `
        select * from filtrar_por_status
        where ordens_servico.status = $1`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async contar_somar_valor_por_cliente(id_cliente) {
        const dados = [id_cliente];
        const consulta = `
        select * from conta_e_soma
        where clientes.id_cliente = $1`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async atualizar_ordem_servico(id_ordem_servico, descricao, valor, status) {
        const dados = [id_ordem_servico, descricao, valor, status];
        const consulta = `update ordens_servico set status = $4, descricao = $2, valor = $3 where id_ordem_servico = $1 returning *`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }
    
    static async deletar_ordem_servico(id_ordem_servico) {
        const dados = [id_ordem_servico];
        const consulta = `delete from ordens_servico where id_ordem_servico = $1 returning *`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

}

export default OrdemServicoModel;

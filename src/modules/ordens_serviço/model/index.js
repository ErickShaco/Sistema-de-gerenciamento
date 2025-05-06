import client from "../../../config/database.js";

class OrdemServicoModel{

    static async cadastrar_ordem_servico(id_cliente, id_veiculo, id_funcionario, data_abertura, descricao) {
        const dados = [id_cliente, id_veiculo, id_funcionario, data_abertura, descricao];
        const consulta = `insert into ordens_servico(id_cliente,id_veiculo,id_funcionario,data_abertura,descricao) values($1,$2,$3,$4,$5) returning *`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

}
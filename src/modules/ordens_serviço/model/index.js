import client from "../../../config/database.js";

class OrdemServicoModel{

    static async cadastrar_ordem_servico(id_cliente, id_veiculo, id_funcionario, data_abertura, descricao) {
        const dados = [id_cliente, id_veiculo, id_funcionario, data_abertura, descricao];
        const consulta = `insert into ordens_servico(id_cliente,id_veiculo,id_funcionario,data_abertura,descricao) values($1,$2,$3,$4,$5) returning *`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }


    static async listar_ordem_servico_veiculo(id_veiculo) { 
        const dados = [id_veiculo];
        const consulta = `
        select ordens_servico.id_ordem_servico, ordens_servico.data_abertura, ordens_servico.status, clientes.nome, veiculos.modelo from ordens_servico 
        join veiculos on ordens_servico.id_veiculo = veiculos.id_veiculo 
        join clientes on veiculos.id_cliente = clientes.id_cliente 
        where ordens_servico.id_veiculo = $1`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async filtrar_ordem_servico_por_status(status) {
        const dados = [status];
        const consulta = `select ordens_servico.id_ordem_servico, ordens_servico.status, veiculos.modelo from ordens_servico 
        join veiculos on ordens_servico.id_veiculo = veiculos.id_veiculo 
        where ordens_servico.status = $1`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async contar_somar_valor_por_cliente(id_cliente) {
        const dados = [id_cliente];
        const consulta = `
        select count (ordens_servico.id_ordem_servico) as total_ordens_servico,sum (ordens_servico.valor) as total_valor, clientes.nome from ordens_servico
        join veiculos on ordens_servico.id_veiculo = veiculos.id_veiculo
        join clientes on veiculos.id_cliente = clientes.id_cliente 
        where ordens_servico.id_cliente = $1`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }
}
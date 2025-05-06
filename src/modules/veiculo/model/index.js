import client from "../../../config/database.js";


class VeiculoModel{

    static async cadastrar_Veiculo(id_cliente, id_veiculo, modelo, ano, placa) {
        const dados = [id_cliente, id_veiculo, modelo, ano, placa];
        const consulta = `insert into veiculos(id_cliente,id_veiculo,modelo,ano,placa) values($1,$2,$3,$4,$5) returning *`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async listar_veiculo_cliente(id_cliente) {// lista_veiculo_cliente, listarVeiculoCliente
        const dados = [id_cliente];
        const consulta = `
        select clientes.nome, veiculos.modelo from veiculos 
        join clientes on veiculos.id_cliente = clientes.id_cliente 
        where veiculos.id_cliente = $1`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }   
    
    static async atualizar_veiculo(id_veiculo, modelo, ano) {
        const dados = [id_veiculo, modelo, ano];
        const consulta = `update veiculos set modelo = $2, ano = $3 where id_veiculo = $1 returning *`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async excluir_veiculo(id_veiculo) {
        const dados = [id_veiculo];
        const consulta = `delete from veiculos where id_veiculo = $1 returning *`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }



}

export default VeiculoModel;







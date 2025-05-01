//Importando o client do banco de dados
import client from "../../../config/database.js";

class Cliente_Model {
    static async criar_Cliente(id_cliente,nome, cpf, telefone) {
        const dados = [id_cliente,nome, cpf, telefone];
        const consulta = `insert into clientes(id_cliente,nome,cpf,telefone) values($1,$2,$3,$4) returning *`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async atualizar_Cliente(id_cliente,nome, cpf, telefone) {
        const dados = [id_cliente, nome, cpf, telefone];
        const consulta = `update clientes set nome = $2, cpf = $3, telefone = $4 where id_cliente = $1 returning *`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }


    static async listar_Clientes() {
        const consulta = `select * from clientes`;
        const resultado = await client.query(consulta);
        return resultado.rows;
    }

    static async buscar_cliente_por_cpf(cpf) {
        const dados = [cpf];
        const consulta = `select * from clientes where cpf = $1`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async deletar_cliente(id_cliente) {
        const dados = [id_cliente];
        const consulta = `delete from clientes where id_cliente = $1 returning *`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
}   

}

export default Cliente_Model;
import dotenv from 'dotenv';
dotenv.config();
import client from './database.js';


class Criar_Tabela {
    static async clientes() {
        const consulta = `create table if not exists clientes(
            id_cliente serial primary key,
            nome varchar(100) not null,
            cpf varchar(11) not null unique,
            telefone varchar(15) not null
        );`;

        await client.query(consulta);
        console.log('Tabela Cliente criada com sucesso!')
    }

    static async veiculos() {
        const consulta = `create table if not exists veiculos(
            id_veiculo serial primary key,
            placa varchar(8) not null unique,
            modelo text not null,
            ano integer not null,
            id_cliente integer not null references clientes(id_cliente)
        );`;

        await client.query(consulta);
        console.log('Tabela Veiculo criada com sucesso!')
    }

    static async ordens_servico() {
        const consulta = `create table if not exists ordens_servico(
            id_ordem_servico serial primary key,
            id_veiculo integer not null references veiculos(id_veiculo),
            data date not null,
            descricao text not null,
            valor numeric(10,2) not null,
            status text not null
        );`;

        await client.query(consulta);
        console.log('Tabela Ordem de Serviço criada com sucesso!')
    }


}

export default Criar_Tabela;
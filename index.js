import Cliente_View from "./src/modules/cliente/view/index.js";
import Criar_Tabela from "./src/config/criar_tabela.js";
import Veiculo_View from "./src/modules/veiculo/view/index.js";
import OrdemServicoView from "./src/modules/ordens_serviço/view/index.js";
import prompt from "prompt-sync";

const input = prompt();
// Testado da Tabela Clientes :Cliente_View.criar_Cliente(), Cliente_View.atualizar_Cliente(), Cliente_View.listar_Clientes(), Cliente_View.buscar_cliente_por_cpf(), Cliente_View.deletar_cliente()

// Testado da Tabela Veiculos :Veiculo_View.cadastrarVeiculo(), Veiculo_View.listarVeiculoCliente(), Veiculo_View.atualizarVeiculo(), Veiculo_View.excluirVeiculo()

//Testado da Tabela Ordens de Serviço : OrdemServicoView.cadastrar_ordem_servico(), OrdemServicoView.listar_ordem_servico_veiculo(), OrdemServicoView.filtrar_ordem_servico_por_status(), OrdemServicoView.contar_somar_valor_por_cliente(), OrdemServicoView.atualizar_ordem_servico(), OrdemServicoView.deletar_ordem_servico()





function menu_principal(){
    console.log("Bem-vindo ao sistema de gerenciamento de ordens de serviço!");
    console.log("1. Menu Cliente");
    console.log("2. Menu Veiculo");
    console.log("3. Menu De Ordem de Serviço");
    console.log("0. Sair");

    const opcao = input("Escolha uma opção: ");
    
    switch (opcao) {
        case '1':
            menu_cliente()
            break;
        case '2':
            menu_veiculo()
            break;
        case '3':
            menu_ordem_servico()
            break;
        case '0':
            console.log("Saindo...");
            break
        default:
            console.log("Opção inválida! Tente novamente.");
    }
}

function menu_cliente(){
    console.log("Menu Cliente");
    console.log("1. Criar Cliente");
    console.log("2. Listar Clientes");
    console.log("3. Buscar Cliente por CPF");
    console.log("4. Atualizar Cliente");
    console.log("5. Deletar Cliente");
    console.log("0. Voltar");

    const opcao = input("Escolha uma opção: ");
    
    switch (opcao) {
        case '1':
            Cliente_View.criar_Cliente()
            break;
        case '2':
            Cliente_View.listar_Clientes()
            break;
        case '3':
            Cliente_View.buscar_cliente_por_cpf()
            break;
        case '4':
            Cliente_View.atualizar_Cliente()
            break;
        case '5':
            Cliente_View.deletar_cliente()
            break;
        case '0':
            menu_principal()
            console.log("Retornando...");
            break
        default:
            console.log("Opção inválida! Tente novamente.");
    }
}


function menu_veiculo(){
    console.log("Menu Veiculo");
    console.log("1. Cadastrar Veiculo");
    console.log("2. Listar Veiculos por Cliente");
    console.log("3. Atualizar Veiculo");
    console.log("4. Excluir Veiculo");
    console.log("0. Voltar");

    const opcao = input("Escolha uma opção: ");
    
    switch (opcao) {
        case '1':
            Veiculo_View.cadastrarVeiculo()
            break;
        case '2':
            Veiculo_View.listarVeiculoCliente()
            break;
        case '3':
            Veiculo_View.atualizarVeiculo()
            break;
        case '4':
            Veiculo_View.excluirVeiculo()
            break;
        case '0':
            menu_principal()
            console.log("Retornando...");
            break
        default:
            console.log("Opção inválida! Tente novamente.");
    }
}

function menu_ordem_servico(){
    console.log("Menu Ordem de Serviço");
    console.log("1. Cadastrar Ordem de Serviço");
    console.log("2. Listar Ordens de Serviço por Veículo");
    console.log("3. Filtrar Ordens de Serviço por Status");
    console.log("4. Contar e Somar Valor por Cliente");
    console.log("5. Atualizar Ordem de Serviço");
    console.log("6. Deletar Ordem de Serviço");
    console.log("0. Voltar");

    const opcao = input("Escolha uma opção: ");
    
    switch (opcao) {
        case '1':
            OrdemServicoView.cadastrar_ordem_servico()
            break;
        case '2':
            OrdemServicoView.listar_ordem_servico_veiculo()
            break;
        case '3':
            OrdemServicoView.filtrar_ordem_servico_por_status()
            break;
        case '4':
            OrdemServicoView.contar_somar_valor_por_cliente()
            break;
        case '5':
            OrdemServicoView.atualizar_ordem_servico()
            break;
        case '6':
            OrdemServicoView.deletar_ordem_servico()
            break;
        case '0':
            menu_principal()
            console.log("Retornando...");
            break
        default:
            console.log("Opção inválida! Tente novamente.");
    }
}

menu_principal()

 
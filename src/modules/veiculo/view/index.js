import VeiculoController from "../controller/index.js";
import prompt from "prompt-sync";

const input = prompt();

class VeiculoView {
  static async cadastrarVeiculo() {
    const id_cliente = input("Digite o ID do cliente: ");
    const id_veiculo = input("Digite o ID do veículo: ");
    const modelo = input("Digite o modelo do veículo: ");
    const ano = input("Digite o ano do veículo: ");
    const placa = input("Digite a placa do veículo: ");

    const resultado = await VeiculoController.cadastrar_veiculo(
      id_cliente,
      id_veiculo,
      modelo,
      ano,
      placa
    );
    console.table(resultado);
  }

  static async listarVeiculoCliente() {
    const id_cliente = input("Digite o ID do cliente: ");
    const resultado = await VeiculoController.listar_veiculo_cliente(id_cliente);
    console.table(resultado);
  }

  static async atualizarVeiculo() {
    const id_veiculo = input("Digite o ID do veículo: ");
    const modelo = input("Digite o novo modelo do veículo: ");
    const ano = input("Digite o novo ano do veículo: ");

    const resultado = await VeiculoController.atualizar_veiculo(
      id_veiculo,
      modelo,
      ano
    );
    console.table(resultado);
  }

  static async excluirVeiculo() {
    const id_veiculo = input("Digite o ID do veículo: ");
    const resultado = await VeiculoController.excluir_veiculo(id_veiculo);
    console.table(resultado);
  }
}

export default VeiculoView;
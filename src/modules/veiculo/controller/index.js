import VeiculoModel from "../model/index.js";

class VeiculoController {
  static async cadastrar_veiculo(
    id_cliente,
    id_veiculo,
    modelo,
    ano,
    placa
  ) {
    try {
      if (!id_cliente || !id_veiculo || !modelo || !ano || !placa) {
        return console.error("Todos os campos devem ser preenchidos.");
      }
      const veiculo = await VeiculoModel.cadastrar_Veiculo(
        id_cliente,
        id_veiculo,
        modelo,
        ano,
        placa
      );
      console.log(`Veículo cadastrado com sucesso!`);
      return veiculo;
    } catch (error) {
      console.error("Erro ao cadastrar veículo", error.message);
    }
  }

  static async listar_veiculo_cliente(id_cliente) {
    try {
      if (!id_cliente) {
        return console.error("O ID do cliente deve ser preenchido.");
      }
      const veiculos = await VeiculoModel.listar_veiculo_cliente(id_cliente);
      if (veiculos.length === 0) {
        console.error("Nenhum veículo encontrado");
      }
      console.log("Lista de Veículos:");
      return veiculos;
    } catch (error) {
      console.error("Erro ao listar veículos do cliente", error.message);
    }
  }

  static async atualizar_veiculo(id_veiculo, modelo, ano) {
    try {
      if (!id_veiculo || !modelo || !ano) {
        return console.error("Todos os campos devem ser preenchidos.");
      }
      const veiculo = await VeiculoModel.atualizar_veiculo(
        id_veiculo,
        modelo,
        ano
      );
      if (veiculo.length === 0) {
        return console.error("Veículo não encontrado.");
      }
      console.log(`Veículo atualizado com sucesso!`);
      return veiculo;
    } catch (error) {
      console.error("Erro ao atualizar veículo", error.message);
    }
  }

  static async excluir_veiculo(id_veiculo) {
    try {
      if (!id_veiculo) {
        return console.error("O ID do veículo deve ser preenchido.");
      }
      const veiculo = await VeiculoModel.excluir_veiculo(id_veiculo);
      if (veiculo.length === 0) {
        return console.error("Veículo não encontrado.");
      }
      console.log(`Veículo excluído com sucesso!`);
      return veiculo;
    } catch (error) {
      console.error("Erro ao excluir veículo", error.message);
    }
  }

}


export default VeiculoController;
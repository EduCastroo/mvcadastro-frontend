import { Cliente } from "./Cliente";

export class Endereco {
  public idEndereco: number;
  public bairro: string;
  public cidade: string;
  public complemento: string;
  public estado: string;
  public numero: number;
  public rua: string;
  public cliente: Cliente;
}
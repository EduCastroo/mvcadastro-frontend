import { Endereco } from './Endereco';
import { Projetos } from "./Projetos";

export class Cliente {
  public id: number;
  public nome: string;
  public cnpj: string;
  public projetos: Projetos[];
  public clienteEndereco: Endereco[];
}

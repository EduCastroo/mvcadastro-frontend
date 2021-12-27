import { AuthService } from './../auth.service';
import { Endereco } from './../model/Endereco';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/Cliente';

@Component({
  selector: 'app-cadendereco',
  templateUrl: './cadendereco.component.html',
  styleUrls: ['./cadendereco.component.css']
})
export class CadenderecoComponent implements OnInit {

  endereco: Endereco = new Endereco();
  listaEndereco: Endereco[];

  cliente: Cliente = new Cliente();
  listaClientes: Cliente[];
idCliente: number;


  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.getEndereco()
    this.getClientes()
  }

  getId(event: any){
    this.idCliente = event.target.value
  }

  cadEndereco(){
    this.cliente.id = this.idCliente
    this.endereco.cliente = this.cliente
    this.auth.cadEndereco(this.endereco).subscribe((resp: Endereco) => {
      this.endereco = resp
      alert('Cadastrado com sucesso')
      this.endereco = new Endereco();
      this.getEndereco()
    })

  }

  getClientes(){
    this.auth.getClientes().subscribe((resp: Cliente[]) => {
      this.listaClientes = resp
    })
  }

  getEndereco(){
    this.auth.getEndereco().subscribe((resp: Endereco[]) => {
      this.listaEndereco = resp
    })
  }

}

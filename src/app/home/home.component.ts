import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Projetos } from '../model/Projetos';
import { Cliente } from '../model/Cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaProjetos: Projetos[];
  projeto: Projetos = new Projetos();
  listaClientes: Cliente[];
  cliente: Cliente = new Cliente();
  clienteId: number;
  projetoId: number;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.getProjetos();
    this.getClientes();
  }


  getProjetos(){
    this.auth.getProjetos().subscribe((resp: Projetos[]) => {
      this.listaProjetos = resp
    })
  }

  getClienteById(){
    this.auth.getClienteById(this.clienteId).subscribe((resp: Cliente) => {
      this.cliente = resp
      console.log(this.cliente)
    })
  }

  getClientes(){
    this.auth.getClientes().subscribe((resp: Cliente[]) => {
      this.listaClientes = resp
    })
  }

  addClienteProjeto(){
    this.cliente.projetos = [...[this.projeto], ...this.cliente.projetos];

    console.log(this.cliente)
  
    this.auth.putCliente(this.cliente).subscribe((resp: Cliente) => {
      this.cliente = resp
    })
}

  idCliente(event: any){
    this.clienteId = event.target.value;
    this.getClienteById()
  }

  idProjeto(event: any){
    this.projetoId = event.target.value;
    this.projeto.codigoProjeto = this.projetoId;
    console.log(this.projeto)
  }

}

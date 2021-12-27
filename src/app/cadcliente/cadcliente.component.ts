import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/Cliente';

@Component({
  selector: 'app-cadcliente',
  templateUrl: './cadcliente.component.html',
  styleUrls: ['./cadcliente.component.css']
})
export class CadclienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  listaClientes: Cliente[];

  constructor(private auth: AuthService) { }

  ngOnInit(){
    this.getClientes()
  }

  cadCliente(){
    this.auth.cadCliente(this.cliente).subscribe((resp: Cliente) => {
      this.cliente = resp
      alert('Cadastrado com sucesso!')
      this.cliente = new Cliente();
      this.getClientes()
    })
  }


  getClientes(){
    this.auth.getClientes().subscribe((resp: Cliente[]) => {
      this.listaClientes = resp
    })
  }
}

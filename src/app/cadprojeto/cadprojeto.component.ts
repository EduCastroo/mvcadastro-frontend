import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Projetos } from '../model/Projetos';

@Component({
  selector: 'app-cadprojeto',
  templateUrl: './cadprojeto.component.html',
  styleUrls: ['./cadprojeto.component.css']
})
export class CadprojetoComponent implements OnInit {

  projeto: Projetos = new Projetos();
  listaProjetos: Projetos[];

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.getProjetos()
  }

  getProjetos(){
    this.auth.getProjetos().subscribe((resp: Projetos[]) => {
      this.listaProjetos = resp
    })
  }

  cadProjeto(){
    this.auth.cadProjeto(this.projeto).subscribe((resp: Projetos) => {
      this.projeto = resp
      alert('Cadastrado com sucesso')
      this.getProjetos();
      this.projeto = new Projetos();
    })
  }

}

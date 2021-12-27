import { Endereco } from './model/Endereco';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './model/Cliente';
import { Projetos } from './model/Projetos';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8080/cliente/all');
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`http://localhost:8080/cliente/${id}` );
  }

  cadCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/cliente', cliente);
  }

  putCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>('http://localhost:8080/cliente', cliente);
  }

  getEndereco(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>('http://localhost:8080/endereco');
  }

  cadEndereco(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>('http://localhost:8080/endereco', endereco);
  }

  getProjetos(): Observable<Projetos[]> {
    return this.http.get<Projetos[]>('http://localhost:8080/projeto');
  }

  cadProjeto(projeto: Projetos): Observable<Projetos> {
    return this.http.post<Projetos>('http://localhost:8080/projeto', projeto);
  }
}

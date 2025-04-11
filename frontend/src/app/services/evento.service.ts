import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { GLOBAL } from "./global";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  public url;

  constructor(
    private _http : HttpClient,
    
  ) {
    this.url = GLOBAL.url;
  }

  listar_eventos():Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url + 'listar_eventos',{headers:headers});
  }


}
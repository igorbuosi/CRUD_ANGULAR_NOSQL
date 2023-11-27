import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosDataService {
  private produtoSource = new BehaviorSubject<{ produto: Produto | null, key: string }>({ produto: null, key: '' });
  currentProduto = this.produtoSource.asObservable();

  constructor() { }

  changeProduto(produto: Produto, key: string) {
    this.produtoSource.next({ produto, key });
  }
}

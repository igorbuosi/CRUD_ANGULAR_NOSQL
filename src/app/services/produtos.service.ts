import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Produto } from '../models/produto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(
    private db: AngularFireDatabase,

  ) { }

  insert(produto: Produto) {
    this.db.list('produto').push(produto).then((result: any) => {
      console.log(result.key);
    })

  }

  update(produto: Produto, key: string) {
    this.db.list('produto').update(key, produto)
      .catch((error: any) => {
        console.error(error)
      })
  }

  getAll() {
    return this.db.list('produto')
      .snapshotChanges()
      .pipe(
        map(changes => changes.map(c => this.mapToProduto(c))));
  }

  private mapToProduto(c: any): Produto {
    return { key: c.payload.key, ...c.payload.val() } as Produto;
  }

  delete(key: string) {
    this.db.object(`produto/${key}`).remove();
  }
}

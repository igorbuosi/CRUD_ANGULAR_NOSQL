import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-produtos-listar',
  templateUrl: './produtos-listar.component.html',
  styleUrls: ['./produtos-listar.component.css']
})
export class ProdutosListarComponent implements OnInit {

    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    constructor(
      private produtoService: ProdutosService,
      private toast: ToastrService,
      private router: Router
    ){}
    
    produtos!: Observable<any>;

    delete(key: string){
      this.produtoService.delete(key);
      this.toast.success('Produto excluido com sucesso');
    }
  
    ngOnInit(){
      this.listAll();
    }
  
    listAll(){
      this.produtos = this.produtoService.getAll();
    }
  
   
   edit(produto: Produto, key: string){
      this.router.navigate(['produtos/create', produto])
    }
  
  }

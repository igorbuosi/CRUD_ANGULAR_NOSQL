import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-pesquisa-codbarra',
  templateUrl: './pesquisa-codbarra.component.html',
  styleUrls: ['./pesquisa-codbarra.component.css']
})
export class PesquisaCodbarraComponent implements OnInit {
  codigo_barra: any;
  produto: Produto = {
    descricao: '',
    codigobarra: '',
    marca: '',
    valorprazo: '',
    valorvista: ''
  }

  codigobarra: FormControl = new FormControl(null, Validators.required);

  constructor(
    private produtoService: ProdutosService,
    private toast: ToastrService,
  ) { }

  limpar() {
    this.produto = {
      descricao: '',
      codigobarra: '',
      marca: '',
      valorprazo: '',
      valorvista: ''
    }
    this.codigo_barra = '';
  }

  findByBarCode() {
    this.produtoService.getByCodigoBarra(this.codigo_barra).subscribe((produto: Produto | null) => {
      if (produto) {
        this.produto = produto;
        console.log('Produto encontrado:', produto);
      } else {
        this.produto = {
          descricao: '',
          codigobarra: '',
          marca: '',
          valorprazo: '',
          valorvista: ''
        }
        this.toast.error('Produto não encontrado');
      }
    });
  }

  ngOnInit(): void {
    this.codigo_barra = '';
  }

  validaCampos() {
    return this.codigobarra.valid;
  }
}

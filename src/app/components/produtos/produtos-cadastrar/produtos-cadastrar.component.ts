import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMapTo } from 'rxjs';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-produtos-cadastrar',
  templateUrl: './produtos-cadastrar.component.html',
  styleUrls: ['./produtos-cadastrar.component.css']
})
export class ProdutosCadastrarComponent implements OnInit {

  produto: Produto = {
    descricao: '',
    codigobarra: '',
    marca: '',
    valorprazo: '',
    valorvista: ''
  }

  key: string = '';

  constructor(
    private produtoService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.produto = {
        descricao: params['descricao'],
        codigobarra: params['codigobarra'],
        marca: params['marca'],
        valorprazo: params['valorprazo'],
        valorvista: params['valorvista']
      };
      this.key = params['key'];
    })
  }

  descricao: FormControl = new FormControl(null, Validators.minLength(3));
  codigobarra: FormControl = new FormControl(null, Validators.required);
  marca: FormControl = new FormControl(null, Validators.required);
  valorvista: FormControl = new FormControl(null, Validators.required);
  valorprazo: FormControl = new FormControl(null, Validators.required);

  create() {
    if (this.key) {
      this.produtoService.update(this.produto, this.key);
      this.toast.success('Produto atualizado com sucesso');
    } else {
      this.produtoService.insert(this.produto);
      this.toast.success('Produto cadastrado com sucesso');
    }
    this.router.navigate(['produtos']);
  }

  validaCampos() {
    return this.descricao.valid && this.codigobarra.valid && this.marca.valid && this.valorvista.valid && this.valorprazo.valid;
  }

}

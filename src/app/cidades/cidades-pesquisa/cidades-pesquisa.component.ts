import { Component, OnInit } from '@angular/core';
import { CidadesFiltro, CidadesService } from '../cidades.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-cidades-pesquisa',
  templateUrl: './cidades-pesquisa.component.html',
  styleUrls: ['./cidades-pesquisa.component.css']
})
export class CidadesPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new CidadesFiltro();
  cidades = [];

  constructor(private cidadesService: CidadesService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(pagina=0) {
    this.filtro.pagina = pagina;

    this.cidadesService.pesquisar(this.filtro)
    .then(resultado => {
      this.totalRegistros = resultado.total;
      this.cidades = resultado.cidades;
    });
  }

    aoMudarPagina(event: LazyLoadEvent) {
      const pagina = event.first / event.rows;
      this.pesquisar(pagina);
    }

  }


import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DocenteService } from '../service/docente.service';
import { JefeService } from '../service/jefe.service';

@Component({
  selector: 'app-su-dashboard',
  templateUrl: './su-dashboard.component.html',
  styleUrls: ['./su-dashboard.component.scss']
})
export class SuDashboardComponent implements OnInit {

  idSuperUsuario: any = '';
  docentes: any;
  jefesCarrera: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public docentesService: DocenteService,
    public jefeService: JefeService
  ) { }

  ngOnInit(): void {
    this.idSuperUsuario = this.route.snapshot.paramMap.get('idSuperUsuario');

    this.jefeService.getAllJefesCarrera().subscribe(resp => {
      this.jefesCarrera = resp;
    },
      error => { console.error(error) }
    );

    this.docentesService.getAllDocentes().subscribe(resp => {
      this.docentes = resp;
    },
      error => { console.error(error) }
    );

  }

  public goToProfessorRegister() {
    this.router.navigate(['/registro/docente', this.idSuperUsuario]);
  }

  public goToCCORegister() {
    this.router.navigate(['/registro/jefe', this.idSuperUsuario]);
  }

  public updateDocente(docente: any): void {

  }

  public deleteDocente(docente: any): void {

  }

  public updateJefe(docente: any): void {

  }

  public deleteJefe(docente: any): void {

  }

}

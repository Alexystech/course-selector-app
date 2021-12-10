import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from '../model/data';
import { AsigHorarioService } from '../service/asig-horario.service';

@Component({
  selector: 'app-jefe-dashboard',
  templateUrl: './jefe-dashboard.component.html',
  styleUrls: ['./jefe-dashboard.component.scss']
})
export class JefeDashboardComponent implements OnInit {

  idJefeCarrera: any = '';

  screenHeight!: number;
  screenWidth!: number;

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.view = [this.screenWidth, 400];
  }

  view: [number, number] = [1000,400];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Docente';
  yAxisLabel: string = 'Horas disponibles';
  timeline: boolean = true;

  multi = [
    {
      "name": "Horas disponibles",
      "series": [{
        "name": "1999", 
        "value": 100
      }]
    }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public asigHorarioService: AsigHorarioService
  ) {
    this.onResize();
  }

  ngOnInit(): void {
    this.idJefeCarrera = this.route.snapshot.paramMap.get('idJefe');
    this.updateChart();
  }

  updateChart(): void {

    let dataArray: Data[] = [];

    this.asigHorarioService.getTopDocentesMayorDisponibilidad().subscribe(resp => {

      for (let item of resp) {
        let data: Data = new Data();
        
        data.name = item.idDocente;
        data.value = item.horasDisponibles;

        dataArray.push(data);
      }

      let updateMulti = [
        {
          "name": "Horas disponibles",
          "series": dataArray
        }
      ];

      this.multi = Array.from(updateMulti);
      dataArray = [];
    },
      error => { console.log(error) }
    );

  }

  onSelect(event: any) {
    console.log(event);
  }

}

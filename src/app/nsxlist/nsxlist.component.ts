import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {NsxwireService} from '../nsxwire.service';


@Component({
  templateUrl: './nsxlist.component.html',
  styleUrls: ['./nsxlist.component.scss']
})
export class NsxlistComponent implements OnInit {

  constructor(private nsxsrv : NsxwireService ) { }
nsxwires: any;

  ngOnInit() {
    this.nsxsrv.getvwire().subscribe(data => this.nsxwires = data);
  }

}

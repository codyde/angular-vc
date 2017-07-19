import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { VcenterService } from '../getvm.service'

@Component({
  templateUrl: './vmlist.component.html',
  styleUrls: ['./vmlist.component.scss']
})
export class VmlistComponent implements OnInit {

    constructor(private vcenterService: VcenterService ) {}
    vmlist :any;

    ngOnInit() {
this.vcenterService.getvm().then(data => this.vmlist = data);
    }

}
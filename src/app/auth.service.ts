import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs  } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  getvms() {

    var head = new Headers();
    head.append('Content-Type', 'application/json');
    head.append('Accept', 'application/json')
    head.append('vmware-use-header-authn', 'test')
    head.append('vmware-api-session-id', 'null')
    head.append('Authorization', 'Basic ' + btoa('administrator@vsphere.local:VMware123!'))

    return this.http.post('https://hlcorevc01.humblelab.com/rest/com/vmware/cis/session', {},  {
      headers: head
    })
      .map(res => res.json().value)
  }

}
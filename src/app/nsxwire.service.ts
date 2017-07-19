import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NsxwireService {

  constructor(private http: Http) { }

  getvwire() {
    let username = 'administrator@vsphere.local';
    let password = 'VMware123!';
    var head = new Headers();
    head.append('Content-Type', 'application/json');
    head.append('Accept', 'application/json')
    head.append('Authorization', 'Basic YWRtaW5pc3RyYXRvckB2c3BoZXJlLmxvY2FsOlZNd2FyZTEyMyE=');
    head.append('Access-Control-Allow-Origin', '*')

    return this.http.get('https://hlnsxmgr01.humblelab.com/api/2.0/vdn/scopes/vdnscope-1/virtualwires', {
      headers: head
    })
      .map(res => res.json().value);
  }
}
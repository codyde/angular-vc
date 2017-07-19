import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { AuthService } from './auth.service';
import { VcenterService } from './getvm.service';
import { VmlistComponent } from './vmlist/vmlist.component';
import { NsxwireService } from './nsxwire.service';
import { NsxlistComponent } from './nsxlist/nsxlist.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        VmlistComponent,
        NsxlistComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING
    ],
    providers: [AuthService, VcenterService, NsxwireService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingdemoComponent } from './bindingdemo/bindingdemo.component';
import { ComputersComponent } from './computers/computers.component';
import { DesktopComponent } from './desktop/desktop.component';
import { FreshComponent } from './fresh/fresh.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { MobliesComponent } from './moblies/moblies.component';
import { MonitorComponent } from './monitor/monitor.component';
import { ToysComponent } from './toys/toys.component';

const routes: Routes = [
  {path:'fresh',component:FreshComponent},
  {path:'mobile',component:MobliesComponent},
  {path:'computers',component:ComputersComponent,children:[{
    path:'desktop',component:DesktopComponent
  },{path:'keyboard',component:KeyboardComponent},
{path:'monitor',component:MonitorComponent},
{path:'bindingdemo',component:BindingdemoComponent}
]},
  {path:'toys',component:ToysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

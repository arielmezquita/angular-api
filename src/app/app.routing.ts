import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetallesComponent }  from './detalles/detalles.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const appRoutes: Routes =[
    {path:'',component:HomeComponent },
    {path:'detalles/:id',component:DetallesComponent},
    {path:'detalles',component:DetallesComponent},
    
    {path:'**',component:ErrorpageComponent}
]

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome';

// import { GrowlerModule } from './growler/growler.module';
// import { ModalModule } from './modal/modal.module';
// import { OverlayModule } from './overlay/overlay.module';


import { NavigationComponent } from './navigation/navigation.component';

// import { DataService } from './services/data.service';
// import { NavbarComponent } from './navbar/navbar.component';
// import { FilterService } from './services/filter.service';
// import { SorterService } from './services/sorter.service';
// import { TrackByService } from './services/trackby.service';
// import { DialogService } from './services/dialog.service';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AuthService } from './services/auth.service';
// import { EventBusService } from './services/event-bus.service';
// import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule,FontAwesomeModule,NgbModule],
  exports: [RouterModule, HttpClientModule, NavigationComponent,FooterComponent],
  declarations: [NavigationComponent, FooterComponent],
  // providers: [SorterService, FilterService, DataService, TrackByService,
  //   DialogService, AuthService, EventBusService,
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: AuthInterceptor,
  //     multi: true,
  //   },
  //   { provide: 'Window', useFactory: () => window }
  // ] // these should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}




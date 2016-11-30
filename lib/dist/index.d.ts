import { ModuleWithProviders } from "@angular/core";
export * from './src/sample.component';
export * from './src/sample.directive';
export * from './src/sample.pipe';
export * from './src/sample.service';
export default class LibraryModule {
    static forRoot(): ModuleWithProviders;
}

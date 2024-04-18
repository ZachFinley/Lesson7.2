import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'test',
    templateUrl: 'test.component.html'
})
export class ExampleComponent {
    
    @ViewChild('myModal') modal!: ElementRef;
    
    open(){
        this.modal.nativeElement.style.display = 'block';
    }
    close(){
        this.modal.nativeElement.style.display = 'none';
    }
}
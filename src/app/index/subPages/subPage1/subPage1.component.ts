import { Component, ViewContainerRef, OnInit} from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'subPage1',
    templateUrl: 'subPage1.component.html',
    styleUrls: ["subPage1.component.scss"]
})

export class IndexSubPage1Component implements OnInit{

    constructor(
        public toast:ToastsManager,
        public vcr: ViewContainerRef
    ) {
        this.toast.setRootViewContainerRef(vcr);
    }

    ngOnInit(): void {
        this.toast.success("You are in page 1!");
    }

}

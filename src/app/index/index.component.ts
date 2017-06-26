import { Component, ViewContainerRef, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Response } from '@angular/http';
import { HTTPService } from '../../services/http.service';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { } from '@types/googlemaps';


@Component({
    selector: "index",
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.scss']
})

export class IndexComponent implements OnInit {
    public lat: number;
    public lng: number;
    public searchControl: FormControl;
    public zoom: number;
    public dataInfo;
    public dataInfo1;
    public gender
    public locale
    public timestamp
    public timezone
    public profilePhoto

    @ViewChild("search")
    public searchElementRef: ElementRef;

    constructor(
        private router: Router,
        public toast: ToastsManager,
        public vcr: ViewContainerRef,
        private http: HTTPService,
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone
    ) {
        this.toast.setRootViewContainerRef(vcr);
    }
    ngOnInit(): void {
        this.zoom = 8;
        this.lat = 1.8282;
        this.lng = -66.5795;
        this.toast.success('You are in home page!');
        this.setCurrentPosition();
        this.searchControl = new FormControl();
        this.autocomplete();
        document.getElementById('mySidenav').style.width = '250px';
        document.getElementById('main').style.marginLeft = '250px';
    }
    private setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.zoom = 12;
            });
        }
    }
    autocomplete() {
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(
                <HTMLInputElement>document.getElementById("address"), { types: ["address"] });
            autocomplete.addListener('place_changed', () => {
                this.ngZone.run(() => {
                    let place: google.maps.places.PlaceResult = autocomplete.getPlace();
                    console.log("Place->", place);
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    this.lat = place.geometry.location.lat();
                    this.lng = place.geometry.location.lng();
                    this.zoom = 12;
                    this.markers.push({
                        gender: "Male",
                        timestamp: new Date(),
                        timezone: place["utc_offset"] / 60,
                        profilePhoto: '1weqweqw.com',
                        locale: place.address_components[3].short_name
                    });
                });
            });
        });
    }
    viewItem(_dataPoint): void {

        this.openNavRight();
        this.dataInfo = _dataPoint;
        // this.dataInfo = JSON.parse(_dataPoint);
        this.gender = this.dataInfo.gender;
        this.locale = this.dataInfo.locale;
        this.timestamp = this.dataInfo.timestamp;
        this.timezone = this.dataInfo.timezone;
        this.profilePhoto = this.dataInfo.profilePhoto;
        console.log("23423", this.dataInfo1)
    }
    logout(): void {
        localStorage.clear();
        this.router.navigate(['/']);
        this.toast.success('Logged out');
    }
    openNavRight() {
        document.getElementById('mySidenavRight').style.width = '250px';
        // document.getElementById('main').style.marginLeft = '250px';
    }
    openNav() {
        document.getElementById('mySidenav').style.width = '250px';
        document.getElementById('main').style.marginLeft = '250px';
    }
    closeNav() {
        document.getElementById('mySidenav').style.width = '0';
        document.getElementById('main').style.marginLeft = '0';
    }
    closeNavRight() {
        document.getElementById('mySidenavRight').style.width = '0';
        // document.getElementById('main').style.marginLeft = '0';
    }
    map: any;
    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }
    mapClicked($event: any) {
        console.log($event)

        this.markers.push({
            gender: "Male",
            timestamp: new Date(),
            timezone: +5,
            profilePhoto: '1weqweqw.com',
            locale: "987987"
        });
    }

    markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }
    markers: marker[] = [
        // {
        //     lat: 51.673858,
        //     lng: 7.815982,
        //     userId: 'Ankit',
        //     gender: "Male",
        //     timestamp: '2012-10-16T17:57:28.556094Z',
        //     draggable: true,
        //     timezone: +5,
        //     profilePhoto: '1weqweqw.com',
        //     label: "ABC"
        // },
        // {
        //     lat: 51.673858,
        //     lng: 7.815982,
        //     userId: 'Samrita',
        //     gender: "Male",
        //     timestamp: '2012-10-16T17:57:28.556094Z',
        //     draggable: true,
        //     timezone: +5,
        //     profilePhoto: '1weqweqw.com',
        //     label: "ABC"
        // },
        // {
        //     lat: 51.673858,
        //     lng: 7.815982,
        //     userId: 'Anuj',
        //     gender: "Male",
        //     timestamp: '2012-10-16T17:57:28.556094Z',
        //     draggable: true,
        //     timezone: +5,
        //     profilePhoto: '1weqweqw.com',
        //     label: "ABC"
        // }
    ]

}
interface marker {
    gender: string
    timestamp: Date;
    locale: string;
    timezone: number;
    profilePhoto: string;

}




import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    standalone: true,
    template: `<h1>App Navbar</h1>
                <p>paragraph</p>
                <button>Submit</button>`,
    styles: `h1{
                color: green;
                background-color: #f3f3f3
    }`
})

export class AppNavbar {

}

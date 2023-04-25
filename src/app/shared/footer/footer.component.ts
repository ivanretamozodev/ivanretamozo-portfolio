import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer class="footer">
            <p>Ivan Retamozo Dev {{ date | date : 'yyyy' }}</p>
        </footer>
    `,
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    date = new Date();
}

export class View {
    constructor(seletor) {
        this.elemento = document.getElementById(seletor);
    }
    update(model) {
    }
    template(model) {
        return `
        <p class="alert alert-info">${model}</p>
        `;
    }
}

export class View<T> {
    protected elemento: HTMLElement | null;

    constructor(seletor :string){
        
       this.elemento = document.getElementById(seletor)
    }

    update(model: T){
    }

    protected template(model: T): string{
        return `
        <p class="alert alert-info">${model}</p>
        `
    }
}

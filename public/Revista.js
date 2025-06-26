// public/Revista.js
export class Revista {
    constructor(titulo, categoria) {
      this.titulo = titulo;
      this.categoria = categoria;
    }
  
    render() {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${this.titulo}</strong> - <em>${this.categoria}</em>`;
      return div;
    }
  }
  
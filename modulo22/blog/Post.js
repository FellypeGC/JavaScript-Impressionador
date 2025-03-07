export class Post {
  constructor(titulo, conteudo, autor) {
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.autor = autor; // Instancia da classe Author - objeto
    this.comentarios = []; // Lista de comentários do post
    this.data = new Date();
  }

  adicionarComentario(comentario) {
    this.comentarios.push(comentario); // Adicionar o comentário a lista
  }

  listaCometarios() {
    return this.comentarios.map((comentario) => `${comentario.autor}: ${comentario.conteudo}`)
  }
}

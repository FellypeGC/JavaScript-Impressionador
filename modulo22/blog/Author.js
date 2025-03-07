import { Post } from "./Post.js";

export class Author {
  constructor(nome) {
    this.nome = nome;
    this.posts = [];
  }

  criarPost(titulo, conteudo) {
    const novoPost = new Post(titulo, conteudo, this); // O autor é associado ao post
    this.posts.push(novoPost); // Adicionar o post a lista do autor
    return novoPost;
  }

  listarPosts() {
    return this.posts.map((post) => post.titulo);
  }
}
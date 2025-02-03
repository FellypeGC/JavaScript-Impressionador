# Condições de Re Renderização

- Componente sofreu uma atualização em um estado seu.
- Componente sofreu atualização de uma prop sua, sendo ela um estado de outro componente.
- Componentes filhos na árvore de composição se re renderizarão quando seu pai se re renderizar.
- Componentes dentro de um contexto cuja informação de estado sofre alteração serão re renderizados.
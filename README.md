# Site pessoal — Timothy

Site estático (HTML + CSS + JS puro), pronto para publicar no GitHub Pages.

## Como publicar

1. Crie um repositório no GitHub (ex: `seu-usuario.github.io` para domínio raiz, ou qualquer nome para publicar em subpasta).
2. Envie todo o conteúdo desta pasta para o repositório.
3. Em **Settings → Pages**, selecione a branch `main` e a pasta `/root`.
4. O site fica disponível em `https://seu-usuario.github.io/` (ou `/nome-do-repo/`).

## Como adicionar uma nova aula (Bioestatística)

1. Coloque o PDF em `materiais/bioestatistica/aula-05.pdf`.
2. Em `ensino/bioestatistica.html`, duplique um `<li class="download-item">` da lista de aulas e ajuste número, título e o `href` do botão.

## Como adicionar um novo módulo de curso prático

Mesma lógica, dentro de `materiais/cursos-praticos/<curso>/` e no HTML correspondente em `ensino/cursos-praticos/`.

## Como adicionar um artigo publicado

Edite `pesquisa/artigos.html` e adicione um `<li>` dentro da lista (`.reading-list`) do tema correspondente, com o link para o DOI ou página do periódico.

## Como atualizar o Ecossistema

Edite `ecossistema.html` (página completa) e a seção equivalente em `index.html` (versão resumida da home). Os badges de status usam as classes:
- `badge-ativo` (verde-água)
- `badge-criacao` (laranja)
- `badge-construcao` (contorno neutro)

## Pendências para você preencher

- [ ] Links reais: e-mail, Lattes, ORCID, LinkedIn (estão como `#` no rodapé de todas as páginas)
- [ ] Lista real de artigos com DOIs
- [ ] PDFs reais das aulas e módulos (os `href` já apontam para os caminhos corretos em `materiais/`)
- [ ] Links reais do Noua, MetthodsAnalytics e demais projetos do Ecossistema
- [ ] Substituir texto placeholder de "Sobre" se quiser um tom diferente

## Estrutura de pastas

```
/
├── index.html
├── pesquisa/
│   ├── artigos.html
│   └── projetos.html
├── ensino/
│   ├── bioestatistica.html
│   └── cursos-praticos/
│       ├── ia-medicina.html
│       └── revisao-sistematica.html
├── ecossistema.html
├── sobre.html
├── assets/
│   ├── css/style.css
│   └── js/main.js
└── materiais/
    ├── bioestatistica/
    └── cursos-praticos/
        ├── ia-medicina/
        └── revisao-sistematica/
```

# Site — Bianca Machado, Psicóloga

Site one-page em HTML, CSS e JavaScript puro. Não precisa de build.

## Como editar

Telefone, mensagem do WhatsApp, CRP, Instagram, temas e perguntas do FAQ ficam em
`assets/js/config.js`. Edite e salve, sem mexer no `index.html`.

## Como ver no computador

```bash
python3 -m http.server 8137
```

Depois abra http://localhost:8137. Abrir o `index.html` com duplo clique também funciona.

## Como publicar

Arraste a pasta inteira para o Netlify Drop (app.netlify.com/drop) ou suba em Vercel ou GitHub Pages.

## Pendências com a cliente

- Domínio: trocar `www.dominio.com.br` em `sitemap.xml` e `robots.txt`, e descomentar o `canonical` no `index.html`.
- FAQ: respostas reais de "Quanto tempo dura cada sessão?" e "Você atende por convênio?" (estão como `{{...}}` em `config.js`).
- Conferir o WhatsApp `+55 41 9659-1160`: tem 8 dígitos depois do DDD. Se o celular tiver 9, corrigir em `config.js`.
- Opcional: link de avaliações do Google (`avaliacoesUrl`) e Meta Pixel / GA4 (evento `click_whatsapp` já preparado em `main.js`).

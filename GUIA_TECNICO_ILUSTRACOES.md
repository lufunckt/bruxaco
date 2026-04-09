# Mini Guia Tecnico de Ilustracoes - Bruxinha Cora

Este arquivo organiza como nomear, exportar e encaixar as ilustracoes no prototipo.

## Estrutura sugerida

```text
assets/
  ilustracoes/
    dashboard/
    casa-mamae/
    casa-vovo/
    quarto-cora/
    jardim-sete-luas/
    caderno-cora/
    bruxozap/
    compartilhado/
```

## Regra de nome

Use sempre letras minusculas, hifen e extensao `.webp`.

Padrao:
`<tela>/<tipo>-<assunto>-<variacao>.webp`

Exemplos:
- `dashboard/world-map-scene.webp`
- `dashboard/cora-portrait.webp`
- `casa-mamae/mamae-house-scene.webp`
- `quarto-cora/room-props-sheet.webp`
- `jardim-sete-luas/magic-elements-sheet.webp`
- `caderno-cora/open-journal-scene.webp`

## Tipos recomendados

- `scene`: composicao principal da tela
- `portrait`: retrato de personagem/avatar
- `sheet`: conjunto de objetos, roupas ou props
- `icon`: item pequeno de interface ilustrada
- `sticker`: recorte divertido para chat, reacao ou detalhe recorrente

## Prioridade por tela

- Dashboard: `world-map-scene`, retratos/avatar de Cora, Agata, Vovo, Jade, Noir e Tia Ingrid
- Casa da Mamae: `mamae-house-scene`, `kitchen-props-sheet`, `cora-agata-dialogue`
- Casa da Vovo: `vovo-house-scene`, `vovo-props-sheet`, `vovo-routine-icons`
- Quarto da Cora: `quarto-overview-scene`, `wardrobe-sheet`, `room-props-sheet`
- Jardim das Sete Luas: `jardim-overview-scene`, `jade-director-scene`, `magic-elements-sheet`
- Caderno da Cora: `open-journal-scene`, `journal-tabs-sheet`, `memory-objects-sheet`
- Bruxozap: `phone-portraits-sheet`, stickers e pequenas fotos com visual de app infantil

## Exportacao recomendada

- Formato principal: `WebP`
- Cenas horizontais: `1600px` a `2200px` de largura
- Retratos ou sheets: `900px` a `1400px` de largura
- Use transparencia quando o recorte precisar flutuar no HTML
- Em visual avatar/cartoon, priorize recorte limpo e leitura clara antes de textura

## Encaixe no HTML

Os placeholders usam `data-asset-slot` para marcar onde cada ilustracao entra.

Exemplo:

```html
<aside class="art-frame" data-asset-slot="casa-mamae/mamae-house-scene">
```

Quando a arte chegar, o ideal e trocar o placeholder por:
- `background-image` para cenarios amplos
- `img` com `object-fit: cover` para retratos e recortes de avatar
- sprites ou elementos separados para props, roupas, stickers e pequenos detalhes recorrentes

## Observacoes de estilo

- Priorizar visual cartoon 2D de app infantil
- Personagens com cabeca um pouco maior, silhueta simples e expressao muito legivel
- Cores vivas, limpas e amigaveis
- Objetos grandes e faceis de reconhecer
- Cenarios organizados como casinhas exploraveis, com zonas claras para clique
- Evitar textura de papel, hachura ou acabamento de livro ilustrado classico
- Pensar cada arte como parte de um brinquedo digital modular

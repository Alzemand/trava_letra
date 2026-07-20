# TRAVA LETRA

Jogo de palavras para jogar em grupo: sorteie um tema, fale uma palavra e trave a letra inicial dela antes que o tempo acabe!

Funciona direto no navegador, **offline**, e pode ser **instalado como aplicativo (PWA)** no celular.

## Como rodar

O jogo é 100% estático (sem dependências externas). Basta servir a pasta por HTTP:

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

Para o PWA funcionar (instalação e offline), o site precisa ser servido via **HTTPS** (ou `localhost`). Hospede em qualquer serviço estático, como GitHub Pages, Netlify ou Vercel.

## Instalar no celular (PWA)

1. Abra o site no navegador do celular (Chrome, Edge, Safari...).
2. No Android/Chrome, toque no botão **"Instalar no celular"** que aparece no menu do jogo, ou use "Adicionar à tela inicial" no menu do navegador.
3. No iPhone/Safari, use **Compartilhar → Adicionar à Tela de Início**.

Depois de instalado, o jogo abre em tela cheia e funciona sem internet.

## Regras do Jogo

1. Sorteie um tema. O jogador mais novo começa, seguido pelo jogador à sua esquerda.
2. Na sua vez, você tem o tempo do cronômetro (10 segundos por padrão, ajustável nas Opções) para falar uma palavra do tema e apertar a letra inicial dela (exemplo: se a resposta for "tênis", aperte "T"). Em seguida, passe a vez para o próximo jogador. As letras apertadas não podem ser usadas novamente na mesma rodada, então a dificuldade aumenta a cada resposta.
3. O jogo continua até que todas as letras sejam travadas ou até que sobre apenas um jogador.
4. Se todas as letras forem travadas, uma nova rodada começa com o mesmo tema — agora cada jogador fala **uma palavra a mais** por vez (2 na rodada 2, 3 na rodada 3...).

### Eliminação

Jogadores são eliminados da rodada se:

- Não responderem antes do fim do cronômetro;
- Falarem uma resposta fora do tema ou considerada errada (decidido pelos outros jogadores);
- Apertarem uma letra errada.

### Opções

No menu **⚙️ Opções** é possível:

- Ajustar o tempo por jogada (5, 10, 15 ou 20 segundos);
- Ligar/desligar sons e vibração;
- Ativar as letras difíceis (K, Q, W, X, Y, Z).

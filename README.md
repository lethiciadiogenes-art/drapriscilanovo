# Landing page — Instituto Priscila Correia

Site de uma página da **Dra. Priscila Correia** (Cirurgiã-Dentista, CRO-MG 051816), com foco em Lipo de Papada HD, Super Contorno Mandibular e Harmonização Facial, em Governador Valadares (MG).

Todo o conteúdo veio do Instagram público [@dra.priscilacorreia](https://www.instagram.com/dra.priscilacorreia/): bio, destaques, legendas e fotos/vídeos.

## Estrutura

```
landing-page/
├── index.html              → página única
├── README.md
└── assets/
    ├── css/style.css       → estilos (mobile first)
    ├── js/script.js        → menu mobile, animações, formulário → WhatsApp
    └── images/
        ├── hero.jpg / hero-sm.jpg                 → Dra. no Instituto (frame de reel)
        ├── about.jpg / about-sm.jpg               → retrato na parede magenta (post)
        ├── service-lipo-papada.jpg / -sm.jpg      → Dra. em procedimento (post)
        ├── experiencia.jpg / -sm.jpg              → Dra. na cadeira (frame de reel)
        ├── estrutura.jpg / -sm.jpg                → sala com cadeira dourada (post)
        ├── mentoria.jpg / -sm.jpg                 → entrega de certificados (post)
        ├── og-image.jpg                           → imagem de compartilhamento
        ├── favicon.svg
        └── service-*.jpg (4 arquivos)             → ESPAÇOS RESERVADOS (ver abaixo)
```

Cada foto existe em duas versões: tamanho cheio e `-sm` (560 px) para celulares. O navegador escolhe a versão certa automaticamente.

## Como visualizar

Abra o `index.html` no navegador com dois cliques. Não precisa instalar nada.

## Fotos que precisam ser trocadas

Estes quatro arquivos são espaços reservados com a etiqueta "Espaço para foto". Para trocar, basta salvar uma foto nova com o **mesmo nome** (JPG, de preferência na vertical 4:5, com cerca de 960 px de largura) e substituir as duas versões:

- `service-toxina-botulinica.jpg` e `service-toxina-botulinica-sm.jpg`
- `service-labios.jpg` e `service-labios-sm.jpg`
- `service-rinomodelacao.jpg` e `service-rinomodelacao-sm.jpg`
- `service-pele-de-boneca.jpg` e `service-pele-de-boneca-sm.jpg`

Na parte pública do Instagram não havia fotos desses tratamentos que pudessem ser usadas (a maioria tem texto por cima ou mostra antes/depois de pacientes).

## Como editar textos e contatos

- **Textos:** estão todos no `index.html`, com comentários marcando cada seção.
- **WhatsApp:** o número `5533984108874` aparece nos links `wa.me` do `index.html` e na variável `WHATSAPP_NUMBER` em `assets/js/script.js`. Para trocar, use "Localizar e substituir" no editor.
- **Cores e fontes:** ficam no topo do `style.css` (`:root`).

## Formulário

O formulário não depende de servidor. Ao enviar, ele abre o WhatsApp com nome, interesse e mensagem já preenchidos. Nada fica salvo no site.

## Publicar no GitHub Pages

1. Crie uma conta em github.com (se ainda não tiver).
2. Clique em **New repository**, dê um nome (ex.: `instituto-priscila-correia`), marque **Public** e crie.
3. Na página do repositório, clique em **uploading an existing file** e arraste **o conteúdo** da pasta `landing-page` (o `index.html` precisa ficar na raiz, junto com a pasta `assets`). Clique em **Commit changes**.
4. Vá em **Settings → Pages**. Em *Source*, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`, e clique em **Save**.
5. Em 1 a 3 minutos o site estará no ar em `https://SEU-USUARIO.github.io/instituto-priscila-correia/`.

Para usar um domínio próprio (ex.: `www.drapriscilacorreia.com.br`), configure em **Settings → Pages → Custom domain** e siga as instruções de DNS do GitHub. Depois, troque `assets/images/og-image.jpg` na tag `og:image` pelo endereço completo, para a imagem aparecer ao compartilhar o link.

## O que confirmar com a cliente antes de publicar

1. **Endereço completo** do Instituto (o site diz apenas "Governador Valadares – MG"), horários de atendimento e se deve aparecer um mapa.
2. **Fotos dos tratamentos** que faltam: toxina botulínica, lábios, rinomodelação e Protocolo Pele de Boneca.
3. **Autorização de uso de imagem** da paciente que aparece na foto do procedimento e das duas alunas na foto da Mentoria.
4. **Lista de tratamentos e descrições.** Os nomes vieram dos destaques do Instagram (Lábios, Melasma, Lipoplastia HD, Rinomodelação, Botox, Contorno). Confirme se há outros e se as descrições estão corretas.
5. **Etapas do atendimento** ("Primeiro contato → Avaliação → Plano → Procedimento e cuidado") e a promessa de orientações de preparo/pós.
6. **Mentoria VIP:** formato, duração, pré-requisitos e se a "entrega de certificado" vale para a mentoria (o certificado visto na foto é de um curso de toxina botulínica).
7. Se há **equipe/secretária** respondendo o WhatsApp (o texto não cita equipe).
8. Se ela quer usar a frase "Referência em Lipo de Papada HD", que está na bio. O site não usa essa frase, por cautela com as regras de publicidade do CFO.
9. Se existe **logotipo** oficial (o site usa um monograma "PC" provisório).
10. **Domínio** do site e se haverá Google Analytics/Meta Pixel.

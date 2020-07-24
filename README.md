## Player de vídeo customizado com React 
O player foi desenvolvido seguindo um video tutorial do canal da Alura (<a href="https://www.youtube.com/watch?v=ZaYvwn9nBD4">Fazendo um player de vídeo com React</a>);

O player em si não tem nada de mais, mas nele ja pode ser visto 3 hooks poderosos usado para controlar o estado componente;
- useState: onde guardamos as propriedades que sofrem alteração de estado conforme a uma interação no componente;
- useRef: usado para referenciar objeto;
- useEffect: ele que cuida para que quando uma propriedade que foi passada para mude o valor ele execute uma função

Alem dos hooks outra coisa que pude ver no video foi o conceito de imutabilidade não alteramos um valor e sim recriamos, o conceito é usado sempre no **setPlayerState**
const testimonios = [
    {
      texto: "roadmap.sh es un recurso increíble. Lo descubrí en mis días universitarios en 2018. ¡Hoy ha impactado a millones de vidas!",
      autor: "Artem Jones",
      imagen: "./2.png"
    },
    {
      texto: "Gracias a roadmap.sh conseguí mi primer trabajo como desarrollador. Me ayudó a entender qué aprender y cómo mejorar rápido.",
      autor: "Laura Smith",
      imagen: "./1.jpg"
    },
    {
      texto: "Como manager, recomiendo roadmap.sh a todos mis juniors. Les da una estructura clara para crecer de manera profesional.",
      autor: "Carlos Díaz",
      imagen: "./3.png"
    }
  ];
  
  let indiceActual = 0;
  
  const textoElemento = document.getElementById('testimonio-texto');
  const autorElemento = document.getElementById('testimonio-autor');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  function mostrarTestimonio(indice) {
    const testimonio = testimonios[indice];
    textoElemento.textContent = testimonio.texto;
    autorElemento.innerHTML = `
      <img src="${testimonio.imagen}" alt="Foto de ${testimonio.autor}">
      <div class="name">${testimonio.autor}</div>
    `;
  }
  
  prevBtn.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + testimonios.length) % testimonios.length;
    mostrarTestimonio(indiceActual);
  });
  
  nextBtn.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % testimonios.length;
    mostrarTestimonio(indiceActual);
  });
  
  // Mostrar el primer testimonio al cargar
  mostrarTestimonio(indiceActual);
  

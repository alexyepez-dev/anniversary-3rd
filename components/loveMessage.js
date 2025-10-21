export function createLoveMessage() {
  const div = document.createElement("div");
  div.className =
    "bg-blue-100 m-4 border-l-4 border-purple-600 text-black-700 p-4 rounded";
  div.setAttribute("role", "alert");
  div.innerHTML = `
    <p class="font-bold text-purple-600">De mi para ti</p>
    <p>Cada día a tu lado es un regalo. No solo me enamoras con tu sonrisa, sino con tu forma de vernos, con la ternura que llevas en el alma y la paz que traes a mi vida.
    A tu lado, aprendí que el amor no se trata de grandes gestos, sino de los pequeños momentos: una mirada que dice todo, un silencio compartido, una mano que te sostiene sin soltar.
    Tú eres mi lugar seguro, mi inspiración constante, la persona con la que quiero construir todos mis días. <strong>Feliz aniversario mi amor</strong> 💜</p>
  `;

  // Activar animación después de insertarlo
  requestAnimationFrame(() => {
    div.classList.remove("opacity-0", "translate-y-4");
    div.classList.add("opacity-100", "translate-y-0");
  });

  return div;
}

/* ============================= */
/* LISTA DE INVITADOS */
/* ============================= */
/*
Ejemplo de URL:
index.html?id=abc123
*/

const invitados = {
    "abc12346": "Juan Pérez y Sra",
    "def456": "María López",
    "ghi789": "Carlos Rodríguez",
    "jkl012": "Familia Gómez"
    // agrega más aquí
};

/* ============================= */
/* OBTENER PARÁMETROS URL */
/* ============================= */
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

/* ============================= */
/* ELEMENTOS DOM */
/* ============================= */
const nombreSpan = document.getElementById("nombre");
const card = document.getElementById("card");
const botones = document.querySelector(".botones");

/* ============================= */
/* VALIDAR INVITADO */
/* ============================= */
if (!id || !invitados[id]) {
    card.innerHTML = `
        <h1>Acceso no válido</h1>
        <p class="mensaje">Esta invitación no es válida.</p>
    `;
    throw new Error("Invitado no válido");
}

/* ============================= */
/* MOSTRAR NOMBRE */
/* ============================= */
const nombreInvitado = invitados[id];
nombreSpan.textContent = nombreInvitado;

/* ============================= */
/* CLAVE LOCALSTORAGE */
/* ============================= */
const storageKey = `respuesta_enviada_${id}`;

/* ============================= */
/* SI YA RESPONDIÓ */
/* ============================= */
if (localStorage.getItem(storageKey)) {
    botones.innerHTML = `
        <p style="
    font-family: 'Great Vibes', cursive;
    font-size: 38px;
    font-weight: 600;
    color: #000000;
    text-align: center;
    line-height: 1.4;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    box-shadow: 0 3px 8px rgba(0,0,0,0.2);
">
    Ya registraste tu respuesta.<br>
    ¡Muchas gracias!
</p>

    `;
}

/* ============================= */
/* FUNCIÓN ENVIAR */
/* ============================= */
function enviar(respuesta) {

    // Bloqueo anti-duplicado
    if (localStorage.getItem(storageKey)) return;

    const formURL =
        "https://docs.google.com/forms/d/e/1FAIpQLSffPStYwPf0ZKIaLLDqJGgw08wU8Oa269fhUuEo7qYY0_zUWg/formResponse";

    const data = new URLSearchParams();
    data.append("entry.440852477", nombreInvitado); // Nombre
    data.append("entry.277836743", respuesta);      // Respuesta

    fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: data
    });

    // Guardar bloqueo
    localStorage.setItem(storageKey, "true");

    // Mensaje final
    botones.innerHTML = `
        <p style="
    font-family: 'Great Vibes', cursive;
    font-size: 37px;
    font-weight: 700;
    color: #000000;
    text-align: center;
    line-height: 1.4;
    padding: 8px 15px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
">
    ¡Gracias por confirmar!
</p>

    `;
}

/* ============================= */
/* HACER FUNCIÓN GLOBAL */
/* ============================= */
window.enviar = enviar;

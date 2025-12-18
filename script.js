/* ============================= */
/* LISTA DE INVITADOS */
/* ============================= */
/*
Ejemplo de URL:
index.html?id=abc123
*/

const invitados = {
    "kjbgfuestg1": "Marina Quispe",
    "lamcdnhfeu2": "Alfonso Quispe",
    "prxowqazlm3": "Daynor López",
    "tefndksuop4": "Emilio Quispe",
    "bqmxrtaevi5": "Leandro Quispe",
    "zlnwoepfkc6": "Jhossy",
    "ahgtsmrbdu7": "Cecilio Quispe",
    "ypkvncwlea8": "Carla Quispe",
    "fomrbtqahk9": "Miguel Sejas",
    "rkvbmeuqlt11": "Daveiba Quispe",
    "cwfahdpxmr12": "Alejandra Quispe",
    "eqzntkbslu13": "Dorian Quispe",
    "uopmxdfrka14": "Ruby Sánchez",
    "hlrqvctesn15": "Ines Sánchez",
    "jxwmuqarfk16": "Monzerrat Sánchez",
    "dntlbpsqae17": "Gerardo Sánchez",
    "zpmrkxwfut18": "Leonela",
    "tdnwqarfpl21": "Inés Quispe",
    "mksqazrfwe22": "Simón López",
    "cptzruhwme25": "Juan Quispe",
    "nqarfdswpx26": "Patricia Paredes",
    "ejmltupzrk27": "María Gonzales",
    "fsqwrmlndh28": "Abril Paredes",
    "rbxpufeqas29": "Cesar Paredes",
    "qewmdphzlr30": "Arminda Cortez",
    "uaxrptmseh31": "Angel Bautista",
    "fwdlpxrmeq32": "Samuel Bautista",
    "khqstnupmw33": "Lourdes Loroña",
    "mnsuqwdfxr35": "Ana Bautista",
    "twlhpxqarf36": "David Tapia",
    "dsrmwqltpa37": "Juana Villan",
    "bmhufqwrxe38": "Saturnino Tapia",
    "lnwqespmrf39": "Juana Quispe",
    "qptzxmufle40": "Evan Coris",
    "zmlrpxdwqa42": "Frida López",
    "nqufprxwhm43": "Liliana López",
    "tksqpldmxr44": "Carmen López",
    "wqarfzxpem45": "Gover Flores",
    "uqewndzplr47": "Fredy López",
    "afxqmpwrdn48": "Mery Ticona",
    "rwdnplxmqf49": "Rous",
    "pzqewxmrdl50": "Victor",
    "hmxqewnrpt51": "Sonia",
    "qnwmrzpxdf54": "María",
    "txrplwqmdf55": "Omar Cocarico",
    "mwrqzpxndf56": "Dayana Quisbert",
    "wplrmdqxzf59": "Omar Angel",
    "xqzmplrdfw60": "Vanesa",
    "qrmwplxdfz61": "Omar",
    "dzxwqlrmfp62": "Luis Loza",
    "rpxwqdlmzf63": "Rudy",
    "fzmrxpwqdl64": "Noemi",
    "qxdrwmplzf65": "Beymar Conde",
    "wqplzdfmxr66": "Stefany Cabrera",
    "rxwzmdpqfl67": "Diego Ticona",
    "qdlxwpmzrf68": "Kevin Quispe",
    "zplrqwdfmx69": "Ivan ",
    "xmwzqprldf70": "Mariana Gutierrez",
    "qrfmdxpzwl71": "Paul",
    "pldwqzrmxf72": "Milton Ticona",
    "wmqxdrzplf73": "Alejandra Quispe",
    "zdfxwqmrpl74": "Marcelo Mamani",
    "qplzxfdrmw75": "Andrea Quispe",
    "mfxrwdplzq76": "Pablo Tarqui",
    "qwdzplxrmf77": "Yavi primo",
    "zqlwpxrfmd79": "Yuri Conde",
    "xdfzplwmrq80": "Silvia Quispe",
    "qplwzdmrxf81": "chio",
    "wmxqzpldrf82": "Esposo de tia chio",
    "rxfzplwqmd83": "William Cuba",
    "qmdwxplzrf84": "Gabriel Carvajal",
    "zrfplwqmdx85": "Brisa Marquez",
    "xplwqzmdrf86": "Chico de brisa",
    "qzmdplwxrf87": "Luzmil Triguero",
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
    data.append("entry.1209746996", nombreInvitado); // Nombre
    data.append("entry.1004321445", respuesta);      // Respuesta

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

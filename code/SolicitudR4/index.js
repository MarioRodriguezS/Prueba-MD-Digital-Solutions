/* Script que consume la API de mediastock y plasma la respuesta en una tabla. La tabla
es agregada dinámicamente y como medida de seguridad, dado que en el dashboard de mediastack
no se puede restringir el dominio de solicitud, se guarda la Key de la APi en un módulo externo*/
import KEY from "./js/key.js";

const d = document,
    $table = d.querySelector(".table"),
    $loading = d.querySelector(".loading"),
    $menu = d.querySelector(".select");
let $fragment = "";
let language  = "es";

fetch(`http://api.mediastack.com/v1/news?access_key=${KEY.key}&languages=${language}`)
.then(res=>res.json())
.then(json=>{
    json.data.forEach(el => {
        el.author?el.author = el.author:el.author = "Sin autor"
        $fragment += `<tr>
        <td>${el.title}</td>
        <td>${el.author}</td>
        <td>${el.category}</td>
        <td>${el.country}</td>
        <td>${new Date(el.published_at).toLocaleDateString()}</td>
        <td><a href="${el.url}"target="_blank">Ver noticia</a></td>
        </tr>`;
    });
    $table.innerHTML += $fragment
    $loading.style.display = "none";
}).catch(err => {
    let error = d.createElement("p")
    error.textContent = `Ocurrió un error al cargar las noticias, inténtelo de nuevo: ${err}`
    $table.insertAdjacentElement(error)
    console.log(err)})



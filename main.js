import "./style.css";
import data from '/public/data.json';
import { nav } from "./nav";

const listeNews = () => {
  let html = '';
  for (let i = 0; i < data.length; i++) {
    const article = data[i];
    let articleCard = `
      <a class="" href="/news/?id=${article.id}">
        <div class="">
          <h5 class="hover:text-sky-500 transition">${article.title}</h5>
        </div>
      </a>
    `;
    html += articleCard;
  }
  return html;
};

document.querySelector("#app").innerHTML = `
  <main class="bg-slate-900 min-h-screen text-white font-bold">
    ${nav}
    <div>
      <div class="px-6 py-2"> 
        <h1 class="font-bold text-2xl underline text-orange-400 drop-shadow-md my-2">Accueil</h1>   
        ${listeNews()}
      </div>
    </div>
  </main>
`;

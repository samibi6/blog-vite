import "./style.css";
import data from '/public/data.json';
import { nav } from "./nav";

const listeNews = () => {
  let html = '';
  for (let i = 0; i < data.length; i++) {
    const article = data[i];
    let articleCard = `
      <a class="group block w-full h-96" href="/news/?id=${article.id}">
        <div class="bg-slate-600 rounded-lg p-3 h-full col-span-1 hover:shadow-lg hover:shadow-[0px_0px_0px_5px_rgba(255,255,255,0.8)] opacity-70 hover:opacity-100 transition">
          <div class="h-2/4 w-full mx-auto">
            <img src="${article.img}" class="object-cover h-full w-full rounded-t-md">
          </div>
          <div class="my-5">
            <h5 class="group-hover:text-sky-500 transition text-lg mb-2">${article.title}</h5>
            <p class="font-normal text-sm">${article.content.substr(0, 100)}</p>
          </div>
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
      <h1 class="font-bold text-2xl underline text-orange-400 drop-shadow-md ml-6 my-4">Accueil</h1>
      <div class="px-6 py-2 grid grid-cols-5 gap-12 place-items-center">    
        ${listeNews()}
      </div>
    </div>
  </main>
`;

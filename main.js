/* erselerbay.com - shared script
   ------------------------------------------------------------
   EDIT ME: personal stats used by the "player card".
   - BIRTH_DATE powers the live age counter. TODO: set your real
     birth date (YYYY-MM-DD). The current value is an estimate!
   - Update GAMES_FINISHED / COUNTRIES_VISITED whenever they grow.
   ------------------------------------------------------------ */

var BIRTH_DATE = "1993-09-20"; // TODO: replace with your real birth date
var GAMES_FINISHED = 530;
var COUNTRIES_VISITED = 34;
var CURRENT_CITY = "Hamburg, DE";
var ANIME_COMPLETED = 275;      // from myanimelist.net/animelist/Jetdoctor
var MOVIES_SHOWS_RATED = "1024";   // TODO: your IMDb ratings page shows "X titles" at the top - put that number here

// Live age counter (updates ~20x per second, like the old site)
function startAgeCounter() {
  var el = document.getElementById("live-age");
  if (!el) return;
  var birth = new Date(BIRTH_DATE + "T00:00:00");
  var msPerYear = 365.2425 * 24 * 60 * 60 * 1000;
  function tick() {
    var age = (Date.now() - birth.getTime()) / msPerYear;
    el.textContent = age.toFixed(8);
  }
  tick();
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(tick, 50);
  }
}

function fillStats() {
  var g = document.getElementById("stat-games");
  var c = document.getElementById("stat-countries");
  var city = document.getElementById("stat-city");
  if (g) g.textContent = GAMES_FINISHED;
  if (c) c.textContent = COUNTRIES_VISITED;
  if (city) city.textContent = CURRENT_CITY;
  var an = document.getElementById("stat-anime");
  var mv = document.getElementById("stat-movies");
  if (an) an.textContent = ANIME_COMPLETED;
  if (mv) mv.textContent = MOVIES_SHOWS_RATED;
}

// Mobile nav toggle
function setupNav() {
  var btn = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (!btn || !links) return;
  btn.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  startAgeCounter();
  fillStats();
  setupNav();
});

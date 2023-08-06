function main() {
  document.getElementById("btnMenu").addEventListener("click", function () {
    document.querySelector("#btnMenu .fa-bars").classList.toggle("hidden");
    document.querySelector("#btnMenu .fa-sharp").classList.toggle("hidden");
    document.querySelector(".nav").classList.toggle("open");
  });
}

main();

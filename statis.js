// Salinan statis sementara: tidak ada server untuk menerima isian form.
(function () {
  var en = document.documentElement.lang === "en";
  var teks = en
    ? "Online forms are temporarily unavailable. Please reach us through the "
    : "Formulir daring untuk sementara tidak aktif. Silakan hubungi kami lewat halaman ";
  var label = en ? "Contact page" : "Kontak";
  var href = en ? "/en/kontak" : "/kontak";
  function ganti() {
    document.querySelectorAll("form").forEach(function (f) {
      if (f.dataset.statis) return;
      f.dataset.statis = "1";
      f.style.display = "none";
      var p = document.createElement("p");
      p.style.cssText = "padding:1rem 1.25rem;border:1px solid currentColor;border-radius:1rem;opacity:.85;margin:1rem 0";
      p.appendChild(document.createTextNode(teks));
      var a = document.createElement("a");
      a.href = href;
      a.textContent = label;
      a.style.textDecoration = "underline";
      p.appendChild(a);
      p.appendChild(document.createTextNode("."));
      f.parentNode.insertBefore(p, f);
    });
  }
  // Setelah React selesai hidrasi, supaya DOM yang diubah tidak bentrok.
  window.addEventListener("load", function () { setTimeout(ganti, 300); });
})();

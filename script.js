// نختار العناصر التي سنتعامل معها من الصفحة
const root = document.documentElement;
const themeButton = document.querySelector("#theme-toggle");
const printButton = document.querySelector("#print-button");

// نقرأ الوضع المحفوظ سابقًا، وإن لم يوجد نتبع إعداد الجهاز
let theme = localStorage.getItem("cv-theme");
if (!theme) {
  theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// نطبّق الوضع ونحدّث نص الزر
function applyTheme(value) {
  root.dataset.theme = value;          // يضيف data-theme="dark" على <html>
  const isDark = value === "dark";
  themeButton.textContent = isDark ? "الوضع النهاري" : "الوضع الليلي";
  themeButton.setAttribute("aria-pressed", String(isDark));
}

applyTheme(theme);

// عند الضغط: نبدّل الوضع ونحفظ الاختيار في المتصفح
themeButton.addEventListener("click", function () {
  theme = theme === "dark" ? "light" : "dark";
  applyTheme(theme);
  localStorage.setItem("cv-theme", theme);
});

// زر الطباعة يفتح نافذة الطباعة (ومنها حفظ PDF)
printButton.addEventListener("click", function () {
  window.print();
});

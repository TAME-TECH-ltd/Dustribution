if (!location.href.includes("/retailer/")) {
  document
    .getElementById("app-icons")
    .setAttribute("href", "/css/icons.min.css?v=3.0.0");
} else {
  document
    .getElementById("retailer-theme")
    .setAttribute("href", "/css/retailer.css");
}

var backhtml = "";
var index = 0;
for (var iterator of json.data) {
  var name = iterator["name"] || "Sosyal Medya";
  backhtml += `
        <a href="${iterator["externalUrl"]}" target="_blank" style="text-decoration: none;" aria-label="${name}">
            <img src="${iterator["img"]}" alt="${name}" class="modulex-media" loading="lazy" />
        </a>`;
  index++;
}
html = html.replace(new RegExp("{{html}}", "g"), backhtml);

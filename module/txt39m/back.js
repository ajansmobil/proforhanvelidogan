const pagesettingjson = webmakerdata.pagesetting.data.find(
  (item) => item.modulestatus?.page,
);
let backhtml = `<li class="menu__item"><a class="menu_link" href="/${json.lang}/">@home@</a></li>`;
if (pagesettingjson) {
  for (const page of webmakerdata[pagesettingjson.path]?.data || []) {
    if (page.status === "play") {
      backhtml += `<li class="menu__item"><a class="menu_link" href="/${
        json.lang
      }/${page.path}/">${page.name[json.lang]}</a></li>`;
    }
  }
}
let color = json.desing.color.replace(/#/g, "");
html = html.replace(/{{html}}/g, backhtml).replace(/#color#/g, color);

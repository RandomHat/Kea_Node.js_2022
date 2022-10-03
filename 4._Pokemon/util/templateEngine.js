import fs from "fs";

const navComponent = fs.readFileSync("./public/components/navbar/navbar.html").toString();
const footerComponent = fs.readFileSync("./public/components/footer/footer.html").toString();

export function renderPage(path, config={tabTitle : "Default", cssLink : ""}){
    const page = fs.readFileSync("./public/pages" + path).toString();

    return navComponent
            .replace("%%TAB_TITLE%%", config.tabTitle)
            .replace("%%CSS%%", `<link rel="stylesheet" href="/pages${config.cssLink}">`
            )
            + page
            + footerComponent;                 
}

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();

const frontpageSandwich = navComponent.replace("%%TAB_TITLE%%", "Pokemon Frontpage")
                                    .replace("%%CSS%%", '<link rel="stylesheet" href="/pages/frontpage/frontpage.css">' ) + frontpage + footerComponent;

const battle = fs.readFileSync("./public/pages/battle/battle.html").toString();
const battleSandwich = navComponent.replace("%%CSS%%", '<link rel="stylesheet" href="/pages/battle/battle.css">' ) + battle + footerComponent;

const contactpage = fs.readFileSync("./public/pages/contact-page/contact-page.html").toString();
const contactSandwich = navComponent.replace("%%CSS%%", '<link rel="stylesheet" href="/pages/contact-page/contact-page.css">' ) + contactpage + footerComponent;
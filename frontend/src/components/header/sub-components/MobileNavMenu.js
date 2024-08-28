import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileNavMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>{t("vapes")}</Link>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/"}>{t("Brands")}</Link>
              <ul className="sub-menu">
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/geekBar"}
                  >
                    {t("Geek Bar")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/lostMary"}
                  >
                    {t("Lost Mary")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/primeBar"}
                  >
                    {t("Prime Bar")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-catalog/funkyLands"
                    }
                  >
                    {t("Funky Lands")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/breeze"}
                  >
                    {t("Breeze Smoke")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/elfBar"}
                  >
                    {t("Elf Bar")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/plena"}
                  >
                    {t("Plena 18k")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/flum"}
                  >
                    {t("Flum")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/elux"}
                  >
                    {t("Elux")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/hyppe"}
                  >
                    {t("Hyppe")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/bugatti"}
                  >
                    {t("Bugatti")}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/"}>{t("Flavors")}</Link>
              <ul className="sub-menu">
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/exotic"}
                  >
                    {t("Exotic")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/sweet"}
                  >
                    {t("Sweet")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/fruity"}
                  >
                    {t("Fruity")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/tobacco"}
                  >
                    {t("Tobacco")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/dessert"}
                  >
                    {t("Dessert")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/citrus"}
                  >
                    {t("Citrus")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/mint"}
                  >
                    {t("Mint")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/candy"}
                  >
                    {t("Candy")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-catalog/sweet-ice"
                    }
                  >
                    {t("Sweet Ice")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL +
                      "/shop-catalog/sweet-citrus"
                    }
                  >
                    {t("Sweet Citrus")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-catalog/fruity-ice"
                    }
                  >
                    {t("Fruity Ice")}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/"}>{t("Tanks & Mods")}</Link>
              <ul className="sub-menu">
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-catalog/geekVapes"
                    }
                  >
                    {t("Geek Vape")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/smok"}
                  >
                    {t("Smok")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-catalog/vaporesso"
                    }
                  >
                    {t("Vaporesso")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/voopoo"}
                  >
                    {t("VooPoo")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/freeMax"}
                  >
                    {t("FreeMax")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/lostVape"}
                  >
                    {t("Lost Vape")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/uwell"}
                  >
                    {t("UWELL")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/suorin"}
                  >
                    {t("Suorin")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/miPod"}
                  >
                    {t("Mi-Pod")}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            {t("e-liquid")}
          </Link>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                {t("E-Liquid")}
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-catalog/vapetasia"
                    }
                  >
                    {t("Vapetasia")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/podJuice"}
                  >
                    {t("Pod Juice")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-catalog/candyKings"
                    }
                  >
                    {t("Candy Kings")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/cnurdz"}
                  >
                    {t("Cloud Nurdz Iced")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-catalog/juiceHead"
                    }
                  >
                    {t("Juice Head")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/cclouds"}
                  >
                    {t("Coastal Clouds")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/orgnx"}
                  >
                    {t("Orgnx")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/daze"}
                  >
                    {t("Reds & Daze")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/naked"}
                  >
                    {t("Naked 100")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/twist"}
                  >
                    {t("Twist")}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/product/1"}>
                {t("Salt Nic")}
              </Link>
              <ul className="sub-menu">
              <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-catalog/daze-salt"
                    }
                  >
                    {t("Daze Salt Series")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-catalog/airFactory"
                    }
                  >
                    {t("Air Factory")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL +
                      "/shop-catalog/vapetasia-salt"
                    }
                  >
                    {t("Vapetasia Salts")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/shop-catalog/saltNkd"}
                  >
                    {t("Salt Nkd 100")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL +
                      "/shop-catalog/podJuice-salt"
                    }
                  >
                    {t("Pod Juice")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-catalog/orgnx-salt"
                    }
                  >
                    {t("Orgnx Salt Nic")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL +
                      "/shop-catalog/juiceHead-salt"
                    }
                  >
                    {t("Juice Head Salts")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-catalog/cnurdz-salt"
                    }
                  >
                    {t("Cloud Nurdz Salts")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL +
                      "/shop-catalog/cclouds-salt"
                    }
                  >
                    {t("Coastal Clouds")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      process.env.PUBLIC_URL + "/shop-catalog/twist-salt"
                    }
                  >
                    {t("Twist Nicotine Salt")}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            {t("collection")}
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>{t("smoke")}</Link>
          <ul className="sub-menu">
          <li>
              <Link
                to={process.env.PUBLIC_URL + "/shop-catalog/vaporizers"}
              >
                {t("Vaporizers")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-catalog/dab"}>
                {t("Dab Rigs")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-catalog/pipe"}>
                {t("Hand Pipes")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-catalog/bong"}>
                {t("Water Pipes")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-catalog/custom"}>
                {t("Custom Glass")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-catalog/papers"}>
                {t("Rolling Papers")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-catalog/hookahs"}>
                {t("Hookahs")}
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
            {t("Accessories")}
          </Link>
          <ul className="sub-menu">
          <li>
              <Link to={process.env.PUBLIC_URL + "/shop-catalog/gat"}>
                {t("Grinders & Trays")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-catalog/coils"}>
                {t("Replacement Coils")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-catalog/parts"}>
                {t("Replacement Parts")}
              </Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/shop-catalog/specialty"}
              >
                {t("Specialty Items")}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/"}>
            {t("Home ")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();
  
  return (
    <div
      className={clsx(sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`)}
    >
      <nav>
        <ul>
        <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {t("Home")}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {t("Vapes")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu mega-menu-padding">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {t("Vape Brands")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/geekBar"}>
                      {t("Geek Bar")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/lostMary"}>
                      {t("Lost Mary")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/primeBar"}>
                      {t("Prime Bar")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/funkyLands"}>
                      {t("Funky Lands")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/breeze"}>
                      {t("Breeze Smoke")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/elfBar"}>
                      {t("Elf Bar")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/plena"}>
                      {t("Plena 18k")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/flum"}>
                      {t("Flum")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/elux"}>
                      {t("Elux")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/hyppe"}>
                      {t("Hyppe")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/bugatti"}>
                      {t("Bugatti")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/disposables"}>
                      {t("Vape Flavors")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/exotic"}>
                      {t("Exotic")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/sweet"}>
                      {t("Sweet")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/fruity"}>
                      {t("Fruity")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/tobacco"}>
                      {t("Tobacco")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/dessert"}>
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
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/mint"}>
                      {t("Mint")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/candy"}>
                      {t("Candy")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/sweetIce"}>
                      {t("Sweet Ice")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/sweetCitrus"}>
                      {t("Sweet Citrus")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/fruityIce"}>
                      {t("Fruity Ice")}
                    </Link>
                  </li>
                  
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      {t("Tanks & Mods")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/geekVape"}>
                      {t("Geek Vape")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/smok"}>
                      {t("Smok")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/vaporesso"}>
                      {t("Vaporesso")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/voopoo"}>
                      {t("VooPoo")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/freemax"}>
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
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/uwell"}>
                      {t("UWELL")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/sourin"}>
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
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-catalog/eliquid"}>
              {" "}
              {t("E-Liquid")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/miPod"}>
                      {t("E-Liquid")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/vapetasia"}>
                      {t("Vapetasia")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/podJuice"}>
                      {t("Pod Juice")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/candyKings"}>
                      {t("Candy Kings")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/cloudNerdz"}>
                      {t("Cloud Nurdz Iced")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/juiceHead"}>
                      {t("Juice Head")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/coastalClouds"}>
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
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/daze"}>
                      {t("Reds & Daze")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/naked"}>
                      {t("Naked 100")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/twist"}>
                      {t("Twist")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/humble"}>
                      {t("Humble")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={process.env.PUBLIC_URL + "/shop-filtered-grid"}>
                      {t("Salt Nic")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/dazeSalt"}>
                      {t("Daze Salt Series")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/airFactory"}>
                      {t("Air Factory")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/vapetasiaSalts"}>
                      {t("Vapetasia Salts")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/saltNkd"}>
                      {t("Salt Nkd 100")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/podJuice"}>
                      {t("Pod Juice")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/shop-catalog/orgnxSalt"}
                    >
                      {t("Orgnx Salt Nic")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/juiceHeadSalts"}>
                      {t("Juice Head Salts")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/cloudNurdzSalts"}>
                      {t("Cloud Nurdz Salts")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/ccloudSalt"}>
                      {t("Coastal Clouds")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop-catalog/twistSalt"}>
                      {t("Twist Nicotine Salt")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-img">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/banner/banner-12.png"
                        }
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-catalog/smoke"}>
              {t("Smoke")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-catalog/vaporizers"}>
                  {t("Vaporizers")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-catalog/dabRigs"}>
                  {t("Dab Rigs")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-catalog/handPipes"}>
                  {t("Hand Pipes")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-catalog/waterPipes"}>
                  {t("Water Pipes")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-catalog/custom"}>
                  {t("Custom Glass")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-catalog/rollPapers"}>
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
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-catalog/accessories"}>
              {t("Accessories")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop-catalog/grinder"}>
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
                <Link to={process.env.PUBLIC_URL + "/shop-catalog/specialty"}>
                  {t("Specialty Items")}
                </Link>
              </li>
            </ul>
          </li>
          {/*<li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {t("Contact Us")}
            </Link>
          </li>*/}
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;

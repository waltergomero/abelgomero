import PropTypes from "prop-types";
import Link  from "next/link";
import { getClosest, getSiblings, slideToggle, slideUp } from "../../../utils";
import SocialIcon from "../../social-icon";

const MobileMenu = ({ show, onClose }) => {
    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("menu-expand") ||
            target.classList.contains("menu-expand")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === "UL") {
                        slideUp(child, 1000);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 1000);
                }
            });
        }
    };
    return (
        <div
            className={`offcanvas offcanvas-mobile-menu ${
                show ? "offcanvas-open" : ""
            }`}
        >
            <div className="inner">
                <div className="border-bottom mb-3 pb-3 text-end">
                    <button className="offcanvas-close" onClick={onClose}>
                        ×
                    </button>
                </div>
                <div className="offcanvas-head mb-3">
                    <div className="header-top-offcanvas">
                        <p>
                            <i className="icofont-google-map"></i>{" "}
                            <span>Direccion:</span> Jiron Pureza MZ-5 Lote-6, Urb. Pro, Los Olivos, Lima
                        </p>
                    </div>
                </div>
                <nav className="offcanvas-menu">
                    <ul>
                        <li>
                            <Link exact href="/">
                                <span className="menu-text">Pagina principal</span>
                            </Link>
                            <span
                                className="menu-expand"
                                onClick={onClickHandler}
                                aria-hidden="true"
                            ></span>
                        </li>
                        <li>
                            <Link href="/contact">
                                Contactar
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="offcanvas-social my-4">
                    <ul>
                        <li>
                            <SocialIcon
                                path="https://twitter.com/"
                                icon="icofont-twitter"
                            />
                        </li>
                        <li>
                            <SocialIcon
                                path="https://www.facebook.com/abel.gomero.712/"
                                icon="icofont-facebook"
                            />
                        </li>
                        <li>
                            <SocialIcon
                                path="https://www.instagram.com/"
                                icon="icofont-instagram"
                            />
                        </li>
                        <li>
                            <SocialIcon
                                path="https://rss.com/"
                                icon="icofont-rss-feed"
                            />
                        </li>
                        <li>
                            <SocialIcon
                                path="https://www.youtube.com/"
                                icon="icofont-play-alt-1"
                            />
                        </li>
                    </ul>
                </div>

                <ul className="media-wrap">
                    <li className="media media-list">
                        <span className="media-icon">
                            <i className="icofont-clock-time"></i>
                        </span>
                        <div className="media-content">
                            <span className="media-sub-heading">
                            Horario de atencion:
                            </span>
                            <span className="media-heading">
                            Lun - Sab: 8:00 AM - 7:00 PM{" "}
                            </span>
                        </div>
                    </li>

                    <li className="media media-list">
                        <span className="media-icon">
                            <i className="icofont-ui-call"></i>
                        </span>
                        <div className="media-content">
                            <span className="media-sub-heading">
                                emergencia 24/7
                            </span>
                            <a
                                className="media-heading"
                                href="tel:995-740-274"
                            >
                                995-740-274
                            </a>
                        </div>
                    </li>

                    <li className="media media-list">
                        <span className="media-icon">
                            <i className="icofont-envelope"></i>
                        </span>
                        <div className="media-content">
                            <span className="media-sub-heading">email</span>
                            <a
                                className="media-heading"
                                href="mailto:abelgomerocastillo@gmail.com"
                            >
                                abelgomerocastillo@gmail.com
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

MobileMenu.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
};

export default MobileMenu;

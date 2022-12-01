import SocialIcon from "../../../components/social-icon";
import Link from "next/link";
import Logo from "../../../components/logo";

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                        <div className="widget-item">
                            <div className="about-widget">
                                <p className="mb-0">
                                    <strong>Servicio de urología en el distrito de Los Olivos</strong>
                                    <br/>
                                    El Dr. Gomero los atendera en la clinica Santa Rosa que esta localizada
                                    a dos cuadras de la estacion de policia nacional.
                                </p>
                                <ul className="widget-contact-info">
                                    <li className="info-address">
                                        <i className="icofont-location-pin"></i>
                                        Jiron Pureza MZ-5 Lote-6, Urb. Pro, Los Olivos, Lima
                                    </li>
                                    <li className="info-mail">
                                        <i className="icofont-email"></i>
                                        <a href="mailto://abelgomerocastillo@gmail.com">
                                            abelgomerocastillo@gmail.com
                                        </a>
                                    </li>
                                    <li className="info-phone">
                                        <i className="icofont-ui-call"></i>
                                        <a href="tel://(01151)995740274">
                                            995-740-274
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 offset-md-1 col-lg-3 offset-lg-0 col-xl-3 d-lg-none d-xl-block">
                        <div className="widget-item d-inline-block">
                            <h4 className="widget-title line-bottom">
                            PROBLEMAS UROLÓGICOS MÁS COMUNES MASCULINO
                            </h4>
                            <nav className="widget-posts">
                                <ul className="posts-item">
                                    <li><i className="icon icofont-rounded-double-right"></i>
                                    Hiperplasia Prostática Benigna
                                    </li>
                                    <li><i className="icon icofont-rounded-double-right"></i>
                                    Cánceres, en especial de próstata
                                    </li>
                                    <li><i className="icon icofont-rounded-double-right"></i>
                                    Cálculos urinarios o piedras en el riñón
                                    </li>
                                    <li><i className="icon icofont-rounded-double-right"></i>
                                    Disfunción eréctil
                                    </li>
                                    <li><i className="icon icofont-rounded-double-right"></i>
                                    Infecciones de las vías urinarias
                                    </li>
                                    <li><i className="icon icofont-rounded-double-right"></i>
                                    Hematuria o sangrado en la orina
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                        <div className="widget-item">
                            <h4 className="widget-title line-bottom">
                            PROBLEMAS UROLÓGICOS MÁS COMUNES FEMENINO
                            </h4>
                            <nav className="widget-posts">
                                <ul className="posts-item">
                                    <li><i className="icon icofont-rounded-double-right"></i>
                                            Infecciones del tracto urinario inferior
                                    </li>
                                    <li><i className="icon icofont-rounded-double-right"></i>
                                            Infecciones del tracto urinario superior
                                    </li>
                                    <li><i className="icon icofont-rounded-double-right"></i>
                                            Infecciones urinarias complicadas
                                    </li>
                                    <li><i className="icon icofont-rounded-double-right"></i>
                                            Infecciones urinarias recurrentes
                                    </li>
                                    <li><i className="icon icofont-rounded-double-right"></i>
                                            Trastornos hormonales
                                    </li>
                                    <li><i className="icon icofont-rounded-double-right"></i>
                                            Tumores renales
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 offset-md-1 col-lg-4 offset-lg-0 col-xl-3">
                        <div className="widget-item">
                            <h4 className="widget-title line-bottom">
                             Información
                            </h4>
                            <div className="widget-newsletter">
                                <Link href="https://www.msdmanuals.com/es/professional/trastornos-urogenitales/abordaje-del-paciente-con-trastornos-urogenitales/evaluaci%C3%B3n-del-paciente-urol%C3%B3gico">
                                    Evaluación del paciente urológico
                                    </Link>
                            </div>
                            <div className="widget-social-icons">
                                <SocialIcon
                                    path="https://twitter.com/"
                                    icon="icofont-twitter"
                                />
                                <SocialIcon
                                    path="https://www.facebook.com/abel.gomero.712/"
                                    icon="icofont-facebook"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-12">
                            <div className="widget-copyright">
                                <p>
                                    &copy; 2022{" "}
                                    <span className="text-uppercase"></span>
                                    . Hecho {" "}
                                      por{" "}
                                      Walter Gomero
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

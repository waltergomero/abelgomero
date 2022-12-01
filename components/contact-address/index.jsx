import React from "react";
import Link  from "next/link";

const ContactAddress = () => {
    return (
        <div className="contact-info-content">
            <div className="info-address">
                <h2 className="title">
                    Los Olivos, <span>Lima</span>
                </h2>
                <p>
                    Jiron Pureza MZ-5 Lote-6, Urb. Pro, Los Olivos, Lima
                </p>
                <Link href="/">
                    <span>Email:</span> abelgomerocastillo@gmail.com
                </Link>
            </div>
            <div className="brand-office">
                <div className="info-tem style-two">
                    <h6>Linea directa:</h6>
                    <p>995-740-274</p>
                </div>
                <div className="info-tem">
                    <h6>Servicios:</h6>
                    <p>
                        Se hace visita a domicilio si es necesario
                    </p>
                </div>
                <div className="info-tem mb-0">
                    <h6>Horario de atencion:</h6>
                    <p>Lun - Sab: 8:00 AM - 7:00 PM, Domingos en caso de emergencias</p>
                </div>
            </div>
        </div>
    );
};

export default ContactAddress;

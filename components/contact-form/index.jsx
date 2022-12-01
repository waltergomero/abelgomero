import React, {useRef} from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import emailjs from "emailjs-com";


const ContactForm = () => {
    const form = useRef();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (status === "SUCCESS") {
            setTimeout(() => {
                setStatus("");
            }, 3000);
        }
    }, [status]);


    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = ""));
        
        Array.from(document.querySelectorAll("textarea")).forEach(
            textarea => (textarea.value = ""));
      };

      function onSubmit(e) {
        //e.preventDefault();
        emailjs
            .sendForm(
                "service_i1lf0io",
                "template_uwjic94",
                form.current,
                "FqR1_RegZg2S6nJ7A"
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response);                  
                    setStatus("SUCCESS");
                    setMessage("Tu mensaje fue enviado.");
                    handleReset();
                },
                (error) => {
                    console.log("FAIL!", error); 
                    setStatus("FAIL");
                    setMessage("Hubo un error en enviar el mensaje. <br/> Llamar por celular.")
                }
            );
            console.log("form: ", form.current)
    };


    //const onSubmit = data => console.log(data);

    return (
        <form ref={form}
            className="contact-form-wrapper"
            onSubmit={handleSubmit(onSubmit)}
            data-aos="fade-up"
            data-aos-duration="1200">
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Tu nombre completo"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <p>Nombre es requerido</p>}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="demostracion@yourmail.com"
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Correo electronico es invalido",
                                },
                            })}
                        />
                        {errors.email && <p>Correo electronico es requerido</p>} 
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="phone"
                            placeholder="Telefono"
                            {...register("phone", {
                                required: true,
                            })}
                        />
                       {errors.phone && <p>Telefono es requerido</p>} 
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group mb-0">
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Escribe tu mensaje"
                            {...register("message", {
                                required: true,
                            })}
                        ></textarea>
                        {errors.message && <p>Mensaje es requerido</p>} 
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <div className="form-group mb-0">
                            {status === "SUCCESS" && 
                                <div className="sucess-message">
                                <h6>{message}</h6>
                                </div>
                            }
                            {status === "FAIL" && 
                                <div className="error-message">
                                    <h6>{message}</h6>
                                </div>
                            }
                        <button className="btn btn-theme btn-block"
                                type="submit">
                            Enviar mensaje
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;

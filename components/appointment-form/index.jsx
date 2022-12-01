import React, {useRef} from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import emailjs from "emailjs-com";

const AppointmentForm = () => {
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

    return (
            <form onSubmit={handleSubmit(onSubmit)} ref={form}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="Escribir tu nombre completo..."
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
                                        message: "tu correo es invalido",
                                    },
                                })}
                            />
                            {errors.email && <p>Email es requerido</p>} 
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="tel"
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
                                rows="7"
                                placeholder="Escribir tu mensage aqui.."
                                {...register("message", {
                                    required: true,
                                })}
                            ></textarea>
                            {errors.message && <p>Mensaje es requerido</p>} 
                        </div>
                    </div>
                    <div className="col-md-12">
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
                            <button className="btn btn-theme" type="submit">
                                Enviar mensaje
                            </button>
                        </div>
                    </div>
                </div>
            </form>
    );
};

export default AppointmentForm;

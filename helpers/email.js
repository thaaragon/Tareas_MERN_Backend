

import nodemailer from 'nodemailer';

export const emailRegistro = async (datos) => {
    const {email, nombre, token} = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });

      //Información del email

      const info = await transport.sendMail({
        from:'"Administrador de proyectos" <cuentas@tareas.com>',
        to: email,
        subject:"Tareas, confirma tu cuenta",
        text: "Comprueba tu cuenta",
        html:`<p>Hola: ${nombre} Comprueba tu cuenta en Tareas</p>
        <p>Tu cuenta ya esta casi lista, compruebala en el siguiente enlace:
        <a href="${process.env.FRONTEND_URL}/confirmar-cuenta/${token}">Comprobar Cuenta</a></p>
        <p>Si tu no creaste esta cuenta, ignora este mensaje.</p>`,
      })

}

export const emailOlvidePassword = async (datos) => {
    const {email, nombre, token} = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });

      //Información del email

      const info = await transport.sendMail({
        from:'"Administrador de proyectos" <cuentas@tareas.com>',
        to: email,
        subject:"Tareas, Restablece tu password",
        text: "Reestablece tu password",
        html:`<p>Hola: ${nombre} ha solicitado reestablecer tu password</p>
        <p>Sigue el siguiente enlace para generar nuevo password:
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer password</a></p>
        <p>Si tu no solicitaste este email, ignora este mensaje.</p>`,
      })

}
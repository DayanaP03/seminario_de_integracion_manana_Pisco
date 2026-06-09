# store/services/email.py
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings


def _send(subject: str, to: str, txt_template: str, html_template: str, context: dict) -> None:
    """
    Helper privado: renderiza ambas versiones del correo (texto plano + HTML)
    y lo envía con EmailMultiAlternatives.

    EmailMultiAlternatives envía texto plano como cuerpo principal y adjunta
    la versión HTML como alternativa. Los clientes que soportan HTML muestran
    la versión HTML; el resto usa texto plano.
    """
    text_body = render_to_string(txt_template, context)
    html_body = render_to_string(html_template, context)

    msg = EmailMultiAlternatives(
        subject=subject,
        body=text_body,
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[to],
    )
    msg.attach_alternative(html_body, 'text/html')
    msg.send(fail_silently=False)


def send_welcome_email(user) -> None:
    """Envía correo de bienvenida cuando se registra un nuevo usuario."""
    _send(
        subject='¡Bienvenido a ShopAPI!',
        to=user.email,
        txt_template='emails/welcome.txt',
        html_template='emails/welcome.html',
        context={
            'username': user.username,
            'email':    user.email,
        },
    )


def send_password_reset_email(user, reset_link) -> None:
    """Envía el correo de restablecimiento de contraseña al usuario."""
    _send(
        subject='Restablece tu contraseña en ShopAPI',
        to=user.email,
        txt_template='emails/password_reset.txt',
        html_template='emails/password_reset.html',
        context={
            'username': user.username,
            'email': user.email,
            'reset_link': reset_link,
        },
    )
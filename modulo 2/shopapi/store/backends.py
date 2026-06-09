import ssl

import certifi
from django.core.mail.backends.smtp import EmailBackend
from django.utils.functional import cached_property


class CertifiSMTPBackend(EmailBackend):
    """SMTP backend that disables SSL hostname/certificate validation for development.

    Use this backend only in local development when the operating system SSL
    trust store cannot validate the SMTP server certificate.
    """

    @cached_property
    def ssl_context(self):
        context = ssl.SSLContext(ssl.PROTOCOL_TLS_CLIENT)
        context.check_hostname = False
        context.verify_mode = ssl.CERT_NONE
        if self.ssl_certfile or self.ssl_keyfile:
            context.load_cert_chain(self.ssl_certfile, self.ssl_keyfile)
        return context

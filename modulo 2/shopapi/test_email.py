#!/usr/bin/env python
import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from django.core.mail import send_mail

try:
    result = send_mail(
        'Test Email',
        'This is a test from Django',
        'josselynpisco1755@gmail.com',
        ['josselynpisco1755@gmail.com'],
        fail_silently=False
    )
    print(f'✓ Email sent successfully! Result: {result}')
except Exception as e:
    print(f'✗ Error: {type(e).__name__}: {e}')

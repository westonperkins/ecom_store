# Generated by Django 3.2.7 on 2021-09-11 16:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ecom', '0007_listing_soldby'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listing',
            name='soldBy',
        ),
    ]
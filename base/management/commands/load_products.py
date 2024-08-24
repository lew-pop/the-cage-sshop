import json
import os
import django
from django.core.management.base import BaseCommand
from datetime import datetime

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from base.models import Product

class Command(BaseCommand):
    help = 'Load products from JSON file into the database'

    def handle(self, *args, **kwargs):
        file_path = 'base/products.json'
        with open(file_path, 'r') as file:
            data = json.load(file)
            for item in data:
                Product.objects.create(
                    _id=item['id'],
                    sku=item['sku'],
                    name=item['name'],
                    brand=item['brands'],
                    price=item['price'],
                    discount=item['discount'],                   
                    new=item['new'],
                    num_reviews=0,
                    rating=item['rating'],
                    sale_count=0,
                    category=item['category'],
                    tag=item['tag'],
                    stock=item['stock'],
                    image=item['image'],
                    short_description=item['shortDescription'],
                    full_description=item['fullDescription']
                )
        self.stdout.write(self.style.SUCCESS('Successfully loaded products'))

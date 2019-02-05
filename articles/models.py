from django.contrib.auth.models import AbstractUser
from django.db import models

from Nau4OK.settings import AUTH_USER_MODEL


class User(AbstractUser):
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.username


class Article(models.Model):
    author = models.ForeignKey(AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=350)
    text = models.TextField()
    image = models.ImageField(upload_to='article_images/')
    rating = models.IntegerField(default=0)
    n_comments = models.IntegerField(default=0)

    def __str__(self):
        return self.title

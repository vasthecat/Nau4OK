from django.contrib import admin

# Register your models here.
from django.contrib.auth.admin import UserAdmin

from Nau4OK.settings import AUTH_USER_MODEL
from articles.models import Article, User

admin.site.register(Article)
admin.site.register(User, UserAdmin)


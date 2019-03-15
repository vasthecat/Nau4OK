from rest_framework.decorators import permission_classes

from rest_framework.generics import ListAPIView, RetrieveAPIView

from articles.api.permissions import CustomPermission
from .serializers import UserSerializer, ArticleSerializer, CommentSerializer
from articles.models import Article, User, Comment
from rest_framework import viewsets


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()


class CommentsViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    permission_classes = (CustomPermission,)

from rest_framework import serializers

from articles.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    avatar = serializers.ImageField(source='author.avatar')
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Article
        fields = ('id', 'author', 'title', 'description', 'image', 'text', 'rating', 'n_comments', 'avatar')

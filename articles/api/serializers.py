from rest_framework import serializers

from articles.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    author_username = serializers.ReadOnlyField(source='author.username')
    author_firstName = serializers.CharField(source='author.first_name')
    author_lastName = serializers.CharField(source='author.last_name')
    author_avatar = serializers.ImageField(source='author.avatar')

    class Meta:
        model = Article
        fields = (
            'id', 'title', 'description', 'image', 'text', 'rating', 'n_comments',
            'author_username', 'author_firstName', 'author_lastName', 'author_avatar',
        )

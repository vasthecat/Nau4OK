from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from articles.models import Article, User, Comment
from allauth.account.adapter import get_adapter
from rest_framework.authtoken.models import Token


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('author', 'published_date', 'article', 'text')


class ArticleSerializer(serializers.ModelSerializer):
    article_comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Article
        fields = (
            'id', 'title', 'description', 'image', 'text', 'rating', 'n_comments', 'author', 'article_comments',
            'published_date')


class UserSerializer(serializers.ModelSerializer):
    user_comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'birth_date', 'bio', 'location', 'avatar', 'password',
                  'is_author', 'user_comments')


class CustomRegisterSerializer(RegisterSerializer):
    first_name = serializers.CharField(max_length=30)
    last_name = serializers.CharField(max_length=150)
    is_author = serializers.BooleanField()

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password', 'is_author')

    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'first_name': self.validated_data.get('first_name', ''),
            'last_name': self.validated_data.get('last_name', ''),

        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)

        self.cleaned_data = self.get_cleaned_data()

        user.first_name = self.cleaned_data.get('first_name')
        user.last_name = self.cleaned_data.get('last_name')
        user.is_author = 0

        user.save()
        adapter.save_user(request, user, self)
        return user


class TokenSerializer(serializers.ModelSerializer):
    user_info = serializers.SerializerMethodField()

    class Meta:
        model = Token
        fields = ('key', 'user', 'user_info')

    def get_user_info(self, obj):
        serializer_data = UserSerializer(obj.user).data
        del serializer_data['password']

        return serializer_data

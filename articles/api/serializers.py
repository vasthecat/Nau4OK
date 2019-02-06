from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from articles.models import Article, User
from allauth.account.adapter import get_adapter


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = (
            'id', 'title', 'description', 'image', 'text', 'rating', 'n_comments', 'author')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'birth_date', 'bio', 'location', 'avatar', 'password',
                  'is_author')


class CustomRegisterSerializer(RegisterSerializer):
    first_name = serializers.CharField(max_length=30)
    last_name = serializers.CharField(max_length=150)
    bio = serializers.CharField(max_length=500)
    location = serializers.CharField(max_length=30)
    birth_date = serializers.DateField()
    avatar = serializers.ImageField(use_url=True)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'birth_date', 'bio', 'location', 'avatar', 'password')

    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'first_name': self.validated_data.get('first_name', ''),
            'last_name': self.validated_data.get('last_name', ''),
            'birth_date': self.validated_data.get('birth_date', ''),
            'location': self.validated_data.get('location', ''),
            'avatar': self.validated_data.get('avatar', ''),

        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user.is_student = self.cleaned_data.get('is_student')
        user.is_teacher = self.cleaned_data.get('is_teacher')
        user.save()
        adapter.save_user(request, user, self)
        return user

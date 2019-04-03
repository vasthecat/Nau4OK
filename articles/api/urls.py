from rest_framework.routers import DefaultRouter
from .views import UserViewSet, ArticleViewSet, CommentsViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet, base_name='users')
router.register(r'articles', ArticleViewSet, base_name='articles')
router.register(r'comments', CommentsViewSet, base_name='comments')
urlpatterns = router.urls

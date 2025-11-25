"""
URL configuration for octofit_tracker project.
"""


from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from octofit_tracker import views
from rest_framework.response import Response
from rest_framework.decorators import api_view


router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'teams', views.TeamViewSet)
router.register(r'activities', views.ActivityViewSet)
router.register(r'leaderboard', views.LeaderboardViewSet)
router.register(r'workouts', views.WorkoutViewSet)

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': request.build_absolute_uri('/api/users/'),
        'teams': request.build_absolute_uri('/api/teams/'),
        'activities': request.build_absolute_uri('/api/activities/'),
        'leaderboard': request.build_absolute_uri('/api/leaderboard/'),
        'workouts': request.build_absolute_uri('/api/workouts/'),
    })

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('dj_rest_auth.urls')),
    path('api/', include(router.urls)),
    path('', api_root),
]

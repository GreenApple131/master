from django.contrib import admin
from django.urls import path, include
from backend import views
from rest_framework import routers 
# import drf_social_oauth2

from .social_auth import GoogleLogin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('backend.urls')),
    path('auth/google/', GoogleLogin.as_view())

]
from django.contrib import admin
from django.urls import path, include
from backend import views
from django.conf.urls import url
from rest_framework import routers 


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('backend.urls'))
]
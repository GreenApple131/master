from django.urls import path, include
from django.conf.urls import url
from rest_framework import routers

from . import views

app_name = 'backend'

router = routers.DefaultRouter()

router.register(r'devices', views.DeviceView, 'device')
router.register(r'data', views.DataView, 'data')


urlpatterns = [
    path('', include(router.urls)),
]
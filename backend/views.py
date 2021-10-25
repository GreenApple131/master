from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import filters, viewsets

from . import models, serializers


class DeviceView(viewsets.ModelViewSet):
    serializer_class = serializers.DeviceSerializer
    queryset = models.Device.objects.all()


class DataView(viewsets.ModelViewSet):
    serializer_class = serializers.DataSerializer
    queryset = models.Data.objects.all()
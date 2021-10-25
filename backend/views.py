from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import filters, status, viewsets
from . import models, serializers


class DeviceView(viewsets.ModelViewSet):
    serializer_class = serializers.DeviceSerializer
    queryset = models.Device.objects.all()

    def list(self, request):
        queryset = models.Device.objects.all()
        serializer = serializers.DeviceSerializer(queryset, many=True).data
        return Response(serializer)
    def retrieve(self, request, pk=None):
        dev_qs = models.Device.objects.filter(id=pk)
        data_qs = models.Data.objects.filter(device__id=pk)
        device_serializer = serializers.DeviceSerializer(dev_qs, many=True).data
        data_serializer = serializers.DataSerializer(data_qs, many=True).data

        # filtering all data entries for device
        return Response(device_serializer + data_serializer) # merge data entries with device info
    def create(self, request):
        pass
    def update(self, request, pk=None):
        pass
    def partial_update(self, request, pk=None):
        pass
    def destroy(self, request, *args, **kwargs):
        device_obj = self.get_object()
        device_obj.delete()
        return Response(data='delete success')

    


class DataView(viewsets.ModelViewSet):
    serializer_class = serializers.DataSerializer
    queryset = models.Data.objects.all()
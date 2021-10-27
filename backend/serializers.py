from rest_framework import serializers
from . import models


class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Device
        fields = (
            'id',
            'number'
        )


class DataSerializer(serializers.ModelSerializer):
    device = serializers.SerializerMethodField()
    class Meta:
        model = models.Data
        fields = (
            'id',
            'device',
            'common_status',
            'temperature',
            'ph',
            'turbidity',
            'tds',
            'latitude',
            'longitude'
        )

    def get_device(self, obj):
        return DeviceSerializer(obj.device, many=False).data
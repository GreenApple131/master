from django.contrib import admin
from . import models

# Register your models here.

@admin.register(models.Device)
class DeviceAdmin(admin.ModelAdmin):
    list_display = ['number', 'date_created']

    def get_readonly_fields(self, request, obj=None):
        if obj:
            return ('id', 'number', 'date_created')
        else:
            return ()


@admin.register(models.Data)
class DataAdmin(admin.ModelAdmin):
    list_display = ['device', 'updated', 'common_status', 'temperature', 'ph', 'turbidity', 'tds', 'latitude', 'longitude']
    list_filter = ['updated', 'temperature', 'ph', 'turbidity', 'tds']
    list_editable = ['common_status', 'latitude', 'longitude']
    # list_editable = ['temperature', 'ph', 'turbidity', 'tds']
    
    def get_readonly_fields(self, request, obj=None):
        if obj:
            return ('id', 'updated',)
        else:
            return ()
from django.db import models
from django.urls import reverse


class Device(models.Model):
    number = models.CharField(max_length=100, unique=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.number)
    
    def get_absolute_url(self):
        return reverse("backend:device_detail", args=[self.pk])
    


class Data(models.Model):
    device = models.ForeignKey(Device, on_delete=models.CASCADE)
    updated = models.DateTimeField(auto_now=True)
    common_status = models.CharField(max_length=200, blank=False, default='UNDEFINED')
    # info from device = temp, pH, turbidity, tds
    temperature = models.DecimalField(max_digits=5, decimal_places=2)
    ph = models.DecimalField(max_digits=4, decimal_places=2)
    turbidity = models.DecimalField(max_digits=5, decimal_places=2)
    tds = models.DecimalField(max_digits=7, decimal_places=0)

    def __str__(self):
        return str(self.device)

    class Meta:
        verbose_name = 'Data'
        verbose_name_plural = 'Data'
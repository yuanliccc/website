from django.db import models
from datetime import datetime

# Create your models here.


class User(models.Model):

    # 主键id
    id = models.AutoField(primary_key=True)
    # 昵称
    nickname = models.CharField(max_length=20)
    # 电话
    phone = models.CharField(max_length=11)
    # 密码
    password = models.CharField(max_length=100)
    # 性别 default = true : 男
    gender = models.BooleanField(default=True)
    # 是否删除
    is_delete = models.BooleanField(default=False)
    # 删除时间
    delete_time = models.DateTimeField(default=None)
    # 创建时间
    create_time = models.DateTimeField(default=datetime.now().strftime('YYYY-MM-DD %HH-%MM-%SS'))
    # 更新时间
    update_time = models.DateTimeField(default=datetime.now().strftime('%Y-%m-%d %H-%M-%S'))

    class Meta:
        db_table = 'web_user'

#!/usr/bin/env bash
chmod +x /home/ubuntu/build/**
#export AWS_RDS_Endpoint=$(aws ssm get-parameters --region ap-northeast-2 --names spring.datasource.url --query Parameters[0].Value | sed 's/"//g')
#export RDS_Mysql_Admin_id=$(aws ssm get-parameters --region ap-northeast-2 --names spring.datasource.username --query Parameters[0].Value | sed 's/"//g')
#export RDS_Mysql_Admin_password=$(aws ssm get-parameters --region ap-northeast-2 --names spring.datasource.password --query Parameters[0].Value | sed 's/"//g')
#export AWS_jwt_secret_key=$(aws ssm get-parameters --region ap-northeast-2 --names jwt.secret-key --query Parameters[0].Value | sed 's/"//g')

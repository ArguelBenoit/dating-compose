#!/bin/bash

tar -zxvf $DATABASE_NAME.tar.gz
mongorestore --db $DATABASE_NAME $DATABASE_NAME
rm -rf $DATABASE_NAME

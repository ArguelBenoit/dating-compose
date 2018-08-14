#!/bin/bash

tar -zxvf $DB_NAME.tar.gz
mongorestore --db $DB_NAME $DB_NAME
rm -rf $DB_NAME

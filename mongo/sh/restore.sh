#!/bin/bash

# unzip bson files in $DB_NAME.tar.gz
tar -zxvf $DB_NAME.tar.gz

# delete old $DB_NAME collections
mongo $DB_NAME --eval "db.dropDatabase()"

# restore dump $DB_NAME
mongorestore --db $DB_NAME $DB_NAME

# remove unziped bson files
rm -rf $DB_NAME

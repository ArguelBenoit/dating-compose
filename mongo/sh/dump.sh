#!/bin/bash

# dump $DB_NAME collections
mongodump --db $DB_NAME --out /data/sh

# zip all bson files in one tar.gz
tar -zcvf $DB_NAME.tar.gz $DB_NAME/

# rm unziped bson files
rm -r /data/sh/$DB_NAME

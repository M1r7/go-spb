+++
date = '{{.Date}}''
draft = true
title = '{{ replaceRE `^[0-9]{4}-[0-9]{2}-[0-9]{2}_` "" .File.ContentBaseName | title }}'
+++
# {{ replaceRE `^[0-9]{4}-[0-9]{2}-[0-9]{2}_` "" .File.ContentBaseName | replace `_` ` ` | title }}

icsProxy
========

A (really) tiny proxy build in a few minutes in order to access an ics file
protected with http basic authentication in Google Agenda (which doesn't allow
basic auth url).

## Warning

- no https
- username and password as url query params
- target url as url params (not encoded)

## Use

```
npm install
node main.js

curl http://localhost:8080?username=foo&password=bar&url=mySite.co/my/path/to/file.ics
```

## License (wtfpl)

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                        Version 2, December 2004

     Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

     Everyone is permitted to copy and distribute verbatim or modified
     copies of this license document, and changing it is allowed as long
     as the name is changed.

                DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
       TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

      0. You just DO WHAT THE FUCK YOU WANT TO.

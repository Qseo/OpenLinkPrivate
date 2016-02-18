# OpenLinkPrivate

Userscript to open all links with non-empty private html attrubute in private tabs, using Private Tab https://addons.mozilla.org/ru/firefox/addon/private-tab/ Firefox extension.

Copyright
------------------------

Author: Alexey Murz Korepov, thanks to @LoveIsGrief for initial code.

E-mail: seo@qseo.ru

Description
========================

This script intercept all left clicks on links (<a> tag) and check 'private' attribute of this tag. If it is not empty - open this link in private tab, using Private Tab https://addons.mozilla.org/ru/firefox/addon/private-tab/ Firefox extension.

Also you can provide 'privatetabbackground' html attribute for open link in background private tab.

By default, this works on all sites, but you can limit sites via User Script preferences tab » Script Settings » Included Pages - remove "*" and add your custom hosts, for example https://google.com/* http://google.com/search*

Examples of working HTML code:

- <a href="http://google.com" private="true">Google 1</a>
`<a href="http://google.com" private="true">Google 1</a>`

- `<a href="http://google.com" private=1 privatetabbackground = 1>Google 2</a>`
<a href="http://google.com" private=1 privatetabbackground = 1>Google 2</a>

- <a href="http://google.com" private="1" target="_blank">Google 3</a>
`<a href="http://google.com" private="1" target="_blank">Google 3</a>`

- `<a private="0" href="http://google.com">Google 4</a>`
<a private="0" href="http://google.com">Google 4</a>


Changelog
------------------------

2016-02-18 - version 1.1: Added 'privatetabbackground' html attribute for open link in background private tab, added enabling script on any host by defualt.

2016-02-18 - version 1.0: Initial release.
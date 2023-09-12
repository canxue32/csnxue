[rewrite_local]
^https?:\/\/www\.guga\.co\/api-base\/v1\/state|https?:\/\/www\.guga\.co\/api-base\/v1\/preferential-product|https?:\/\/*\.guga\.co.*?.*? url script-response-body guga.js


[mitm]
hostname = www.guga.co,www.guga.co,*.guga.co
%¥
*******************************/
var body=$response.body;
body = body.replace(/"level\":\d/g,'"level":1');
body = body.replace(/"expire\":\d/g,'"expire":1800000000000');
$done(body);

/*jslint browser: true*/
/*global Tangram, gui */

map = (function () {
    'use strict';
    var map_start_location = [35.6900, 139.6920, 18]; // 東京 (Tokyo)
    var url_hash = window.location.hash.slice(1, window.location.hash.length).split('/');
    if (url_hash.length == 3) {
        map_start_location = [url_hash[1],url_hash[2], url_hash[0]];
        map_start_location = map_start_location.map(Number);
    }
    var map = L.map('map', {"keyboardZoomOffset" : .05});
    var layer = Tangram.leafletLayer({
        scene: 'scene.yaml',
        attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors, <a target="_blank" href="http://www.gsi.go.jp/">GSI</a> | <a href="https://mapzen.com/" target="_blank">Mapzen</a>'
    });
    window.layer = layer;
    var scene = layer.scene;
    window.scene = scene;
    map.setView(map_start_location.slice(0, 3), map_start_location[2]);
    var hash = new L.Hash(map);
    window.addEventListener('load', function () {
        layer.on('init', function() {});
        layer.addTo(map);
    });
    return map;
}());

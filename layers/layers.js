var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HammersmithCable_1 = new ol.format.GeoJSON();
var features_HammersmithCable_1 = format_HammersmithCable_1.readFeatures(json_HammersmithCable_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HammersmithCable_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HammersmithCable_1.addFeatures(features_HammersmithCable_1);
var lyr_HammersmithCable_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HammersmithCable_1, 
                style: style_HammersmithCable_1,
                popuplayertitle: 'Hammersmith - Cable',
                interactive: false,
                title: '<img src="styles/legend/HammersmithCable_1.png" /> Hammersmith - Cable'
            });
var format_HammersmithJoints_2 = new ol.format.GeoJSON();
var features_HammersmithJoints_2 = format_HammersmithJoints_2.readFeatures(json_HammersmithJoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HammersmithJoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HammersmithJoints_2.addFeatures(features_HammersmithJoints_2);
var lyr_HammersmithJoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HammersmithJoints_2, 
                style: style_HammersmithJoints_2,
                popuplayertitle: 'Hammersmith - Joints',
                interactive: true,
    title: 'Hammersmith - Joints<br />\
    <img src="styles/legend/HammersmithJoints_2_0.png" /> FWDP\'s<br />\
    <img src="styles/legend/HammersmithJoints_2_1.png" /> SP\'s<br />' });
var format_MayfairCable_3 = new ol.format.GeoJSON();
var features_MayfairCable_3 = format_MayfairCable_3.readFeatures(json_MayfairCable_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MayfairCable_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MayfairCable_3.addFeatures(features_MayfairCable_3);
var lyr_MayfairCable_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MayfairCable_3, 
                style: style_MayfairCable_3,
                popuplayertitle: 'Mayfair - Cable',
                interactive: true,
                title: '<img src="styles/legend/MayfairCable_3.png" /> Mayfair - Cable'
            });
var format_MayfairJoints_4 = new ol.format.GeoJSON();
var features_MayfairJoints_4 = format_MayfairJoints_4.readFeatures(json_MayfairJoints_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MayfairJoints_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MayfairJoints_4.addFeatures(features_MayfairJoints_4);
var lyr_MayfairJoints_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MayfairJoints_4, 
                style: style_MayfairJoints_4,
                popuplayertitle: 'Mayfair - Joints',
                interactive: false,
    title: 'Mayfair - Joints<br />\
    <img src="styles/legend/MayfairJoints_4_0.png" /> FWDP\'s<br />\
    <img src="styles/legend/MayfairJoints_4_1.png" /> SP\'s<br />' });
var format_HammersmithMayfairCable_5 = new ol.format.GeoJSON();
var features_HammersmithMayfairCable_5 = format_HammersmithMayfairCable_5.readFeatures(json_HammersmithMayfairCable_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HammersmithMayfairCable_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HammersmithMayfairCable_5.addFeatures(features_HammersmithMayfairCable_5);
var lyr_HammersmithMayfairCable_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HammersmithMayfairCable_5, 
                style: style_HammersmithMayfairCable_5,
                popuplayertitle: 'Hammersmith-Mayfair Cable',
                interactive: false,
                title: '<img src="styles/legend/HammersmithMayfairCable_5.png" /> Hammersmith-Mayfair Cable'
            });
var format_MayfairAbsorbed_6 = new ol.format.GeoJSON();
var features_MayfairAbsorbed_6 = format_MayfairAbsorbed_6.readFeatures(json_MayfairAbsorbed_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MayfairAbsorbed_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MayfairAbsorbed_6.addFeatures(features_MayfairAbsorbed_6);
var lyr_MayfairAbsorbed_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MayfairAbsorbed_6, 
                style: style_MayfairAbsorbed_6,
                popuplayertitle: 'Mayfair - Absorbed',
                interactive: false,
                title: '<img src="styles/legend/MayfairAbsorbed_6.png" /> Mayfair - Absorbed'
            });
var format_apex1cpd_7 = new ol.format.GeoJSON();
var features_apex1cpd_7 = format_apex1cpd_7.readFeatures(json_apex1cpd_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_apex1cpd_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_apex1cpd_7.addFeatures(features_apex1cpd_7);
var lyr_apex1cpd_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_apex1cpd_7, 
                style: style_apex1cpd_7,
                popuplayertitle: 'apex(1) — cpd',
                interactive: true,
                title: 'apex(1) — cpd'
            });
var group_Mayfair = new ol.layer.Group({
                                layers: [lyr_MayfairCable_3,lyr_MayfairJoints_4,],
                                fold: 'open',
                                title: 'Mayfair'});
var group_Hammersmith = new ol.layer.Group({
                                layers: [lyr_HammersmithCable_1,lyr_HammersmithJoints_2,],
                                fold: 'close',
                                title: 'Hammersmith'});

lyr_OSMStandard_0.setVisible(true);lyr_HammersmithCable_1.setVisible(true);lyr_HammersmithJoints_2.setVisible(true);lyr_MayfairCable_3.setVisible(true);lyr_MayfairJoints_4.setVisible(true);lyr_HammersmithMayfairCable_5.setVisible(true);lyr_MayfairAbsorbed_6.setVisible(true);lyr_apex1cpd_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_Hammersmith,group_Mayfair,lyr_HammersmithMayfairCable_5,lyr_MayfairAbsorbed_6,lyr_apex1cpd_7];
lyr_HammersmithCable_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HammersmithJoints_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MayfairCable_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MayfairJoints_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HammersmithMayfairCable_5.set('fieldAliases', {'id': 'id', });
lyr_MayfairAbsorbed_6.set('fieldAliases', {'id': 'id', });
lyr_apex1cpd_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HammersmithCable_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_HammersmithJoints_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_MayfairCable_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_MayfairJoints_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_HammersmithMayfairCable_5.set('fieldImages', {'id': 'TextEdit', });
lyr_MayfairAbsorbed_6.set('fieldImages', {'id': 'TextEdit', });
lyr_apex1cpd_7.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_HammersmithCable_1.set('fieldLabels', {'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_HammersmithJoints_2.set('fieldLabels', {'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_MayfairCable_3.set('fieldLabels', {'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_MayfairJoints_4.set('fieldLabels', {'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_HammersmithMayfairCable_5.set('fieldLabels', {'id': 'hidden field', });
lyr_MayfairAbsorbed_6.set('fieldLabels', {'id': 'hidden field', });
lyr_apex1cpd_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_apex1cpd_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
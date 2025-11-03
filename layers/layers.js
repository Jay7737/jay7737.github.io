var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MayfairCable_1 = new ol.format.GeoJSON();
var features_MayfairCable_1 = format_MayfairCable_1.readFeatures(json_MayfairCable_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MayfairCable_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MayfairCable_1.addFeatures(features_MayfairCable_1);
var lyr_MayfairCable_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MayfairCable_1, 
                style: style_MayfairCable_1,
                popuplayertitle: 'Mayfair Cable',
                interactive: true,
                title: '<img src="styles/legend/MayfairCable_1.png" /> Mayfair Cable'
            });
var format_MayfairJoints_2 = new ol.format.GeoJSON();
var features_MayfairJoints_2 = format_MayfairJoints_2.readFeatures(json_MayfairJoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MayfairJoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MayfairJoints_2.addFeatures(features_MayfairJoints_2);
var lyr_MayfairJoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MayfairJoints_2, 
                style: style_MayfairJoints_2,
                popuplayertitle: 'Mayfair Joints',
                interactive: true,
    title: 'Mayfair Joints<br />\
    <img src="styles/legend/MayfairJoints_2_0.png" /> FWDP\'s<br />\
    <img src="styles/legend/MayfairJoints_2_1.png" /> SP\'s<br />' });
var format_MAYHAMUPRNC_3 = new ol.format.GeoJSON();
var features_MAYHAMUPRNC_3 = format_MAYHAMUPRNC_3.readFeatures(json_MAYHAMUPRNC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAYHAMUPRNC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAYHAMUPRNC_3.addFeatures(features_MAYHAMUPRNC_3);
var lyr_MAYHAMUPRNC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAYHAMUPRNC_3, 
                style: style_MAYHAMUPRNC_3,
                popuplayertitle: 'MAYHAM - UPRNC',
                interactive: true,
                title: '<img src="styles/legend/MAYHAMUPRNC_3.png" /> MAYHAM - UPRNC'
            });
var format_MAYHAM144FCable_4 = new ol.format.GeoJSON();
var features_MAYHAM144FCable_4 = format_MAYHAM144FCable_4.readFeatures(json_MAYHAM144FCable_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAYHAM144FCable_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAYHAM144FCable_4.addFeatures(features_MAYHAM144FCable_4);
var lyr_MAYHAM144FCable_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAYHAM144FCable_4, 
                style: style_MAYHAM144FCable_4,
                popuplayertitle: 'MAYHAM 144F Cable',
                interactive: true,
                title: '<img src="styles/legend/MAYHAM144FCable_4.png" /> MAYHAM 144F Cable'
            });
var format_MAYHAM48FCable_5 = new ol.format.GeoJSON();
var features_MAYHAM48FCable_5 = format_MAYHAM48FCable_5.readFeatures(json_MAYHAM48FCable_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAYHAM48FCable_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAYHAM48FCable_5.addFeatures(features_MAYHAM48FCable_5);
var lyr_MAYHAM48FCable_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAYHAM48FCable_5, 
                style: style_MAYHAM48FCable_5,
                popuplayertitle: 'MAYHAM 48F Cable',
                interactive: true,
                title: '<img src="styles/legend/MAYHAM48FCable_5.png" /> MAYHAM 48F Cable'
            });
var format_MAYHAMCoreJoints_6 = new ol.format.GeoJSON();
var features_MAYHAMCoreJoints_6 = format_MAYHAMCoreJoints_6.readFeatures(json_MAYHAMCoreJoints_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAYHAMCoreJoints_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAYHAMCoreJoints_6.addFeatures(features_MAYHAMCoreJoints_6);
var lyr_MAYHAMCoreJoints_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAYHAMCoreJoints_6, 
                style: style_MAYHAMCoreJoints_6,
                popuplayertitle: 'MAYHAM Core Joints',
                interactive: true,
                title: '<img src="styles/legend/MAYHAMCoreJoints_6.png" /> MAYHAM Core Joints'
            });
var format_MAYHAMDistributionJoints_7 = new ol.format.GeoJSON();
var features_MAYHAMDistributionJoints_7 = format_MAYHAMDistributionJoints_7.readFeatures(json_MAYHAMDistributionJoints_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAYHAMDistributionJoints_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAYHAMDistributionJoints_7.addFeatures(features_MAYHAMDistributionJoints_7);
var lyr_MAYHAMDistributionJoints_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAYHAMDistributionJoints_7, 
                style: style_MAYHAMDistributionJoints_7,
                popuplayertitle: 'MAYHAM Distribution Joints',
                interactive: true,
                title: '<img src="styles/legend/MAYHAMDistributionJoints_7.png" /> MAYHAM Distribution Joints'
            });
var format_MayfairAbsorbed_8 = new ol.format.GeoJSON();
var features_MayfairAbsorbed_8 = format_MayfairAbsorbed_8.readFeatures(json_MayfairAbsorbed_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MayfairAbsorbed_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MayfairAbsorbed_8.addFeatures(features_MayfairAbsorbed_8);
var lyr_MayfairAbsorbed_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MayfairAbsorbed_8, 
                style: style_MayfairAbsorbed_8,
                popuplayertitle: 'Mayfair - Absorbed',
                interactive: false,
                title: '<img src="styles/legend/MayfairAbsorbed_8.png" /> Mayfair - Absorbed'
            });
var group_HammersmithMayfairBuild = new ol.layer.Group({
                                layers: [lyr_MAYHAMUPRNC_3,lyr_MAYHAM144FCable_4,lyr_MAYHAM48FCable_5,lyr_MAYHAMCoreJoints_6,lyr_MAYHAMDistributionJoints_7,],
                                fold: 'open',
                                title: 'Hammersmith/Mayfair Build'});
var group_ExistingMayfair = new ol.layer.Group({
                                layers: [lyr_MayfairCable_1,lyr_MayfairJoints_2,],
                                fold: 'open',
                                title: 'Existing Mayfair'});

lyr_OSMStandard_0.setVisible(true);lyr_MayfairCable_1.setVisible(true);lyr_MayfairJoints_2.setVisible(true);lyr_MAYHAMUPRNC_3.setVisible(true);lyr_MAYHAM144FCable_4.setVisible(true);lyr_MAYHAM48FCable_5.setVisible(true);lyr_MAYHAMCoreJoints_6.setVisible(true);lyr_MAYHAMDistributionJoints_7.setVisible(true);lyr_MayfairAbsorbed_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_ExistingMayfair,group_HammersmithMayfairBuild,lyr_MayfairAbsorbed_8];
lyr_MayfairCable_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MayfairJoints_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MAYHAMUPRNC_3.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'OSCode': 'OSCode', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'ITSCommercialFlag': 'ITSCommercialFlag', });
lyr_MAYHAM144FCable_4.set('fieldAliases', {'id': 'id', 'Length': 'Length', });
lyr_MAYHAM48FCable_5.set('fieldAliases', {'id': 'id', });
lyr_MAYHAMCoreJoints_6.set('fieldAliases', {'id': 'id', });
lyr_MAYHAMDistributionJoints_7.set('fieldAliases', {'id': 'id', });
lyr_MayfairAbsorbed_8.set('fieldAliases', {'id': 'id', });
lyr_MayfairCable_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_MayfairJoints_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_MAYHAMUPRNC_3.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'OSCode': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'field_5': 'TextEdit', 'ITSCommercialFlag': 'TextEdit', });
lyr_MAYHAM144FCable_4.set('fieldImages', {'id': 'TextEdit', 'Length': '', });
lyr_MAYHAM48FCable_5.set('fieldImages', {'id': 'TextEdit', });
lyr_MAYHAMCoreJoints_6.set('fieldImages', {'id': 'TextEdit', });
lyr_MAYHAMDistributionJoints_7.set('fieldImages', {'id': 'TextEdit', });
lyr_MayfairAbsorbed_8.set('fieldImages', {'id': 'TextEdit', });
lyr_MayfairCable_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_MayfairJoints_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_MAYHAMUPRNC_3.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'OSCode': 'no label', 'field_3': 'no label', 'field_4': 'no label', 'field_5': 'no label', 'ITSCommercialFlag': 'no label', });
lyr_MAYHAM144FCable_4.set('fieldLabels', {'id': 'no label', 'Length': 'no label', });
lyr_MAYHAM48FCable_5.set('fieldLabels', {'id': 'no label', });
lyr_MAYHAMCoreJoints_6.set('fieldLabels', {'id': 'no label', });
lyr_MAYHAMDistributionJoints_7.set('fieldLabels', {'id': 'no label', });
lyr_MayfairAbsorbed_8.set('fieldLabels', {'id': 'hidden field', });
lyr_MayfairAbsorbed_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
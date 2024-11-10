var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});

        var lyr_Maps_0 = new ol.layer.Tile({
            'title': 'Maps_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });var format_LapakGIS_Batas_Kabupaten_2024_1 = new ol.format.GeoJSON();
var features_LapakGIS_Batas_Kabupaten_2024_1 = format_LapakGIS_Batas_Kabupaten_2024_1.readFeatures(json_LapakGIS_Batas_Kabupaten_2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIS_Batas_Kabupaten_2024_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIS_Batas_Kabupaten_2024_1.addFeatures(features_LapakGIS_Batas_Kabupaten_2024_1);var lyr_LapakGIS_Batas_Kabupaten_2024_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIS_Batas_Kabupaten_2024_1, 
                style: style_LapakGIS_Batas_Kabupaten_2024_1,
    title: 'LapakGIS_Batas_Kabupaten_2024<br />\
    <img src="styles/legend/LapakGIS_Batas_Kabupaten_2024_1_0.png" />  0 - 250 <br />\
    <img src="styles/legend/LapakGIS_Batas_Kabupaten_2024_1_1.png" />  250 - 800 <br />\
    <img src="styles/legend/LapakGIS_Batas_Kabupaten_2024_1_2.png" />  800 - 1200 <br />\
    <img src="styles/legend/LapakGIS_Batas_Kabupaten_2024_1_3.png" />  1200 - 1600 <br />\
    <img src="styles/legend/LapakGIS_Batas_Kabupaten_2024_1_4.png" />  1600 - 2000 <br />'
        });

lyr_Maps_0.setVisible(true);lyr_LapakGIS_Batas_Kabupaten_2024_1.setVisible(true);
var layersList = [baseLayer,lyr_Maps_0,lyr_LapakGIS_Batas_Kabupaten_2024_1];
lyr_LapakGIS_Batas_Kabupaten_2024_1.set('fieldAliases', {'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'Jumlah': 'Jumlah', });
lyr_LapakGIS_Batas_Kabupaten_2024_1.set('fieldImages', {'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'Jumlah': 'TextEdit', });
lyr_LapakGIS_Batas_Kabupaten_2024_1.set('fieldLabels', {'KDPKAB': 'no label', 'KDPPUM': 'no label', 'WADMKK': 'inline label', 'WADMPR': 'no label', 'METADATA': 'no label', 'UPDATED': 'no label', 'Jumlah': 'inline label', });
lyr_LapakGIS_Batas_Kabupaten_2024_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
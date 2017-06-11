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
var format_Vuelco0 = new ol.format.GeoJSON();
var features_Vuelco0 = format_Vuelco0.readFeatures(json_Vuelco0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vuelco0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vuelco0.addFeatures(features_Vuelco0);var lyr_Vuelco0 = new ol.layer.Vector({
                source:jsonSource_Vuelco0, 
                style: style_Vuelco0,
                title: "Vuelco"
            });var format_Reptacion1 = new ol.format.GeoJSON();
var features_Reptacion1 = format_Reptacion1.readFeatures(json_Reptacion1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reptacion1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Reptacion1.addFeatures(features_Reptacion1);var lyr_Reptacion1 = new ol.layer.Vector({
                source:jsonSource_Reptacion1, 
                style: style_Reptacion1,
                title: "Reptacion"
            });var format_OtroPeligro2 = new ol.format.GeoJSON();
var features_OtroPeligro2 = format_OtroPeligro2.readFeatures(json_OtroPeligro2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OtroPeligro2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_OtroPeligro2.addFeatures(features_OtroPeligro2);var lyr_OtroPeligro2 = new ol.layer.Vector({
                source:jsonSource_OtroPeligro2, 
                style: style_OtroPeligro2,
                title: "Otro Peligro"
            });var format_MovimientoComplejo3 = new ol.format.GeoJSON();
var features_MovimientoComplejo3 = format_MovimientoComplejo3.readFeatures(json_MovimientoComplejo3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MovimientoComplejo3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MovimientoComplejo3.addFeatures(features_MovimientoComplejo3);var lyr_MovimientoComplejo3 = new ol.layer.Vector({
                source:jsonSource_MovimientoComplejo3, 
                style: style_MovimientoComplejo3,
                title: "Movimiento Complejo"
            });var format_Flujo4 = new ol.format.GeoJSON();
var features_Flujo4 = format_Flujo4.readFeatures(json_Flujo4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Flujo4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Flujo4.addFeatures(features_Flujo4);var lyr_Flujo4 = new ol.layer.Vector({
                source:jsonSource_Flujo4, 
                style: style_Flujo4,
                title: "Flujo"
            });var format_Deslizamiento5 = new ol.format.GeoJSON();
var features_Deslizamiento5 = format_Deslizamiento5.readFeatures(json_Deslizamiento5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Deslizamiento5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Deslizamiento5.addFeatures(features_Deslizamiento5);var lyr_Deslizamiento5 = new ol.layer.Vector({
                source:jsonSource_Deslizamiento5, 
                style: style_Deslizamiento5,
                title: "Deslizamiento"
            });var format_Caida6 = new ol.format.GeoJSON();
var features_Caida6 = format_Caida6.readFeatures(json_Caida6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caida6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Caida6.addFeatures(features_Caida6);var lyr_Caida6 = new ol.layer.Vector({
                source:jsonSource_Caida6, 
                style: style_Caida6,
                title: "Caida"
            });

lyr_Vuelco0.setVisible(false);lyr_Reptacion1.setVisible(false);lyr_OtroPeligro2.setVisible(false);lyr_MovimientoComplejo3.setVisible(false);lyr_Flujo4.setVisible(false);lyr_Deslizamiento5.setVisible(true);lyr_Caida6.setVisible(true);
var layersList = [baseLayer,lyr_Vuelco0,lyr_Reptacion1,lyr_OtroPeligro2,lyr_MovimientoComplejo3,lyr_Flujo4,lyr_Deslizamiento5,lyr_Caida6];
lyr_Vuelco0.set('fieldAliases', {'': '', 'PROYECTO': 'Fuente', 'COD_INVENT': 'COD_INVENT', 'TIPO_PELIG': 'Tipo Peligro', 'PELIGRO_ES': 'Peligro Especifico', 'NORTE': 'NORTE', 'ESTE': 'ESTE', 'COTA': 'COTA', 'ZONA': 'ZONA', 'CUADRANGUL': 'CUADRANGUL', 'PARAJE': 'PARAJE', 'DEPARTAMEN': 'Departamento', 'PROVINCIA': 'Provincia', 'DISTRITO': 'Distrito', 'CUENCA': 'CUENCA', 'DATUM': 'DATUM', 'FRANJA': 'FRANJA', 'GRADO_PELI': 'GRADO_PELI', 'GRADO_VULN': 'GRADO_VULN', 'ESTIMACION': 'Estimación', 'FUENTE_INF': 'FUENTE_INF', 'FECHA_MUES': 'FECHA_MUES', });
lyr_Reptacion1.set('fieldAliases', {'': '', 'PROYECTO': 'Fuente', 'COD_INVENT': 'COD_INVENT', 'TIPO_PELIG': 'Tipo Peligro', 'PELIGRO_ES': 'Peligro Especifico', 'NORTE': 'NORTE', 'ESTE': 'ESTE', 'COTA': 'COTA', 'ZONA': 'ZONA', 'CUADRANGUL': 'CUADRANGUL', 'PARAJE': 'PARAJE', 'DEPARTAMEN': 'Departamento', 'PROVINCIA': 'Provincia', 'DISTRITO': 'Distrito', 'CUENCA': 'CUENCA', 'DATUM': 'DATUM', 'FRANJA': 'FRANJA', 'GRADO_PELI': 'GRADO_PELI', 'GRADO_VULN': 'GRADO_VULN', 'ESTIMACION': 'Estimación', 'FUENTE_INF': 'FUENTE_INF', 'FECHA_MUES': 'FECHA_MUES', });
lyr_OtroPeligro2.set('fieldAliases', {'': '', 'PROYECTO': 'Fuente', 'COD_INVENT': 'COD_INVENT', 'TIPO_PELIG': 'Tipo Peligro', 'PELIGRO_ES': 'Peligro Especifico', 'NORTE': 'NORTE', 'ESTE': 'ESTE', 'COTA': 'COTA', 'ZONA': 'ZONA', 'CUADRANGUL': 'CUADRANGUL', 'PARAJE': 'PARAJE', 'DEPARTAMEN': 'Departamento', 'PROVINCIA': 'Provincia', 'DISTRITO': 'Distrito', 'CUENCA': 'CUENCA', 'DATUM': 'DATUM', 'FRANJA': 'FRANJA', 'GRADO_PELI': 'GRADO_PELI', 'GRADO_VULN': 'GRADO_VULN', 'ESTIMACION': 'Estimación', 'FUENTE_INF': 'FUENTE_INF', 'FECHA_MUES': 'FECHA_MUES', });
lyr_MovimientoComplejo3.set('fieldAliases', {'': '', 'PROYECTO': 'Fuente', 'COD_INVENT': 'COD_INVENT', 'TIPO_PELIG': 'Tipo Peligro', 'PELIGRO_ES': 'Peligro Especifico', 'NORTE': 'NORTE', 'ESTE': 'ESTE', 'COTA': 'COTA', 'ZONA': 'ZONA', 'CUADRANGUL': 'CUADRANGUL', 'PARAJE': 'PARAJE', 'DEPARTAMEN': 'Departamento', 'PROVINCIA': 'Provincia', 'DISTRITO': 'Distrito', 'CUENCA': 'CUENCA', 'DATUM': 'DATUM', 'FRANJA': 'FRANJA', 'GRADO_PELI': 'GRADO_PELI', 'GRADO_VULN': 'GRADO_VULN', 'ESTIMACION': 'Estimación', 'FUENTE_INF': 'FUENTE_INF', 'FECHA_MUES': 'FECHA_MUES', });
lyr_Flujo4.set('fieldAliases', {'': '', 'PROYECTO': 'Fuente', 'COD_INVENT': 'COD_INVENT', 'TIPO_PELIG': 'Tipo Peligro', 'PELIGRO_ES': 'Peligro Especifico', 'NORTE': 'NORTE', 'ESTE': 'ESTE', 'COTA': 'COTA', 'ZONA': 'ZONA', 'CUADRANGUL': 'CUADRANGUL', 'PARAJE': 'PARAJE', 'DEPARTAMEN': 'Departamento', 'PROVINCIA': 'Provincia', 'DISTRITO': 'Distrito', 'CUENCA': 'CUENCA', 'DATUM': 'DATUM', 'FRANJA': 'FRANJA', 'GRADO_PELI': 'GRADO_PELI', 'GRADO_VULN': 'GRADO_VULN', 'ESTIMACION': 'Estimación', 'FUENTE_INF': 'FUENTE_INF', 'FECHA_MUES': 'FECHA_MUES', });
lyr_Deslizamiento5.set('fieldAliases', {'': '', 'PROYECTO': 'Fuente', 'COD_INVENT': 'COD_INVENT', 'TIPO_PELIG': 'Tipo Peligro', 'PELIGRO_ES': 'Peligro Especifico', 'NORTE': 'NORTE', 'ESTE': 'ESTE', 'COTA': 'COTA', 'ZONA': 'ZONA', 'CUADRANGUL': 'CUADRANGUL', 'PARAJE': 'PARAJE', 'DEPARTAMEN': 'Departamento', 'PROVINCIA': 'Provincia', 'DISTRITO': 'Distrito', 'CUENCA': 'CUENCA', 'DATUM': 'DATUM', 'FRANJA': 'FRANJA', 'GRADO_PELI': 'GRADO_PELI', 'GRADO_VULN': 'GRADO_VULN', 'ESTIMACION': 'Estimación', 'FUENTE_INF': 'FUENTE_INF', 'FECHA_MUES': 'FECHA_MUES', });
lyr_Caida6.set('fieldAliases', {'': '', 'PROYECTO': 'Fuente', 'COD_INVENT': 'COD_INVENT', 'TIPO_PELIG': 'Tipo Peligro', 'PELIGRO_ES': 'Peligro Especifico', 'NORTE': 'NORTE', 'ESTE': 'ESTE', 'COTA': 'COTA', 'ZONA': 'ZONA', 'CUADRANGUL': 'CUADRANGUL', 'PARAJE': 'PARAJE', 'DEPARTAMEN': 'Departamento', 'PROVINCIA': 'Provincia', 'DISTRITO': 'Distrito', 'CUENCA': 'CUENCA', 'DATUM': 'DATUM', 'FRANJA': 'FRANJA', 'GRADO_PELI': 'GRADO_PELI', 'GRADO_VULN': 'GRADO_VULN', 'ESTIMACION': 'Estimación', 'FUENTE_INF': 'FUENTE_INF', 'FECHA_MUES': 'FECHA_MUES', });
lyr_Vuelco0.set('fieldImages', {'': 'Hidden', 'PROYECTO': 'TextEdit', 'COD_INVENT': 'Hidden', 'TIPO_PELIG': 'TextEdit', 'PELIGRO_ES': 'TextEdit', 'NORTE': 'Hidden', 'ESTE': 'Hidden', 'COTA': 'Hidden', 'ZONA': 'Hidden', 'CUADRANGUL': 'Hidden', 'PARAJE': 'Hidden', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'TextEdit', 'CUENCA': 'Hidden', 'DATUM': 'Hidden', 'FRANJA': 'Hidden', 'GRADO_PELI': 'Hidden', 'GRADO_VULN': 'Hidden', 'ESTIMACION': 'TextEdit', 'FUENTE_INF': 'Hidden', 'FECHA_MUES': 'Hidden', });
lyr_Reptacion1.set('fieldImages', {'': 'Hidden', 'PROYECTO': 'TextEdit', 'COD_INVENT': 'Hidden', 'TIPO_PELIG': 'TextEdit', 'PELIGRO_ES': 'TextEdit', 'NORTE': 'Hidden', 'ESTE': 'Hidden', 'COTA': 'Hidden', 'ZONA': 'Hidden', 'CUADRANGUL': 'Hidden', 'PARAJE': 'Hidden', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'TextEdit', 'CUENCA': 'Hidden', 'DATUM': 'Hidden', 'FRANJA': 'Hidden', 'GRADO_PELI': 'Hidden', 'GRADO_VULN': 'Hidden', 'ESTIMACION': 'TextEdit', 'FUENTE_INF': 'Hidden', 'FECHA_MUES': 'Hidden', });
lyr_OtroPeligro2.set('fieldImages', {'': 'Hidden', 'PROYECTO': 'TextEdit', 'COD_INVENT': 'Hidden', 'TIPO_PELIG': 'TextEdit', 'PELIGRO_ES': 'TextEdit', 'NORTE': 'Hidden', 'ESTE': 'Hidden', 'COTA': 'Hidden', 'ZONA': 'Hidden', 'CUADRANGUL': 'Hidden', 'PARAJE': 'Hidden', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'TextEdit', 'CUENCA': 'Hidden', 'DATUM': 'Hidden', 'FRANJA': 'Hidden', 'GRADO_PELI': 'Hidden', 'GRADO_VULN': 'Hidden', 'ESTIMACION': 'TextEdit', 'FUENTE_INF': 'Hidden', 'FECHA_MUES': 'Hidden', });
lyr_MovimientoComplejo3.set('fieldImages', {'': 'Hidden', 'PROYECTO': 'TextEdit', 'COD_INVENT': 'Hidden', 'TIPO_PELIG': 'TextEdit', 'PELIGRO_ES': 'TextEdit', 'NORTE': 'Hidden', 'ESTE': 'Hidden', 'COTA': 'Hidden', 'ZONA': 'Hidden', 'CUADRANGUL': 'Hidden', 'PARAJE': 'Hidden', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'TextEdit', 'CUENCA': 'Hidden', 'DATUM': 'Hidden', 'FRANJA': 'Hidden', 'GRADO_PELI': 'Hidden', 'GRADO_VULN': 'Hidden', 'ESTIMACION': 'TextEdit', 'FUENTE_INF': 'Hidden', 'FECHA_MUES': 'Hidden', });
lyr_Flujo4.set('fieldImages', {'': 'Hidden', 'PROYECTO': 'TextEdit', 'COD_INVENT': 'Hidden', 'TIPO_PELIG': 'TextEdit', 'PELIGRO_ES': 'TextEdit', 'NORTE': 'Hidden', 'ESTE': 'Hidden', 'COTA': 'Hidden', 'ZONA': 'Hidden', 'CUADRANGUL': 'Hidden', 'PARAJE': 'Hidden', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'TextEdit', 'CUENCA': 'Hidden', 'DATUM': 'Hidden', 'FRANJA': 'Hidden', 'GRADO_PELI': 'Hidden', 'GRADO_VULN': 'Hidden', 'ESTIMACION': 'TextEdit', 'FUENTE_INF': 'Hidden', 'FECHA_MUES': 'Hidden', });
lyr_Deslizamiento5.set('fieldImages', {'': 'Hidden', 'PROYECTO': 'TextEdit', 'COD_INVENT': 'Hidden', 'TIPO_PELIG': 'TextEdit', 'PELIGRO_ES': 'TextEdit', 'NORTE': 'Hidden', 'ESTE': 'Hidden', 'COTA': 'Hidden', 'ZONA': 'Hidden', 'CUADRANGUL': 'Hidden', 'PARAJE': 'Hidden', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'TextEdit', 'CUENCA': 'Hidden', 'DATUM': 'Hidden', 'FRANJA': 'Hidden', 'GRADO_PELI': 'Hidden', 'GRADO_VULN': 'Hidden', 'ESTIMACION': 'TextEdit', 'FUENTE_INF': 'Hidden', 'FECHA_MUES': 'Hidden', });
lyr_Caida6.set('fieldImages', {'': 'Hidden', 'PROYECTO': 'TextEdit', 'COD_INVENT': 'Hidden', 'TIPO_PELIG': 'TextEdit', 'PELIGRO_ES': 'TextEdit', 'NORTE': 'Hidden', 'ESTE': 'Hidden', 'COTA': 'Hidden', 'ZONA': 'Hidden', 'CUADRANGUL': 'Hidden', 'PARAJE': 'Hidden', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DISTRITO': 'TextEdit', 'CUENCA': 'Hidden', 'DATUM': 'Hidden', 'FRANJA': 'Hidden', 'GRADO_PELI': 'Hidden', 'GRADO_VULN': 'Hidden', 'ESTIMACION': 'TextEdit', 'FUENTE_INF': 'Hidden', 'FECHA_MUES': 'Hidden', });
lyr_Vuelco0.set('fieldLabels', {'PROYECTO': 'no label', 'TIPO_PELIG': 'no label', 'PELIGRO_ES': 'no label', 'DEPARTAMEN': 'no label', 'PROVINCIA': 'no label', 'DISTRITO': 'no label', 'ESTIMACION': 'no label', });
lyr_Reptacion1.set('fieldLabels', {'PROYECTO': 'no label', 'TIPO_PELIG': 'no label', 'PELIGRO_ES': 'no label', 'DEPARTAMEN': 'no label', 'PROVINCIA': 'no label', 'DISTRITO': 'no label', 'ESTIMACION': 'no label', });
lyr_OtroPeligro2.set('fieldLabels', {'PROYECTO': 'no label', 'TIPO_PELIG': 'no label', 'PELIGRO_ES': 'no label', 'DEPARTAMEN': 'no label', 'PROVINCIA': 'no label', 'DISTRITO': 'no label', 'ESTIMACION': 'no label', });
lyr_MovimientoComplejo3.set('fieldLabels', {'PROYECTO': 'no label', 'TIPO_PELIG': 'no label', 'PELIGRO_ES': 'no label', 'DEPARTAMEN': 'no label', 'PROVINCIA': 'no label', 'DISTRITO': 'no label', 'ESTIMACION': 'no label', });
lyr_Flujo4.set('fieldLabels', {'PROYECTO': 'no label', 'TIPO_PELIG': 'no label', 'PELIGRO_ES': 'no label', 'DEPARTAMEN': 'no label', 'PROVINCIA': 'no label', 'DISTRITO': 'no label', 'ESTIMACION': 'no label', });
lyr_Deslizamiento5.set('fieldLabels', {'PROYECTO': 'no label', 'TIPO_PELIG': 'no label', 'PELIGRO_ES': 'no label', 'DEPARTAMEN': 'no label', 'PROVINCIA': 'no label', 'DISTRITO': 'no label', 'ESTIMACION': 'no label', });
lyr_Caida6.set('fieldLabels', {'PROYECTO': 'no label', 'TIPO_PELIG': 'no label', 'PELIGRO_ES': 'no label', 'DEPARTAMEN': 'no label', 'PROVINCIA': 'no label', 'DISTRITO': 'no label', 'ESTIMACION': 'no label', });
lyr_Caida6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var size = 0;
function categories_Deslizamiento5(feature, value) {
                switch(value) {case 'Caida':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.6 + size,
            stroke: new ol.style.Stroke({color: 'rgba(136,160,167,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(215,25,28,1.0)'})})
    })];
                    break;
case 'Deslizamiento':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.6 + size,
            stroke: new ol.style.Stroke({color: 'rgba(136,160,167,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(241,124,74,1.0)'})})
    })];
                    break;
case 'Flujo':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.6 + size,
            stroke: new ol.style.Stroke({color: 'rgba(136,160,167,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(254,201,128,1.0)'})})
    })];
                    break;
case 'Mov. Complejo':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.6 + size,
            stroke: new ol.style.Stroke({color: 'rgba(136,160,167,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,255,191,1.0)'})})
    })];
                    break;
case 'Otro Peligro':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.6 + size,
            stroke: new ol.style.Stroke({color: 'rgba(136,160,167,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(199,233,173,1.0)'})})
    })];
                    break;
case 'Reptacion':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.6 + size,
            stroke: new ol.style.Stroke({color: 'rgba(136,160,167,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(128,191,172,1.0)'})})
    })];
                    break;
case 'Vuelco':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.6 + size,
            stroke: new ol.style.Stroke({color: 'rgba(136,160,167,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(43,131,186,1.0)'})})
    })];
                    break;}};
var styleCache_Deslizamiento5={}
var style_Deslizamiento5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("TIPO_PELIG");
    var style = categories_Deslizamiento5(feature, value);
    var labelText = "";
    var currentFeature = feature;
    clusteredFeatures = feature.get("features");
    if (typeof clusteredFeatures !== "undefined") {
        if (size >= 2) {
            labelText = size.toString()
        } else {
            labelText = ""
        }
        var key = value + "_" + labelText
        if (!styleCache_Deslizamiento5[key]){
            var text = new ol.style.Text({
                  font: '10.725px \'MS Shell Dlg 2\', sans-serif',
                  text: labelText,
                  textAlign: "center",
                  fill: new ol.style.Fill({
                    color: 'rgba(0, 0, 0, 1)'
                  }),
                });
            styleCache_Deslizamiento5[key] = new ol.style.Style({"text": text})
        }
    } else {
        if ("" !== null) {
            labelText = String("");
        } else {
            labelText = ""
        }
        var key = value + "_" + labelText
        if (!styleCache_Deslizamiento5[key]){
            var text = new ol.style.Text({
                    font: '10.725px \'MS Shell Dlg 2\', sans-serif',
                    text: labelText,
                    textBaseline: "center",
                    textAlign: "left",
                    offsetX: 5,
                    offsetY: 3,
                    fill: new ol.style.Fill({
                      color: 'rgba(0, 0, 0, 1)'
                    }),
                });
            styleCache_Deslizamiento5[key] = new ol.style.Style({"text": text})
        }
    }
    var allStyles = [styleCache_Deslizamiento5[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};
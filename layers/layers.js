var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.414000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Takastikkjevidare_1 = new ol.format.GeoJSON();
var features_Takastikkjevidare_1 = format_Takastikkjevidare_1.readFeatures(json_Takastikkjevidare_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Takastikkjevidare_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Takastikkjevidare_1.addFeatures(features_Takastikkjevidare_1);
var lyr_Takastikkjevidare_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Takastikkjevidare_1, 
                style: style_Takastikkjevidare_1,
                popuplayertitle: 'Takast ikkje vidare',
                interactive: false,
                title: '<img src="styles/legend/Takastikkjevidare_1.png" /> Takast ikkje vidare'
            });
var format_Innspelutsatttiljanuar_2 = new ol.format.GeoJSON();
var features_Innspelutsatttiljanuar_2 = format_Innspelutsatttiljanuar_2.readFeatures(json_Innspelutsatttiljanuar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Innspelutsatttiljanuar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Innspelutsatttiljanuar_2.addFeatures(features_Innspelutsatttiljanuar_2);
var lyr_Innspelutsatttiljanuar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Innspelutsatttiljanuar_2, 
                style: style_Innspelutsatttiljanuar_2,
                popuplayertitle: 'Innspel utsatt til januar',
                interactive: false,
                title: '<img src="styles/legend/Innspelutsatttiljanuar_2.png" /> Innspel utsatt til januar'
            });
var format_Eksternearealinnspeloppstartlinjer_3 = new ol.format.GeoJSON();
var features_Eksternearealinnspeloppstartlinjer_3 = format_Eksternearealinnspeloppstartlinjer_3.readFeatures(json_Eksternearealinnspeloppstartlinjer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eksternearealinnspeloppstartlinjer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eksternearealinnspeloppstartlinjer_3.addFeatures(features_Eksternearealinnspeloppstartlinjer_3);
var lyr_Eksternearealinnspeloppstartlinjer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eksternearealinnspeloppstartlinjer_3, 
                style: style_Eksternearealinnspeloppstartlinjer_3,
                popuplayertitle: 'Eksterne arealinnspel oppstart - linjer',
                interactive: false,
    title: 'Eksterne arealinnspel oppstart - linjer<br />\
    <img src="styles/legend/Eksternearealinnspeloppstartlinjer_3_0.png" /> Til KU<br />' });
var format_Takastvidare_4 = new ol.format.GeoJSON();
var features_Takastvidare_4 = format_Takastvidare_4.readFeatures(json_Takastvidare_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Takastvidare_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Takastvidare_4.addFeatures(features_Takastvidare_4);
var lyr_Takastvidare_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Takastvidare_4, 
                style: style_Takastvidare_4,
                popuplayertitle: 'Takast vidare',
                interactive: false,
    title: 'Takast vidare<br />\
    <img src="styles/legend/Takastvidare_4_0.png" /> Eksterne innspel<br />\
    <img src="styles/legend/Takastvidare_4_1.png" /> Uregulert<br />\
    <img src="styles/legend/Takastvidare_4_2.png" /> Råker regulering<br />' });
var group_ResultatetterFormannskapsmte15122025 = new ol.layer.Group({
                                layers: [lyr_Takastikkjevidare_1,lyr_Innspelutsatttiljanuar_2,lyr_Eksternearealinnspeloppstartlinjer_3,lyr_Takastvidare_4,],
                                fold: 'open',
                                title: 'Resultat etter Formannskapsmøte 15.12.2025'});
var group_Underarbeid = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Under arbeid'});
var group_Innspelfrhyring = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Innspel før høyring'});
var group_Bruktilayoutkanslettes = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Brukt i layout, kan slettes'});
var group_Verneomrderogutvalgtenaturtyper = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Verneområder og utvalgte naturtyper'});
var group_NaturmangfoldlovenkapVogVI = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Naturmangfoldloven kap. V og VI'});
var group_12Skredfare = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '1-2 Skredfare'});
var group_13Stormflo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '1-3 Stormflo'});
var group_Middelhyvann = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Middelhøyvann'});
var group_Stormfloutenklimapslag = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Stormflo uten klimapåslag'});
var group_Stormflomedklimapslag = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Stormflo med klimapåslag'});
var group_14Viktigenaturverdiar = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '1-4 Viktige naturverdiar'});
var group_15DrikkevasskjeldeAlnes = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '1-5 Drikkevasskjelde (Alnes)'});
var group_16LNFmedhgjordverdijordvernstrategi = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '1-6 LNF med høg jordverdi (jordvernstrategi)'});
var group_17Karbonrikeareal = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '1-7 Karbonrike areal'});
var group_18UtvalgteomsynssonerKPA18 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '1-8 Utvalgte omsynssoner KPA18'});
var group_18BandleggingssoneKPA43 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '1-8 Bandleggingssone (KPA 4.3)'});
var group_18GjennomfringssoneKPA44 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '1-8 Gjennomføringssone (KPA 4.4)'});
var group_Hgspentlinjer = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Høgspentlinjer'});
var group_21Tilkomstinfrastruktur = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2-1 Tilkomst/infrastruktur'});
var group_22Kulturverdier = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2-2 Kulturverdier'});
var group_WMS = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'WMS'});
var group_23Styogforureining = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2-3 Støy og forureining'});
var group_Punkt = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Punkt'});
var group_Linje = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Linje'});
var group_Planforfriluftslivetsferdselsrer = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Plan for friluftslivets ferdselsårer'});
var group_25Friluftsinteresser = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2-5 Friluftsinteresser'});
var group_26NrhettiltenesterinklskuleskyssogPAKT = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '2-6 Nærhet til tenester (inkl. skuleskyss og PAKT)'});
var group_Snskredaktsemd = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Snøskred aktsemd'});
var group_Kvikkleireaktsemd = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Kvikkleire aktsemd'});
var group_Steinsprangaktsemd = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Steinsprang aktsemd'});
var group_Jordogflomskredaktsemd = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Jord og flomskred aktsemd'});
var group_Flomaktsemd = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Flom aktsemd'});
var group_Stormflo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Stormflo'});
var group_Kvikkleire = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Kvikkleire'});
var group_ROS = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'ROS'});
var group_Hotspotraudlistaartar = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Hotspot - raudlista artar'});
var group_KU = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'KU'});
var group_Barnasinteresser = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Barnas interesser'});
var group_Kulturverdier = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Kulturverdier'});
var group_Verneomrder = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Verneområder'});
var group_Naturtyper = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Naturtyper'});
var group_Arter = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Arter'});
var group_Akvakulturlokaliteter = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Akvakulturlokaliteter'});
var group_Gyteomrder = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Gyteområder'});
var group_Trafikkmengde = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Trafikkmengde'});
var group_Hovedledogbiled = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Hovedled og biled'});
var group_Friluftsinteresser = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Friluftsinteresser'});
var group_Landbruksinteresserjordvern = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Landbruksinteresser / jordvern'});
var group_Bygninger = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Bygninger'});
var group_KPA2018 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'KPA 2018'});
var group_VidarefringavreguleringsplanKPA45 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Vidareføring av reguleringsplan (KPA 4.5)'});
var group_GjennomfringssoneKPA44 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Gjennomføringssone (KPA 4.4)'});
var group_BandleggingssoneKPA43 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Bandleggingssone (KPA 4.3)'});
var group_SonemedsrlegeomsynKPA42 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Sone med særlege omsyn (KPA 4.2)'});
var group_FaresikringsogstysoneKPA41 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Fare-, sikrings- og støysone (KPA 4.1)'});
var group_100metersbeltet = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '100-metersbeltet'});
var group_Reguleringsplan = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Reguleringsplan'});
var group_Planvaskunderarbeidiannetprosjekt = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Planvask (under arbeid i annet prosjekt)'});
var group_Innhald = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Innhald'});
var group_Bakgrunnskart = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Bakgrunnskart'});
var group_Openstreetmap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: 'close',
                                title: 'Open street map'});

lyr_OSMStandard_0.setVisible(true);lyr_Takastikkjevidare_1.setVisible(false);lyr_Innspelutsatttiljanuar_2.setVisible(false);lyr_Eksternearealinnspeloppstartlinjer_3.setVisible(true);lyr_Takastvidare_4.setVisible(true);
var layersList = [group_Openstreetmap,group_ResultatetterFormannskapsmte15122025];
lyr_Takastikkjevidare_1.set('fieldAliases', {'Område': 'Område', 'Type innsp': 'Type innsp', 'Ønske': 'Ønske', 'Journalnr': 'Journalnr', 'Endring': 'Endring', 'Konklusjon': 'Konklusjon', 'Bakgrunn': 'Bakgrunn', 'Kategori': 'Kategori', 'Bebygd': 'Bebygd', 'Regulert': 'Regulert', 'Øy': 'Øy', 'Eks formå': 'Eks formå', 'Ny formål': 'Ny formål', 'Vurdering/': 'Vurdering/', 'ObjektID': 'ObjektID', 'gnr.bnr.': 'gnr.bnr.', 'Resultat f': 'Resultat f', 'info forma': 'info forma', });
lyr_Innspelutsatttiljanuar_2.set('fieldAliases', {'Område': 'Område', 'Type innsp': 'Type innsp', 'Ønske': 'Ønske', 'Journalnr': 'Journalnr', 'Endring': 'Endring', 'Konklusjon': 'Konklusjon', 'Bakgrunn': 'Bakgrunn', 'Kategori': 'Kategori', 'Bebygd': 'Bebygd', 'Regulert': 'Regulert', 'Øy': 'Øy', 'Eks formå': 'Eks formå', 'Ny formål': 'Ny formål', 'Vurdering/': 'Vurdering/', 'ObjektID': 'ObjektID', 'gnr.bnr.': 'gnr.bnr.', 'Resultat f': 'Resultat f', 'info forma': 'info forma', });
lyr_Eksternearealinnspeloppstartlinjer_3.set('fieldAliases', {'id': 'id', 'Gbnr': 'Gbnr', 'Område': 'Område', 'Type innsp': 'Type innsp', 'Ønsker': 'Ønsker', 'Journalnr': 'Journalnr', 'Vurdering': 'Vurdering', 'Konklusjon': 'Konklusjon', });
lyr_Takastvidare_4.set('fieldAliases', {'Område': 'Område', 'Type innsp': 'Type innsp', 'Ønske': 'Ønske', 'Journalnr': 'Journalnr', 'Endring': 'Endring', 'Konklusjon': 'Konklusjon', 'Bakgrunn': 'Bakgrunn', 'Kategori': 'Kategori', 'Bebygd': 'Bebygd', 'Regulert': 'Regulert', 'Øy': 'Øy', 'Eks formå': 'Eks formå', 'Ny formål': 'Ny formål', 'Vurdering/': 'Vurdering/', 'ObjektID': 'ObjektID', 'gnr.bnr.': 'gnr.bnr.', 'Resultat f': 'Resultat f', 'info forma': 'info forma', });
lyr_Takastikkjevidare_1.set('fieldImages', {'Område': 'TextEdit', 'Type innsp': 'TextEdit', 'Ønske': 'TextEdit', 'Journalnr': 'TextEdit', 'Endring': 'TextEdit', 'Konklusjon': 'TextEdit', 'Bakgrunn': 'TextEdit', 'Kategori': 'TextEdit', 'Bebygd': 'TextEdit', 'Regulert': 'TextEdit', 'Øy': 'TextEdit', 'Eks formå': 'TextEdit', 'Ny formål': 'TextEdit', 'Vurdering/': 'TextEdit', 'ObjektID': 'TextEdit', 'gnr.bnr.': 'TextEdit', 'Resultat f': 'TextEdit', 'info forma': 'TextEdit', });
lyr_Innspelutsatttiljanuar_2.set('fieldImages', {'Område': 'TextEdit', 'Type innsp': 'TextEdit', 'Ønske': 'TextEdit', 'Journalnr': 'TextEdit', 'Endring': 'TextEdit', 'Konklusjon': 'TextEdit', 'Bakgrunn': 'TextEdit', 'Kategori': 'TextEdit', 'Bebygd': 'TextEdit', 'Regulert': 'TextEdit', 'Øy': 'TextEdit', 'Eks formå': 'TextEdit', 'Ny formål': 'TextEdit', 'Vurdering/': 'TextEdit', 'ObjektID': 'TextEdit', 'gnr.bnr.': 'TextEdit', 'Resultat f': 'TextEdit', 'info forma': 'TextEdit', });
lyr_Eksternearealinnspeloppstartlinjer_3.set('fieldImages', {'id': 'TextEdit', 'Gbnr': 'TextEdit', 'Område': 'TextEdit', 'Type innsp': 'TextEdit', 'Ønsker': 'TextEdit', 'Journalnr': 'TextEdit', 'Vurdering': 'TextEdit', 'Konklusjon': 'TextEdit', });
lyr_Takastvidare_4.set('fieldImages', {'Område': 'TextEdit', 'Type innsp': 'TextEdit', 'Ønske': 'TextEdit', 'Journalnr': 'TextEdit', 'Endring': 'TextEdit', 'Konklusjon': 'TextEdit', 'Bakgrunn': 'TextEdit', 'Kategori': 'TextEdit', 'Bebygd': 'TextEdit', 'Regulert': 'TextEdit', 'Øy': 'TextEdit', 'Eks formå': 'TextEdit', 'Ny formål': 'TextEdit', 'Vurdering/': 'TextEdit', 'ObjektID': 'TextEdit', 'gnr.bnr.': 'TextEdit', 'Resultat f': 'TextEdit', 'info forma': 'TextEdit', });
lyr_Takastikkjevidare_1.set('fieldLabels', {'Område': 'no label', 'Type innsp': 'no label', 'Ønske': 'no label', 'Journalnr': 'no label', 'Endring': 'no label', 'Konklusjon': 'no label', 'Bakgrunn': 'no label', 'Kategori': 'no label', 'Bebygd': 'no label', 'Regulert': 'no label', 'Øy': 'no label', 'Eks formå': 'no label', 'Ny formål': 'no label', 'Vurdering/': 'no label', 'ObjektID': 'no label', 'gnr.bnr.': 'no label', 'Resultat f': 'no label', 'info forma': 'no label', });
lyr_Innspelutsatttiljanuar_2.set('fieldLabels', {'Område': 'no label', 'Type innsp': 'no label', 'Ønske': 'no label', 'Journalnr': 'no label', 'Endring': 'no label', 'Konklusjon': 'no label', 'Bakgrunn': 'no label', 'Kategori': 'no label', 'Bebygd': 'no label', 'Regulert': 'no label', 'Øy': 'no label', 'Eks formå': 'no label', 'Ny formål': 'no label', 'Vurdering/': 'no label', 'ObjektID': 'no label', 'gnr.bnr.': 'no label', 'Resultat f': 'no label', 'info forma': 'no label', });
lyr_Eksternearealinnspeloppstartlinjer_3.set('fieldLabels', {'id': 'header label - visible with data', 'Gbnr': 'header label - visible with data', 'Område': 'header label - visible with data', 'Type innsp': 'header label - visible with data', 'Ønsker': 'header label - visible with data', 'Journalnr': 'header label - visible with data', 'Vurdering': 'header label - visible with data', 'Konklusjon': 'header label - visible with data', });
lyr_Takastvidare_4.set('fieldLabels', {'Område': 'no label', 'Type innsp': 'no label', 'Ønske': 'no label', 'Journalnr': 'no label', 'Endring': 'no label', 'Konklusjon': 'no label', 'Bakgrunn': 'no label', 'Kategori': 'no label', 'Bebygd': 'no label', 'Regulert': 'no label', 'Øy': 'no label', 'Eks formå': 'no label', 'Ny formål': 'no label', 'Vurdering/': 'no label', 'ObjektID': 'no label', 'gnr.bnr.': 'no label', 'Resultat f': 'no label', 'info forma': 'no label', });
lyr_Takastvidare_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
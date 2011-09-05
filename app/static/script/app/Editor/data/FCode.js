/**
 * Copyright (c) 2008-2011 The Open Planning Project
 * 
 * Published under the GPL license.
 * See https://github.com/opengeo/gxp/raw/master/license.txt for the full text
 * of the license.
 */

/**
 * @requires Editor.js
 */
Ext.namespace("Editor");

/**
 * api: property[Editor.fCodeDict]
 * ``Object``
 * A code list mapping FCODE values to their respective descriptions.
 */
Editor.fCodeDict = {
    '30700':'Area to be Submerged',
    '31200':'Bay/Inlet',
    '31800':'Bridge',
    '33400':'Connector',
    '33600':'Canal/Ditch',
    '33601':'Canal/Ditch: Canal/Ditch Type = Aqueduct',
    '33603':'Canal Ditch: Canal Ditch Type = Stormwater',
    '34300':'Dam/Weir',
    '34305':'Dam/Weir: Construction Material = Earthen',
    '34306':'Dam/Weir: Construction Material = Nonearthen',
    '36100':'Playa',
    '36200':'Flume',
    '36400':'Foreshore',
    '36700':'Gaging Station',
    '36900':'Gate',
    '37300':'Hazard Zone',
    '37800':'Ice Mass',
    '39000':'Lake/Pond',
    '39001':'Lake/Pond: Hydrographic Category = Intermittent',
    '39004':'Lake/Pond: Hydrographic Category = Perennial',
    '39005':'Lake/Pond: Hydrographic Category = Intermittent; Stage = High Water Elevation',
    '39006':'Lake/Pond: Hydrographic Category = Intermittent; Stage = Date of Photography',
    '39009':'Lake/Pond: Hydrographic Category = Perennial; Stage = Average Water Elevation',
    '39010':'Lake/Pond: Hydrographic Category = Perennial; Stage = Normal Pool',
    '39011':'Lake/Pond: Hydrographic Category = Perennial; Stage = Date of Photography',
    '39012':'Lake/Pond: Hydrographic Category = Perennial; Stage = Spillway Elevation',
    '39800':'Lock Chamber',
    '40300':'Inundation Area',
    '40307':'Inundation Area: Inundation Control Status = Not Controlled',
    '40308':'Inundation Area: Inundation Control Status = Controlled',
    '40309':'Inundation Area: Inundation Control Status = Controlled; Stage = Flood Elevation',
    '41100':'Nonearthen Shore',
    '42000':'Underground Conduit',
    '42001':'Underground Conduit: Positional Accuracy = Definite',
    '42002':'Underground Conduit: Positional Accuracy = Indefinite',
    '42003':'Underground Conduit: Positional Accuracy = Approximate',
    '42800':'Pipeline',
    '42801':'Pipeline: Pipeline Type = Aqueduct; Relationship to Surface = At or Near',
    '42802':'Pipeline: Pipeline Type = Aqueduct; Relationship to Surface = Elevated',
    '42803':'Pipeline: Pipeline Type = Aqueduct; Relationship to Surface = Underground',
    '42804':'Pipeline: Pipeline Type = Aqueduct; Relationship to Surface = Underwater',
    '42805':'Pipeline: Pipeline Type = General Case; Relationship to Surface = At or Near',
    '42806':'Pipeline: Pipeline Type = General Case; Relationship to Surface = Elevated',
    '42807':'Pipeline: Pipeline Type = General Case; Relationship to Surface = Underground',
    '42808':'Pipeline: Pipeline Type = General Case; Relationship to Surface = Underwater',
    '42809':'Pipeline: Pipeline Type = Penstock; Relationship to Surface = At or Near',
    '42810':'Pipeline: Pipeline Type = Penstock; Relationship to Surface = Elevated',
    '42811':'Pipeline: Pipeline Type = Penstock; Relationship to Surface = Underground',
    '42812':'Pipeline: Pipeline Type = Penstock; Relationship to Surface = Underwater',
    '42813':'Pipeline: Pipeline Type = Siphon',
    '42814':'Pipeline: Pipeline Type = General Case',
    '42815':'Pipeline: Pipeline Type = Penstock',
    '42816':'Pipeline: Pipeline Type = Aqueduct',
    '42820':'Pipeline: Pipeline Type = Stormwater',
    '42821':'Pipeline: Pipeline Type = Stormwater; Relationship to Surface = At or Near',
    '42822':'Pipeline: Pipeline Type = Stormwater; Relationship to Surface = Elevated',
    '42823':'Pipeline: Pipeline Type = Stormwater; Relationship to Surface = Underground',
    '42824':'Pipeline: Pipeline Type = Stormwater; Relationship to Surface = Underwater',
    '43100':'Rapids',
    '43400':'Reef',
    '43600':'Reservoir',
    '43601':'Reservoir: Reservoir Type = Aquaculture',
    '43603':'Reservoir: Reservoir Type = Decorative Pool',
    '43604':'Reservoir: Reservoir Type = Tailings Pond; Construction Material = Earthen',
    '43605':'Reservoir: Reservoir Type = Tailings Pond',
    '43606':'Reservoir: Reservoir Type = Disposal',
    '43607':'Reservoir: Reservoir Type = Evaporator',
    '43608':'Reservoir: Reservoir Type = Swimming Pool',
    '43609':'Reservoir: Reservoir Type = Cooling Pond',
    '43610':'Reservoir: Reservoir Type = Filtration Pond',
    '43611':'Reservoir: Reservoir Type = Settling Pond',
    '43612':'Reservoir: Reservoir Type = Sewage Treatment Pond',
    '43613':'Reservoir: Reservoir Type = Water Storage; Construction Material = Nonearthen',
    '43614':'Reservoir: Reservoir Type = Water Storage; Construction Material = Earthen; Hydrographic Category = Intermittent',
    '43615':'Reservoir: Reservoir Type = Water Storage; Construction Material = Earthen; Hydrographic Category = Perennial',
    '43617':'Reservoir: Reservoir Type = Water Storage',
    '43618':'Reservoir: Construction Material = Earthen',
    '43619':'Reservoir: Construction Material = Nonearthen',
    '43621':'Reservoir: Reservoir Type = Water Storage; Hydrographic Category = Perennial',
    '43623':'Reservoir: Reservoir Type = Evaporator; Construction Material = Earthen',
    '43624':'Reservoir: Reservoir Type = Treatment',
    '43625':'Reservoir: Reservoir Type = Disposal; Construction Material = Earthen',
    '43626':'Reservoir: Reservoir Type = Disposal; Construction Material = Nonearthen',
    '44100':'Rock',
    '44101':'Rock: Relationship to Surface = Abovewater',
    '44102':'Rock: Relationship to Surface = Underwater',
    '44500':'Sea/Ocean',
    '45000':'Sink/Rise',
    '45400':'Special Use Zone',
    '45401':'Special Use Zone: Special Use Zone Type = Dump Site; Operational Status = Operational',
    '45402':'Special Use Zone: Special Use Zone Type = Dump Site; Operational Status = Abandoned',
    '45403':'Special Use Zone: Special Use Zone Type = Spoil Area; Operational Status = Operational',
    '45404':'Special Use Zone: Special Use Zone Type = Spoil Area; Operational Status = Abandoned',
    '45500':'Spillway',
    '45800':'Spring/Seep',
    '46000':'Stream/River',
    '46003':'Stream/River: Hydrographic Category = Intermittent',
    '46006':'Stream/River: Hydrographic Category = Perennial',
    '46007':'Stream/River: Hydrographic Category = Ephemeral',
    '46100':'Submerged Stream',
    '46600':'Swamp/Marsh',
    '46601':'Swamp/Marsh: Hydrographic Category = Intermittent',
    '46602':'Swamp/Marsh: Hydrographic Category = Perennial',
    '47800':'Tunnel',
    '48300':'Wall',
    '48400':'Wash',
    '48500':'Water Intake/Outflow',
    '48700':'Waterfall',
    '48800':'Well',
    '49300':'Estuary',
    '50300':'Sounding Datum Line',
    '50301':'Sounding Datum Line: Positional Accuracy = Approximate',
    '50302':'Sounding Datum Line: Positional Accuracy = Definite',
    '53300':'Special Use Zone Limit',
    '53301':'Special Use Zone Limit: Positional Accuracy = Definite',
    '53302':'Special Use Zone Limit: Positional Accuracy = Indefinite',
    '53700':'Area of Complex Channels',
    '55800':'Artificial Path',
    '56600':'Coastline',
    '56700':'Shoreline',
    '56800':'Levee'
};

/** api: method[Editor.getFCodes]
 *  Get a list of FCODE values and their corresponding descriptions filtered 
 *  by the layer type.
 *
 *  :arg layer: ``String`` The layer to filter for, e.g. NHDFlowline
 *
 *  Returns:
 *  ``Array`` An Array containing the keys and values for FCODE matching the
 *  layer type.
 */
Editor.getFCodes = function(layer) {
    var fCodes;
    var fTypes = Editor.layerFTypes[layer];
    if (fTypes) {
        fCodes = [];
        for (var fCode in Editor.fCodeDict) {
            if (fTypes.indexOf(fCode.substring(0, 3)) >= 0) {
                fCodes.push([fCode, Editor.fCodeDict[fCode]]);
            }
        }
    }
    return fCodes;
};

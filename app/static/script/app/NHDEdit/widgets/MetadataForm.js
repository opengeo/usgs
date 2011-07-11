/**
 * Copyright (c) 2008-2011 The Open Planning Project
 * 
 * Published under the BSD license.
 * See https://github.com/opengeo/gxp/raw/master/license.txt for the full text
 * of the license.
 */

Ext.ns("NHDEdit");

/** api: (define)
 *  module = NHDEdit
 *  class = MetadataForm
 *  extends = Ext.form.FormPanel
 */

/** api: constructor
 *  .. class:: MetadataForm(config)
 *
 *    Entry form for metadata.
 */
NHDEdit.MetadataForm = Ext.extend(Ext.form.FormPanel, {

    url: null,

    schema: null,

    featureType: null,

    featureNS: null,

    featureStore: null,

    openWindow: null,

    initComponent : function() {
        this.fbar = [
            {
                text: "Open",
                iconCls: "gxp-icon-open",
                disabled: true,
                id: "app-open-button",
                handler: this.openEntry,
                scope: this
            }, {
                text: "Save",
                iconCls: "gxp-icon-save",
                handler: this.saveEntry,
                scope: this,
                id: "app-save-button",
                disabled: true
            }
        ];
        this.schema = new GeoExt.data.AttributeStore({
            url: this.url,
            baseParams: {
                SERVICE: "WFS",
                VERSION: "1.1.0",
                REQUEST: "DescribeFeatureType",
                TYPENAME: this.featurePrefix + ":" + this.featureType
            },
            autoLoad: true,
            listeners: {
                "load": this.onLoad,
                scope: this
            }
        });
        NHDEdit.MetadataForm.superclass.initComponent.call(this);
        this.addEvents(
            'metadataselected'
        );
    },

    createGrid: function() {
        Ext.getCmp("app-open-button").setDisabled(false);
        this.grid = new gxp.grid.FeatureGrid({
            store: this.featureStore,
            schema: this.schema,
            loadMask: true,
            /* TODO: in this case it would be easier to specify the includeFields */
            ignoreFields: ['meta_processid', 'attributeaccuracyreport', 'logicalconsistencyreport', 'completenessreport', 'horizpositionalaccuracyreport', 'vertpositionalaccuracyreport', 'metadatastandardname', 'metadatastandardversion', 'metadatadate', 'datasetcredit', 'contactorganization', 'addresstype', 'address', 'city', 'stateorprovince', 'postalcode', 'contactvoicetelephone', 'contactinstructions'],
            height: 300,
            bbar: ["->", {text: "Open", iconCls: "gxp-icon-open", handler: this.openMetadata, scope: this}]
        });
    },

    saveEntry: function() {
        var feature = new OpenLayers.Feature.Vector(null, {});
        this.getForm().items.each(function(item) {
            var value = item.getRawValue();
            if (value !== "") {
                feature.attributes[item.name] = value;
            }
        });
        feature.state = OpenLayers.State.INSERT;
        var options = {
            callback: function(response) {
                if (response && response.insertIds) {
                    this.fireEvent('metadataselected', this, response.insertIds[0]);
                }
            },
            scope: this
        };
        this.featureStore.proxy.protocol.commit([feature], options);
    },

    openEntry: function() {
        if (this.openWindow === null) {
            this.openWindow = new Ext.Window({title: "Open", layout: "fit", items: [this.grid]});
        }
        this.openWindow.show();
    },

    openMetadata: function() {
        var fid = this.grid.getSelectionModel().getSelected().get("feature").fid;
        this.fireEvent('metadataselected', this, fid);
        this.openWindow.close();
    },

    createStore: function() {
        var fields = [];
        this.schema.each(function(r) {
            fields.push({name: r.get("name")});
        }, this);
        this.featureStore = new gxp.data.WFSFeatureStore({
            fields: fields,
            autoLoad: true,
            listeners: {
                "load": this.createGrid,
                scope: this            
            },
            url: this.schema.url,
            featureType: this.featureType,
            featureNS: this.featureNS
        });
    },

    onLoad: function() {
        this.createStore();
        Ext.getCmp("app-save-button").setDisabled(false);
        var commitFieldset = new Ext.form.FieldSet({title: "Commit message"});
        var fieldSet = new Ext.form.FieldSet({collapsible: true, collapsed: true, title: "Advanced"});
        this.schema.each(function(r) {
            var type = r.get("type");
            if (type.match(/^[^:]*:?((Multi)?(Point|Line|Polygon|Curve|Surface|Geometry))/)) {
                // exclude gml geometries
                return;
            }
            var name = r.get("name");
            var fieldCfg = GeoExt.form.recordToField(r);
            if (name.toLowerCase() === "processdescription") {
                fieldCfg.xtype = "textarea";
                fieldCfg.grow = true;
                fieldCfg.width = 140;
                commitFieldset.add(fieldCfg);
            } else {
                fieldSet.add(fieldCfg);
            }
        }, this);
        this.add(commitFieldset);
        this.add(fieldSet);
        this.doLayout();
    }

});

Ext.reg('app_metadataform', NHDEdit.MetadataForm);
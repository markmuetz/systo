(function ($) {

  /***********************************************************
   *         diagram_svg widget
   ***********************************************************
   */
    $.widget('systo.diagram_svg', {
        meta:{
            short_description: 'SVG view of model diagram',
            long_description: 'Currently, produces a static SVG model diagram - no user interaction.',
            author: 'Robert Muetzelfeldt',
            last_modified: 'June 2015',
            visible: true,
            options: {
            }
        },

        options: {
            packageId:'package1'
        },

        widgetEventPrefix: 'diagram_svg:',

        _create: function () {
            var self = this;
            this.element.addClass('diagram_svg-1');

            var div = $('<div style="width:600px; height:500px; border:solid 2px black"></div>');

            this._container = $(this.element).append(div);


            $(document).on('change_model_listener', {}, function(event, parameters) {
                console.debug(parameters);
                console.debug(self.options);
                if (!parameters.packageId || parameters.packageId === self.options.packageId) {
                    var oldModelId = parameters.oldModelId;
                    var newModelId = parameters.newModelId;
                    var model = SYSTO.models[newModelId];
                    $(div).empty();
                    var svgString = generateSvg(model);
                    console.debug(svgString);
                    var svg = $(svgString);
                    $(div).append(svg);
                }
            });


            this._setOptions({
            });
        },

        _destroy: function () {
            this.element.removeClass('diagram_svg-1');
            this.element.empty();
            this._super();
        },
        _setOption: function (key, value) {
            var self = this;
            var prev = this.options[key];
            var fnMap = {
            };

            // base
            this._super(key, value);

            if (key in fnMap) {
                fnMap[key]();

                // Fire event
                this._triggerOptionChanged(key, prev, value);
            }
        },

        _triggerOptionChanged: function (optionKey, previousValue, currentValue) {
            this._trigger('setOption', {type: 'setOption'}, {
                option: optionKey,
                previous: previousValue,
                current: currentValue
            });
        }
    });

    function generateSvg(model) {
        var node;     // a node object
        var nodeList; // the map of all nodes
        var nodeId;   // the key for a particular node;
        var svg;      // the <svg> container
        var x;
        var y;

        svg = '<svg width="600" height="500">';
        
        var nodeList = model.nodes;
        for (nodeId in nodeList) {
            node = nodeList[nodeId];
            if (node.shape === 'rectangle') {
                x = node.centrex - node.width/2;
                y = node.centrey - node.height/2;
                svgNode = '<rect x="'+x+'" y="'+y+'" width="40" height="25" style="fill:'+node.fillStyle+';stroke-width:1;stroke:rgb(0,0,0)" />';
            } else if (node.shape === 'oval') {
                x = node.centrex;
                y = node.centrey;
                svgNode = '<ellipse cx="'+x+'" cy="'+y+'" rx="10" ry="10" style="fill:'+node.fillStyle+';stroke-width:1;stroke:rgb(0,0,0)" />';
            }
            svg = svg+svgNode;
        }
        svg = svg+'</svg>';
        return svg;
    }

})(jQuery);

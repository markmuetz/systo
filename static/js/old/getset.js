// July 2014
// Robert Muetzelfeldt
// This set of functions provides an API for getting or setting values in the internal model representatiom.
// It provides a level of abstraction which enables code to remain unchanged when the internal data model
// for representing models changes.

// We could (and maybe will...) provide a separate function for each property.
// However, instead of doing that, I am exploring havinga  single function whose argument 
// list includes the property name.   This clearly adds to the overhead of using the API
// (compared with direct lookups on the model object, or compared to a separate function
// for each property), but has the major advantage that everything goes through a single 
// bit of code, making it much easier to capture and log all operations.

// We also use the same method as used for Systo-defined functions (a single object for
// all functions, containing a separate object for each function, one property of which is
// the function code).  This makes it trivial to automatically document the API.

// Currently, their is a separate getter/setter for nodes, arcs (and potentially other
// model properties...).   We might revisit this.

SYSTO.nodeProperties = {
    id: {
        description: 'Gets/sets the id for a node',
        get: function (versionId, node) {
            return node.id;
        },
        set: function (versionId, node, value) {
            node.id = value;
        }
    },

    label: {
        description: 'Gets/sets the label for a node',
        get: function (versionId, node) {
            return node.label;
        },
        set: function (versionId, node, value) {
            node.label = value;
        }
    }
}


SYSTO.get = function (versionId, node, propertyId) {
    return SYSTO.nodeProperties[propertyId].get(versionId, node);
}


SYSTO.set = function (versionId, node, propertyId, value) {
    SYSTO.nodeProperties[propertyId].set(versionId, node, value);
}



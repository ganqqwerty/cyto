// class a{}
function codepoint (x) {
    return jsesc(x, {
        json: true,
        minimal:false,
        numbers: "hexadecimal",
        quotes: "double",
        wrap: true,
        isScriptContext: true,
        escapeEverything: true,
        compact: true,
    })
}

var encodeJavaScriptString = function f(a, b)
{
    return ++b                                 //`b` is a number (including 0) when `replace` calls the function
        ? '\\' + (                               //all escape sequences start with a backslash
        (a = a.charCodeAt()) >> 12             //all characters from U+1000 and above
            ? 'u'                                //must start with `\u`
            : a >> 8                             //all characters from U+0100 to U+0FFF
                ? 'u0'                             //must start with `\u0`
                : 'x'                              //characters from U+007F to U+00FF can start with `\u00` or `\x`
    ) + a.toString(16).toUpperCase()       //add the upper case hex string (it does not contain leading zeros)
        : a.replace(/[^\0-~]/g, f)               //else call the function for all non-ASCII characters (all except U+0000 to U+007E)
}
window.addEventListener('DOMContentLoaded', function(){

    var cy = window.cy = cytoscape({
        container: document.getElementById('cy'),

        boxSelectionEnabled: false,
        autounselectify: true,

        layout: {
            name: 'dagre'
        },

        style: [
            {
                selector: 'node',
                style: {
                    'background-color': '#11479e',
                    'content': 'data(label)'
                }
            },

            {
                selector: 'edge',
                style: {
                    'width': 4,
                    'target-arrow-shape': 'triangle',
                    'line-color': '#9dbaea',
                    'target-arrow-color': '#9dbaea',
                    'curve-style': 'bezier'
                }
            }
        ],

        elements: {
            nodes: [
                { data: { id: 'n0' , label: JSON.parse(codepoint('止')) }},
                { data: { id: 'n1', label: "\u03A9" } },
                { data: { id: 'n2' } },
                { data: { id: 'n3' } },
                { data: { id: 'n4' } },
                { data: { id: 'n5' } },
                { data: { id: 'n6' } },
                { data: { id: 'n7' } },
                { data: { id: 'n8' } },
                { data: { id: 'n9' } },
                { data: { id: 'n10' } },
                { data: { id: 'n11' } },
                { data: { id: 'n12' } },
                { data: { id: 'n13' } },
                { data: { id: 'n14' } },
                { data: { id: 'n15' } },
                { data: { id: 'n16' } }
            ],
            edges: [
                { data: { source: 'n0', target: 'n1' } },
                { data: { source: 'n1', target: 'n2' } },
                { data: { source: 'n1', target: 'n3' } },
                { data: { source: 'n4', target: 'n5' } },
                { data: { source: 'n4', target: 'n6' } },
                { data: { source: 'n6', target: 'n7' } },
                { data: { source: 'n6', target: 'n8' } },
                { data: { source: 'n8', target: 'n9' } },
                { data: { source: 'n8', target: 'n10' } },
                { data: { source: 'n11', target: 'n12' } },
                { data: { source: 'n12', target: 'n13' } },
                { data: { source: 'n13', target: 'n14' } },
                { data: { source: 'n13', target: 'n15' } },
            ]
        }
    });

});
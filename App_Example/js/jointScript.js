// This line needs to be called after the myholder div tag is declared.
var paper = new joint.dia.Paper({ el: $('#myholder'), stroke: 1, width: 1174, height: 475, gridSize: 1, model: graph });

// Test rectangles.  I left these here so that something would render when the app was loaded.  
// These will be delete at some point in the future.
var r1 = new joint.shapes.basic.Rect({
    position: { x: 20, y: 20 },
    size: { width: 150, height: 150 },
    attrs: { rect: { fill: '#337ab7', rx: 20, ry: 20 }, text: { text: '' } }
});
var r2 = new joint.shapes.basic.Rect({
    position: { x: 40, y: 25 },
    size: { width: 50, height: 40 },
    attrs: { rect: { fill: '#F1C40F', rx: 20, ry: 20 }, text: { text: 'A' } }
});
var r3 = new joint.shapes.basic.Rect({
    position: { x: 110, y: 60 },
    size: { width: 50, height: 40 },
    attrs: { rect: { fill: '#9B59B6', rx: 20, ry: 20 }, text: { text: 'B' } }
});
var r4 = new joint.shapes.basic.Rect({
    position: { x: 200, y: 80 },
    size: { width: 50, height: 40 },
    attrs: { rect: { fill: '#9B59B6', rx: 20, ry: 20 }, text: { text: 'C' } }
});

r1.embed(r2);
r1.embed(r3);
graph.addCells([r1, r2, r3, r4]);

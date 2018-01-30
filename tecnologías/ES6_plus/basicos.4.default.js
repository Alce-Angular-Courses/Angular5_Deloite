// ES5
function drawCircle(options){
    options = options === undefined ? {} : options;
    var radius = options.radius === undefined ? 30 : options.radius;
    var coords = options.coords === undefined ? { x: 0, y: 0 } : options.coords;

    console.log(radius, coords);
    
}

drawCircle(); // radius: 30, coords.x: 0, coords.y: 0 }
drawCircle({radius: 10}); // radius: 10, coords.x: 0, coords.y: 0 }
drawCircle({coords: {y: 10, x: 30}, radius: 10}); // radius: 10, coords.x: 30, coords.y: 10 }

// ES6: parámetros por defecto y desestructuración del paso de parámetros
function drawCircleES6( {
                            radius = 30,
                            coords = { x: 0, y: 0}
                        } = {}) {
    console.log(radius, coords);
};

drawCircleES6(); // radius: 30, coords.x: 0, coords.y: 0 }
drawCircleES6({radius: 10}); // radius: 10, coords.x: 0, coords.y: 0 }
drawCircleES6({coords: {y: 10, x: 30}, radius: 10}); // radius: 10, coords.x: 30, coords.y: 10 }
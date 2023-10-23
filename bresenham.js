function drawLine(x0, y0, x1, y1) {
    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1;
    const sy = y0 < y1 ? 1 : -1;
    let err = dx - dy;
    let err2;

    while (true) {
        // Here, you can access relevant values in each iteration
        console.log(`x: ${x0}, y: ${y0}`);

        // Draw the pixel at (x0, y0) or perform any necessary action
        // In this example, we're just printing the coordinates

        if (x0 === x1 && y0 === y1) {
            break; // Exit the loop when reaching the endpoint
        }

        err2 = 2 * err;

        if (err2 >= -dy) {
            err -= dy;
            x0 += sx;
        }

        if (err2 <= dx) {
            err += dx;
            y0 += sy;
        }
    }
}

// Example of usage
drawLine(0, 0, 10, 15);
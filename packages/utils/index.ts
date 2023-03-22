function hexToRGBA(hex: string, alpha: number): string {
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);
  return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
}

function colorNameToRGBA(color: string, alpha: number): string {
  var temp_elem = document.createElement("div");
  temp_elem.style.color = color;
  temp_elem.style.display = "none";
  document.body.appendChild(temp_elem);
  var cs = window.getComputedStyle(temp_elem);
  var pv = cs.getPropertyValue("color");
  document.body.removeChild(temp_elem);
  var colors = pv.replace(/[rgba\(\)]/g, "").split(",");
  var r = parseInt(colors[0]);
  var g = parseInt(colors[1]);
  var b = parseInt(colors[2]);
  return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
}

export { hexToRGBA, colorNameToRGBA };

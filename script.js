function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius");
    let volume = document.getElementById("volume");

	let r = Number(radius.value)

	if(r<0 || isNaN(r)){
		volume.value="NaN"
		return false
	}
  let result = (4 / 3) * Math.PI * r * r * r
	volume.value = result.toFixed(4)
	return false
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

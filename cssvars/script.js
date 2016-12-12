(function() {
	'use strict';
const inputs = document.querySelectorAll('input');
function inputUpdate() {
	const suf = this.dataset.sizing || "";
	document.documentElement.style.setProperty(`--${this.name}` , this.value+suf)
}
 
 inputs.forEach(input => input.addEventListener('change', inputUpdate) )
  inputs.forEach(input => input.addEventListener('mousemove', inputUpdate) )

	}())
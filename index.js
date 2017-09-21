module.exports =  (function() {

	// =============================================================================
	// Export functions
	// =============================================================================
	function one(height = 300, width = 500, grey = false, blur = false) {
		return random(height, width, grey, blur);
	}

	function many(height = 300, width = 500, number = 6, grey = false, blur = false) {
		let arr = [];
		const urlStyle = random(height, width, grey, blur);
		const id = urlStyle.split('=');
		const newId = id[1].split('&');
		const imageId = newId[0];

		for (let i = 0; i < number ; i++) {
			let newUrl = urlStyle.replace(imageId, Math.floor(Math.random() * 1000));
			arr.push(newUrl);
		}
		return arr;
	}

	// =============================================================================
	// Utility functions
	// =============================================================================
	function random(height = 300, width = 500, grey = false, blur = false) {
		let num, oneUrl;
		num = Math.floor(Math.random() * 1000);
		oneUrl = `https://unsplash.it/${height}/${width}?image=${num}`;

		if (grey) {
			oneUrl = `https://unsplash.it/g/${height}/${width}?image=${num}`;
		}
		if (blur) {
			oneUrl = `https://unsplash.it/${height}/${width}?image=${num}&blur`;
		}
		if (blur && grey ) {
			oneUrl = `https://unsplash.it/g/${height}/${width}?image=${num}&blur`;
		}
		return oneUrl;
	}

	return {
		one: one,
		many : many
	}
})();


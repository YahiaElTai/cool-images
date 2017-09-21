const expect = require('chai').expect;
const coolImages = require('../index.js');

// =============================================================================
//  Test cases
// =============================================================================

describe('one() method test', function() {
	// basic functionality
	it('should return a valid url string', function() {
		expect(coolImages.one()).to.be.a('string');
		expect(coolImages.one()).to.include('http');
	})
	it('should return a an image url with correct dimensions', function() {
		expect(coolImages.one(700,700)).to.include('/700/700');
	});
	it('should return a black and white image url', function() {
		expect(coolImages.one(500,400,true)).to.include('/g/400/500');
	});
	it('should return a blured image url', function() {
		expect(coolImages.one(500,400,false, true)).to.include('&blur');
	});
	// Input validation
	it('should throw error', function() {
		expect(() => coolImages.one(null)).to.throw();
		expect(() => coolImages.one('700','500')).to.throw();
		expect(() => coolImages.one('700','blur me')).to.throw();
	});
});

describe('many() method test', function() {

	// basic functionality
	it('should return an array of length 6 by default', function() {
		expect(coolImages.many()).to.be.a('array');
		expect(coolImages.many()).to.have.lengthOf(6);
	});
	it('should return an array with length n provided', function() {
		expect(coolImages.many(400,400,3)).to.have.lengthOf(3);
		expect(coolImages.many(400,400,8)).to.have.lengthOf(8);
	});

	const arr = coolImages.many(500,400,7,true, true);
	it('should return valid image urls', function() {
		// Valid image urls
		expect(arr[0]).to.include('http');
		expect(arr[1]).to.include('/400/500');
		expect(arr[2]).to.include('/g/400/500');
		expect(arr[3]).to.include('&blur');
	});
	it('should return unique image urls', function() {
		// unique image urls
		expect(arr[0]).to.not.equal(arr[1]);
		expect(arr[1]).to.not.equal(arr[4]);
		expect(arr[2]).to.not.equal(arr[3]);
		expect(arr[5]).to.not.equal(arr[0]);
	});
	// Input validation
	it('should throw error', function() {
		expect(() => coolImages.many(null)).to.throw();
		expect(() => coolImages.many(700,500, '20 images')).to.throw();
		expect(() => coolImages.many('700','500', 10, true,true)).to.throw();
	});
});

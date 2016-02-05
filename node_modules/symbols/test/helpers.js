var symbols = require('../');

describe('Symbol helpers', function() {
	it('Should detect vovels', function() {
		'eyuioa'.split('').forEach(function(letter) {
			symbols.is_vovel(letter).should.be.ok;
		});
	});

	it('Should detect vovels', function() {
		'qwrtpasdfghjklmnbvcxz'.split('').forEach(function(letter) {
			symbols.is_consonant(letter).should.be.ok;
		});
	});

	it('Should detect brackets', function() {
		'{}()[]<>'.split('').forEach(function(letter) {
			symbols.is_bracket(letter).should.be.ok;
		});
	});

	it('Should detect open brackets', function() {
		'{([<'.split('').forEach(function(letter) {
			symbols.is_open_bracket(letter).should.be.ok;
		});
	});

	it('Should detect close brackets', function() {
		'})]>'.split('').forEach(function(letter) {
			symbols.is_close_bracket(letter).should.be.ok;
		});
	});

	it('Should detect digits', function() {
		'0123456789'.split('').forEach(function(letter) {
			symbols.is_digit(letter).should.be.ok;
		});
	});

	it('Should detect punctuation', function() {
		',.!;:-?'.split('').forEach(function(letter) {
			symbols.is_punctuation(letter).should.be.ok;
		});
	});
});

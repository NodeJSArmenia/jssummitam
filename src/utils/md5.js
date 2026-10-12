/* eslint-disable no-bitwise */
// Small MD5 (RFC 1321) for hashing short strings in the browser. Not for security-critical use.
const S = [
	7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
	5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
	4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
	6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21,
];
const K = Array.from({ length: 64 }, (_, i) => Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296) | 0);

const toBytes = (str) => {
	const utf8 = unescape(encodeURIComponent(str));
	return Array.from(utf8, ch => ch.charCodeAt(0));
};

const rotl = (x, n) => (x << n) | (x >>> (32 - n));

export default function md5(str) {
	const bytes = toBytes(str);
	const bitLength = bytes.length * 8;
	bytes.push(0x80);
	while (bytes.length % 64 !== 56) bytes.push(0);
	for (let i = 0; i < 8; i += 1) {
		// length in bits as 64-bit little endian (strings here are far below 2^32 bits)
		bytes.push(i < 4 ? (bitLength >>> (8 * i)) & 0xff : 0);
	}

	let a0 = 0x67452301;
	let b0 = 0xefcdab89 | 0;
	let c0 = 0x98badcfe | 0;
	let d0 = 0x10325476;

	for (let offset = 0; offset < bytes.length; offset += 64) {
		const M = [];
		for (let i = 0; i < 16; i += 1) {
			const j = offset + (i * 4);
			M[i] = bytes[j] | (bytes[j + 1] << 8) | (bytes[j + 2] << 16) | (bytes[j + 3] << 24);
		}
		let A = a0;
		let B = b0;
		let C = c0;
		let D = d0;
		for (let i = 0; i < 64; i += 1) {
			let F;
			let g;
			if (i < 16) {
				F = (B & C) | (~B & D);
				g = i;
			} else if (i < 32) {
				F = (D & B) | (~D & C);
				g = ((5 * i) + 1) % 16;
			} else if (i < 48) {
				F = B ^ C ^ D;
				g = ((3 * i) + 5) % 16;
			} else {
				F = C ^ (B | ~D);
				g = (7 * i) % 16;
			}
			const next = (B + rotl((A + F + K[i] + M[g]) | 0, S[i])) | 0;
			A = D;
			D = C;
			C = B;
			B = next;
		}
		a0 = (a0 + A) | 0;
		b0 = (b0 + B) | 0;
		c0 = (c0 + C) | 0;
		d0 = (d0 + D) | 0;
	}

	return [a0, b0, c0, d0]
		.map(n => [0, 8, 16, 24].map(s => (`0${((n >>> s) & 0xff).toString(16)}`).slice(-2)).join(''))
		.join('');
}

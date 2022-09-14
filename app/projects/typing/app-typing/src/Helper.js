const especialCharMask = (especialChar) => {
	const strSChar = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
	const strNoSChars = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
	let newStr = "";
	for (let i = 0; i < especialChar.length; i++) {
		if (strSChar.indexOf(especialChar.charAt(i)) != -1) {
			const charPosition = strSChar.search(especialChar.substring(i, i + 1));
			newStr += strNoSChars.substring(charPosition, charPosition + 1);
		} else {
			newStr += especialChar.substring(i, i + 1);
		}
	}

	return newStr.replace(/[^a-zA-Z 0-9]/g, '').toLowerCase();
}

export const random = async () => {
	const response = await fetch('https://api.dicionario-aberto.net/random');
	const data = await response.json();
	const word = (data?.word || '')

	return {
		quote: especialCharMask(word)
	};
}
export const allowedKeys = [
	'q',
	'w',
	'e',
	'r',
	't',
	'y',
	'u',
	'i',
	'o',
	'p',
	'a',
	's',
	'd',
	'f',
	'g',
	'h',
	'j',
	'k',
	'l',
	'z',
	'x',
	'c',
	'v',
	'b',
	'n',
	'm',
	'Q',
	'W',
	'E',
	'R',
	'T',
	'Y',
	'U',
	'I',
	'O',
	'P',
	'A',
	'S',
	'D',
	'F',
	'G',
	'H',
	'J',
	'K',
	'L',
	'Z',
	'X',
	'C',
	'V',
	'B',
	'N',
	'M',
	';',
	"'",
	',',
	'.'
]

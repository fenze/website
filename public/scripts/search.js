/*
 * search.js - Search bar library
 * Copyright (C) 2022 fenze <contact@fenze.dev>
 *
 * Distributed under terms of the MIT license.
 */

/**
 * Fuzzy matching two strings.
 * @param {string} First string
 * @param {string} Second string
 * @return {bool} True if matching,
 *                False if not
 */
const match = (first, second) => {
	let fir = first.replaceAll(' ', '')
	let sec = second.replaceAll(' ', '')

	let i
	for (char of fir)
		if ((i = sec.indexOf(char)) == -1)
			return false
		sec = sec.substr(i)

	return true
}

/*
 * preload.js - Removing loading page and itself
 * Copyright (C) 2022 fenze <contact@fenze.dev>
 *
 * Distributed under terms of the MIT license.
 */

(() => {

	$(() => {
		$(window).scrollTop(0);
		$(setTimeout(() => $('.loader').remove(), 700))
		$('script[src="scripts/preload.js"]').remove()
	})

})()

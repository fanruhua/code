'use strict';

module.exports = {
	port: 8001,
	url: 'mongodb://111.231.209.57:39103/myclock',
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: {
			httpOnly: true,
		    secure:   false,
		    maxAge:   365 * 24 * 60 * 60 * 1000,
		}
	}
}

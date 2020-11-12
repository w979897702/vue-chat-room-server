export function getCookie(cookie: string, key: string): string {
	var name = key + '=';
	var ca = cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return '';
}

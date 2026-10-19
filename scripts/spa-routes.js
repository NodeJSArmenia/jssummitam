// Static hosts (e.g. Render static sites) only serve files that exist, so deep links such as
// /true-ninja would 404. There is no router: main.js picks the page from the path, so every
// such route can simply be a copy of the built index.html.
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
const routes = ['true-ninja'];

routes.forEach((route) => {
	fs.mkdirSync(path.join(dist, route), { recursive: true });
	fs.copyFileSync(path.join(dist, 'index.html'), path.join(dist, route, 'index.html'));
});

import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';
import nodePandoc from 'node-pandoc'
 
// Arguments can be either a single String or in an Array
// let args = '-f markdown -t html -o ./markdown.md';
// let args = '-f markdown -t html';
let args = "-t md2ssml.lua";
 
 
// Set your callback function
 

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/facets', facets({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/md2ssml', (req, res) => {
		const body = req.body;
		const params = req.params;
		let markup = body.markup;
		if (!markup) {
			markup = body;
			// res.json({"error":"Expected field `markup` on Json body but got undefined"});
			return;
		}

		// Call pandoc
		const _ = nodePandoc(markup, args, (error, result) => {
				res.json({ body, result, error});
			}
		);

	});

	return api;
}

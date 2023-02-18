const { transformTokens } = require('token-transformer');
const styleDictionary = require('style-dictionary');
const fs = require('fs/promises');

//load original tokens file from Token Studio
function getFigmaTokens() {
    return fs.readFile('tokens/tokens.json', { encoding: 'utf8', flag: 'r' })
        .then(fileContent => JSON.parse(fileContent));
}

function resolveTokens(rawTokens) {
	//inputs for token-transformer
	const setsToUse = ['global','button','typo'];
	const excludes = ['global'];
	//settings for token-transformer
	const transformerOptions = {
		expandTypography: true,
		expandShadow: true,
		expandComposition: true,
		preserveRawValue: false,
		throwErrorWhenNotResolved:  true,
		resolveReferences:true
	}

	return resolvedTokens = transformTokens(rawTokens,setsToUse, excludes,transformerOptions);

}


function styleDictionaryBuilder(inputTokens) {
    styleDictionary.extend({
        'tokens': inputTokens,
        'platforms': {
            'scss': {
                'transformGroup': 'scss',
                'files': [
                    {
                        'destination': `src/css/_variables.scss`,
                        'format': 'scss/variables',
                        'options': {
                            'outputReferences': true
                        }
                    }
                ]
            }
        }
    }).buildAllPlatforms();
}

async function generateVars() {
	const rawTokens = await getFigmaTokens();
	const transformedTokens = resolveTokens(rawTokens);
	styleDictionaryBuilder(transformedTokens);
	
}
generateVars();
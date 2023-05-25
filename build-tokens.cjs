const { transformTokens } = require('token-transformer');
const styleDictionary = require('style-dictionary');
const fs = require('fs/promises');

//load original tokens file from Token Studio
function getFigmaTokens() {
    return fs.readFile('tokens/tokens.json', { encoding: 'utf8', flag: 'r' })
        .then(fileContent => JSON.parse(fileContent));
}

function resolveTokens(inputTokens, themeModeHandler) {

    //Output only relevant theme-mode tokens for light and dark, 
    //and everything else if theme isn't set.
    let setsToUse = '';
    let excludes = '';
    if (themeModeHandler === '') {
        setsToUse = ['global','foundation','typo'];
	    excludes = ['global'];

    } else {
        setsToUse = ['global',themeModeHandler];
	    excludes = ['global'];
        
    }
	//inputs for token-transformer
	//const setsToUse = ['global',themeModeHandler,'button'];
	//const excludes = ['global'];
    
	//settings for token-transformer
	const transformerOptions = {
		expandTypography: true,
		expandShadow: true,
		expandComposition: true,
		preserveRawValue: false,
		throwErrorWhenNotResolved:  true,
		resolveReferences:true
	}

	return resolvedTokens = transformTokens(inputTokens,setsToUse, excludes,transformerOptions);

}


function styleDictionaryBuilder(inputTokens, themePath) {

    //removes the dash between thememode and "variables" in filename if themePath is empty
    let dash = '';
    if (themePath === '') {
        dash = '';


    } else {
        dash = '-';
    }

    styleDictionary.extend({
        'tokens': inputTokens,
        'platforms': {
            'css': {
                'transformGroup': 'css',
                'files': [
                    {
                        'destination': `static/css/${themePath}${dash}variables.css`,
                        'format': 'css/variables',
                        'options': {
                            'outputReferences': true
                        }
                    }
                ]
            }
        }
    }).buildAllPlatforms();
}

async function generateVars(themeMode) {
	const rawTokens = await getFigmaTokens();
	const transformedTokens = resolveTokens(rawTokens, themeMode);
	styleDictionaryBuilder(transformedTokens, themeMode);
	
}
generateVars('dark');
generateVars('light');
generateVars('');
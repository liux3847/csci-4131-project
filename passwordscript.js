//Word arrays
var one = ['a', 'I']
var two = ['of', 'to', 'in', 'is', 'it', 'he', 'on', 'as', 'be', 'at', 'or', 'by', 'we', 'up', 'an', 'do', 'if', 'so', 'go', 'no', 'my', 'me', 'us', 'oh', 'am']
var three = ['the', 'and', 'you', 'was', 'for', 'are', 'his', 'one', 'had', 'hot', 'but', 'can', 'out', 'all', 'use', 'how', 'she', 'way', 'her', 'see', 'him', 'two', 'has', 'day', 'did', 'who', 'may', 'now', 'any', 'new', 'get', 'man', 'our', 'say', 'low', 'boy', 'old', 'too', 'set', 'air', 'end', 'put', 'add', 'big', 'act', 'why', 'ask', 'men', 'off', 'try', 'own', 'sun', 'eye', 'let', 'saw', 'far', 'sea', 'run', 'few', 'got', 'car', 'eat', 'cut', 'red', 'dog', 'top', 'six', 'ten', 'war', 'lay', 'map', 'fly', 'cry', 'box', 'dry', 'ago', 'ran', 'hot', 'yes', 'yet', 'arm', 'ice', 'art', 'bed', 'egg', 'sit', 'leg', 'sky', 'joy', 'sat', 'cow', 'job', 'fun', 'gas', 'buy', 'cat', 'law', 'bit', 'lie', 'ear', 'son', 'pay', 'age', 'lot', 'key', 'row', 'die', 'bad', 'oil', 'mix', 'fit', 'hit', 'bat', 'rub', 'tie', 'gun', 'hat', 'fig', 'led', 'win', 'nor', 'fat', 'dad', 'bar', 'log']
var four = ['that', 'with', 'they', 'have', 'this', 'from', 'word', 'what', 'some', 'were', 'when', 'your', 'said', 'each', 'time', 'will', 'many', 'then', 'them', 'like', 'long', 'make', 'look', 'more', 'come', 'most', 'over', 'know', 'than', 'call', 'down', 'side', 'been', 'find', 'work', 'part', 'take', 'made', 'live', 'back', 'only', 'year', 'came', 'show', 'good', 'give', 'name', 'very', 'just', 'form', 'help', 'line', 'turn', 'much', 'mean', 'move', 'same', 'tell', 'does', 'want', 'well', 'also', 'play', 'home', 'read', 'hand', 'port', 'even', 'land', 'here', 'must', 'high', 'such', 'went', 'kind', 'need', 'near', 'self', 'head', 'page', 'grow', 'food', 'four', 'keep', 'last', 'city', 'tree', 'farm', 'hard', 'draw', 'left', 'late', 'real', 'life', 'open', 'seem', 'next', 'walk', 'ease', 'both', 'mark', 'mile', 'feet', 'care', 'book', 'took', 'room', 'idea', 'fish', 'stop', 'once', 'base', 'hear', 'sure', 'face', 'wood', 'main', 'girl', 'ever', 'list', 'feel', 'talk', 'bird', 'soon', 'body', 'pose', 'song', 'door', 'wind', 'ship', 'area', 'half', 'rock', 'fire', 'told', 'knew', 'pass', 'king', 'best', 'hour', 'true', 'five', 'step', 'hold', 'west', 'fast', 'verb', 'sing', 'less', 'slow', 'love', 'road', 'rain', 'rule', 'pull', 'cold', 'unit', 'town', 'fine', 'fall', 'lead', 'dark', 'note', 'wait', 'plan', 'star', 'noun', 'rest', 'able', 'done', 'week', 'gave', 'warm', 'free', 'mind', 'tail', 'fact', 'inch', 'stay', 'full', 'blue', 'deep', 'moon', 'foot', 'busy', 'test', 'boat', 'gold', 'game', 'miss', 'heat', 'snow', 'tire', 'fill', 'east', 'ball', 'wave', 'drop', 'wide', 'sail', 'size', 'vary', 'pair', 'felt', 'pick', 'hunt', 'ride', 'cell', 'race', 'lone', 'wall', 'wish', 'wild', 'kept', 'edge', 'sign', 'past', 'soft', 'bear', 'hope', 'gone', 'jump', 'baby', 'meet', 'root', 'push', 'held', 'hair', 'cook', 'burn', 'hill', 'safe', 'type', 'copy', 'tall', 'sand', 'soil', 'roll', 'beat', 'view', 'else', 'case', 'kill', 'lake', 'loud', 'milk', 'tiny', 'cool', 'poor', 'iron', 'flat', 'skin', 'hole', 'trip', 'seed', 'tone', 'join', 'lady', 'yard', 'rise', 'blow', 'grew', 'cent', 'team', 'wire', 'cost', 'lost', 'wear', 'sent', 'fell', 'flow', 'fair', 'bank', 'save', 'noon', 'ring', 'atom', 'crop', 'bone', 'rail', 'thus', 'rich', 'wing', 'wash', 'corn', 'poem', 'bell', 'meat', 'tube', 'fear', 'thin', 'mine', 'send', 'dead', 'spot', 'suit', 'lift', 'rose', 'sell', 'deal', 'swim', 'term', 'wife', 'shoe', 'camp', 'born', 'nine', 'shop', 'gray', 'salt', 'nose', 'huge', 'coat', 'mass', 'card', 'band', 'rope', 'slip', 'feed', 'tool', 'seat', 'post', 'glad', 'duck', 'dear', 'path', 'neck']
var five = ['other', 'there', 'which', 'their', 'about', 'write', 'would', 'these', 'thing', 'could', 'sound', 'water', 'first', 'place', 'where', 'after', 'round', 'every', 'under', 'great', 'think', 'cause', 'right', 'three', 'small', 'large', 'spell', 'light', 'house', 'again', 'point', 'world', 'build', 'earth', 'stand', 'found', 'study', 'still', 'learn', 'plant', 'cover', 'state', 'never', 'cross', 'start', 'might', 'story', "don't", 'while', 'press', 'close', 'night', 'north', 'white', 'begin', 'paper', 'group', 'music', 'those', 'often', 'until', 'river', 'carry', 'began', 'horse', 'watch', 'color', 'plain', 'usual', 'young', 'ready', 'above', 'leave', 'black', 'short', 'class', 'order', 'south', 'piece', 'since', 'whole', 'space', 'heard', 'early', 'reach', 'table', 'vowel', 'money', 'serve', 'voice', 'power', 'field', 'pound', 'drive', 'stood', 'front', 'teach', 'final', 'green', 'quick', 'ocean', 'clear', 'wheel', 'force', 'plane', 'stead', 'laugh', 'check', 'shape', 'bring', 'paint', 'among', 'grand', 'heart', 'heavy', 'dance', 'speak', 'count', 'store', 'train', 'sleep', 'prove', 'catch', 'mount', 'board', 'glass', 'grass', 'visit', 'month', 'happy', 'eight', 'raise', 'solve', 'metal', 'seven', 'third', 'shall', 'floor', 'coast', 'value', 'fight', 'sense', 'quite', 'broke', 'scale', 'child', 'speed', 'organ', 'dress', 'cloud', 'quiet', 'stone', 'climb', 'stick', 'smile', 'trade', 'mouth', 'exact', 'least', 'shout', 'wrote', 'clean', 'break', 'blood', 'touch', 'brown', 'equal', 'woman', 'whose', 'radio', 'spoke', 'human', 'party', 'agree', "won't", 'chair', 'fruit', 'thick', 'guess', 'sharp', 'crowd', 'sight', 'hurry', 'chief', 'clock', 'enter', 'major', 'fresh', 'allow', 'print', 'block', 'chart', 'event', 'quart', 'truck', 'noise', 'level', 'throw', 'shine', 'wrong', 'broad', 'anger', 'claim', 'sugar', 'death', 'skill', 'women', 'thank', 'match', 'steel', 'guide', 'score', 'apple', 'pitch', 'dream', 'total', 'basic', 'smell', 'track', 'shore', 'sheet', 'favor', 'spend', 'chord', 'share', 'bread', 'offer', 'slave', 'chick', 'enemy', 'reply', 'drink', 'occur', 'range', 'steam', 'meant', 'teeth', 'shell']
var six = ['number', 'people', 'little', 'differ', 'before', 'follow', 'change', 'animal', 'mother', 'father', 'should', 'answer', 'school', 'always', 'letter', 'second', 'friend', 'enough', 'though', 'family', 'direct', 'happen', 'better', 'during', 'ground', 'listen', 'travel', 'simple', 'toward', 'center', 'person', 'appear', 'govern', 'notice', 'figure', 'beauty', 'minute', 'strong', 'behind', 'street', 'course', 'object', 'decide', 'island', 'system', 'record', 'common', 'wonder', 'equate', 'engine', 'settle', 'weight', 'matter', 'circle', 'divide', 'sudden', 'square', 'reason', 'length', 'region', 'energy', 'forest', 'window', 'summer', 'winter', 'bright', 'finish', 'flower', 'clothe', 'either', 'result', 'phrase', 'silent', 'finger', 'excite', 'middle', 'moment', 'spring', 'nation', 'method', 'design', 'bottom', 'single', 'twenty', 'crease', 'melody', 'office', 'symbol', 'except', 'garden', 'choose', 'gentle', 'doctor', 'please', 'locate', 'insect', 'caught', 'period', 'effect', 'expect', 'modern', 'corner', 'supply', 'danger', 'create', 'rather', 'string', 'depend', 'famous', 'dollar', 'stream', 'planet', 'colony', 'search', 'yellow', 'desert', 'spread', 'invent', 'cotton', 'chance', 'gather', 'column', 'select', 'repeat', 'plural', 'oxygen', 'pretty', 'season', 'magnet', 'silver', 'branch', 'suffix', 'afraid', 'sister', 'bought', 'valley', 'double', 'arrive', 'master', 'parent', 'charge', 'proper', 'market', 'degree', 'speech', 'nature', 'motion', 'liquid']
var seven = ['through', 'picture', 'country', 'between', 'thought', 'example', 'science', 'measure', 'product', 'numeral', 'problem', 'hundred', 'morning', 'several', 'against', 'pattern', 'certain', 'machine', 'correct', 'contain', 'develop', 'special', 'produce', 'nothing', 'surface', 'brought', 'distant', 'present', 'general', 'include', 'perhaps', 'subject', 'brother', 'believe', 'written', 'weather', 'million', 'strange', 'village', 'whether', 'century', 'natural', 'observe', 'section', 'receive', 'trouble', 'suggest', 'collect', 'control', 'decimal', 'captain', 'protect', 'history', 'element', 'student', 'imagine', 'provide', 'capital', 'soldier', 'process', 'operate', 'compare', 'current', 'success', 'company', 'arrange', 'stretch', 'require', 'prepare', 'discuss', 'forward', 'similar', 'evening', 'connect', 'station', 'segment', 'instant', 'support']
var eight = ['sentence', 'together', 'children', 'mountain', 'question', 'complete', 'remember', 'interest', 'multiply', 'possible', 'thousand', 'language', 'position', 'material', 'syllable', 'probable', 'fraction', 'exercise', 'describe', 'consider', 'industry', 'straight', 'surprise', 'practice', 'separate', 'indicate', 'electric', 'neighbor', 'triangle', 'continue', 'subtract', 'opposite', 'shoulder', 'property', 'molecule', 'solution', 'division', 'original', 'populate', 'quotient']
var nine = ['represent', 'paragraph', 'consonant', 'difficult', 'character', 'necessary', 'determine', 'continent', 'condition', 'substance']
var ten = ['instrument', 'dictionary', 'experiment', 'particular', 'especially', 'experience']
var eleven = ['information', 'development', 'description', 'accessories', 'application', 'performance', 'association', 'electronics', 'environment', 'advertising', 'engineering', 'corporation', 'appropriate', 'responsible', 'independent', 'opportunity', 'restaurants', 'significant', 'educational', 'alternative', 'publication', 'photography', 'recommended', 'maintenance', 'phentermine', 'established', 'programming', 'instruments', 'traditional', 'interesting', 'individuals', 'regulations', 'certificate', 'communities', 'temperature', 'classifieds', 'competition', 'immediately', 'improvement', 'interactive', 'newsletters', 'integration', 'discussions', 'destination', 'tripadvisor', 'residential', 'partnership', 'suggestions', 'replacement', 'netherlands', 'translation', 'legislation', 'departments', 'agriculture', 'constitutes', 'combination', 'distributed', 'enterprises', 'marketplace', 'interracial', 'competitive', 'preparation', 'playstation', 'instruction', 'differences', 'mathematics', 'mississippi', 'connecticut', 'collections', 'participate', 'experienced', 'institution', 'proceedings', 'experiences', 'verzeichnis', 'enforcement', 'requirement', 'authorities', 'attractions', 'connections', 'switzerland', 'recognition', 'transaction', 'examination', 'outstanding', 'perspective', 'reservation', 'measurement', 'merchandise', 'preferences', 'photographs', 'comfortable', 'interaction', 'effectively', 'consultants', 'cooperation', 'acquisition', 'implemented', 'directories', 'investments', 'contractors', 'anniversary', 'conferences', 'consumption', 'legislative', 'researchers', 'unsubscribe', 'sustainable', 'philippines', 'statistical', 'definitions', 'recruitment', 'considering', 'governments', 'operational', 'productions', 'possibility', 'reliability', 'appointment', 'represented', 'underground', 'christopher', 'corrections', 'initiatives', 'composition', 'immigration', 'necessarily', 'surrounding', 'coordinator', 'fundamental', 'substantial', 'progressive', 'memorabilia', 'explanation', 'electricity', 'eligibility', 'involvement', 'demonstrate', 'intelligent', 'experiments', 'afghanistan', 'scholarship', 'supplements', 'contributed', 'ingredients', 'maintaining', 'preliminary', 'promotional', 'specialists', 'communicate', 'probability', 'illustrated', 'continental', 'achievement', 'limitations', 'orientation', 'flexibility', 'declaration', 'determining', 'destruction', 'advertisers', 'observation', 'restoration', 'convenience', 'peripherals', 'bestsellers', 'minneapolis', 'compilation', 'obligations', 'outsourcing', 'identifying', 'constructed', 'arrangement', 'conclusions', 'furthermore', 'cooperative', 'attachments', 'personality', 'methodology', 'transferred', 'distributor', 'specialized', 'populations', 'exploration', 'compression', 'submissions', 'prospective', 'spectacular', 'subscribers', 'potentially', 'constraints', 'dimensional', 'documentary', 'territories', 'palestinian', 'legislature', 'hospitality', 'procurement', 'theoretical', 'assignments', 'termination', 'comparative', 'expenditure', 'investigate', 'transmitted', 'screenshots', 'supervision', 'celebrities', 'syndication', 'celebration', 'permissions', 'calculation', 'exceptional', 'respondents', 'unavailable', 'essentially', 'assessments', 'sensitivity', 'springfield', 'enhancement', 'participant', 'medications', 'manufacture', 'therapeutic', 'accordingly', 'challenging', 'enlargement', 'conjunction', 'cholesterol', 'contracting', 'controlling', 'exclusively', 'inspiration', 'downloading', 'complicated', 'expressions', 'shakespeare', 'furnishings', 'renaissance', 'circulation', 'accompanied', 'proprietary', 'calculators', 'correlation', 'transparent', 'introducing', 'appreciated', 'albuquerque', 'assumptions', 'anticipated', 'copyrighted', 'respiratory', 'journalists', 'foundations', 'liabilities', 'exhibitions', 'competitors', 'resolutions', 'restriction', 'incorporate', 'backgrounds', 'lightweight', 'generations', 'tournaments', 'sponsorship', 'uncertainty', 'encouraging', 'comparisons', 'viewpicture', 'republicans', 'battlefield', 'disclaimers', 'imagination', 'refurbished', 'politicians', 'accommodate', 'approximate', 'biographies', 'screensaver', 'subdivision', 'distinction', 'nutritional', 'affiliation', 'adjustments', 'controllers', 'consultancy', 'conventions', 'coordinates', 'hydrocodone', 'consecutive', 'acknowledge', 'consequence', 'fundraising', 'innovations', 'transsexual', 'citizenship', 'informative', 'utilization', 'calibration', 'efficiently', 'consistency', 'atmospheric', 'proposition', 'designation', 'encountered', 'differently', 'integrating', 'occupations', 'equilibrium', 'instructors', 'highlighted', 'contributor', 'disciplines', 'motherboard', 'inspections', 'penetration', 'importantly', 'commitments', 'televisions', 'commodities', 'motorcycles', 'concentrate', 'workstation', 'disposition', 'fascinating', 'computation', 'predictions', 'arbitration', 'configuring', 'convergence', 'malpractice', 'specialties', 'invitations', 'functioning', 'convertible', 'secretariat', 'nominations', 'demographic', 'interpreted', 'evaluations', 'elimination', 'commissions', 'powerseller', 'unnecessary', 'negotiation', 'programmers', 'deutschland', 'smithsonian', 'positioning', 'temporarily', 'frequencies', 'reflections', 'endorsement', 'magnificent', 'supervisors', 'westminster', 'transcripts', 'continually', 'collectible', 'southampton', 'advancement', 'replication', 'inexpensive', 'evanescence', 'coordinated', 'controversy', 'beautifully', 'terminology', 'threatening', 'simulations', 'conditional', 'automobiles', 'telecharger', 'groundwater']

//Modified arrays that have words with double letters
var fourMod = ['will', 'look', 'call', 'been', 'good', 'tell', 'well', 'need', 'food', 'book', 'took', 'room', 'wood', 'soon', 'door', 'moon', 'foot', 'cool', 'poor', 'root', 'cook', 'noon', 'tool', 'feed', 'need', 'been', 'keep', 'tree', 'seem', 'feet', 'feel', 'deep', 'week', 'free', 'seed', 'meet', 'sell', 'wall', 'fell', 'kill', 'hill', 'tall', 'roll', 'bell']
var fiveMod = ['three', 'wheel', 'green', 'sleep', 'speed', 'agree', 'sheet', 'teeth', 'steel', 'stood', 'blood', 'floor', 'small', 'spell', 'still', 'shall', 'allow', 'shell', 'skill', 'smell', 'carry', 'hurry', 'occur', 'happy', 'apple']
var sixMod = ['school', 'choose', 'street', 'degree', 'speech', 'follow', 'dollar', 'yellow', 'valley', 'arrive', 'little', 'letter', 'better', 'settle', 'matter', 'bottom', 'pretty', 'cotton', 'common', 'summer', 'differ', 'office', 'effect', 'suffix', 'sudden', 'middle', 'appear', 'supply', 'happen']
var sevenMod = ['correct', 'current', 'arrange', 'between', 'million', 'collect', 'village', 'success', 'pattern', 'written', 'support']

var wordLists = [one, two, three, four, five, six, seven, eight, nine, ten, eleven]

var numReplace = false;
var doubleChar = false;
var wordLength = 0;
var loopBreaker = 0;

function updateCond() {
	numReplace = document.getElementById("sub").checked;
}

function updateCond1() {
	doubleChar = document.getElementById("easy").checked;
	if (doubleChar) {
		wordLists[3] = fourMod
		wordLists[4] = fiveMod
		wordLists[5] = sixMod
		wordLists[6] = sevenMod
	}
	else {
		wordLists[3] = four
		wordLists[4] = five
		wordLists[5] = six
		wordLists[6] = seven
	}
}

function generateWords(min, max, maxPass) {
	var currentLength = 0
	min--;
	max--;
	var index = Math.floor((Math.random() * (max - min + 1) + min))
	var wordOutput = wordLists[index][Math.floor((Math.random() * wordLists[index].length) + 0)]
	while (wordLength + wordOutput.length > maxPass) { //If the word is greater than the max password length, keep getting random words
		if (loopBreaker == 1000) { //Breaks loop in case it runs for too long
			console.log("Looped too many times!")
			return ""; //If it can't be done, then return a blank string
		}
		console.log("Word is too long! (" + (wordLength + wordOutput.length) + ") Generating another...");
		index = Math.floor((Math.random() * (max - min + 1) + min))
		wordOutput = wordLists[index][Math.floor((Math.random() * wordLists[index].length) + 0)]
		loopBreaker++;
	}
	
	loopBreaker = 0; //reset loop breaker
	
	//replace letter with number
	if (numReplace) {
		for (var i = 0; i < wordOutput.length; i++) {
			if (wordOutput.charAt(i) == 'e')
				wordOutput = wordOutput.substring(0, i) + '3' + wordOutput.substring(i + 1)
			else if (wordOutput.charAt(i) == 'o')
				wordOutput = wordOutput.substring(0, i) + '0' + wordOutput.substring(i + 1)
			else if (wordOutput.charAt(i) == 'l')
				wordOutput = wordOutput.substring(0, i) + '1' + wordOutput.substring(i + 1)
		}
	}
	
	return wordOutput
}

function getParams() {
	/*
		1. Get parameters
			a reject if min/max word lengths are greater than the max password length
		2. Randomly generate number within the parameters, determining the length of the word
		3. Stitch together, using four words
			a. If exceeds the maximum password length, reroll until it works
		4. Display 10 randomy-generated passwords
		
	*/
	var minL = Number(document.getElementById("minL").value) //lower bound of word length
	var maxL = Number(document.getElementById("maxL").value) //upper bound of word length
	var maxPassL = Number(document.getElementById("maxPass").value) //max of password length
	
	
	//If no parameters are set, then end function
	if (minL == "" || maxL == "" || maxPassL == "") {
		return
	}
	
	if (minL > maxL || minL > maxPassL || maxL > maxPassL || minL > maxPassL) {
		return;
	}
	
	for (let i = 0; i < 10; i ++) {
		t = document.querySelector("#passwords");
		trow = document.createElement("tr");
		for (let j = 0; j < 4; j++) { // Build password
			td = document.createElement("td");
			contents = document.createTextNode(generateWords(minL, maxL, maxPassL));
			wordLength += contents.length;
			td.appendChild(contents);
			trow.appendChild(td);
		}
		
		//Append the length of the password
		td = document.createElement("td");
		contents = document.createTextNode(wordLength);
		td.appendChild(contents);
		trow.appendChild(td);
		t.appendChild(trow);
		wordLength = 0; //reset length limiter
	}
}

function clearTable() {
	t = document.querySelector("#passwords");
	while (t.rows.length > 0) { 
		t.deleteRow(0);
	}
}
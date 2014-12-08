"use strict";


var unit = require("heya-unit");
var RE2  = require("../build/Release/re2.node");


// tests

unit.add(module, [
	function test_generalCtr(t) {
		"use strict";
		eval(t.TEST("!!RE2"));
		eval(t.TEST("RE2.toString() === 'function RE2() { [native code] }'"));
		eval(t.TEST("!!RE2.prototype"));
	},
	function test_generalInst(t) {
		"use strict";
		var re = new RE2("\\d+");
		eval(t.TEST("!!re"));
		eval(t.TEST("re instanceof RE2"));
	},
	function test_generalIn(t) {
		"use strict";
		var re = new RE2("\\d+");
		eval(t.TEST("'exec' in re"));
		eval(t.TEST("'test' in re"));
		eval(t.TEST("'match' in re"));
		eval(t.TEST("'replace' in re"));
		eval(t.TEST("'search' in re"));
		eval(t.TEST("'split' in re"));
		eval(t.TEST("'source' in re"));
		eval(t.TEST("'global' in re"));
		eval(t.TEST("'ignoreCase' in re"));
		eval(t.TEST("'multiline' in re"));
		eval(t.TEST("'lastIndex' in re"));
	},
	function test_generalPresent(t) {
		"use strict";
		var re = new RE2("\\d+");
		eval(t.TEST("typeof re.exec == 'function'"));
		eval(t.TEST("typeof re.test == 'function'"));
		eval(t.TEST("typeof re.match == 'function'"));
		eval(t.TEST("typeof re.replace == 'function'"));
		eval(t.TEST("typeof re.search == 'function'"));
		eval(t.TEST("typeof re.split == 'function'"));
		eval(t.TEST("typeof re.source == 'string'"));
		eval(t.TEST("typeof re.global == 'boolean'"));
		eval(t.TEST("typeof re.ignoreCase == 'boolean'"));
		eval(t.TEST("typeof re.multiline == 'boolean'"));
		eval(t.TEST("typeof re.lastIndex == 'number'"));
	},
	function test_generalLastIndex(t) {
		"use strict";
		var re = new RE2("\\d+");
		eval(t.TEST("re.lastIndex === 0"));
		re.lastIndex = 5;
		eval(t.TEST("re.lastIndex === 5"));
		re.lastIndex = 0;
		eval(t.TEST("re.lastIndex === 0"));
	},
	function test_generalRegExp(t) {
		"use strict";
		var re1 = new RegExp("\\d+");
		var re2 = new RE2("\\d+");
		compare(re1, re2, t);
		re2 = new RE2(re1);
		compare(re1, re2, t);
		re1 = new RegExp("a", "ig");
		re2 = new RE2("a", "ig");
		compare(re1, re2, t);
		re2 = new RE2(re1);
		compare(re1, re2, t);
		re1 = /\s/gm;
		re2 = new RE2("\\s", "mg");
		compare(re1, re2, t);
		re2 = new RE2(re1);
		compare(re1, re2, t);
	}
]);


// utilitites

function compare(re1, re2, t) {
	// compares regular expression objects
	eval(t.TEST("re1.source === re2.source"));
	eval(t.TEST("re1.global === re2.global"));
	eval(t.TEST("re1.ignoreCase === re2.ignoreCase"));
	eval(t.TEST("re1.multiline  === re2.multiline"));
}

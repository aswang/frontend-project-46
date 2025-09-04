install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

fix:
	npx eslint . --fix

test:
	npm test

check: lint test

gendiff:
	./bin/gendiff.js -h




install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

fix:
	npx eslint . --fix

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8

check: lint test

gendiff:
	./bin/gendiff.js -h

.PHONY: test
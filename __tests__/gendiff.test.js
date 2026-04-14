/* global test, expect */
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import fs from 'fs'
import genDiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

const expectedStylish = readFile('result_stylish.txt')
const expectedPlain = readFile('result_plain.txt')
const expectedJson = readFile('result_json.txt')

test('genDiff nested json (stylish)', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')

  expect(genDiff(file1, file2)).toEqual(expectedStylish)
})

test('genDiff nested yaml (stylish)', () => {
  const file1 = getFixturePath('file1.yml')
  const file2 = getFixturePath('file2.yml')

  expect(genDiff(file1, file2)).toEqual(expectedStylish)
})

test('genDiff default format is stylish', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')

  expect(genDiff(file1, file2)).toEqual(genDiff(file1, file2, 'stylish'))
})

test('genDiff nested json (plain)', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')

  expect(genDiff(file1, file2, 'plain')).toEqual(expectedPlain)
})

test('genDiff nested yaml (plain)', () => {
  const file1 = getFixturePath('file1.yml')
  const file2 = getFixturePath('file2.yml')

  expect(genDiff(file1, file2, 'plain')).toEqual(expectedPlain)
})

test('genDiff nested json (json)', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')

  expect(genDiff(file1, file2, 'json')).toEqual(expectedJson)
})

test('genDiff nested yaml (json)', () => {
  const file1 = getFixturePath('file1.yml')
  const file2 = getFixturePath('file2.yml')

  expect(genDiff(file1, file2, 'json')).toEqual(expectedJson)
})

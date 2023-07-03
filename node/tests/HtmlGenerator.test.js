import HtmlGenerator from "../ContentGenerators/HtmlGenerator.js"

describe('HtmlGenerator', () => {
    test('Basic', () => {

        const htmlGenerator = new HtmlGenerator()

        const expectContent = `version: "3.5"

services:
  debian:
    container_name: debian
    build:
      context: .
`

        expect(debianContent.generate()).toEqual(expectContent)
    })
})
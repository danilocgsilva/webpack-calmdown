import Utils from "../Utils.js"

class MyProcess {
    cwd() {
        return "/app/webpack-calmdown"
    }
}

describe('Utils', () => {
    test('Basic', () => {
        const myProcess = new MyProcess()
        const expected = "/app/webpack-calmdown"
        expect(Utils.getScriptPath(myProcess)).toEqual(expected)
    })
    test("Prefix", () => {
        const myProcess = new MyProcess()
        const expected = "/app/webpack-calmdown/node"
        expect(Utils.getScriptPath(myProcess, "node")).toEqual(expected)
    })
})
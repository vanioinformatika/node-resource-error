import { ResourceAlreadyExistsError } from "./ResourceAlreadyExistsError"

import * as chai from "chai"

import "mocha"

const {expect} = chai

const id = "id1"
const type = "MyResource"

describe("ResourceAlreadyExistsError", () => {
    it("a new instance should have the appropriate properties", () => {
        const errName = "ResourceAlreadyExistsError"
        const msg = `Resource with "${type}" already exists. Data: {"id":"${id}"}`
        function throwError() {
            throw new ResourceAlreadyExistsError(type, {id})
        }
        try {
            throwError()
        } catch (err) {
            expect(err.name).to.equal(errName)
            expect(err instanceof ResourceAlreadyExistsError).to.equal(true)
            expect(err instanceof Error).to.equal(true)
            expect(err.stack).to.not.equal(null)
            expect(err.stack).to.not.equal(undefined)
            expect(err.toString()).to.equal(`${errName}: ${msg}`)
            expect(err.data.id).to.equal(id)
            expect(err.message).to.equal(msg)
            expect(err.stack.split("\n")[0]).to.equal(`${errName}: ${msg}`)
            expect(err.stack.split("\n")[1].indexOf("throwError")).to.equal(7)
        }
    })
})

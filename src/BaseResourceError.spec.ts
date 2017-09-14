import { BaseResourceError } from "./BaseResourceError"

import * as chai from "chai"

import "mocha"

const {expect} = chai

const id = "id1"
const action = "my action"
const type = "MyResource"

describe("BaseResourceError", () => {
    it("a new instance should have the appropriate properties with message in data", () => {
        const errName = "BaseResourceError"
        const dataMessage = "Data message"
        const msg = `Resource with "${type}" ${action}. Data: {"id":"${id}","message":"${dataMessage}"}`
        function throwError() {
            throw new BaseResourceError(action, type, {id, message: dataMessage})
        }
        try {
            throwError()
        } catch (err) {
            expect(err.name).to.equal(errName)
            expect(err instanceof BaseResourceError).to.equal(true)
            expect(err instanceof Error).to.equal(true)
            expect(err.stack).to.not.equal(null)
            expect(err.stack).to.not.equal(undefined)
            expect(err.toString()).to.equal(`${errName}: ${msg}`)
            expect(err.data.id).to.equal(id)
            expect(err.message).to.equal(msg)
            expect(err.stack.split("\n")[0]).to.equal(`${errName}: ${msg}`)
            expect(err.stack.split("\n")[1].indexOf("throwError")).to.equal(7)
            // tslint:disable-next-line:no-unused-expression
            expect(err.hasMessage()).to.be.true
            expect(err.getMessage()).to.equal(dataMessage)
        }
    })
    it("a new instance should have the appropriate properties without message in data", () => {
        const errName = "BaseResourceError"
        const msg = `Resource with "${type}" ${action}. Data: {"id":"${id}"}`
        function throwError() {
            throw new BaseResourceError(action, type, {id})
        }
        try {
            throwError()
        } catch (err) {
            expect(err.name).to.equal(errName)
            expect(err instanceof BaseResourceError).to.equal(true)
            expect(err instanceof Error).to.equal(true)
            expect(err.stack).to.not.equal(null)
            expect(err.stack).to.not.equal(undefined)
            // tslint:disable-next-line:no-console
            // console.log("err: ", err.toString())
            expect(err.toString()).to.equal(`${errName}: ${msg}`)
            expect(err.data.id).to.equal(id)
            expect(err.message).to.equal(msg)
            expect(err.stack.split("\n")[0]).to.equal(`${errName}: ${msg}`)
            expect(err.stack.split("\n")[1].indexOf("throwError")).to.equal(7)
            // tslint:disable-next-line:no-unused-expression
            expect(err.hasMessage()).to.be.false
            // tslint:disable-next-line:no-unused-expression
            expect(err.getMessage()).to.be.undefined
        }
    })
})

import fetchMock from "fetch-mock";
import { expect } from "chai";
import { getCompletedTodos, getIncompleteTodos } from "../selectors";
describe("The getCompletedTodos selector", () => {
    it("Returns only completed todos", () => {

        const fakeTodos = [{
            text: "Say Hello",
            isCompleted: true
        }, {
            text: "Say Goodbye",
            isCompleted: false
        }, {
            text: "Climb Mount Everest?",
            isCompleted: false
        }];

        const expected = [{
            text: "Say Hello",
            isCompleted: true
        }];

        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    });
});

describe("The getIncompleteTodos selector", () => {
    it("Returns only Incomplete todos", () => {

        const fakeTodos = [{
            text: "Say Goodbye",
            isCompleted: false
        }, {
            text: "Say Hello",
            isCompleted: true
        }];

        const expected = [{
            text: "Say Goodbye",
            isCompleted: false
        }];

        const actual = getIncompleteTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    });
});

// // describe("The getTodosLoading selector", () => {
// //     it("Returns only Loading Screen", async () => {

// //         const fakeLoadingTodos = [{
// //             isLoading: true
// //         }];

// //         const expected = [{
// //             isLoading: true
// //         }];
// //         const actual = fetchMock.get("http://localhost:8080/todos", fakeLoadingTodos);

// //         expect(actual).to.deep.equal(expected);
// //     });
// // });
// // describe("The getTodos selector", () => {
// //     it("Returns todos", () => {
// //         const actual = [{
// //             text: "Say Hello",
// //             isLoading: false
// //         }, {
// //             text: "Say Goodbye",
// //             isLoading: true
// //         }, {
// //             text: "",
// //             isLoading: false
// //         }];

// //         const expected = [{
// //             text: "Say Hello",
// //             isLoading: false
// //         }, {
// //             text: "Say Goodbye",
// //             isLoading: true
// //         }, {
// //             text: "",
// //             isLoading: false
// //         }];

// //         expect(actual).to.deep.equal(expected);
// //     });
// // });
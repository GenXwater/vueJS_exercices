import useGetBiggest from "../useGetBiggest";
import { assert, expect, test } from "vitest";

const input = {
    name: "Exemple",
    val1: 13,
    val2: 41,
    val3: 1,
};

test("Testing useGetBiggest", () => {
    expect(useGetBiggest(input)).toEqual("41");
    
})
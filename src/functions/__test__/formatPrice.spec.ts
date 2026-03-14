import { expect, test } from "vitest"
import useFormatPrice from "../useFormatPrice";

const r1 = 1000.0;
const r2 = 123354.25654;
const r3 = 665.55;

test("Testing useFormatPrice function", () => {
    expect(useFormatPrice(r1)).toBe("1000.00");
    expect(useFormatPrice(r2)).toBe("123354.26");
    expect(useFormatPrice(r3)).toBe("665.55");
});

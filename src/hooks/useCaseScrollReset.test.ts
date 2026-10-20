import { renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useCaseScrollReset } from "./useCaseScrollReset";

describe("case page scroll", () => {
  afterEach(() => vi.restoreAllMocks());

  it("opens a case at the top without carrying over the homepage scroll", () => {
    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    renderHook(() => useCaseScrollReset("1"));
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "instant" });
  });

  it("resets when changing cases but not when rerendering the same case", () => {
    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    const { rerender } = renderHook(({ id }) => useCaseScrollReset(id), {
      initialProps: { id: "1" },
    });
    scrollTo.mockClear();
    rerender({ id: "1" });
    expect(scrollTo).not.toHaveBeenCalled();
    rerender({ id: "2" });
    expect(scrollTo).toHaveBeenCalledExactlyOnceWith({ top: 0, left: 0, behavior: "instant" });
  });
});
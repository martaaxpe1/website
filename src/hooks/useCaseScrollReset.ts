import { useLayoutEffect } from "react";

export function useCaseScrollReset(caseId: string | undefined) {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [caseId]);
}
import { useContext } from "react";
import { Context } from "./context";
export function useAppContext() {
  const { key } = useContext(Context);
  if (!key) throw new Error("Use app context within provider!");
  return useContext(Context);
}

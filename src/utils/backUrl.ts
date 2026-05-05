import { BASE_PATH } from "@/config";

export function normalizeBackUrl(pathname: string, search = "") {
  const normalizedPath =
    pathname === "/"
      ? BASE_PATH
      : pathname.startsWith(`${BASE_PATH}/`) || pathname === BASE_PATH
        ? pathname
        : `${BASE_PATH}${pathname}`;
  return `${normalizedPath}${search}`;
}

export function setBackUrl(backUrl: string) {
  if (typeof sessionStorage === "undefined") return;
  sessionStorage.setItem("backUrl", backUrl);
}

export function getSafeBackUrl() {
  if (typeof sessionStorage === "undefined") return null;

  const backUrl = sessionStorage.getItem("backUrl");
  if (!backUrl?.startsWith(BASE_PATH)) {
    return null;
  }

  return backUrl;
}

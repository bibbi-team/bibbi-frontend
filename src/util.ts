export function detectPlatform(): "ios" | "android" | "unknown" {
    const unknownWindow = ((window as unknown) as any);
    const userAgent = navigator.userAgent || navigator.vendor || unknownWindow.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !unknownWindow.MSStream) return "ios";
    if (/android/i.test(userAgent)) return "android";
    return "unknown";
}

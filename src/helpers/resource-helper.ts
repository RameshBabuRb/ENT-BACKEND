export function initCap(srt: any) {
    return srt.replace(/(?:^|\s)[a-z]/g, function (m: any) {
        return m.toUpperCase();
    });
}
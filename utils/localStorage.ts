// ローカルストレージが利用可能かチェック
export function initLocalStorage(): boolean {
  try {
    const testKey = '__test__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}

// 安全なsetItem
export function safeSetItem(key: string, value: string): boolean {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (e) {
    console.warn(`Failed to set item in localStorage: ${e}`);
    return false;
  }
}

// 安全なgetItem
export function safeGetItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.warn(`Failed to get item from localStorage: ${e}`);
    return null;
  }
} 
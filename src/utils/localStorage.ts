// ブラウザのローカルストレージを操作するユーティリティ関数

/**
 * ローカルストレージにデータを保存
 * @param key 保存するキー
 * @param value 保存する値
 */
export const setLocalStorage = <T>(key: string, value: T): void => {
  try {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    console.error('ローカルストレージへの保存に失敗しました:', error);
  }
};

/**
 * ローカルストレージからデータを取得
 * @param key 取得するキー
 * @param defaultValue デフォルト値（オプション）
 * @returns 保存された値またはデフォルト値
 */
export const getLocalStorage = <T>(key: string, defaultValue?: T): T | null => {
  try {
    if (typeof window !== 'undefined') {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue ?? null;
    }
    return defaultValue ?? null;
  } catch (error) {
    console.error('ローカルストレージからの取得に失敗しました:', error);
    return defaultValue ?? null;
  }
}; 
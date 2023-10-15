// 1: 展示・体験・物販
// 2: パフォーマンス
// 3: 食事
// 4: 軽食
// 5: スナック
// 6: ドリンク
export enum Genre {
    EXHIBITION = 1,
    PERFORMANCE = 2,
    MEAL = 3,
    LIGHT_MEAL = 4,
    SNACK = 5,
    DRINK = 6,
  }
  
  export function genreToString(genre: Genre): string {
    switch (genre) {
      case Genre.EXHIBITION:
        return "展示・体験・物販";
      case Genre.PERFORMANCE:
        return "パフォーマンス";
      case Genre.MEAL:
        return "食事";
      case Genre.LIGHT_MEAL:
        return "軽食";
      case Genre.SNACK:
        return "スナック";
      case Genre.DRINK:
        return "ドリンク";
    }
  }
  
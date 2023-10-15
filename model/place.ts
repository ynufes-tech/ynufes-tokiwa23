// 1: A
// 2: B
// 3: C
// 4: D
// 5: Y
// 6: 経済
// 7: 経営
// 8: 都市
// 9: 理工
// 10: 教育
// 11: 特別な場所
export enum Place {
    A = 1,
    B = 2,
    C = 3,
    D = 4,
    Y = 5,
    ECONOMY = 6,
    MANAGEMENT = 7,
    CITY = 8,
    SCIENCE = 9,
    EDUCATION = 10,
    SPECIAL = 11,
  }
  
  export function placeToString(place: Place): string {
    switch (place) {
      case Place.A:
        return "A";
      case Place.B:
        return "B";
      case Place.C:
        return "C";
      case Place.D:
        return "D";
      case Place.Y:
        return "Y";
      case Place.ECONOMY:
        return "経済";
      case Place.MANAGEMENT:
        return "経営";
      case Place.CITY:
        return "都市";
      case Place.SCIENCE:
        return "理工";
      case Place.EDUCATION:
        return "教育";
      case Place.SPECIAL:
        return "特別な場所";
    }
  }
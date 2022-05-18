


class ArtPiece {
    constructor(name, attributes, chosenAttributeIndex, piece) {
      this.name = name;
      this.attributes = attributes;
      this.chosenAttributeIndex = chosenAttributeIndex;
      this.piece = piece;
      
    }
  }
  

export let artPieces = [ new ArtPiece("פרדריקה מריה בר של קילמט", ["יצירה מאירופה של ראשית המאה ה-20", "יצירה פוביסטית", "אמן הולנדי"], 0, require("../assets/images/klimt_1.png")),
    new ArtPiece("נסיכת בבל מאת קייס ואן דונגן", ["ציור נוף", "צייר מאסכולת פריז", "אמנות קוביסטית"], 1, require("../assets/images/vanDongen_2.png")),
    new ArtPiece("סירה בנמל אנטוורפן מאת ז'ורז' בראק", ["ציור אקספרסיוניסטי", "ציור מופשט", "אמנות שנוצרה אחרי מלחמת העולם השניה"], 2, require("../assets/images/braque_3.jpg")),
    new ArtPiece("תולעי אדמה מאת ג'קסון פולוק", ["אמן שוויצרי", "אמן רב תחומי", "אמן שפעל בפריז"], 0, require("../assets/images/pollock_4.jpg")),
    new ArtPiece("אישה ונציאנית IX מאת אלברטו גי'אקומטי", ["ציור המתייחס לאמנות הפיסול", "אמנות סוריאליסטית", "אמן יווני"], 0, require("../assets/images/giacometti_5.png")),
    new ArtPiece("סוסים עתיקים מאת ג'ורגו'ו דה קיריקו", ["אמנות מזרם הדאדא", "אמן ישראלי", "אמנות מוגדרת"], 0, require("../assets/images/deChirico_6.png")),
    new ArtPiece("נשף בציריך מאת מרסל ינקו", ["דיוקן אינטימי", "אמן ספרדי", "יצירה עם צבעוניות חזקה"], 0, require("../assets/images/janco_7.png")),
    new ArtPiece("_8.png", ["אמן שוויצרי", "אמן רב תחומי", "אמן שפעל בפריז"], 0, require("../assets/images/_8.png")),]

export default ArtPiece
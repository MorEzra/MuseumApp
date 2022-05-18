


class ArtPiece {
    constructor(name, attributes, chosenAttributeIndex, piece) {
      this.name = name;
      this.attributes = attributes;
      this.chosenAttributeIndex = chosenAttributeIndex;
      this.piece = piece;
      
    }
  }
  

export let artPieces = [ new ArtPiece("klimt_1.png", ["יצירה מאירופה של ראשית המאה ה-20", "יצירה פוביסטית", "אמן הולנדי"], 0, require("../assets/images/klimt_1.png")),
    new ArtPiece("vanDongen_2.png", ["ציור נוף", "צייר מאסכולת פריז", "אמנות קוביסטית"], 1, require("../assets/images/vanDongen_2.png")),
    new ArtPiece("braque_3.jpg", ["ציור אקספרסיוניסטי", "ציור מופשט", "אמנות שנוצרה אחרי מלחמת העולם השניה"], 2, require("../assets/images/braque_3.jpg")),
    new ArtPiece("pollock_4.jpg", ["אמן שוויצרי", "אמן רב תחומי", "אמן שפעל בפריז"], 0, require("../assets/images/pollock_4.jpg")),
    new ArtPiece("giacometti_5.png", ["ציור המתייחס לאמנות הפיסול", "אמנות סוריאליסטית", "אמן יווני"], 0, require("../assets/images/giacometti_5.png")),
    new ArtPiece("deChirico_6.png", ["אמנות מזרם הדאדא", "אמן ישראלי", "אמנות מוגדרת"], 0, require("../assets/images/deChirico_6.png")),
    new ArtPiece("janco_7.png", ["דיוקן אינטימי", "אמן ספרדי", "יצירה עם צבעוניות חזקה"], 0, require("../assets/images/janco_7.png")),
    new ArtPiece("_8.png", ["אמן שוויצרי", "אמן רב תחומי", "אמן שפעל בפריז"], 0, require("../assets/images/_8.png")),]

export default ArtPiece